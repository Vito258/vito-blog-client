/**
 * 移除HTML标签并返回纯文本
 * @param html 富文本字符串
 * @returns 过滤后的纯文本
 */
export const stripHtmlTags = (html: string): string => {
  if (!html) return "";

  return html
    .replace(/<[^>]+>/g, "") // 移除所有HTML标签
    .replace(/&nbsp;/g, " ") // 替换HTML空格
    .replace(/&lt;/g, "<") // 替换 <
    .replace(/&gt;/g, ">") // 替换 >
    .replace(/&amp;/g, "&") // 替换 &
    .replace(/\s+/g, " ") // 合并多个空格
    .trim(); // 去除首尾空格
};

/**
 * 使用DOM API移除HTML标签
 * @param html 富文本字符串
 * @returns 过滤后的纯文本
 */
export const stripHtmlTagsWithDOM = (html: string): string => {
  // 方案二：使用DOM API
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
};
