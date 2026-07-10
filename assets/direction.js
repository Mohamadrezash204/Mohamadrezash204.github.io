(function () {
  var rtlPattern = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
  var ltrPattern = /[A-Za-z]/;
  var selector = [
    ".content-flow p",
    ".content-flow li",
    ".content-flow blockquote",
    ".content-flow figcaption",
    ".card h3",
    ".post h1",
    ".post h2",
    ".post h3"
  ].join(",");

  function firstStrongDirection(text) {
    for (var i = 0; i < text.length; i += 1) {
      var char = text.charAt(i);
      if (rtlPattern.test(char)) return "rtl";
      if (ltrPattern.test(char)) return "ltr";
    }
    return "";
  }

  document.querySelectorAll(selector).forEach(function (element) {
    if (element.hasAttribute("dir")) return;

    var direction = firstStrongDirection(element.textContent.trim());
    if (direction) {
      element.setAttribute("dir", direction);
    }
  });
}());
