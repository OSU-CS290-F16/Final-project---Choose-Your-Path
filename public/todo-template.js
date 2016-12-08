(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['todo'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <p class=\"indent-wrapped\"><span class=\"where\">where: </span>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.where : stack1), depth0))
    + "</p>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <p class=\"indent-wrapped\"><span class=\"when\">when: </span>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.when : stack1), depth0))
    + "</p>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <p class=\"indent-wrapped\"><span class=\"who\">who: </span>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.who : stack1), depth0))
    + "</p>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.details : stack1), depth0))
    + "</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "\r\n<section class=\"todo\">\r\n  \r\n  <h2>"
    + container.escapeExpression(((helper = (helper = helpers.what || (depth0 != null ? depth0.what : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"what","hash":{},"data":data}) : helper)))
    + "</h2>\r\n  <div class=\"todo-body\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.where : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    \r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.when : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.who : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.details : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</section>\r\n";
},"useData":true});
})();
