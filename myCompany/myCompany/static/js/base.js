
import "foundation-sites/dist/foundation";
// import "foundation-sites/js/foundation.core";
// import "foundation-sites/js/foundation.util.keyboard";
// import "foundation-sites/js/foundation.util.box";
// import "foundation-sites/js/foundation.util.nest";
// import "foundation-sites/js/foundation.util.mediaQuery";
// import "foundation-sites/js/foundation.dropdownMenu";
// import "foundation-sites/js/foundation.util.triggers";
// import "foundation-sites/js/foundation.accordion";
// import "foundation-sites/js/foundation.responsiveMenu";

export class BaseController{

  constructor(){
    $(document).ready(this.init.bind(this));
  }

  init(){
    $(document).foundation();
  }
}
