"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[709],{4781:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var i=n(885),s=n(2791),a=n(4697),c=n(9881),r=n(9031),u=n(9720),o=n(7546),h=n(184);function l(t){var e=t.movieId,n=(0,s.useState)(null),l=(0,i.Z)(n,2),m=l[0],f=l[1],p=(0,s.useState)(o.Z.IDLE),E=(0,i.Z)(p,2),g=E[0],Z=E[1],_=(0,s.useState)(null),d=(0,i.Z)(_,2),x=d[0],j=d[1];return(0,s.useEffect)((function(){Z(o.Z.PENDING),setTimeout((function(){a.oG(e).then((function(t){var e=t.cast;f(e),Z(o.Z.RESOLVED)})).catch((function(t){j(t),Z(o.Z.REJECTED)}))}),500)}),[e]),(0,h.jsxs)(h.Fragment,{children:[g===o.Z.PENDING&&(0,h.jsx)(r.Z,{}),g===o.Z.REJECTED&&(0,h.jsx)(u.Z,{message:x.message}),m&&g===o.Z.RESOLVED&&(0,h.jsx)("ul",{children:m.map((function(t,e){return(0,h.jsxs)("li",{children:[t.profile_path?(0,h.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(t.profile_path),width:"100",height:"150",alt:t.name}):(0,h.jsx)("img",{src:c,width:"100",height:"150",alt:t.name}),(0,h.jsx)("p",{children:t.name})]},e)}))})]})}},9881:function(t,e,n){t.exports=n.p+"static/media/No_image_poster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=Cast.6c880c85.chunk.js.map