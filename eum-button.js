function openEumPopup() {
  const msg = document.getElementById("popupMsg");
  const width = window.screen.availWidth;
  const height = window.screen.availHeight;

  const popup = window.open(
    "about:blank",
    "eum4cuts",
    `width=${width},height=${height},left=0,top=0,menubar=no,toolbar=no,location=no,status=no,scrollbars=no,resizable=yes`
  );

  if (!popup || popup.closed || typeof popup.closed === 'undefined') {
    msg.style.display = "block";
    msg.innerHTML = "⚠️ 팝업이 차단되었습니다.<br>브라우저 주소창 우측의 🔒 아이콘을 눌러 ‘팝업 허용’을 켜주세요.";
    return;
  }

  popup.document.open();
  popup.document.write(`
    <html>
    <head>
      <title>이음네컷</title>
      <style>
        body {
          margin: 0;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }
        iframe {
          width: 100vw;
          height: 100vh;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe src="https://scimania21.github.io/eum4cuts/"></iframe>
      <script>
        window.addEventListener('load', function() {
          document.body.style.opacity = '1';
        });
      <\\/script>
    </body>
    </html>
  `);
  popup.document.close();
}
