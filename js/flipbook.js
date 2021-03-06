// needed for cutting the page in half
(function (a) {
  a.extend(a.fn, {
    scissor: function () {
      this.each(function () {
        var b = a(this),
          c = {
            width: b.width() / 2,
            height: b.height(),
            overflow: "hidden"
          },
          f = b.clone(!0),
          d = a("<div />", {
            css: c
          }),
          e = a("<div />", {
            css: c
          });
        b.after(d);
        d.after(e);
        b.css({
          marginLeft: 0
        }).appendTo(d);
        f.css({
          marginLeft: -c.width
        }).appendTo(e)
      });
      return this
    }
  })
})(jQuery);