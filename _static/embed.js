window.DiscourseEmbed = { discourseUrl: 'http://discuss.itversity.com/',
                   topicId: 8};

(function() {
  var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
  d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
})();
