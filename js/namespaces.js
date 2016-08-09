var MYAPP = {

  FIRSTMODULE: {
    square: function(multipl) {
      return multipl * multiple;
    }
  },

  SECONDMODULE: {
    yourotherfunction: function() {
      this.title = 'Whatever you want to do with your code';
    }
  }
}

if (typeof MYAPP === "undefined") {
  var MYAPP = {};
}

MYAPP.createNS("MYAPP.FIRST.MODULE");
MYAPP.createNS("MYAPP.SECOND.MODULE");

MYAPP.FIRST.MODULE.firstproperty = function() {

};

MYAPP.FIRST.MODULE.currentvatrate = 1.21;

MYAPP.SECOND.MODULE.secondproperty = function() {
  var p = new MYAPP.FIRST.MODULE.firstproperty(100);
  if (p.isVatApplicable) {
    return p.getPrice() * MYAPP.FIRST.MODULE.currentvatrate;
  } else {
    return p.getPrice();
  }
}

MYAPP.SECOND.MODULE.secondproperty = function() {
  var first = MYAPP.FIRST.MODULE;
  var p = new first.firstproperty(150);
  if (p.isVatApplicable) {
    return p.getPrice() * first.currentvatrate;
  } else {
    return p.getPrice();
  }
}
