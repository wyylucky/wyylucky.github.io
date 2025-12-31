// 复制提醒：自动在复制内容中附加当前页面链接
// 注意：此脚本在浏览器端执行，与 Hexo 的 Node.js 插件目录 scripts/ 不同

document.addEventListener('copy', function (e) {
  try {
    var selection = window.getSelection ? window.getSelection().toString() : '';
    var url = window.location.href;
    var text = '转载请注明出处：' + url + '\n\n' + selection;

    if (e.clipboardData) {
      e.clipboardData.setData('text/plain', text);
      e.preventDefault();
    }
  } catch (err) {
    // 保守失败：如果出现异常，不阻止默认复制行为
  }
});
