Template[getTemplate('postInfo')].helpers({
  pointsUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('point') : i18n.t('points');
  },
  getTemplate: function() {
    return getTemplate("postAuthor");
  }
});

Template[getTemplate('postInfo')].helpers({
  tagline: function(){
    var tagline = this.body;
    if (! tagline)
      return

    if (tagline.length >= 160)
      return tagline.substr(0, 159) + '...';

    return tagline;
  }
});