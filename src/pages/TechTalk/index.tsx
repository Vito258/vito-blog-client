import { useEffect, useState } from "react";
import CustomTab, { TabProp } from "@/components/Tab";
import CunstomCard from "@/components/Card";
import {fetchTeactalkArticleByType, fetchTeactalkTabs } from "@/api/api"; // 导入 API 请求函数
import "./style.scss"

function TechTalk() {
  const [tabs, setTabs] = useState<TabProp[]>([]);
  const [articleType, setArticleType] = useState<number>(1);
  const [allArticles,setAllArticles] = useState<any>([])
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const tabsData = await fetchTeactalkTabs();
      const articlesData = await fetchTeactalkArticleByType(articleType);
      setTabs(tabsData);
      setAllArticles(articlesData)
      setFetchError(null)
    } catch (error) {
      console.error("Error fetching tabs:", error);
      setFetchError("无法加载数据，请稍后再试。");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() =>{
    fetchTeactalkArticleByType(articleType).then(data=>setAllArticles(data))
  },[articleType])

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
      <CustomTab tabs={tabs} onTabChange={(index: number) => setArticleType(tabs[index].id) }/>
      <div className="card-container">
        {allArticles.map((article: any) => (
           <CunstomCard title={article.title} imgUrl={article.imgUrl} content={article.content} date={article.date}></CunstomCard>
        ))}
      </div>
    </div>
  );
}

export default TechTalk;
