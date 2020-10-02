(this.webpackJsonpspacegap=this.webpackJsonpspacegap||[]).push([[0],{100:function(e,t){},112:function(e,t){},114:function(e,t){},151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(82),s=a.n(c),i=(a(91),a(1)),o=a.n(i),l=a(5),u=a(3),d=a(10),m=a(7),f=a(6),p=a(15),h=a(8),v=a(9),E=a(2),b=a(57),w=a(45),g=a(58),y=a.n(g),j=(a(32),a(22)),O=a.n(j),x=a(32),k=x.format("0.2f"),N=a(145)("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),S=a(35),C=a(154).testnet.fullNode;function P(e){if(""===e)return window.BigInt(0);var t=atob(e),a=[];return t.split("").forEach((function(e){var t=e.charCodeAt(0).toString(16);t.length%2&&(t="0"+t),a.push(t)})),window.BigInt("0x"+a.join(""))}var T={Sectors:"buffer",Faults:"buffer",Recoveries:"buffer",Terminated:"buffer",ExpirationEpochs:"cid",EarlyTerminated:"cid",LivePower:{a:"bigint",b:"bigint"},FaultyPower:{a:"bigint",b:"bigint"},RecoveringPower:{a:"bigint",b:"bigint"}},I={type:"hamt",key:"bigint",value:{info:{seal_proof:"int",sector_number:"int",sealed_cid:"cid",seal_rand_epoch:"int",deal_ids:["list","int"],expiration:"int",replace_capacity:"bool",replace_sector_deadline:"int",replace_sector_partition:"int",replace_sector_number:"int"},precommit_deposit:"bigint",precommit_epoch:"int",deal_weight:"bigint",verified_deal_weight:"bigint"}};function D(e){for(var t=0n,a=0;a<e.length;a++)t*=256n,t+=window.BigInt(e[a]);return t}function F(e){for(var t=new S(0),a=0;a<e.length;a++)t=(t=t.mul(new S(256))).add(new S(e[e.length-a-1]));return t}function H(e,t){var a=e.num.and(new S(1).shln(t).sub(new S(1)));return e.num=e.num.shrn(t),e.left-=t,a.toNumber()}function B(e){var t,a=function(e){for(var t={left:8*e.length,num:F(e)},a=(H(t,2),H(t,1)),n=[];t.left>0;){if(1!==H(t,1))if(1!==H(t,1)){for(var r=0,c=0,s=0;;s++){if(10===s)throw new Error("run too long");var i=H(t,8);if(i<128){if(s>9||9===s&&i>1)throw new Error("run too long");if(0===i&&c>0)throw new Error("invalid run");r|=i<<c;break}r|=(127&i)<<c,c+=7}n.push(r)}else{var o=H(t,4);n.push(o)}else n.push(1)}return{first:a,runs:n}}(e),n=a.first,r=a.runs,c=n,s=[],i=0,o=Object(E.a)(r);try{for(o.s();!(t=o.n()).done;){for(var l=t.value,u=0;u<l;u++)1===c&&s.push(i),i++;c=1-c}}catch(d){o.e(d)}finally{o.f()}return s}var A=function(){function e(t){Object(h.a)(this,e),this.url=t;var a=new w.a(t);console.log("new endpoint",t),this.client=new b.LotusRPC(a,{schema:C})}return Object(v.a)(e,[{key:"getData",value:function(){var e=Object(l.a)(o.a.mark((function e(t,a,n){var r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Blocks[0].ParentStateRoot["/"],e.next=3,this.client.chainGetNode("".concat(r,"/").concat(a));case 3:return c=e.sent.Obj,s=this,e.next=7,y.a.methods.decode(n,c).asObject(function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.client.chainGetNode(t);case 2:return a=e.sent,e.abrupt("return",a.Obj);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"fetchHead",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.chainHead();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPartitionsSectors",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.chainGetNode("".concat(t["/"]));case 2:return a=e.sent.Obj[2][2],e.abrupt("return",a.map((function(e){var t=y.a.methods.decode(T,e);return[{Sectors:B(t.Sectors),Faults:B(t.Faults).reduce((function(e,t){return e[t]=!0,e}),{}),Terminated:B(t.Terminated).reduce((function(e,t){return e[t]=!0,e}),{}),Recoveries:B(t.Recoveries).reduce((function(e,t){return e[t]=!0,e}),{})}]})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchTipsetHead",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.ChainGetTipSetByHeight(t,null);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchPower",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.Blocks[0].ParentStateRoot["/"],e.next=3,this.client.chainGetNode("".concat(a,"/@Ha:t04/1"));case 3:return n=e.sent.Obj,e.abrupt("return",{TotalRawBytePower:D(N.decode(n[0])),TotalBytesCommitted:D(N.decode(n[1])),TotalQualityAdjPower:D(N.decode(n[2])),TotalQABytesCommitted:D(N.decode(n[3])),TotalPledgeCollateral:D(N.decode(n[4])),ThisEpochRawBytePower:D(N.decode(n[5])),ThisEpochQualityAdjPower:D(N.decode(n[6])),ThisEpochPledgeCollateral:D(N.decode(n[7]))});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchDeposits",value:function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,r,c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.StateReadState(t,a.Cids);case 2:return n=e.sent,r=n.State.PreCommitDeposits,c=n.State.LockedFunds,s=n.Balance,i=s-r-c,e.abrupt("return",{collateral:k(n.Balance/1e18),available:k(i/1e18),locked:k(c/1e18),precommitdeposits:k(r/1e18)});case 8:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getMiners",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.localStorage.getItem("miners"),a=window.localStorage.getItem("time"),!(t&&a&&Date.now()-+a>6e4)){e.next=4;break}return e.abrupt("return",JSON.parse(t));case 4:return e.next=6,fetch("https://filfox.info/api/v0/miner/list/power?pageSize=1000");case 6:return e.next=8,e.sent.json();case 8:return n=e.sent,r=n.miners.reduce((function(e,t){return e[t.address]=t,e}),{}),window.localStorage.setItem("miners",JSON.stringify(r)),window.localStorage.setItem("time",Date.now()),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchDeadlinesProxy",value:function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,r,c,s=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.Blocks[0].ParentStateRoot["/"],e.next=3,this.client.chainGetNode("".concat(n,"/@Ha:").concat(t,"/1/11"));case 3:return r=e.sent.Obj[0],e.next=6,O()(24,r,function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.client.ChainGetNode("".concat(t["/"]));case 2:return a=e.sent.Obj,e.abrupt("return",{Partitions:a[0],LiveSectors:a[4],TotalSectors:a[5],FaultyPower:{Raw:Number(P(a[6][0]))}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"fetchDeadlines",value:function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,r,c,s,i,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("to fetch",t,a),e.next=3,Promise.all([this.client.StateMinerProvingDeadline(t,a.Cids),this.fetchDeadlinesProxy(t,a)]);case 3:return n=e.sent,r=Object(u.a)(n,2),c=r[0],s=r[1],console.log("fetched",t,a),i=Object(p.a)(Array(48)).map((function(e,t){return Object(f.a)(Object(f.a)({},s[(c.Index+t)%48]),{},{Close:c.Close+60*t,Index:(c.Index+t)%48})})),l=s.map((function(e){return+e.LiveSectors})).reduce((function(e,t){return e+t}),0),d=s.map((function(e){return+e.FaultyPower.Raw})).reduce((function(e,t){return e+t}),0)/34359738368,e.abrupt("return",{deadlines:s.map((function(e,t){return Object(f.a)(Object(f.a)({},s[t]),{},{Close:c.Close+60*t,Index:t})})),nextDeadlines:i,SectorsCount:l,FaultsCount:d,ActiveCount:l-d,deadline:c});case 12:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"fetchPreCommittedSectors",value:function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData(a,"@Ha:".concat(t,"/1/5"),I);case 2:return n=e.sent,r=x.groups(Object.keys(n).map((function(e){return{SectorNumber:n[e].info.sector_number,Expiry:n[e].precommit_epoch+10210}})),(function(e){return e.Expiry})).map((function(e){var t=Object(u.a)(e,2);return{Expiry:t[0],Sectors:t[1].map((function(e){return e.SectorNumber}))}})).sort((function(e,t){return e.Expiry-t.Expiry})),e.abrupt("return",{PreCommitDeadlines:r,Count:Object.keys(n).length});case 5:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"fetchSectors",value:function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.StateMinerSectors(t,null,a.Cids);case 2:return n=e.sent,r=n.reduce((function(e,t){return e[t.ID]={number:t.ID,info:t},e}),{}),c=Object.keys(r).length,e.abrupt("return",{sectorsCount:c,Sectors:r});case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}();function R(e){var t=e.miners;return r.a.createElement("section",{id:"home",className:"container"},r.a.createElement("div",{className:"spacerace"},"Top miners:",t&&Object.keys(t).slice(0,15).map((function(e,a){return r.a.createElement("div",{key:a},a+1,"."," ",r.a.createElement(d.b,{to:"/miners/".concat(t[e].address)},t[e].address))}))),r.a.createElement("div",null,"See deadlines of ",r.a.createElement(d.b,{to:"/full"},"top 50 miners")," or click on individual miners or the ",r.a.createElement(d.b,{to:"/status"},"network status"),"."))}function _(e){var t=e.title,a=e.url,n=e.desc;return r.a.createElement("div",{className:"summary col-sm"},r.a.createElement("div",{className:"summary-title"},a?r.a.createElement("a",{href:a},t):r.a.createElement(r.a.Fragment,null,t)),r.a.createElement("div",{className:"summary-desc"},n))}function L(e){var t=e.deadline,a=e.head,n=t;return r.a.createElement("div",{className:"deadlines windowpost"},r.a.createElement("div",{className:0===n.TotalSectors?"deadline opacity5":"deadline"},r.a.createElement("div",{className:"out"},"In ",n.Close-a.Height),r.a.createElement("div",{className:"hddWrapper"},r.a.createElement("div",{className:"in"},Math.round(32*n.TotalSectors/1024)," TiB"),r.a.createElement("div",{className:"hdds"},Object(p.a)(Array(Math.ceil(Math.round(32*n.TotalSectors/1024-+n.FaultyPower.Raw/1099511627776)/8))).map((function(e,t){return r.a.createElement("div",{key:t,className:"hdd"}," ")})),Object(p.a)(Array(Math.ceil(Math.round(+n.FaultyPower.Raw/1099511627776)/8))).map((function(e,t){return r.a.createElement("div",{key:t,className:"hdd faulty"}," ")}))))))}var M=a(32).format(",.2f");function G(e){var t=e.client,a=e.spa,c=e.head,s=e.miners,i=Object(n.useState)({}),m=Object(u.a)(i,2),p=m[0],h=m[1],v=Object(n.useState)({}),E=Object(u.a)(v,2),b=E[0],w=E[1],g=Object(n.useState)(),y=Object(u.a)(g,2),j=y[0],x=y[1],k=Object(n.useState)(),N=Object(u.a)(k,2),S=N[0],C=N[1];return Object(n.useEffect)((function(){c&&function(){var e=Object(l.a)(o.a.mark((function e(){var a,n,r,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){var e=Object(l.a)(o.a.mark((function e(a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchTipsetHead(c.Height-a);case 2:return n=e.sent,e.next=5,t.fetchPower(n);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.next=3,Promise.all([a(60),a(120)]);case 3:return n=e.sent,r=Object(u.a)(n,2),s=r[0],i=r[1],e.next=9,x(s);case 9:return e.next=11,C(i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c]),Object(n.useEffect)((function(){var e=!0;if(c){var a=Object.keys(s).slice(0,40).map((function(e){return s[e].address}));return O()(5,a,function(){var a=Object(l.a)(o.a.mark((function a(n){var r,s,i;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,t.fetchDeadlines(n,c);case 4:if(r=a.sent,e){a.next=7;break}return a.abrupt("return");case 7:return a.next=9,t.fetchTipsetHead(c.Height-2880);case 9:if(s=a.sent,e){a.next=12;break}return a.abrupt("return");case 12:return a.next=14,t.fetchDeadlines(n,s);case 14:if(i=a.sent,e){a.next=17;break}return a.abrupt("return");case 17:return p[n]=r,b[n]=i,a.next=21,h(Object(f.a)({},p));case 21:return a.next=23,w(Object(f.a)({},b));case 23:return a.abrupt("return",a.sent);case 24:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()),function(){e=!1}}}),[t,c,s]),r.a.createElement("section",{className:"container"},r.a.createElement("div",{id:"deposits",className:"section"},r.a.createElement("div",{className:"grid"},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{title:M(parseInt(a.TotalQualityAdjPower)/0x4000000000000),desc:"Total QA Power"})),j&&a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{title:M(parseInt(a.TotalQualityAdjPower-j.TotalQualityAdjPower)/0x4000000000000),desc:"60 Epochs delta"})),S&&a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{title:M(parseInt(a.TotalQualityAdjPower-S.TotalQualityAdjPower)/0x4000000000000),desc:"120 Epochs delta"})))),"Listing WindowPoSt duties of the top 50 miners.",s&&Object.keys(s).slice(0,40).map((function(e,t){return r.a.createElement("div",{className:"flex",key:t},r.a.createElement(d.b,{to:"/miners/".concat(s[e].address)},s[e].address),p&&p[s[e].address]&&r.a.createElement(L,{head:c,deadline:p[s[e].address].nextDeadlines[47]}),b&&b[s[e].address]&&r.a.createElement(L,{head:c,deadline:b[s[e].address].nextDeadlines[47]}))})))}function Q(e){var t=e.minerId,a=e.deadlines,n=e.head,c=e.link,s=e.out;return c||(c=function(e){return"/miners/".concat(t,"/deadlines/").concat(e.Index)}),s||(s=function(e){var t=e.d,a=e.head;e.i;return"In ".concat(t.Close-a.Height)}),n&&a?r.a.createElement("div",{className:"deadlines windowpost"},a&&a.map((function(e,t){return r.a.createElement("div",{key:t,className:0===e.TotalSectors?"deadline opacity5":"deadline"},r.a.createElement(d.b,{to:c(e)},r.a.createElement("div",{className:"out"},s({d:e,head:n,i:t})),r.a.createElement("div",{className:"hddWrapper"},r.a.createElement("div",{className:"in"},Math.round(32*e.TotalSectors/1024)," TiB"),r.a.createElement("div",{className:"hdds"},Object(p.a)(Array(Math.ceil(Math.round(32*e.TotalSectors/1024-+e.FaultyPower.Raw/1099511627776)/8))).map((function(e,t){return r.a.createElement("div",{key:t,className:"hdd"}," ")})),Object(p.a)(Array(Math.ceil(Math.round(+e.FaultyPower.Raw/1099511627776)/8))).map((function(e,t){return r.a.createElement("div",{key:t,className:"hdd faulty"}," ")}))))))}))):r.a.createElement(r.a.Fragment,null)}function W(e){var t=e.miners,a=e.client,c=Object(n.useState)({}),s=Object(u.a)(c,2),i=s[0],m=s[1],p=Object(n.useState)(),h=Object(u.a)(p,2),v=h[0],E=h[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchHead();case 2:t=e.sent,E(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),Object(n.useEffect)((function(){var e=!0;if(v){var n=Object.keys(t).slice(0,50).map((function(e){return t[e].address}));return O()(5,n,function(){var t=Object(l.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,a.fetchDeadlines(n,v);case 4:if(r=t.sent,e){t.next=7;break}return t.abrupt("return");case 7:return i[n]=r.nextDeadlines,t.next=10,m(Object(f.a)({},i));case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),function(){e=!1}}}),[a,v,t]),r.a.createElement("section",{id:"LookUp",className:"container"},"Listing WindowPoSt duties of the top 50 miners.",t&&Object.keys(t).slice(0,50).map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(d.b,{to:"/miners/".concat(t[e].address)},t[e].address),r.a.createElement(Q,{deadlines:i[t[e].address],head:v}))})))}var J=a(34);function U(e){e.client;var t=e.miners,a=e.minerId,n=e.deadlineId;return r.a.createElement("div",{className:"section minerbar"},r.a.createElement("div",{className:"minerId"},!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/miners/".concat(a)},a),r.a.createElement("span",{className:"tinyarrow"},r.a.createElement("a",{href:"https://filfox.info/en/address/".concat(a)},"\u2197"))),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/miners/".concat(a,"/deadlines/").concat(n)},"Deadline ",n))),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"backto"},r.a.createElement(d.b,{to:"/miners/".concat(a)},"See miner",r.a.createElement("span",{className:"bolder"}," ",a)))),!n&&r.a.createElement("div",null,t&&t[a]&&t[a].tag&&r.a.createElement("span",{className:"miner-name"},t[a].tag.name,t&&t[a].location&&r.a.createElement("span",null," ",t[a].location.flagEmoji))))}var q=a(32),z=q.format(","),K=q.format(",.1f");var Z=Object(m.g)((function(e){var t,a=e.miners,c=e.client,s=e.head,i=Object(m.f)(),d=i.minerId,h=i.deadlineId,v=Object(n.useState)(),E=Object(u.a)(v,2),b=E[0],w=E[1],g=Object(n.useState)({}),y=Object(u.a)(g,2),j=y[0],x=y[1],k=Object(n.useState)(),N=Object(u.a)(k,2),S=N[0],C=N[1];return Object(n.useEffect)((function(){S&&c.fetchPartitionsSectors(S.deadlines[h].Partitions).then((function(e){w(e)}))}),[S]),Object(n.useEffect)((function(){if(d&&s&&h){var e=Object(p.a)(Array(38)).map((function(e,t){return{height:s.Height-2880*t,day:t}}));if(!(S&&s.Height<S.deadlines[h].Close)){try{O()(40,e,function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.day,n=t.height,e.prev=1,e.next=4,c.fetchTipsetHead(n);case 4:r=e.sent,e.next=7;break;case 7:return e.next=9,c.fetchDeadlines(d,r);case 9:s=e.sent,e.next=12;break;case 12:j[a]=s,x(Object(f.a)({},j)),0===a&&C(s),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.log("could not find",a,n),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}())}catch(t){console.log("trouble with ",t)}return function(){!1}}console.log(s.Height,S.deadlines[h].Close)}}),[c,s,d,h,S]),r.a.createElement("section",{className:"container"},r.a.createElement(U,{client:c,miners:a,minerId:d,deadlineId:h}),r.a.createElement("div",{className:"section wpost"},r.a.createElement("div",{className:"grid"},j&&j[0]&&r.a.createElement(_,{title:"".concat(K(32*+j[0].deadlines[h].LiveSectors/1024)," TiB"),desc:"".concat(z(j[0].deadlines[h].LiveSectors)," Live Sectors")}),j&&j[0]&&r.a.createElement(_,{title:"".concat(K(32*+j[0].deadlines[h].TotalSectors/1024)," TiB"),desc:"".concat(z(j[0].deadlines[h].TotalSectors)," Total Sectors")}),j&&j[0]&&r.a.createElement(_,{title:"".concat(K(+j[0].deadlines[h].FaultyPower.Raw/1099511627776)," TiB"),desc:"".concat(z(+j[0].deadlines[h].FaultyPower.Raw/34359738368)," Faulty Sectors")}))),r.a.createElement("div",{className:"section wpost"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col section-title"},r.a.createElement("h3",null,"History"),r.a.createElement("a",{"data-tip":!0,"data-for":"wpost-desc"},"(what is this?)"),r.a.createElement(J.a,{id:"wpost-desc",effect:"solid",place:"top"},r.a.createElement("span",null,"List of 48 WindowPoSt submission deadlines ordered by due time (in epochs).",r.a.createElement("br",null),"Bars represent ~8TB disks to be proven, white are healthy disks, red are faulty.")))),r.a.createElement(Q,{link:function(e){return"/miners/".concat(d,"/deadlines/").concat(h)},deadlines:(t=h,Object.keys(j).sort((function(e,t){return+e-+t})).map((function(e){return[e,j[e]]})).map((function(e){var a=Object(u.a)(e,2);return a[0],a[1].deadlines[t]})).flat()),head:s,out:function(e){e.d,e.head;var t=e.i;return 0===t?"Today":"".concat(t,"d ago")}})),r.a.createElement("div",{className:"section sectors"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col section-title"},r.a.createElement("h3",null,"Sectors"),r.a.createElement("a",{"data-tip":!0,"data-for":"sectors-desc"},"(what is this?)"),r.a.createElement(J.a,{id:"sectors-desc",effect:"solid",place:"top"},r.a.createElement("span",null,"Each square is a 32GiB sector.")))),b&&r.a.createElement("div",null,b.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h4",null,"Partition ",t," ",Object.keys(e[0].Faults).length===e[0].Sectors.length&&r.a.createElement("span",{className:"rekt"},"REKT")),r.a.createElement("div",{className:"s-partition"},e[0].Sectors.map((function(t){return r.a.createElement("div",{key:t,className:"s-sector ".concat(e[0].Faults[t]&&"faulty"," ").concat(e[0].Terminated[t]&&"terminated"," ").concat(e[0].Recoveries[t]&&"recovering")},r.a.createElement("span",null,t))}))))})))))})),V=a(32),X=V.format(","),Y=V.format(",.0f");var $=Object(m.g)((function(e){var t=e.client,a=e.miners,c=e.head,s=Object(m.f)().minerId,i=Object(n.useState)({id:s}),o=Object(u.a)(i,2),l=o[0],d=o[1];return Object(n.useEffect)((function(){if(s&&c&&t){var e=!0;return d(Object(f.a)({},l)),t.fetchDeadlines(s,c).then((function(t){e&&(l.deadlines=t,d(Object(f.a)({},l)),console.log("deadlines setting"))})),t.fetchDeposits(s,c).then((function(t){e&&(l.deposits=t,d(Object(f.a)({},l)))})),t.fetchPreCommittedSectors(s,c).then((function(t){e&&(l.preCommits=t,d(Object(f.a)({},l)))})),function(){e=!1}}}),[t,c,s]),l&&c?r.a.createElement("section",{className:"container"},r.a.createElement(U,{client:t,miners:a,minerId:s}),r.a.createElement("div",{id:"deposits",className:"section"},r.a.createElement("div",{className:"grid"},l.deposits&&r.a.createElement(_,{title:"".concat(X(l.deposits.collateral||0)," FIL"),desc:"Collateral"}),l.deposits&&r.a.createElement(_,{title:"".concat(X(l.deposits.available||0)," FIL"),desc:"Available"}),l.deposits&&r.a.createElement(_,{desc:"Locked",title:"".concat(X(l.deposits.locked||0)," FIL")}))),r.a.createElement("div",{id:"sectors"},r.a.createElement("div",{className:"grid grid-4"},l.deadlines&&r.a.createElement(_,{title:"".concat(Y(32*l.deadlines.SectorsCount/1024)," TiB"),desc:"".concat(X(l.deadlines.SectorsCount||0)," Total Sectors")}),l.deadlines&&r.a.createElement(_,{title:"".concat(Y(32*l.deadlines.ActiveCount/1024)," TiB"),desc:"".concat(X(l.deadlines.ActiveCount||0)," Active Sectors")}),l.deadlines&&r.a.createElement(_,{title:"".concat(Y(32*l.deadlines.FaultsCount/1024)," TiB"),desc:"".concat(X(l.deadlines.FaultsCount||0)," Faulty Sectors")}),l.preCommits&&r.a.createElement(_,{title:X(l.preCommits.Count||0),desc:"PreCommits"}))),l.deadlines&&r.a.createElement("div",{className:"section wpost"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col section-title"},r.a.createElement("h3",null,"Deadlines"),r.a.createElement("a",{"data-tip":!0,"data-for":"wpost-desc"},"(what is this?)"),r.a.createElement(J.a,{id:"wpost-desc",effect:"solid",place:"top"},r.a.createElement("span",null,"List of 48 WindoPoSt submission deadlines ordered by due time (in epochs).",r.a.createElement("br",null),"Bars represent ~8TB disks to be proven, white are healthy disks, red are faulty.")))),r.a.createElement(Q,{minerId:s,deadlines:l.deadlines.nextDeadlines,head:c})),l.deadlines&&r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col section-title"},r.a.createElement("h3",null,"Upcoming Deadline"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"timeline"}),r.a.createElement("ul",null,r.a.createElement("li",null,"PoStSubmissions:",l.deadlines.nextDeadlines[0].PostSubmissions),r.a.createElement("li",null,"Sectors to Prove:"," ",l.deadlines.nextDeadlines[0].TotalSectors),r.a.createElement("li",null,"Current Deadline: ",l.deadlines.deadline.Index),r.a.createElement("li",null,"FaultCutoff:"," ",l.deadlines.deadline.FaultCutoff-c.Height),r.a.createElement("li",null,"Challenge: ",l.deadlines.deadline.Challenge-c.Height),r.a.createElement("li",null,l.deadlines.deadline.Open-c.Height>0?"Open":"Opened",": ",l.deadlines.deadline.Open-c.Height),r.a.createElement("li",null,"Close: ",l.deadlines.deadline.Close-c.Height))),r.a.createElement("div",{className:"col"},r.a.createElement(Q,{minerId:s,deadlines:[l.deadlines.nextDeadlines[0]],head:c})))),l.preCommits&&r.a.createElement("div",{id:"provecommit",className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col section-title"},r.a.createElement("h3",null,"New sectors"),r.a.createElement("a",{"data-tip":!0,"data-for":"provecommit-desc"},"(what is this?)"),r.a.createElement(J.a,{id:"provecommit-desc",effect:"solid",place:"top"},r.a.createElement("span",null,"List of ProveCommits ordered by due time (in epochs).",r.a.createElement("br",null),"Circles represent sectors to be proven.")))),r.a.createElement("div",{className:"deadlines provecommit"},l.preCommits.PreCommitDeadlines.map((function(e,t){return r.a.createElement("div",{key:t,className:"deadline"},r.a.createElement("div",{className:"out"},"In ",e.Expiry-c.Height),r.a.createElement("div",{className:"hddWrapper"},r.a.createElement("div",{className:"in"},Math.round(e.Sectors.length)," sectors"),r.a.createElement("div",{className:"hdds"},e.Sectors.map((function(e){return r.a.createElement("div",{key:e,className:"hdd"},"")})))))}))))):r.a.createElement(r.a.Fragment,null)})),ee=function(){return te.apply(this,arguments)};function te(){return(te=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api3.drand.sh/health");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ae=a(32).format(",");function ne(){var e=new Date("2020-08-24 22:00:00Z").getTime();return Math.floor((Date.now()-e)/1e3/30)}function re(e){var t=e.client,a=e.head,c=Object(n.useState)(ne()),s=Object(u.a)(c,2),i=s[0],d=s[1],m=Object(n.useState)(),f=Object(u.a)(m,2),p=f[0],h=f[1];return Object(n.useEffect)((function(){var e=!0,t=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ee().then((function(t){e&&(p&&t.current===p.current?console.log("   repeated drand, skip"):(console.log("   new drand",t),h(t)))})),ne()!==i&&d(ne());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t();var a=setInterval((function(){e&&t()}),5e3);return function(){e=!1,clearInterval(a),console.log("removing interval")}}),[t,a,p]),r.a.createElement("div",{className:"tiny-grid"},a&&i&&r.a.createElement("div",null,"Filecoin Status"," ",r.a.createElement("span",null,a.Height<i?i-a.Height===1?"gathering blocks":"catching up":"ok")),a&&r.a.createElement("div",{className:"tiny"},"Current Tipset"," ",r.a.createElement("a",{href:"https://filfox.info/en/tipset/".concat(a.Height)},ae(a.Height))),i&&r.a.createElement("div",{className:"tiny"},"Expected Tipset"," ",r.a.createElement("a",{href:"https://filfox.info/en/tipset/".concat(i)},ae(i))),p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"tiny"},"Drand Status"," ",r.a.createElement("span",null,p.current<p.expected?"catching up":"ok")),r.a.createElement("div",{className:"tiny"},"Current Drand"," ",r.a.createElement("a",{href:"https://api.drand.sh/public/".concat(p.current)},ae(p.current))),r.a.createElement("div",{className:"tiny"},"Expected Drand"," ",r.a.createElement("a",{href:"https://api.drand.sh/public/".concat(p.expected)},ae(p.expected)))))}a(150),a(151);var ce=function(){console.log("reloaded");var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),i=Object(u.a)(s,2),f=i[0],p=i[1],h=Object(n.useState)("wss://node.glif.io/space07/lotus/rpc/v0"),v=Object(u.a)(h,2),E=v[0],b=v[1],w=Object(n.useState)(new A(E)),g=Object(u.a)(w,2),y=g[0],j=g[1],O=Object(n.useState)(),x=Object(u.a)(O,2),k=x[0],N=x[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return e.next=4,j(new A(E));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[E]),Object(n.useEffect)((function(){f&&y.fetchPower(f).then((function(e){N(e)}))}),[f,y]),Object(n.useEffect)((function(){var e=!0;y.getMiners().then((function(t){e&&c(t)}));var t=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y.fetchHead().then((function(t){e&&(f&&t.Height===f.Height?console.log("   repeated block, skip"):(console.log("   new block",t.Height,f&&f.Height),p(t)))}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t();var a=setInterval((function(){e&&t()}),5e3);return function(){e=!1,clearInterval(a),console.log("removing interval")}}),[y,f]),r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("select",{onChange:function(e){return b(e.target.value)},value:E},r.a.createElement("option",{value:"wss://lotus.jimpick.com/spacerace_api/0/node/rpc/v0"},"Jim's node 0"),r.a.createElement("option",{value:"wss://lotus.jimpick.com/spacerace_api/1/node/rpc/v0"},"Jim's node 1"),r.a.createElement("option",{value:"ws://www.border.ninja:12342/node/rpc/v0"},"Border's node"),r.a.createElement("option",{value:"wss://node.glif.io/space07/lotus/rpc/v0"},"Glif's node")))),r.a.createElement(re,{client:y,head:f})),r.a.createElement("header",{className:"container-fluid"},r.a.createElement(d.b,{to:"/"},r.a.createElement("h1",{id:"logo",className:"logo"},r.a.createElement("span",null,"spacegap")))),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/miners/:minerId/deadlines/:deadlineId"},r.a.createElement(Z,{client:y,miners:a,head:f})),r.a.createElement(m.a,{path:"/miners/:minerId"},r.a.createElement($,{client:y,miners:a,head:f})),r.a.createElement(m.a,{path:"/full"},r.a.createElement(W,{client:y,miners:a})),r.a.createElement(m.a,{path:"/status"},r.a.createElement(G,{head:f,spa:k,client:y,miners:a})),r.a.createElement(m.a,{path:"/"},r.a.createElement(R,{miners:a})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(152)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.c7d09fad.chunk.js.map