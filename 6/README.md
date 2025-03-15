# 線上成果展網站

這是一個簡單的線上成果展網站，用於展示學生的創意作品。網站使用HTML、CSS和JavaScript構建，無需後端支持。

## 功能特點

- 兩個大標題展示線上成果展主題
- 上方有三個班級名稱按鈕，用於切換不同班級的作品
- 每個班級內按組別分類顯示作品：
  - 組別標題顯示組別名稱和所有組員
  - 點擊組別標題可以展開/收起該組作品
  - 每位學生都有獨立的作品展示區
- 每個作品包含：
  - 學生姓名
  - YouTube嵌入式影片播放器
  - 作品名稱
  - 互評區（可評分和留言）
- 互評功能：
  - 星級評分系統（1-5星）
  - 文字評語輸入
  - 評價列表顯示
  - 使用本地存儲保存評價數據
- 響應式設計，適配不同尺寸的設備

## 文件結構

- `index.html` - 網站的主要HTML結構
- `styles.css` - 網站的樣式表
- `script.js` - 網站的JavaScript功能

## 使用方法

1. 下載或克隆此項目到本地
2. 使用瀏覽器打開 `index.html` 文件
3. 點擊上方的班級按鈕可以切換不同班級的作品
4. 點擊組別標題可以展開/收起該組作品
5. 點擊作品下方的「顯示互評區」按鈕可以進行評價：
   - 點擊星星進行評分
   - 在文本框中輸入評語
   - 點擊「提交評價」按鈕提交

## 自定義

### 添加新組別

在 `index.html` 文件中，找到對應班級的區域，然後添加新的組別結構：

```html
<!-- 新組別 -->
<div class="group-header">
    <h4>組別名稱</h4>
    <p class="group-members">組員：姓名1、姓名2、姓名3、姓名4、姓名5</p>
</div>
<div class="works-grid">
    <!-- 這裡添加該組的學生作品 -->
</div>
```

### 添加新作品

在對應組別的 `works-grid` 區域中，添加新的作品項：

```html
<div class="work-item">
    <div class="student-name">學生姓名</div>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/VIDEO_ID?rel=0" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
    <div class="work-title">作品名稱</div>
</div>
```

### 修改YouTube影片

將YouTube影片的嵌入連結替換為你自己的影片連結。YouTube嵌入連結格式通常為：
`https://www.youtube.com/embed/VIDEO_ID?rel=0`

其中 `VIDEO_ID` 是YouTube影片的唯一識別碼，可以從YouTube影片URL中獲取。例如，如果YouTube影片URL是 `https://www.youtube.com/watch?v=abcdefg`，則 `VIDEO_ID` 為 `abcdefg`。

## 注意事項

- 此網站僅用於展示目的，不包含任何後端功能
- 評價數據使用瀏覽器的本地存儲（localStorage）保存，清除瀏覽器數據會導致評價丟失
- YouTube影片需要網絡連接才能播放
- 為了確保YouTube影片能夠正常播放，請確保使用正確的嵌入格式
- 為了獲得最佳體驗，建議使用現代瀏覽器訪問

## 授權

此項目可自由使用和修改。 