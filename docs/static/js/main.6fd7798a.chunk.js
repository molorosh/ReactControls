(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),s=(a(15),a(2)),l=a(3),c=a(5),u=a(4),h=a(6),d=a(1),m=(a(16),a(17),function(e){function t(e){var a;Object(s.a)(this,t);var n=void 0,r=void 0,o=void 0,i=void 0,l=void 0,h=(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).dateFromFormattedString(e.value);return null!==h&&(n=h.getHours(),r=h.getFullYear(),l=1+h.getMonth(),o=h.getMinutes(),i=h.getDate()),a.state={isEdit:e.isEdit,isEditable:e.isEditable,value:e.value,currentMinutes:o,currentHours:n,currentDay:i,currentMonth:l,currentYear:r},a.doEdit=a.doEdit.bind(Object(d.a)(Object(d.a)(a))),a.doCancel=a.doCancel.bind(Object(d.a)(Object(d.a)(a))),a.doUpdate=a.doUpdate.bind(Object(d.a)(Object(d.a)(a))),a.doChangeHours=a.doChangeHours.bind(Object(d.a)(Object(d.a)(a))),a.doChangeMinutes=a.doChangeMinutes.bind(Object(d.a)(Object(d.a)(a))),a.doChangeDay=a.doChangeDay.bind(Object(d.a)(Object(d.a)(a))),a.doChangeMonth=a.doChangeMonth.bind(Object(d.a)(Object(d.a)(a))),a.doChangeYear=a.doChangeYear.bind(Object(d.a)(Object(d.a)(a))),a.resetCurrentValues=a.resetCurrentValues.bind(Object(d.a)(Object(d.a)(a))),a.checkDayForValidity=a.checkDayForValidity.bind(Object(d.a)(Object(d.a)(a))),a.stringForCurrentDate=a.stringForCurrentDate.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"resetCurrentValues",value:function(){var e=void 0,t=void 0,a=void 0,n=void 0,r=void 0,o=this.dateFromFormattedString(this.state.value);null!==o&&(e=o.getHours(),t=o.getFullYear(),r=1+o.getMonth(),a=o.getMinutes(),n=o.getDate()),this.setState({currentMinutes:a,currentHours:e,currentDay:n,currentMonth:r,currentYear:t})}},{key:"stringForCurrentDate",value:function(){var e=this.state.currentYear,t=this.state.currentMonth,a=this.state.currentDay,n=this.state.currentHours,r=this.state.currentMinutes;return e+"-"+this.formatTo00(t)+"-"+this.formatTo00(a)+"T"+this.formatTo00(n)+":"+this.formatTo00(r)}},{key:"stringFromDateObject",value:function(e){var t=e.getFullYear(),a=1+e.getMonth(),n=e.getDate(),r=e.getHours(),o=e.getMinutes();return t+"-"+(a<10?"0"+a:a)+"-"+(n<10?"0"+n:n)+"T"+(r<10?"0"+r:r)+":"+(o<10?"0"+o:o)}},{key:"dateFromFormattedString",value:function(e){var t=Date.parse(e),a=null;return t!==Number.NaN&&(a=new Date(t)),a}},{key:"formatTo00",value:function(e){return e<10?"0"+e:e}},{key:"doEdit",value:function(){this.setState({isEdit:!0})}},{key:"doCancel",value:function(){this.resetCurrentValues(),this.setState({isEdit:!1})}},{key:"doUpdate",value:function(){var e=this.stringForCurrentDate();this.props.onChange(e),this.setState({isEdit:!1})}},{key:"doChangeHours",value:function(e){this.setState({currentHours:e.target.value})}},{key:"doChangeMinutes",value:function(e){this.setState({currentMinutes:e.target.value})}},{key:"doChangeYear",value:function(e){var t=this;this.setState({currentYear:e.target.value},function(){return t.checkDayForValidity()})}},{key:"doChangeMonth",value:function(e){var t=this;this.setState({currentMonth:e.target.value},function(){return t.checkDayForValidity()})}},{key:"doChangeDay",value:function(e){this.setState({currentDay:e.target.value})}},{key:"checkDayForValidity",value:function(){var e=31;void 0!==this.state.currentDay&&(e=this.daysInMonth(this.state.currentYear,this.state.currentMonth-1),parseInt(this.state.currentDay)>e&&this.setState({currentDay:e}))}},{key:"daysInMonth",value:function(e,t){var a=31,n=parseInt(t);if(8===n||4===n||6===n||10===n)a=30;else if(1===n){var r=parseInt(e);a=(r%100===0?r%400===0:r%4===0)?29:28}return a}},{key:"render",value:function(){var e=this,t=this.dateFromFormattedString(this.state.value),a=null;null!==t&&(a=this.stringFromDateObject(t));var n=r.a.createElement("span",{className:"editControl"}),o=r.a.createElement("span",{className:"readControl"});if(this.state.isEdit&&this.state.isEditable){var i=Array.from(Array(24).keys()).map(function(t){return r.a.createElement("option",{key:t,value:t},e.formatTo00(t))}),s=r.a.createElement("select",{onChange:this.doChangeHours,value:this.state.currentHours},i),l=Array.from(Array(60).keys()).map(function(t){return r.a.createElement("option",{key:t,value:t},e.formatTo00(t))}),c=r.a.createElement("select",{onChange:this.doChangeMinutes,value:this.state.currentMinutes},l),u=31;void 0!==this.state.currentDay&&(u=this.daysInMonth(this.state.currentYear,this.state.currentMonth-1));var h=Array.from(Array(u).keys()).map(function(t){return r.a.createElement("option",{key:t,value:t+1},e.formatTo00(t+1))}),d=r.a.createElement("select",{onChange:this.doChangeDay,value:this.state.currentDay},h),m=Array.from(Array(12).keys()).map(function(t){return r.a.createElement("option",{key:t,value:t+1},e.formatTo00(t+1))}),v=r.a.createElement("select",{onChange:this.doChangeMonth,value:this.state.currentMonth},m),g=[2018,2019,2020];void 0!==this.state.currentYear&&this.state.currentYear<2018&&g.unshift(this.state.currentYear);var b=g.map(function(t){return r.a.createElement("option",{key:t,value:t},e.formatTo00(t))}),y=r.a.createElement("select",{onChange:this.doChangeYear,value:this.state.currentYear},b);n=r.a.createElement("span",null,r.a.createElement("p",null,r.a.createElement("span",{className:"molorosh-control-title"},this.props.title),":",y,"-",v,"-",d,r.a.createElement("span",{className:"molorosh-datetime-t-spacer"},"T"),s,":",c,r.a.createElement("button",{className:"molorosh-button molorosh-button-update",onClick:this.doUpdate},"Update"),r.a.createElement("button",{className:"molorosh-button molorosh-button-cancel",onClick:this.doCancel},"Cancel")))}else o=this.state.isEditable?r.a.createElement("span",null,r.a.createElement("p",null,r.a.createElement("span",{className:"molorosh-control-title"},this.props.title),": ",a,r.a.createElement("button",{className:"molorosh-button molorosh-button-edit",onClick:this.doEdit},"Edit"))):r.a.createElement("span",null,r.a.createElement("p",null,r.a.createElement("span",{className:"molorosh-control-title"},this.props.title),":  ",a));return r.a.createElement("div",null,n,o)}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={demoDateString:"2008-08-28T23:30"},a.handleDatePickerChange=a.handleDatePickerChange.bind(Object(d.a)(Object(d.a)(a))),a.handleFormSubmit=a.handleFormSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleDatePickerChange",value:function(e){console.log("handleDatePickerChange(...)"),console.log("dateString:"),console.log(e),this.setState({demoDateString:e},function(){console.log("finished update")})}},{key:"handleFormSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"molorosh React.js controls")),r.a.createElement("article",null,r.a.createElement("p",null,r.a.createElement("em",null,"Pop-up free, in-place editing.")),r.a.createElement("section",null,r.a.createElement("h2",null,"DateTime Picker"),r.a.createElement("h3",null,"Demo One: Date and Time"),r.a.createElement("p",null,"React.js does not like having Javascript objects like ",r.a.createElement("code",null,"new Date()")," as child elements, so we usually use a canonical date time format string instead."),r.a.createElement(m,{title:"demo date time",isEdit:!1,isEditable:!0,value:this.state.demoDateString,onChange:this.handleDatePickerChange,key:this.state.demoDateString}),r.a.createElement("p",null,"The value of ",r.a.createElement("code",null,"state.demoDateString")," is ",r.a.createElement("code",null,this.state.demoDateString)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.6fd7798a.chunk.js.map