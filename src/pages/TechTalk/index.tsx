import { useEffect, useState } from "react";
import CustomTab, { TabProp } from "@/components/Tab";
import CunstomCard from "@/components/Card";
import { fetchTechArticleByType, fetchTechArticleTypes } from "@/api"; // 导入 API 请求函数
import dayjs from "dayjs";
import { Article, DateFormatType } from "@/type";
import Box from "@mui/material/Box";
import "./style.scss";
import { useNavigate } from "react-router-dom";
function TechTalk() {
  const [tabs, setTabs] = useState<TabProp[]>([]);
  const [articleType, setArticleType] = useState<number>(1);
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // 路由跳转
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const tabsData = await fetchTechArticleTypes();
      const articlesData = await fetchTechArticleByType(articleType);
      setTabs(tabsData.data.articleTypes);
      setAllArticles(articlesData.data.articles);
      setFetchError(null);
    } catch (error) {
      console.error("Error fetching tabs:", error);
      setFetchError("无法加载数据，请稍后再试。");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchTechArticleByType(articleType).then((data) =>
      setAllArticles(data.data.articles)
    );
  }, [articleType]);

  if (fetchError) {
    return (
      <div>
        <p>{fetchError}</p>
        <button onClick={() => fetchData()}>重试</button>
      </div>
    );
  }

  return (
    <div>
      <CustomTab
        tabs={tabs}
        onTabChange={(index: number) => setArticleType(tabs[index].id)}
      />
      <Box className="card-container">
        {allArticles &&
          allArticles.length > 0 &&
          allArticles.map((article: Article) => (
            <CunstomCard
              key={article.id}
              title={article.title}
              imgUrl={article.coverImageUrl || ""}
              content={article.content}
              date={dayjs(article.updatedDate).format(
                DateFormatType.YYYY_MM_DD
              )}
              onClick={() => {
                navigate(`/layout/articleDisplay`, {
                  state: { id: article.id },
                });
              }}
            ></CunstomCard>
          ))}
      </Box>
    </div>
  );
}

export default TechTalk;
