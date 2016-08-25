import jss from 'jss';
import extend from 'jss-extend';
import camelCase from 'jss-camel-case';
import vendorPrefixer from 'jss-vendor-prefixer';
import nested from 'jss-nested';

jss.use(extend());
jss.use(camelCase());
jss.use(vendorPrefixer());
jss.use(nested());

export default jss;
