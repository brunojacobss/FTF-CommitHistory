const emojiMap = {
  white_check_mark: '✅',
  tada: '🎉',
  lipstick: '💄',
  package: '📦',
  page_facing_up: '📄',
  sparkles: '✨',
};
const regExpression = /:([^:]*):/g;
export const parseEmoji = (text: string) => {
  try {
    let result;
    while ((result = regExpression.exec(text))) {
      // @ts-ignore
      text = text.replace(result[0], emojiMap[result[1]]);
    }
  } catch (error) {
    console.error(error);
  }

  return text;
};
