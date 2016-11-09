
import "foundation-sites/js/foundation.core";
import "foundation-sites/js/foundation.util.keyboard";
import "foundation-sites/js/foundation.util.box";
import "foundation-sites/js/foundation.util.nest";
import "foundation-sites/js/foundation.util.mediaQuery";
import "foundation-sites/js/foundation.dropdownMenu";
export class BaseController{

  constructor(){
    $(document).ready(this.init.bind(this));
  }

  init(){
    $(document).foundation();
  }
}
