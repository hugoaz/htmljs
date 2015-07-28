// Generated by CoffeeScript 1.9.3
(function() {
  var func_info;

  func_info = __F('info');

  module.exports = function(req, res, next) {
    var count, page;
    page = req.query.page || 1;
    count = req.query.count || 30;
    return func_info.count({
      target_user_id: res.locals.user.id
    }, function(error, _count) {
      if (error) {
        return next(error);
      } else {
        res.locals.total = _count;
        res.locals.totalPage = Math.ceil(_count / count);
        res.locals.page = req.query.page || 1;
        return func_info.getAll(page, count, {
          target_user_id: res.locals.user.id
        }, "id desc", function(error, infos) {
          if (error) {
            return next(error);
          } else {
            res.locals.infos = infos;
            func_info.read(res.locals.user.id);
            return next();
          }
        });
      }
    });
  };

}).call(this);