webpackJsonp([10],{"4WSK":function(t,e){},"5NAV":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("xd7I"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]};var i=n("C7Lr")({name:"App"},r,!1,function(t){n("5NAV")},null,null).exports,o=n("e1F6"),l=n("4YfN"),s=n.n(l),u=n("2bvH"),c=n("TIfe"),p={props:["isCollapse"],data:function(){return{routeList:[]}},computed:s()({},Object(u.c)(["get_token"]),{role:function(){var t=1*this.get_token.role||1*JSON.parse(Object(c.a)()).role;return console.log(t),t}}),methods:{filterRoute:function(){var t=_.rou.filter(function(t){return t.meta.nav});this.routeList=t}},created:function(){this.filterRoute()}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",router:!0,collapse:t.isCollapse}},t._l(t.routeList,function(e,a){return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isCollapse,expression:"!isCollapse"}],key:e.path},[!e.children[1]||e.meta.role!==t.role&&0!==e.meta.role?e.meta.role===t.role||0===e.meta.role?n("el-menu-item",{attrs:{index:e.path}},[n("i",{staticClass:"el-icon-setting"}),t._v(" "),n("span",[t._v(t._s(e.meta.title))])]):t._e():n("el-submenu",{attrs:{index:a+""}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.meta.title))])]),t._v(" "),n("div",[n("el-menu-item-group",t._l(e.children,function(a,r){return n("div",{key:a.path},[a.children?n("el-submenu",{attrs:{index:r+""}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(a.meta.title))]),t._v(" "),t._l(a.children,function(r){return n("div",{key:r.path},[n("el-menu-item",{attrs:{index:e.path+"/"+a.path+"/"+r.path}},[t._v(t._s(r.meta.title))])],1)})],2):n("el-menu-item",{attrs:{index:e.path+"/"+a.path}},[t._v(t._s(a.meta.title))])],1)}),0)],1)],2)],1)}),0)],1)},staticRenderFns:[]};var m={components:{sidebar:n("C7Lr")(p,d,!1,function(t){n("U6Lb")},null,null).exports},data:function(){return{isCollapse:!0,padLeft:0,transition:"all .4s linear .3s"}},methods:{changeCollapse:function(){this.isCollapse=!this.isCollapse,this.isCollapse?(this.transition="none",this.padLeft=0):(this.transition="all .4s linear .3s",this.padLeft=200)},layout:function(){Object(c.b)(),this.$router.push({path:"/login"})}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-container",style:{"padding-left":t.padLeft+"px",transition:t.transition}},[n("el-container",[n("el-header",[n("i",{staticClass:"el-icon-s-fold collapse",on:{click:t.changeCollapse}}),t._v(" "),n("i",{staticClass:"layout",on:{click:t.layout}},[t._v("退出登录")])]),t._v(" "),n("el-container",[n("el-aside",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],style:{width:t.padLeft+"px",transition:t.transition},attrs:{width:"200px"}},[n("sidebar",{attrs:{isCollapse:t.isCollapse}})],1),t._v(" "),n("el-main",[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var h=n("C7Lr")(m,f,!1,function(t){n("kLQf")},"data-v-e83f4a12",null).exports;a.default.use(o.a);var v=[{path:"/",name:"layout",meta:{nav:!1},component:h},{path:"/login",name:"login",meta:{nav:!1},component:function(){return n.e(8).then(n.bind(null,"W2Q3"))}},{path:"/company",component:h,redirect:"/company/company",meta:{nav:!0,title:"公司简介",role:0},children:[{path:"company",component:function(){return n.e(7).then(n.bind(null,"M8t5"))}}]},{path:"/brand",name:"brand",component:h,redirect:"/brand/brand",meta:{nav:!0,title:"注册商标",role:1},children:[{path:"brand",component:function(){return n.e(1).then(n.bind(null,"ti6k"))}}]},{path:"/user",name:"user",component:h,redirect:"/user/user",meta:{nav:!0,title:"用户管理",role:1},children:[{path:"user",component:function(){return n.e(2).then(n.bind(null,"+L4n"))}}]},{path:"/material",name:"material",component:h,redirect:"/material/category",meta:{nav:!0,title:"素材管理",role:2},children:[{meta:{title:"素材分类"},path:"category",component:function(){return n.e(3).then(n.bind(null,"Ufzo"))}},{path:"census",redirect:"census/add",component:function(){return n.e(5).then(n.bind(null,"NEzt"))},meta:{title:"素材修改"},children:[{path:"add",component:function(){return n.e(6).then(n.bind(null,"3Ph/"))},meta:{title:"素材管理"}},{path:"edit",component:function(){return n.e(4).then(n.bind(null,"15YX"))},meta:{title:"素材编辑"}}]}]},{path:"*",meta:{nav:!1},component:function(){return n.e(0).then(n.bind(null,"23Cv"))}},{path:"/404",meta:{nav:!1},component:function(){return n.e(0).then(n.bind(null,"23Cv"))}}],b=new o.a({routes:v});b.rou=v;var _=b,g=n("3cXf"),C=n.n(g),k=n("rVsN"),y=n.n(k),w=n("ZLEe"),x=n.n(w),L=n("Muz9"),N=n.n(L);function E(t){var e="http://www.operatorhs.com/";if(t.type=t.type||"get","get"===t.type){var n="";if(t.params){var a=x.a[t.params];a.forEach(function(e){n+=a+t.params[e]+"&"})}return n=""!==n?"?"+n.substring(0,n.length-1):"",N.a.get(e+t.url+n)}var r=t.params,i=r.user,o=r.pass;return N.a.post(e+t.url,C()({user:i,pass:o}))}var O={state:{token:{}},mutations:{SET_TOKEN:function(t,e){t.token=e}},actions:{get_login_token:function(t,e){var n=t.commit;return new y.a(function(t,a){(function(t){return E({type:"post",url:"login",params:t})})(e).then(function(e){n("SET_TOKEN",C()(e.data.token[0])),t(e)},function(t){a(t)})})}}},S={get_token:function(t){return t.login.token}};a.default.use(u.a);var T,A=new u.a.Store({modules:{login:O},getters:S}),j=n("bzuk"),R=n.n(j),z=(n("4WSK"),n("lC5x")),F=n.n(z),J=n("J0Oq"),K=n.n(J),$=this,H=["/login"];_.beforeEach((T=K()(F.a.mark(function t(e,n,a){var r,i,o;return F.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((r=void 0)||(r=Object(c.a)()),r){t.next=6;break}-1!==H.indexOf(e.path)?a():a("/login"),t.next=16;break;case 6:i=e.path,o=JSON.parse(r).role,t.t0=i,t.next="/user/user"===t.t0?11:"/brand/brand"===t.t0?11:"/material/category"===t.t0?13:"/material/census/edit"===t.t0?13:"/material/census/add"===t.t0?13:15;break;case 11:return 1!==o&&a("/404"),t.abrupt("break",15);case 13:return 2!==o&&a("/404"),t.abrupt("break",15);case 15:a();case 16:case"end":return t.stop()}},t,$)})),function(t,e,n){return T.apply(this,arguments)})),_.afterEach(function(){}),a.default.use(R.a),a.default.config.productionTip=!0,new a.default({el:"#app",router:_,store:A,components:{App:i},template:"<App/>"})},TIfe:function(t,e,n){"use strict";e.a=function(){return r.a.get(i)},e.c=function(t){return r.a.set(i,t)},e.b=function(){return r.a.remove(i)};var a=n("uAC3"),r=n.n(a),i="admin"},U6Lb:function(t,e){},kLQf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.386752456cdbf981570b.js.map