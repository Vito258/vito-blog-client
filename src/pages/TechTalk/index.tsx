import { useEffect, useState } from "react";
import CustomTab, { TabProp } from "@/components/Tab";
import { fetchTeactalkTabs } from "@/api/api"; // 导入 API 请求函数

function TechTalk() {
  const [tabs, setTabs] = useState<TabProp[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchTeactalkTabs();
      setTabs(data);
      setFetchError(null)
    } catch (error) {
      console.error("Error fetching tabs:", error);
      setFetchError("无法加载数据，请稍后再试。");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
      <CustomTab tabs={tabs} />
    </div>
  );
}

export default TechTalk;
