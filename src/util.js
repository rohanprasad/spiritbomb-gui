const sizeDimensions = ["bytes", "KB", "MB", "GB", "TB"];

const getReadableSize = sizeInBytes => {
  if (!sizeInBytes) {
    return "";
  }
  let currentSize = sizeInBytes;
  let currentDimension = 0;
  while (currentSize > 1024) {
    currentSize = Math.floor(currentSize / 1024);
    currentDimension++;
  }
  return `${currentSize} ${sizeDimensions[currentDimension]}`;
};

export default {
  getReadableSize
};
