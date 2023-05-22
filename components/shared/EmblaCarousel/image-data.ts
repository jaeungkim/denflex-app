export const images: string[] = [
  // "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://denflex.kr/images/m2.jpg",
  "https://denflex.kr/images/m1.jpg",
  "http://denflex.noida.co.kr/wp-content/uploads/2022/02/main-banner1.png",
  "http://denflex.noida.co.kr/wp-content/uploads/2022/02/main-banner2.png",
  "http://denflex.noida.co.kr/wp-content/uploads/2022/02/main-banner3.png",
  // "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  // "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
