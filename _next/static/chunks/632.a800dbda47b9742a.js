"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[632],{14632:(t,e,i)=>{i.d(e,{diagram:()=>v});var a=i(10009),n=i(55662),s=function(){var t=(0,a.K2)(function(t,e,i,a){for(i=i||{},a=t.length;a--;i[t[a]]=e);return i},"o"),e=[1,3],i=[1,4],n=[1,5],s=[1,6],r=[1,7],l=[1,4,5,10,12,13,14,18,25,35,37,39,41,42,48,50,51,52,53,54,55,56,57,60,61,63,64,65,66,67],o=[1,4,5,10,12,13,14,18,25,28,35,37,39,41,42,48,50,51,52,53,54,55,56,57,60,61,63,64,65,66,67],h=[55,56,57],c=[2,36],d=[1,37],u=[1,36],x=[1,38],g=[1,35],f=[1,43],y=[1,41],p=[1,14],m=[1,23],T=[1,18],_=[1,19],q=[1,20],A=[1,21],b=[1,22],k=[1,24],S=[1,25],F=[1,26],P=[1,27],C=[1,28],v=[1,29],L=[1,32],I=[1,33],E=[1,34],D=[1,39],z=[1,40],K=[1,42],U=[1,44],w=[1,62],N=[1,61],R=[4,5,8,10,12,13,14,18,44,47,49,55,56,57,63,64,65,66,67],B=[1,65],$=[1,66],W=[1,67],O=[1,68],Q=[1,69],X=[1,70],M=[1,71],Y=[1,72],H=[1,73],j=[1,74],G=[1,75],Z=[1,76],V=[4,5,6,7,8,9,10,11,12,13,14,15,18],J=[1,90],tt=[1,91],te=[1,92],ti=[1,99],ta=[1,93],tn=[1,96],ts=[1,94],tr=[1,95],tl=[1,97],to=[1,98],th=[1,102],tc=[10,55,56,57],td=[4,5,6,8,10,11,13,17,18,19,20,55,56,57],tu={trace:(0,a.K2)(function(){},"trace"),yy:{},symbols_:{error:2,idStringToken:3,ALPHA:4,NUM:5,NODE_STRING:6,DOWN:7,MINUS:8,DEFAULT:9,COMMA:10,COLON:11,AMP:12,BRKT:13,MULT:14,UNICODE_TEXT:15,styleComponent:16,UNIT:17,SPACE:18,STYLE:19,PCT:20,idString:21,style:22,stylesOpt:23,classDefStatement:24,CLASSDEF:25,start:26,eol:27,QUADRANT:28,document:29,line:30,statement:31,axisDetails:32,quadrantDetails:33,points:34,title:35,title_value:36,acc_title:37,acc_title_value:38,acc_descr:39,acc_descr_value:40,acc_descr_multiline_value:41,section:42,text:43,point_start:44,point_x:45,point_y:46,class_name:47,"X-AXIS":48,"AXIS-TEXT-DELIMITER":49,"Y-AXIS":50,QUADRANT_1:51,QUADRANT_2:52,QUADRANT_3:53,QUADRANT_4:54,NEWLINE:55,SEMI:56,EOF:57,alphaNumToken:58,textNoTagsToken:59,STR:60,MD_STR:61,alphaNum:62,PUNCTUATION:63,PLUS:64,EQUALS:65,DOT:66,UNDERSCORE:67,$accept:0,$end:1},terminals_:{2:"error",4:"ALPHA",5:"NUM",6:"NODE_STRING",7:"DOWN",8:"MINUS",9:"DEFAULT",10:"COMMA",11:"COLON",12:"AMP",13:"BRKT",14:"MULT",15:"UNICODE_TEXT",17:"UNIT",18:"SPACE",19:"STYLE",20:"PCT",25:"CLASSDEF",28:"QUADRANT",35:"title",36:"title_value",37:"acc_title",38:"acc_title_value",39:"acc_descr",40:"acc_descr_value",41:"acc_descr_multiline_value",42:"section",44:"point_start",45:"point_x",46:"point_y",47:"class_name",48:"X-AXIS",49:"AXIS-TEXT-DELIMITER",50:"Y-AXIS",51:"QUADRANT_1",52:"QUADRANT_2",53:"QUADRANT_3",54:"QUADRANT_4",55:"NEWLINE",56:"SEMI",57:"EOF",60:"STR",61:"MD_STR",63:"PUNCTUATION",64:"PLUS",65:"EQUALS",66:"DOT",67:"UNDERSCORE"},productions_:[0,[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[21,1],[21,2],[22,1],[22,2],[23,1],[23,3],[24,5],[26,2],[26,2],[26,2],[29,0],[29,2],[30,2],[31,0],[31,1],[31,2],[31,1],[31,1],[31,1],[31,2],[31,2],[31,2],[31,1],[31,1],[34,4],[34,5],[34,5],[34,6],[32,4],[32,3],[32,2],[32,4],[32,3],[32,2],[33,2],[33,2],[33,2],[33,2],[27,1],[27,1],[27,1],[43,1],[43,2],[43,1],[43,1],[62,1],[62,2],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[59,1],[59,1],[59,1]],performAction:(0,a.K2)(function(t,e,i,a,n,s,r){var l=s.length-1;switch(n){case 23:case 68:this.$=s[l];break;case 24:case 69:this.$=s[l-1]+""+s[l];break;case 26:this.$=s[l-1]+s[l];break;case 27:this.$=[s[l].trim()];break;case 28:s[l-2].push(s[l].trim()),this.$=s[l-2];break;case 29:this.$=s[l-4],a.addClass(s[l-2],s[l]);break;case 37:this.$=[];break;case 42:this.$=s[l].trim(),a.setDiagramTitle(this.$);break;case 43:this.$=s[l].trim(),a.setAccTitle(this.$);break;case 44:case 45:this.$=s[l].trim(),a.setAccDescription(this.$);break;case 46:a.addSection(s[l].substr(8)),this.$=s[l].substr(8);break;case 47:a.addPoint(s[l-3],"",s[l-1],s[l],[]);break;case 48:a.addPoint(s[l-4],s[l-3],s[l-1],s[l],[]);break;case 49:a.addPoint(s[l-4],"",s[l-2],s[l-1],s[l]);break;case 50:a.addPoint(s[l-5],s[l-4],s[l-2],s[l-1],s[l]);break;case 51:a.setXAxisLeftText(s[l-2]),a.setXAxisRightText(s[l]);break;case 52:s[l-1].text+=" ⟶ ",a.setXAxisLeftText(s[l-1]);break;case 53:a.setXAxisLeftText(s[l]);break;case 54:a.setYAxisBottomText(s[l-2]),a.setYAxisTopText(s[l]);break;case 55:s[l-1].text+=" ⟶ ",a.setYAxisBottomText(s[l-1]);break;case 56:a.setYAxisBottomText(s[l]);break;case 57:a.setQuadrant1Text(s[l]);break;case 58:a.setQuadrant2Text(s[l]);break;case 59:a.setQuadrant3Text(s[l]);break;case 60:a.setQuadrant4Text(s[l]);break;case 64:case 66:this.$={text:s[l],type:"text"};break;case 65:this.$={text:s[l-1].text+""+s[l],type:s[l-1].type};break;case 67:this.$={text:s[l],type:"markdown"}}},"anonymous"),table:[{18:e,26:1,27:2,28:i,55:n,56:s,57:r},{1:[3]},{18:e,26:8,27:2,28:i,55:n,56:s,57:r},{18:e,26:9,27:2,28:i,55:n,56:s,57:r},t(l,[2,33],{29:10}),t(o,[2,61]),t(o,[2,62]),t(o,[2,63]),{1:[2,30]},{1:[2,31]},t(h,c,{30:11,31:12,24:13,32:15,33:16,34:17,43:30,58:31,1:[2,32],4:d,5:u,10:x,12:g,13:f,14:y,18:p,25:m,35:T,37:_,39:q,41:A,42:b,48:k,50:S,51:F,52:P,53:C,54:v,60:L,61:I,63:E,64:D,65:z,66:K,67:U}),t(l,[2,34]),{27:45,55:n,56:s,57:r},t(h,[2,37]),t(h,c,{24:13,32:15,33:16,34:17,43:30,58:31,31:46,4:d,5:u,10:x,12:g,13:f,14:y,18:p,25:m,35:T,37:_,39:q,41:A,42:b,48:k,50:S,51:F,52:P,53:C,54:v,60:L,61:I,63:E,64:D,65:z,66:K,67:U}),t(h,[2,39]),t(h,[2,40]),t(h,[2,41]),{36:[1,47]},{38:[1,48]},{40:[1,49]},t(h,[2,45]),t(h,[2,46]),{18:[1,50]},{4:d,5:u,10:x,12:g,13:f,14:y,43:51,58:31,60:L,61:I,63:E,64:D,65:z,66:K,67:U},{4:d,5:u,10:x,12:g,13:f,14:y,43:52,58:31,60:L,61:I,63:E,64:D,65:z,66:K,67:U},{4:d,5:u,10:x,12:g,13:f,14:y,43:53,58:31,60:L,61:I,63:E,64:D,65:z,66:K,67:U},{4:d,5:u,10:x,12:g,13:f,14:y,43:54,58:31,60:L,61:I,63:E,64:D,65:z,66:K,67:U},{4:d,5:u,10:x,12:g,13:f,14:y,43:55,58:31,60:L,61:I,63:E,64:D,65:z,66:K,67:U},{4:d,5:u,10:x,12:g,13:f,14:y,43:56,58:31,60:L,61:I,63:E,64:D,65:z,66:K,67:U},{4:d,5:u,8:w,10:x,12:g,13:f,14:y,18:N,44:[1,57],47:[1,58],58:60,59:59,63:E,64:D,65:z,66:K,67:U},t(R,[2,64]),t(R,[2,66]),t(R,[2,67]),t(R,[2,70]),t(R,[2,71]),t(R,[2,72]),t(R,[2,73]),t(R,[2,74]),t(R,[2,75]),t(R,[2,76]),t(R,[2,77]),t(R,[2,78]),t(R,[2,79]),t(R,[2,80]),t(l,[2,35]),t(h,[2,38]),t(h,[2,42]),t(h,[2,43]),t(h,[2,44]),{3:64,4:B,5:$,6:W,7:O,8:Q,9:X,10:M,11:Y,12:H,13:j,14:G,15:Z,21:63},t(h,[2,53],{59:59,58:60,4:d,5:u,8:w,10:x,12:g,13:f,14:y,18:N,49:[1,77],63:E,64:D,65:z,66:K,67:U}),t(h,[2,56],{59:59,58:60,4:d,5:u,8:w,10:x,12:g,13:f,14:y,18:N,49:[1,78],63:E,64:D,65:z,66:K,67:U}),t(h,[2,57],{59:59,58:60,4:d,5:u,8:w,10:x,12:g,13:f,14:y,18:N,63:E,64:D,65:z,66:K,67:U}),t(h,[2,58],{59:59,58:60,4:d,5:u,8:w,10:x,12:g,13:f,14:y,18:N,63:E,64:D,65:z,66:K,67:U}),t(h,[2,59],{59:59,58:60,4:d,5:u,8:w,10:x,12:g,13:f,14:y,18:N,63:E,64:D,65:z,66:K,67:U}),t(h,[2,60],{59:59,58:60,4:d,5:u,8:w,10:x,12:g,13:f,14:y,18:N,63:E,64:D,65:z,66:K,67:U}),{45:[1,79]},{44:[1,80]},t(R,[2,65]),t(R,[2,81]),t(R,[2,82]),t(R,[2,83]),{3:82,4:B,5:$,6:W,7:O,8:Q,9:X,10:M,11:Y,12:H,13:j,14:G,15:Z,18:[1,81]},t(V,[2,23]),t(V,[2,1]),t(V,[2,2]),t(V,[2,3]),t(V,[2,4]),t(V,[2,5]),t(V,[2,6]),t(V,[2,7]),t(V,[2,8]),t(V,[2,9]),t(V,[2,10]),t(V,[2,11]),t(V,[2,12]),t(h,[2,52],{58:31,43:83,4:d,5:u,10:x,12:g,13:f,14:y,60:L,61:I,63:E,64:D,65:z,66:K,67:U}),t(h,[2,55],{58:31,43:84,4:d,5:u,10:x,12:g,13:f,14:y,60:L,61:I,63:E,64:D,65:z,66:K,67:U}),{46:[1,85]},{45:[1,86]},{4:J,5:tt,6:te,8:ti,11:ta,13:tn,16:89,17:ts,18:tr,19:tl,20:to,22:88,23:87},t(V,[2,24]),t(h,[2,51],{59:59,58:60,4:d,5:u,8:w,10:x,12:g,13:f,14:y,18:N,63:E,64:D,65:z,66:K,67:U}),t(h,[2,54],{59:59,58:60,4:d,5:u,8:w,10:x,12:g,13:f,14:y,18:N,63:E,64:D,65:z,66:K,67:U}),t(h,[2,47],{22:88,16:89,23:100,4:J,5:tt,6:te,8:ti,11:ta,13:tn,17:ts,18:tr,19:tl,20:to}),{46:[1,101]},t(h,[2,29],{10:th}),t(tc,[2,27],{16:103,4:J,5:tt,6:te,8:ti,11:ta,13:tn,17:ts,18:tr,19:tl,20:to}),t(td,[2,25]),t(td,[2,13]),t(td,[2,14]),t(td,[2,15]),t(td,[2,16]),t(td,[2,17]),t(td,[2,18]),t(td,[2,19]),t(td,[2,20]),t(td,[2,21]),t(td,[2,22]),t(h,[2,49],{10:th}),t(h,[2,48],{22:88,16:89,23:104,4:J,5:tt,6:te,8:ti,11:ta,13:tn,17:ts,18:tr,19:tl,20:to}),{4:J,5:tt,6:te,8:ti,11:ta,13:tn,16:89,17:ts,18:tr,19:tl,20:to,22:105},t(td,[2,26]),t(h,[2,50],{10:th}),t(tc,[2,28],{16:103,4:J,5:tt,6:te,8:ti,11:ta,13:tn,17:ts,18:tr,19:tl,20:to})],defaultActions:{8:[2,30],9:[2,31]},parseError:(0,a.K2)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,a.K2)(function(t){var e=this,i=[0],n=[],s=[null],r=[],l=this.table,o="",h=0,c=0,d=0,u=r.slice.call(arguments,1),x=Object.create(this.lexer),g={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(g.yy[f]=this.yy[f]);x.setInput(t,g.yy),g.yy.lexer=x,g.yy.parser=this,void 0===x.yylloc&&(x.yylloc={});var y=x.yylloc;r.push(y);var p=x.options&&x.options.ranges;function m(){var t;return"number"!=typeof(t=n.pop()||x.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof g.yy.parseError?this.parseError=g.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,a.K2)(function(t){i.length=i.length-2*t,s.length=s.length-t,r.length=r.length-t},"popStack"),(0,a.K2)(m,"lex");for(var T,_,q,A,b,k,S,F,P,C={};;){if(q=i[i.length-1],this.defaultActions[q]?A=this.defaultActions[q]:(null==T&&(T=m()),A=l[q]&&l[q][T]),void 0===A||!A.length||!A[0]){var v="";for(k in P=[],l[q])this.terminals_[k]&&k>2&&P.push("'"+this.terminals_[k]+"'");v=x.showPosition?"Parse error on line "+(h+1)+":\n"+x.showPosition()+"\nExpecting "+P.join(", ")+", got '"+(this.terminals_[T]||T)+"'":"Parse error on line "+(h+1)+": Unexpected "+(1==T?"end of input":"'"+(this.terminals_[T]||T)+"'"),this.parseError(v,{text:x.match,token:this.terminals_[T]||T,line:x.yylineno,loc:y,expected:P})}if(A[0]instanceof Array&&A.length>1)throw Error("Parse Error: multiple actions possible at state: "+q+", token: "+T);switch(A[0]){case 1:i.push(T),s.push(x.yytext),r.push(x.yylloc),i.push(A[1]),T=null,_?(T=_,_=null):(c=x.yyleng,o=x.yytext,h=x.yylineno,y=x.yylloc,d>0&&d--);break;case 2:if(S=this.productions_[A[1]][1],C.$=s[s.length-S],C._$={first_line:r[r.length-(S||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(S||1)].first_column,last_column:r[r.length-1].last_column},p&&(C._$.range=[r[r.length-(S||1)].range[0],r[r.length-1].range[1]]),void 0!==(b=this.performAction.apply(C,[o,c,h,g.yy,A[1],s,r].concat(u))))return b;S&&(i=i.slice(0,-1*S*2),s=s.slice(0,-1*S),r=r.slice(0,-1*S)),i.push(this.productions_[A[1]][0]),s.push(C.$),r.push(C._$),F=l[i[i.length-2]][i[i.length-1]],i.push(F);break;case 3:return!0}}return!0},"parse")},tx={EOF:1,parseError:(0,a.K2)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,a.K2)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,a.K2)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,a.K2)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===a.length?this.yylloc.first_column:0)+a[a.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,a.K2)(function(){return this._more=!0,this},"more"),reject:(0,a.K2)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,a.K2)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,a.K2)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,a.K2)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,a.K2)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,a.K2)(function(t,e){var i,a,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(a=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in n)this[s]=n[s];return!1},"test_match"),next:(0,a.K2)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,a,n=this._currentRules(),s=0;s<n.length;s++)if((i=this._input.match(this.rules[n[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,a=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,n[s])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[a]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,a.K2)(function(){return this.next()||this.lex()},"lex"),begin:(0,a.K2)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,a.K2)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,a.K2)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,a.K2)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,a.K2)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,a.K2)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,a.K2)(function(t,e,i,a){switch(i){case 0:case 1:case 3:break;case 2:return 55;case 4:return this.begin("title"),35;case 5:return this.popState(),"title_value";case 6:return this.begin("acc_title"),37;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),39;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 23:case 25:case 31:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 48;case 14:return 50;case 15:return 49;case 16:return 51;case 17:return 52;case 18:return 53;case 19:return 54;case 20:return 25;case 21:this.begin("md_string");break;case 22:return"MD_STR";case 24:this.begin("string");break;case 26:return"STR";case 27:this.begin("class_name");break;case 28:return this.popState(),47;case 29:return this.begin("point_start"),44;case 30:return this.begin("point_x"),45;case 32:this.popState(),this.begin("point_y");break;case 33:return this.popState(),46;case 34:return 28;case 35:return 4;case 36:return 11;case 37:return 64;case 38:return 10;case 39:case 40:return 65;case 41:return 14;case 42:return 13;case 43:return 67;case 44:return 66;case 45:return 12;case 46:return 8;case 47:return 5;case 48:return 18;case 49:return 56;case 50:return 63;case 51:return 57}},"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:classDef\b)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?::::)/i,/^(?:^\w+)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{class_name:{rules:[28],inclusive:!1},point_y:{rules:[33],inclusive:!1},point_x:{rules:[32],inclusive:!1},point_start:{rules:[30,31],inclusive:!1},acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},title:{rules:[5],inclusive:!1},md_string:{rules:[22,23],inclusive:!1},string:{rules:[25,26],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,21,24,27,29,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],inclusive:!0}}};function tg(){this.yy={}}return tu.lexer=tx,(0,a.K2)(tg,"Parser"),tg.prototype=tu,tu.Parser=tg,new tg}();s.parser=s;var r=(0,a.P$)(),l=class{constructor(){this.classes=new Map,this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}static{(0,a.K2)(this,"QuadrantBuilder")}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:a.UI.quadrantChart?.chartWidth||500,chartWidth:a.UI.quadrantChart?.chartHeight||500,titlePadding:a.UI.quadrantChart?.titlePadding||10,titleFontSize:a.UI.quadrantChart?.titleFontSize||20,quadrantPadding:a.UI.quadrantChart?.quadrantPadding||5,xAxisLabelPadding:a.UI.quadrantChart?.xAxisLabelPadding||5,yAxisLabelPadding:a.UI.quadrantChart?.yAxisLabelPadding||5,xAxisLabelFontSize:a.UI.quadrantChart?.xAxisLabelFontSize||16,yAxisLabelFontSize:a.UI.quadrantChart?.yAxisLabelFontSize||16,quadrantLabelFontSize:a.UI.quadrantChart?.quadrantLabelFontSize||16,quadrantTextTopPadding:a.UI.quadrantChart?.quadrantTextTopPadding||5,pointTextPadding:a.UI.quadrantChart?.pointTextPadding||5,pointLabelFontSize:a.UI.quadrantChart?.pointLabelFontSize||12,pointRadius:a.UI.quadrantChart?.pointRadius||5,xAxisPosition:a.UI.quadrantChart?.xAxisPosition||"top",yAxisPosition:a.UI.quadrantChart?.yAxisPosition||"left",quadrantInternalBorderStrokeWidth:a.UI.quadrantChart?.quadrantInternalBorderStrokeWidth||1,quadrantExternalBorderStrokeWidth:a.UI.quadrantChart?.quadrantExternalBorderStrokeWidth||2}}getDefaultThemeConfig(){return{quadrant1Fill:r.quadrant1Fill,quadrant2Fill:r.quadrant2Fill,quadrant3Fill:r.quadrant3Fill,quadrant4Fill:r.quadrant4Fill,quadrant1TextFill:r.quadrant1TextFill,quadrant2TextFill:r.quadrant2TextFill,quadrant3TextFill:r.quadrant3TextFill,quadrant4TextFill:r.quadrant4TextFill,quadrantPointFill:r.quadrantPointFill,quadrantPointTextFill:r.quadrantPointTextFill,quadrantXAxisTextFill:r.quadrantXAxisTextFill,quadrantYAxisTextFill:r.quadrantYAxisTextFill,quadrantTitleFill:r.quadrantTitleFill,quadrantInternalBorderStrokeFill:r.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:r.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),this.classes=new Map,a.Rm.info("clear called")}setData(t){this.data={...this.data,...t}}addPoints(t){this.data.points=[...t,...this.data.points]}addClass(t,e){this.classes.set(t,e)}setConfig(t){a.Rm.trace("setConfig called with: ",t),this.config={...this.config,...t}}setThemeConfig(t){a.Rm.trace("setThemeConfig called with: ",t),this.themeConfig={...this.themeConfig,...t}}calculateSpace(t,e,i,a){let n=2*this.config.xAxisLabelPadding+this.config.xAxisLabelFontSize,s={top:"top"===t&&e?n:0,bottom:"bottom"===t&&e?n:0},r=2*this.config.yAxisLabelPadding+this.config.yAxisLabelFontSize,l={left:"left"===this.config.yAxisPosition&&i?r:0,right:"right"===this.config.yAxisPosition&&i?r:0},o=this.config.titleFontSize+2*this.config.titlePadding,h={top:a?o:0},c=this.config.quadrantPadding+l.left,d=this.config.quadrantPadding+s.top+h.top,u=this.config.chartWidth-2*this.config.quadrantPadding-l.left-l.right,x=this.config.chartHeight-2*this.config.quadrantPadding-s.top-s.bottom-h.top;return{xAxisSpace:s,yAxisSpace:l,titleSpace:h,quadrantSpace:{quadrantLeft:c,quadrantTop:d,quadrantWidth:u,quadrantHalfWidth:u/2,quadrantHeight:x,quadrantHalfHeight:x/2}}}getAxisLabels(t,e,i,a){let{quadrantSpace:n,titleSpace:s}=a,{quadrantHalfHeight:r,quadrantHeight:l,quadrantLeft:o,quadrantHalfWidth:h,quadrantTop:c,quadrantWidth:d}=n,u=!!this.data.xAxisRightText,x=!!this.data.yAxisTopText,g=[];return this.data.xAxisLeftText&&e&&g.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:o+(u?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+s.top:this.config.xAxisLabelPadding+c+l+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&e&&g.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:o+h+(u?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+s.top:this.config.xAxisLabelPadding+c+l+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&i&&g.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+o+d+this.config.quadrantPadding,y:c+l-(x?r/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:x?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&i&&g.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+o+d+this.config.quadrantPadding,y:c+r-(x?r/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:x?"center":"left",horizontalPos:"top",rotation:-90}),g}getQuadrants(t){let{quadrantSpace:e}=t,{quadrantHalfHeight:i,quadrantLeft:a,quadrantHalfWidth:n,quadrantTop:s}=e,r=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a+n,y:s,width:n,height:i,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a,y:s,width:n,height:i,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a,y:s+i,width:n,height:i,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a+n,y:s+i,width:n,height:i,fill:this.themeConfig.quadrant4Fill}];for(let t of r)t.text.x=t.x+t.width/2,0===this.data.points.length?(t.text.y=t.y+t.height/2,t.text.horizontalPos="middle"):(t.text.y=t.y+this.config.quadrantTextTopPadding,t.text.horizontalPos="top");return r}getQuadrantPoints(t){let{quadrantSpace:e}=t,{quadrantHeight:i,quadrantLeft:a,quadrantTop:s,quadrantWidth:r}=e,l=(0,n.m4Y)().domain([0,1]).range([a,r+a]),o=(0,n.m4Y)().domain([0,1]).range([i+s,s]);return this.data.points.map(t=>{let e=this.classes.get(t.className);return e&&(t={...e,...t}),{x:l(t.x),y:o(t.y),fill:t.color??this.themeConfig.quadrantPointFill,radius:t.radius??this.config.pointRadius,text:{text:t.text,fill:this.themeConfig.quadrantPointTextFill,x:l(t.x),y:o(t.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0},strokeColor:t.strokeColor??this.themeConfig.quadrantPointFill,strokeWidth:t.strokeWidth??"0px"}})}getBorders(t){let e=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace:i}=t,{quadrantHalfHeight:a,quadrantHeight:n,quadrantLeft:s,quadrantHalfWidth:r,quadrantTop:l,quadrantWidth:o}=i;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s-e,y1:l,x2:s+o+e,y2:l},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s+o,y1:l+e,x2:s+o,y2:l+n-e},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s-e,y1:l+n,x2:s+o+e,y2:l+n},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s,y1:l+e,x2:s,y2:l+n-e},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:s+r,y1:l+e,x2:s+r,y2:l+n-e},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:s+e,y1:l+a,x2:s+o-e,y2:l+a}]}getTitle(t){if(t)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){let t=this.config.showXAxis&&!!(this.data.xAxisLeftText||this.data.xAxisRightText),e=this.config.showYAxis&&!!(this.data.yAxisTopText||this.data.yAxisBottomText),i=this.config.showTitle&&!!this.data.titleText,a=this.data.points.length>0?"bottom":this.config.xAxisPosition,n=this.calculateSpace(a,t,e,i);return{points:this.getQuadrantPoints(n),quadrants:this.getQuadrants(n),axisLabels:this.getAxisLabels(a,t,e,n),borderLines:this.getBorders(n),title:this.getTitle(i)}}},o=class extends Error{static{(0,a.K2)(this,"InvalidStyleError")}constructor(t,e,i){super(`value for ${t} ${e} is invalid, please use a valid ${i}`),this.name="InvalidStyleError"}};function h(t){return!/^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/.test(t)}function c(t){return!/^\d+$/.test(t)}function d(t){return!/^\d+px$/.test(t)}(0,a.K2)(h,"validateHexCode"),(0,a.K2)(c,"validateNumber"),(0,a.K2)(d,"validateSizeInPixels");var u=(0,a.D7)();function x(t){return(0,a.jZ)(t.trim(),u)}(0,a.K2)(x,"textSanitizer");var g=new l;function f(t){g.setData({quadrant1Text:x(t.text)})}function y(t){g.setData({quadrant2Text:x(t.text)})}function p(t){g.setData({quadrant3Text:x(t.text)})}function m(t){g.setData({quadrant4Text:x(t.text)})}function T(t){g.setData({xAxisLeftText:x(t.text)})}function _(t){g.setData({xAxisRightText:x(t.text)})}function q(t){g.setData({yAxisTopText:x(t.text)})}function A(t){g.setData({yAxisBottomText:x(t.text)})}function b(t){let e={};for(let i of t){let[t,a]=i.trim().split(/\s*:\s*/);if("radius"===t){if(c(a))throw new o(t,a,"number");e.radius=parseInt(a)}else if("color"===t){if(h(a))throw new o(t,a,"hex code");e.color=a}else if("stroke-color"===t){if(h(a))throw new o(t,a,"hex code");e.strokeColor=a}else if("stroke-width"===t){if(d(a))throw new o(t,a,"number of pixels (eg. 10px)");e.strokeWidth=a}else throw Error(`style named ${t} is not supported.`)}return e}function k(t,e,i,a,n){let s=b(n);g.addPoints([{x:i,y:a,text:x(t.text),className:e,...s}])}function S(t,e){g.addClass(t,b(e))}function F(t){g.setConfig({chartWidth:t})}function P(t){g.setConfig({chartHeight:t})}function C(){let{themeVariables:t,quadrantChart:e}=(0,a.D7)();return e&&g.setConfig(e),g.setThemeConfig({quadrant1Fill:t.quadrant1Fill,quadrant2Fill:t.quadrant2Fill,quadrant3Fill:t.quadrant3Fill,quadrant4Fill:t.quadrant4Fill,quadrant1TextFill:t.quadrant1TextFill,quadrant2TextFill:t.quadrant2TextFill,quadrant3TextFill:t.quadrant3TextFill,quadrant4TextFill:t.quadrant4TextFill,quadrantPointFill:t.quadrantPointFill,quadrantPointTextFill:t.quadrantPointTextFill,quadrantXAxisTextFill:t.quadrantXAxisTextFill,quadrantYAxisTextFill:t.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:t.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:t.quadrantInternalBorderStrokeFill,quadrantTitleFill:t.quadrantTitleFill}),g.setData({titleText:(0,a.ab)()}),g.build()}(0,a.K2)(f,"setQuadrant1Text"),(0,a.K2)(y,"setQuadrant2Text"),(0,a.K2)(p,"setQuadrant3Text"),(0,a.K2)(m,"setQuadrant4Text"),(0,a.K2)(T,"setXAxisLeftText"),(0,a.K2)(_,"setXAxisRightText"),(0,a.K2)(q,"setYAxisTopText"),(0,a.K2)(A,"setYAxisBottomText"),(0,a.K2)(b,"parseStyles"),(0,a.K2)(k,"addPoint"),(0,a.K2)(S,"addClass"),(0,a.K2)(F,"setWidth"),(0,a.K2)(P,"setHeight"),(0,a.K2)(C,"getQuadrantData");var v={parser:s,db:{setWidth:F,setHeight:P,setQuadrant1Text:f,setQuadrant2Text:y,setQuadrant3Text:p,setQuadrant4Text:m,setXAxisLeftText:T,setXAxisRightText:_,setYAxisTopText:q,setYAxisBottomText:A,parseStyles:b,addPoint:k,addClass:S,getQuadrantData:C,clear:(0,a.K2)(function(){g.clear(),(0,a.IU)()},"clear"),setAccTitle:a.SV,getAccTitle:a.iN,setDiagramTitle:a.ke,getDiagramTitle:a.ab,getAccDescription:a.m7,setAccDescription:a.EI},renderer:{draw:(0,a.K2)((t,e,i,s)=>{let r;function l(t){return"top"===t?"hanging":"middle"}function o(t){return"left"===t?"start":"middle"}function h(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}(0,a.K2)(l,"getDominantBaseLine"),(0,a.K2)(o,"getTextAnchor"),(0,a.K2)(h,"getTransformation");let c=(0,a.D7)();a.Rm.debug("Rendering quadrant chart\n"+t);let d=c.securityLevel;"sandbox"===d&&(r=(0,n.Ltv)("#i"+e));let u=("sandbox"===d?(0,n.Ltv)(r.nodes()[0].contentDocument.body):(0,n.Ltv)("body")).select(`[id="${e}"]`),x=u.append("g").attr("class","main"),g=c.quadrantChart?.chartWidth??500,f=c.quadrantChart?.chartHeight??500;(0,a.a$)(u,f,g,c.quadrantChart?.useMaxWidth??!0),u.attr("viewBox","0 0 "+g+" "+f),s.db.setHeight(f),s.db.setWidth(g);let y=s.db.getQuadrantData(),p=x.append("g").attr("class","quadrants"),m=x.append("g").attr("class","border"),T=x.append("g").attr("class","data-points"),_=x.append("g").attr("class","labels"),q=x.append("g").attr("class","title");y.title&&q.append("text").attr("x",0).attr("y",0).attr("fill",y.title.fill).attr("font-size",y.title.fontSize).attr("dominant-baseline",l(y.title.horizontalPos)).attr("text-anchor",o(y.title.verticalPos)).attr("transform",h(y.title)).text(y.title.text),y.borderLines&&m.selectAll("line").data(y.borderLines).enter().append("line").attr("x1",t=>t.x1).attr("y1",t=>t.y1).attr("x2",t=>t.x2).attr("y2",t=>t.y2).style("stroke",t=>t.strokeFill).style("stroke-width",t=>t.strokeWidth);let A=p.selectAll("g.quadrant").data(y.quadrants).enter().append("g").attr("class","quadrant");A.append("rect").attr("x",t=>t.x).attr("y",t=>t.y).attr("width",t=>t.width).attr("height",t=>t.height).attr("fill",t=>t.fill),A.append("text").attr("x",0).attr("y",0).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>l(t.text.horizontalPos)).attr("text-anchor",t=>o(t.text.verticalPos)).attr("transform",t=>h(t.text)).text(t=>t.text.text),_.selectAll("g.label").data(y.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text(t=>t.text).attr("fill",t=>t.fill).attr("font-size",t=>t.fontSize).attr("dominant-baseline",t=>l(t.horizontalPos)).attr("text-anchor",t=>o(t.verticalPos)).attr("transform",t=>h(t));let b=T.selectAll("g.data-point").data(y.points).enter().append("g").attr("class","data-point");b.append("circle").attr("cx",t=>t.x).attr("cy",t=>t.y).attr("r",t=>t.radius).attr("fill",t=>t.fill).attr("stroke",t=>t.strokeColor).attr("stroke-width",t=>t.strokeWidth),b.append("text").attr("x",0).attr("y",0).text(t=>t.text.text).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>l(t.text.horizontalPos)).attr("text-anchor",t=>o(t.text.verticalPos)).attr("transform",t=>h(t.text))},"draw")},styles:(0,a.K2)(()=>"","styles")}}}]);