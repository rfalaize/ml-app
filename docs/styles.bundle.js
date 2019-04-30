webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--8-3!./src/styles.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/*!\n * (The MIT License)\n * \n * Copyright (c) 2012-2014 Marcin Warpechowski\n * Copyright (c) 2015 Handsoncode sp. z o.o. <hello@handsoncode.net>\n * \n * Permission is hereby granted, free of charge, to any person obtaining\n * a copy of this software and associated documentation files (the\n * 'Software'), to deal in the Software without restriction, including\n * without limitation the rights to use, copy, modify, merge, publish,\n * distribute, sublicense, and/or sell copies of the Software, and to\n * permit persons to whom the Software is furnished to do so, subject to\n * the following conditions:\n * \n * The above copyright notice and this permission notice shall be\n * included in all copies or substantial portions of the Software.\n * \n * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\n * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\n * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\n * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\n * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n * \n * Version: 2.0.0\n * Release date: 11/04/2018 (built at 10/04/2018 11:38:33)\n */\n/**\n * Fix for bootstrap styles\n */\n.handsontable .table th, .handsontable .table td {\n  border-top: none;\n}\n.handsontable tr {\n  background: #fff;\n}\n.handsontable td {\n  background-color: inherit;\n}\n.handsontable .table caption + thead tr:first-child th,\n.handsontable .table caption + thead tr:first-child td,\n.handsontable .table colgroup + thead tr:first-child th,\n.handsontable .table colgroup + thead tr:first-child td,\n.handsontable .table thead:first-child tr:first-child th,\n.handsontable .table thead:first-child tr:first-child td {\n  border-top: 1px solid #CCCCCC;\n}\n/* table-bordered */\n.handsontable .table-bordered {\n  border: 0;\n  border-collapse: separate;\n}\n.handsontable .table-bordered th,\n.handsontable .table-bordered td {\n  border-left: none;\n}\n.handsontable .table-bordered th:first-child,\n.handsontable .table-bordered td:first-child {\n  border-left: 1px solid #CCCCCC;\n}\n.handsontable .table > tbody > tr > td,\n.handsontable .table > tbody > tr > th,\n.handsontable .table > tfoot > tr > td,\n.handsontable .table > tfoot > tr > th,\n.handsontable .table > thead > tr > td,\n.handsontable .table > thead > tr > th {\n  line-height: 21px;\n  padding: 0 4px;\n}\n.col-lg-1.handsontable, .col-lg-10.handsontable, .col-lg-11.handsontable, .col-lg-12.handsontable,\n.col-lg-2.handsontable, .col-lg-3.handsontable, .col-lg-4.handsontable, .col-lg-5.handsontable, .col-lg-6.handsontable, .col-lg-7.handsontable, .col-lg-8.handsontable, .col-lg-9.handsontable,\n.col-md-1.handsontable, .col-md-10.handsontable, .col-md-11.handsontable, .col-md-12.handsontable,\n.col-md-2.handsontable, .col-md-3.handsontable, .col-md-4.handsontable, .col-md-5.handsontable, .col-md-6.handsontable, .col-md-7.handsontable, .col-md-8.handsontable, .col-md-9.handsontable\n.col-sm-1.handsontable, .col-sm-10.handsontable, .col-sm-11.handsontable, .col-sm-12.handsontable,\n.col-sm-2.handsontable, .col-sm-3.handsontable, .col-sm-4.handsontable, .col-sm-5.handsontable, .col-sm-6.handsontable, .col-sm-7.handsontable, .col-sm-8.handsontable, .col-sm-9.handsontable\n.col-xs-1.handsontable, .col-xs-10.handsontable, .col-xs-11.handsontable, .col-xs-12.handsontable,\n.col-xs-2.handsontable, .col-xs-3.handsontable, .col-xs-4.handsontable, .col-xs-5.handsontable, .col-xs-6.handsontable, .col-xs-7.handsontable, .col-xs-8.handsontable, .col-xs-9.handsontable {\n  padding-left: 0;\n  padding-right: 0;\n}\n.handsontable .table-striped > tbody > tr:nth-of-type(even) {\n  background-color: #FFF;\n}\n.handsontable {\n  position: relative;\n}\n.handsontable .hide{\n  display: none;\n}\n.handsontable .relative {\n  position: relative;\n}\n.handsontable.htAutoSize {\n  visibility: hidden;\n  left: -99000px;\n  position: absolute;\n  top: -99000px;\n}\n.handsontable .wtHider {\n  width: 0;\n}\n.handsontable .wtSpreader {\n  position: relative;\n  width: 0; /*must be 0, otherwise blank space appears in scroll demo after scrolling max to the right */\n  height: auto;\n}\n.handsontable table,\n.handsontable tbody,\n.handsontable thead,\n.handsontable td,\n.handsontable th,\n.handsontable input,\n.handsontable textarea,\n.handsontable div {\n  box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n}\n.handsontable input,\n.handsontable textarea {\n  min-height: initial;\n}\n.handsontable table.htCore {\n  border-collapse: separate;\n  /* it must be separate, otherwise there are offset miscalculations in WebKit: http://stackoverflow.com/questions/2655987/border-collapse-differences-in-ff-and-webkit */\n  /* this actually only changes appearance of user selection - does not make text unselectable */\n  /* -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -ms-user-select: none;\n  user-select: none; */ /* no browser supports unprefixed version */\n  border-spacing: 0;\n  margin: 0;\n  border-width: 0;\n  table-layout: fixed;\n  width: 0;\n  outline-width: 0;\n  /* reset bootstrap table style. for more info see: https://github.com/handsontable/handsontable/issues/224 */\n  max-width: none;\n  max-height: none;\n}\n.handsontable col {\n  width: 50px;\n}\n.handsontable col.rowHeader {\n  width: 50px;\n}\n.handsontable th,\n.handsontable td {\n  border-top-width: 0;\n  border-left-width: 0;\n  border-right: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  height: 22px;\n  empty-cells: show;\n  line-height: 21px;\n  padding: 0 4px 0 4px;\n  /* top, bottom padding different than 0 is handled poorly by FF with HTML5 doctype */\n  background-color: #FFF;\n  vertical-align: top;\n  overflow: hidden;\n  outline-width: 0;\n  white-space: pre-line;\n  /* preserve new line character in cell */\n  background-clip: padding-box;\n}\n.handsontable td.htInvalid {\n  background-color: #ff4c42 !important; /*gives priority over td.area selection background*/\n}\n.handsontable td.htNoWrap {\n  white-space: nowrap;\n}\n.handsontable th:last-child {\n  /*Foundation framework fix*/\n  border-right: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n}\n.handsontable tr:first-child th.htNoFrame,\n.handsontable th:first-child.htNoFrame,\n.handsontable th.htNoFrame {\n  border-left-width: 0;\n  background-color: white;\n  border-color: #FFF;\n}\n.handsontable th:first-child,\n.handsontable th:nth-child(2),\n.handsontable td:first-of-type,\n.handsontable .htNoFrame + th,\n.handsontable .htNoFrame + td {\n  border-left: 1px solid #CCC;\n}\n.handsontable.htRowHeaders thead tr th:nth-child(2) {\n  border-left: 1px solid #CCC;\n}\n.handsontable tr:first-child th,\n.handsontable tr:first-child td {\n  border-top: 1px solid #CCC;\n}\n.ht_master:not(.innerBorderLeft):not(.emptyColumns) ~ .handsontable tbody tr th,\n.ht_master:not(.innerBorderLeft):not(.emptyColumns) ~ .handsontable:not(.ht_clone_top) thead tr th:first-child {\n  border-right-width: 0;\n}\n.ht_master:not(.innerBorderTop) thead tr:last-child th,\n.ht_master:not(.innerBorderTop) ~ .handsontable thead tr:last-child th,\n.ht_master:not(.innerBorderTop) thead tr.lastChild th,\n.ht_master:not(.innerBorderTop) ~ .handsontable thead tr.lastChild th {\n  border-bottom-width: 0;\n}\n.handsontable th {\n  background-color: #f3f3f3;\n  color: #222;\n  text-align: center;\n  font-weight: normal;\n  white-space: nowrap;\n}\n.handsontable thead th {\n  padding: 0;\n}\n.handsontable th.active {\n  background-color: #CCC;\n}\n.handsontable thead th .relative {\n  padding: 2px 4px;\n}\n#hot-display-license-info {\n  font-size: 9px;\n  color: #323232 ;\n  padding: 5px 0 3px 0;\n  font-family: Helvetica, Arial, sans-serif;\n  text-align: left;\n}\n/* plugins */\n/* row + column resizer*/\n.handsontable .manualColumnResizer {\n  position: fixed;\n  top: 0;\n  cursor: col-resize;\n  z-index: 110;\n  width: 5px;\n  height: 25px;\n}\n.handsontable .manualRowResizer {\n  position: fixed;\n  left: 0;\n  cursor: row-resize;\n  z-index: 110;\n  height: 5px;\n  width: 50px;\n}\n.handsontable .manualColumnResizer:hover,\n.handsontable .manualColumnResizer.active,\n.handsontable .manualRowResizer:hover,\n.handsontable .manualRowResizer.active {\n  background-color: #AAB;\n}\n.handsontable .manualColumnResizerGuide {\n  position: fixed;\n  right: 0;\n  top: 0;\n  background-color: #AAB;\n  display: none;\n  width: 0;\n  border-right: 1px dashed #777;\n  margin-left: 5px;\n}\n.handsontable .manualRowResizerGuide {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  background-color: #AAB;\n  display: none;\n  height: 0;\n  border-bottom: 1px dashed #777;\n  margin-top: 5px;\n}\n.handsontable .manualColumnResizerGuide.active,\n.handsontable .manualRowResizerGuide.active {\n  display: block;\n  z-index: 199;\n}\n.handsontable .columnSorting {\n  position: relative;\n}\n.handsontable .columnSorting:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.handsontable .columnSorting.ascending::after {\n  content: '\\25B2';\n  color: #5f5f5f;\n  position: absolute;\n  right: -15px;\n}\n.handsontable .columnSorting.descending::after {\n  content: '\\25BC';\n  color: #5f5f5f;\n  position: absolute;\n  right: -15px;\n}\n/* Selection */\n.handsontable .wtBorder {\n  position: absolute;\n  font-size: 0;\n}\n.handsontable .wtBorder.hidden{\n  display:none !important;\n}\n.handsontable td.area,\n.handsontable td.area-1,\n.handsontable td.area-2,\n.handsontable td.area-3,\n.handsontable td.area-4,\n.handsontable td.area-5,\n.handsontable td.area-6,\n.handsontable td.area-7 {\n  position: relative;\n}\n.handsontable td.area:before,\n.handsontable td.area-1:before,\n.handsontable td.area-2:before,\n.handsontable td.area-3:before,\n.handsontable td.area-4:before,\n.handsontable td.area-5:before,\n.handsontable td.area-6:before,\n.handsontable td.area-7:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  bottom: -100%\\9; /* Fix for IE9 to spread the \":before\" pseudo element to 100% height of the parent element */\n  background: #005eff;\n}\n/* Fix for IE10 and IE11 to spread the \":before\" pseudo element to 100% height of the parent element */\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .handsontable td.area:before,\n  .handsontable td.area-1:before,\n  .handsontable td.area-2:before,\n  .handsontable td.area-3:before,\n  .handsontable td.area-4:before,\n  .handsontable td.area-5:before,\n  .handsontable td.area-6:before,\n  .handsontable td.area-7:before {\n    bottom: -100%;\n  }\n}\n.handsontable td.area:before {\n  opacity: 0.1;\n}\n.handsontable td.area-1:before {\n  opacity: 0.2;\n}\n.handsontable td.area-2:before {\n  opacity: 0.27;\n}\n.handsontable td.area-3:before {\n  opacity: 0.35;\n}\n.handsontable td.area-4:before {\n  opacity: 0.41;\n}\n.handsontable td.area-5:before {\n  opacity: 0.47;\n}\n.handsontable td.area-6:before {\n  opacity: 0.54;\n}\n.handsontable td.area-7:before {\n  opacity: 0.58;\n}\n.handsontable tbody th.ht__highlight,\n.handsontable thead th.ht__highlight {\n  background-color: #dcdcdc;\n}\n.handsontable tbody th.ht__active_highlight,\n.handsontable thead th.ht__active_highlight {\n  background-color: #8eb0e7;\n  color: #000;\n}\n/* fill handle */\n.handsontable .wtBorder.corner {\n  font-size: 0;\n  cursor: crosshair;\n}\n.handsontable .htBorder.htFillBorder {\n  background: red;\n  width: 1px;\n  height: 1px;\n}\n.handsontableInput {\n  border:none;\n  outline-width: 0;\n  margin: 0 ;\n  padding: 1px 5px 0 5px;\n  font-family: inherit;\n  line-height: 21px;\n  font-size: inherit;\n  -webkit-box-shadow: 0 0 0 2px #5292F7 inset;\n          box-shadow: 0 0 0 2px #5292F7 inset;\n  resize: none;\n  /*below are needed to overwrite stuff added by jQuery UI Bootstrap theme*/\n  display: block;\n  color: #000;\n  border-radius: 0;\n  background-color: #FFF;\n  /*overwrite styles potentionally made by a framework*/\n}\n.handsontableInputHolder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 104;\n}\n.htSelectEditor {\n  -webkit-appearance: menulist-button !important;\n  position: absolute;\n  width: auto;\n}\n/*\nTextRenderer readOnly cell\n*/\n.handsontable .htDimmed {\n  color: #777;\n}\n.handsontable .htSubmenu {\n  position: relative;\n}\n.handsontable .htSubmenu :after{\n  content: '\\25B6';\n  color: #777;\n  position: absolute;\n  right: 5px;\n}\n/*\nTextRenderer horizontal alignment\n*/\n.handsontable .htLeft{\n  text-align: left;\n}\n.handsontable .htCenter{\n  text-align: center;\n}\n.handsontable .htRight{\n  text-align: right;\n}\n.handsontable .htJustify{\n  text-align: justify;\n}\n/*\nTextRenderer vertical alignment\n*/\n.handsontable .htTop{\n  vertical-align: top;\n}\n.handsontable .htMiddle{\n  vertical-align: middle;\n}\n.handsontable .htBottom{\n  vertical-align: bottom;\n}\n/*\nTextRenderer placeholder value\n*/\n.handsontable .htPlaceholder {\n  color: #999;\n}\n/*\nAutocompleteRenderer down arrow\n*/\n.handsontable .htAutocompleteArrow {\n  float: right;\n  font-size: 10px;\n  color: #EEE;\n  cursor: default;\n  width: 16px;\n  text-align: center;\n}\n.handsontable td .htAutocompleteArrow:hover {\n  color: #777;\n}\n.handsontable td.area .htAutocompleteArrow {\n  color: #d3d3d3;\n}\n/*\nCheckboxRenderer\n*/\n.handsontable .htCheckboxRendererInput {\n  display: inline-block;\n  vertical-align: middle;\n}\n.handsontable .htCheckboxRendererInput.noValue {\n  opacity: 0.5;\n}\n.handsontable .htCheckboxRendererLabel {\n  cursor: pointer;\n  display: inline-block;\n  width: 100%;\n}\n/**\n * Handsontable in Handsontable\n */\n.handsontable .handsontable.ht_clone_top .wtHider {\n  padding: 0 0 5px 0;\n}\n/**\n* Autocomplete Editor\n*/\n.handsontable .autocompleteEditor.handsontable {\n  padding-right: 17px;\n}\n.handsontable .autocompleteEditor.handsontable.htMacScroll {\n  padding-right: 15px;\n}\n/**\n * Handsontable listbox theme\n */\n.handsontable.listbox {\n  margin: 0;\n}\n.handsontable.listbox .ht_master table {\n  border: 1px solid #ccc;\n  border-collapse: separate;\n  background: white;\n}\n.handsontable.listbox th,\n.handsontable.listbox tr:first-child th,\n.handsontable.listbox tr:last-child th,\n.handsontable.listbox tr:first-child td,\n.handsontable.listbox td {\n  border-color: transparent;\n}\n.handsontable.listbox th,\n.handsontable.listbox td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.handsontable.listbox td.htDimmed {\n  cursor: default;\n  color: inherit;\n  font-style: inherit;\n}\n.handsontable.listbox .wtBorder {\n  visibility: hidden;\n}\n.handsontable.listbox tr td.current,\n.handsontable.listbox tr:hover td {\n  background: #eee;\n}\n.ht_clone_top {\n  z-index: 101;\n}\n.ht_clone_left {\n  z-index: 102;\n}\n.ht_clone_top_left_corner,\n.ht_clone_bottom_left_corner {\n  z-index: 103;\n}\n.ht_clone_debug {\n  z-index: 103;\n}\n.handsontable td.htSearchResult {\n  background: #fcedd9;\n  color: #583707;\n}\n/*\nCell borders\n*/\n.htBordered{\n  /*box-sizing: border-box !important;*/\n  border-width: 1px;\n}\n.htBordered.htTopBorderSolid {\n  border-top-style: solid;\n  border-top-color: #000;\n}\n.htBordered.htRightBorderSolid {\n  border-right-style: solid;\n  border-right-color: #000;\n}\n.htBordered.htBottomBorderSolid {\n  border-bottom-style: solid;\n  border-bottom-color: #000;\n}\n.htBordered.htLeftBorderSolid {\n  border-left-style: solid;\n  border-left-color: #000;\n}\n.handsontable tbody tr th:nth-last-child(2) {\n  border-right: 1px solid #CCC;\n}\n.handsontable thead tr:nth-last-child(2) th.htGroupIndicatorContainer {\n  border-bottom: 1px solid #CCC;\n  padding-bottom: 5px;\n}\n.ht_clone_top_left_corner thead tr th:nth-last-child(2) {\n  border-right: 1px solid #CCC;\n}\n.htCollapseButton {\n  width: 10px;\n  height: 10px;\n  line-height: 10px;\n  text-align: center;\n  border-radius: 5px;\n  border: 1px solid #f3f3f3;\n  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  margin-bottom: 3px;\n  position: relative;\n}\n.htCollapseButton:after {\n  content: \"\";\n  height: 300%;\n  width: 1px;\n  display: block;\n  background: #ccc;\n  margin-left: 4px;\n  position: absolute;\n  /*top: -300%;*/\n  bottom: 10px;\n}\nthead .htCollapseButton {\n  right: 5px;\n  position: absolute;\n  top: 5px;\n  background: #fff;\n}\nthead .htCollapseButton:after {\n  height: 1px;\n  width: 700%;\n  right: 10px;\n  top: 4px;\n}\n.handsontable tr th .htExpandButton {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  line-height: 10px;\n  text-align: center;\n  border-radius: 5px;\n  border: 1px solid #f3f3f3;\n  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  top: 0;\n  display: none;\n}\n.handsontable thead tr th .htExpandButton {\n  /*left: 5px;*/\n  top: 5px;\n}\n.handsontable tr th .htExpandButton.clickable {\n  display: block;\n}\n.collapsibleIndicator {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(0% ,-50%);\n          transform: translate(0% ,-50%);\n  right: 5px;\n  border: 1px solid #A6A6A6;\n  line-height: 10px;\n  color: #222;\n  border-radius: 10px;\n  font-size: 10px;\n  width: 10px;\n  height: 10px;\n  cursor: pointer;\n  -webkit-box-shadow: 0 0 0 6px rgba(238,238,238,1);\n  box-shadow: 0 0 0 6px rgba(238,238,238,1);\n  background: #eee;\n}\n.handsontable col.hidden {\n  width: 0 !important;\n}\n.handsontable table tr th.lightRightBorder {\n  border-right: 1px solid #E6E6E6;\n}\n.handsontable tr.hidden,\n.handsontable tr.hidden td,\n.handsontable tr.hidden th {\n  display: none;\n}\n.ht_master,\n.ht_clone_left,\n.ht_clone_top,\n.ht_clone_bottom {\n  overflow: hidden;\n}\n.ht_master .wtHolder {\n  overflow: auto;\n}\n.handsontable .ht_master thead,\n.handsontable .ht_master tr th,\n.handsontable .ht_clone_left thead {\n  visibility: hidden;\n}\n.ht_clone_top .wtHolder,\n.ht_clone_left .wtHolder,\n.ht_clone_bottom .wtHolder {\n  overflow: hidden;\n}\n/*\n\n Handsontable Mobile Text Editor stylesheet\n\n */\n.handsontable.mobile,\n.handsontable.mobile .wtHolder {\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  -webkit-tap-highlight-color:rgba(0,0,0,0);\n  -webkit-overflow-scrolling: touch;\n}\n.htMobileEditorContainer {\n  display: none;\n  position: absolute;\n  top: 0;\n  width: 70%;\n  height: 54pt;\n  background: #f8f8f8;\n  border-radius: 20px;\n  border: 1px solid #ebebeb;\n  z-index: 999;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n}\n.topLeftSelectionHandle:not(.ht_master .topLeftSelectionHandle),\n.topLeftSelectionHandle-HitArea:not(.ht_master .topLeftSelectionHandle-HitArea) {\n  z-index: 9999;\n}\n/* Initial left/top coordinates - overwritten when actual position is set */\n.topLeftSelectionHandle,\n.topLeftSelectionHandle-HitArea,\n.bottomRightSelectionHandle,\n.bottomRightSelectionHandle-HitArea {\n  left: -10000px;\n  top: -10000px;\n}\n.htMobileEditorContainer.active {\n  display: block;\n}\n.htMobileEditorContainer .inputs {\n  position: absolute;\n  right: 210pt;\n  bottom: 10pt;\n  top: 10pt;\n  left: 14px;\n  height: 34pt;\n}\n.htMobileEditorContainer .inputs textarea {\n  font-size: 13pt;\n  border: 1px solid #a1a1a1;\n  -webkit-appearance: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  position: absolute;\n  left: 14px;\n  right: 14px;\n  top: 0;\n  bottom: 0;\n  padding: 7pt;\n}\n.htMobileEditorContainer .cellPointer {\n  position: absolute;\n  top: -13pt;\n  height: 0;\n  width: 0;\n  left: 30px;\n\n  border-left: 13pt solid transparent;\n  border-right: 13pt solid transparent;\n  border-bottom: 13pt solid #ebebeb;\n}\n.htMobileEditorContainer .cellPointer.hidden {\n  display: none;\n}\n.htMobileEditorContainer .cellPointer:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 2px;\n  height: 0;\n  width: 0;\n  left: -13pt;\n\n  border-left: 13pt solid transparent;\n  border-right: 13pt solid transparent;\n  border-bottom: 13pt solid #f8f8f8;\n}\n.htMobileEditorContainer .moveHandle {\n  position: absolute;\n  top: 10pt;\n  left: 5px;\n  width: 30px;\n  bottom: 0px;\n  cursor: move;\n  z-index: 9999;\n}\n.htMobileEditorContainer .moveHandle:after {\n  content: \"..\\A..\\A..\\A..\";\n  white-space: pre;\n  line-height: 10px;\n  font-size: 20pt;\n  display: inline-block;\n  margin-top: -8px;\n  color: #ebebeb;\n}\n.htMobileEditorContainer .positionControls {\n  width: 205pt;\n  position: absolute;\n  right: 5pt;\n  top: 0;\n  bottom: 0;\n}\n.htMobileEditorContainer .positionControls > div {\n  width: 50pt;\n  height: 100%;\n  float: left;\n}\n.htMobileEditorContainer .positionControls > div:after {\n  content: \" \";\n  display: block;\n  width: 15pt;\n  height: 15pt;\n  text-align: center;\n  line-height: 50pt;\n}\n.htMobileEditorContainer .leftButton:after,\n.htMobileEditorContainer .rightButton:after,\n.htMobileEditorContainer .upButton:after,\n.htMobileEditorContainer .downButton:after {\n  transform-origin: 5pt 5pt;\n  -webkit-transform-origin: 5pt 5pt;\n  margin: 21pt 0 0 21pt;\n}\n.htMobileEditorContainer .leftButton:after {\n  border-top: 2px solid #288ffe;\n  border-left: 2px solid #288ffe;\n  -webkit-transform: rotate(-45deg);\n  /*margin-top: 17pt;*/\n  /*margin-left: 20pt;*/\n}\n.htMobileEditorContainer .leftButton:active:after {\n  border-color: #cfcfcf;\n}\n.htMobileEditorContainer .rightButton:after {\n  border-top: 2px solid #288ffe;\n  border-left: 2px solid #288ffe;\n  -webkit-transform: rotate(135deg);\n  /*margin-top: 17pt;*/\n  /*margin-left: 10pt;*/\n}\n.htMobileEditorContainer .rightButton:active:after {\n  border-color: #cfcfcf;\n}\n.htMobileEditorContainer .upButton:after {\n  /*border-top: 2px solid #cfcfcf;*/\n  border-top: 2px solid #288ffe;\n  border-left: 2px solid #288ffe;\n  -webkit-transform: rotate(45deg);\n  /*margin-top: 22pt;*/\n  /*margin-left: 15pt;*/\n}\n.htMobileEditorContainer .upButton:active:after {\n  border-color: #cfcfcf;\n}\n.htMobileEditorContainer .downButton:after {\n  border-top: 2px solid #288ffe;\n  border-left: 2px solid #288ffe;\n  -webkit-transform: rotate(225deg);\n  /*margin-top: 15pt;*/\n  /*margin-left: 15pt;*/\n}\n.htMobileEditorContainer .downButton:active:after {\n  border-color: #cfcfcf;\n}\n.handsontable.hide-tween {\n  -webkit-animation: opacity-hide 0.3s;\n  animation: opacity-hide 0.3s;\n  animation-fill-mode: forwards;\n  -webkit-animation-fill-mode: forwards;\n}\n.handsontable.show-tween {\n  -webkit-animation: opacity-show 0.3s;\n  animation: opacity-show 0.3s;\n  animation-fill-mode: forwards;\n  -webkit-animation-fill-mode: forwards;\n}\n@charset \"UTF-8\";\n/*!\n * Pikaday\n * Copyright © 2014 David Bushell | BSD & MIT license | http://dbushell.com/\n */\n.pika-single {\n    z-index: 9999;\n    display: block;\n    position: relative;\n    color: #333;\n    background: #fff;\n    border: 1px solid #ccc;\n    border-bottom-color: #bbb;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n/*\nclear child float (pika-lendar), using the famous micro clearfix hack\nhttp://nicolasgallagher.com/micro-clearfix-hack/\n*/\n.pika-single:before,\n.pika-single:after {\n    content: \" \";\n    display: table;\n}\n.pika-single:after { clear: both }\n.pika-single { *zoom: 1 }\n.pika-single.is-hidden {\n    display: none;\n}\n.pika-single.is-bound {\n    position: absolute;\n    -webkit-box-shadow: 0 5px 15px -5px rgba(0,0,0,.5);\n            box-shadow: 0 5px 15px -5px rgba(0,0,0,.5);\n}\n.pika-lendar {\n    float: left;\n    width: 240px;\n    margin: 8px;\n}\n.pika-title {\n    position: relative;\n    text-align: center;\n}\n.pika-label {\n    display: inline-block;\n    *display: inline;\n    position: relative;\n    z-index: 9999;\n    overflow: hidden;\n    margin: 0;\n    padding: 5px 3px;\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: bold;\n    background-color: #fff;\n}\n.pika-title select {\n    cursor: pointer;\n    position: absolute;\n    z-index: 9998;\n    margin: 0;\n    left: 0;\n    top: 5px;\n    filter: alpha(opacity=0);\n    opacity: 0;\n}\n.pika-prev,\n.pika-next {\n    display: block;\n    cursor: pointer;\n    position: relative;\n    outline: none;\n    border: 0;\n    padding: 0;\n    width: 20px;\n    height: 30px;\n    /* hide text using text-indent trick, using width value (it's enough) */\n    text-indent: 20px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: 75% 75%;\n    opacity: .5;\n    *position: absolute;\n    *top: 0;\n}\n.pika-prev:hover,\n.pika-next:hover {\n    opacity: 1;\n}\n.pika-prev,\n.is-rtl .pika-next {\n    float: left;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==');\n    *left: 0;\n}\n.pika-next,\n.is-rtl .pika-prev {\n    float: right;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=');\n    *right: 0;\n}\n.pika-prev.is-disabled,\n.pika-next.is-disabled {\n    cursor: default;\n    opacity: .2;\n}\n.pika-select {\n    display: inline-block;\n    *display: inline;\n}\n.pika-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    border: 0;\n}\n.pika-table th,\n.pika-table td {\n    width: 14.285714285714286%;\n    padding: 0;\n}\n.pika-table th {\n    color: #999;\n    font-size: 12px;\n    line-height: 25px;\n    font-weight: bold;\n    text-align: center;\n}\n.pika-button {\n    cursor: pointer;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    outline: none;\n    border: 0;\n    margin: 0;\n    width: 100%;\n    padding: 5px;\n    color: #666;\n    font-size: 12px;\n    line-height: 15px;\n    text-align: right;\n    background: #f5f5f5;\n}\n.pika-week {\n    font-size: 11px;\n    color: #999;\n}\n.is-today .pika-button {\n    color: #33aaff;\n    font-weight: bold;\n}\n.is-selected .pika-button {\n    color: #fff;\n    font-weight: bold;\n    background: #33aaff;\n    -webkit-box-shadow: inset 0 1px 3px #178fe5;\n            box-shadow: inset 0 1px 3px #178fe5;\n    border-radius: 3px;\n}\n.is-inrange .pika-button {\n    background: #D5E9F7;\n}\n.is-startrange .pika-button {\n    color: #fff;\n    background: #6CB31D;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 3px;\n}\n.is-endrange .pika-button {\n    color: #fff;\n    background: #33aaff;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 3px;\n}\n.is-disabled .pika-button,\n.is-outside-current-month .pika-button {\n    pointer-events: none;\n    cursor: default;\n    color: #999;\n    opacity: .3;\n}\n.pika-button:hover {\n    color: #fff;\n    background: #ff8000;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 3px;\n}\n/* styling for abbr */\n.pika-table abbr {\n    border-bottom: none;\n    cursor: help;\n}\n.htCommentCell {\n    position: relative;\n}\n.htCommentCell:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    border-left: 6px solid transparent;\n    border-top: 6px solid black;\n}\n.htComments {\n    display: none;\n    z-index: 1059;\n    position: absolute;\n}\n.htCommentTextArea {\n    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 3px, rgba(0, 0, 0, 0.239216) 0 1px 2px;\n            box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 3px, rgba(0, 0, 0, 0.239216) 0 1px 2px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    border: none;\n    border-left: 3px solid #ccc;\n    background-color: #fff;\n    width: 215px;\n    height: 90px;\n    font-size: 12px;\n    padding: 5px;\n    outline: 0px !important;\n    -webkit-appearance: none;\n}\n.htCommentTextArea:focus {\n    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 3px, rgba(0, 0, 0, 0.239216) 0 1px 2px, inset 0 0 0 1px #5292f7;\n            box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 3px, rgba(0, 0, 0, 0.239216) 0 1px 2px, inset 0 0 0 1px #5292f7;\n    border-left: 3px solid #5292f7;\n}\n/*!\n * Handsontable ContextMenu\n */\n.htContextMenu:not(.htGhostTable) {\n  display: none;\n  position: absolute;\n  z-index: 1060; /* needs to be higher than 1050 - z-index for Twitter Bootstrap modal (#1569) */\n}\n.htContextMenu .ht_clone_top,\n.htContextMenu .ht_clone_left,\n.htContextMenu .ht_clone_corner,\n.htContextMenu .ht_clone_debug {\n  display: none;\n}\n.htContextMenu table.htCore {\n  border: 1px solid #ccc;\n  border-bottom-width: 2px;\n  border-right-width: 2px;\n}\n.htContextMenu .wtBorder {\n  visibility: hidden;\n}\n.htContextMenu table tbody tr td {\n  background: white;\n  border-width: 0;\n  padding: 4px 6px 0 6px;\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.htContextMenu table tbody tr td:first-child {\n  border: 0;\n}\n.htContextMenu table tbody tr td.htDimmed {\n  font-style: normal;\n  color: #323232;\n}\n.htContextMenu table tbody tr td.current,\n.htContextMenu table tbody tr td.zeroclipboard-is-hover {\n  background: #f3f3f3;\n}\n.htContextMenu table tbody tr td.htSeparator {\n  border-top: 1px solid #bbb;\n  height: 0;\n  padding: 0;\n  cursor: default;\n}\n.htContextMenu table tbody tr td.htDisabled {\n  color: #999;\n  cursor: default;\n}\n.htContextMenu table tbody tr td.htDisabled:hover {\n  background: #fff;\n  color: #999;\n  cursor: default;\n}\n.htContextMenu table tbody tr.htHidden {\n  display: none;\n}\n.htContextMenu table tbody tr td .htItemWrapper {\n  margin-left: 10px;\n  margin-right: 6px;\n}\n.htContextMenu table tbody tr td div span.selected {\n  margin-top: -2px;\n  position: absolute;\n  left: 4px;\n}\n.htContextMenu .ht_master .wtHolder {\n  overflow: hidden;\n}\ntextarea#HandsontableCopyPaste {\n  position: fixed !important;\n  top: 0 !important;\n  right: 100% !important;\n  overflow: hidden;\n  opacity: 0;\n  outline: 0 none !important;\n}\n.htRowHeaders .ht_master.innerBorderLeft ~ .ht_clone_top_left_corner th:nth-child(2),\n.htRowHeaders .ht_master.innerBorderLeft ~ .ht_clone_left td:first-of-type {\n  border-left: 0 none;\n}\n.handsontable .wtHider {\n  position: relative;\n}\n.handsontable.ht__manualColumnMove.after-selection--columns thead th.ht__highlight {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.handsontable.ht__manualColumnMove.on-moving--columns,\n.handsontable.ht__manualColumnMove.on-moving--columns thead th.ht__highlight {\n  cursor: move;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.handsontable.ht__manualColumnMove.on-moving--columns .manualColumnResizer {\n  display: none;\n}\n.handsontable .ht__manualColumnMove--guideline,\n.handsontable .ht__manualColumnMove--backlight {\n  position: absolute;\n  height: 100%;\n  display: none;\n}\n.handsontable .ht__manualColumnMove--guideline {\n  background: #757575;\n  width: 2px;\n  top: 0;\n  margin-left: -1px;\n  z-index: 105;\n}\n.handsontable .ht__manualColumnMove--backlight {\n  background: #343434;\n  background: rgba(52, 52, 52, 0.25);\n  display: none;\n  z-index: 105;\n  pointer-events: none;\n}\n.handsontable.on-moving--columns.show-ui .ht__manualColumnMove--guideline,\n.handsontable.on-moving--columns .ht__manualColumnMove--backlight {\n  display: block;\n}\n.handsontable .wtHider {\n  position: relative;\n}\n.handsontable.ht__manualRowMove.after-selection--rows tbody th.ht__highlight {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.handsontable.ht__manualRowMove.on-moving--rows,\n.handsontable.ht__manualRowMove.on-moving--rows tbody th.ht__highlight {\n  cursor: move;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.handsontable.ht__manualRowMove.on-moving--rows .manualRowResizer {\n  display: none;\n}\n.handsontable .ht__manualRowMove--guideline,\n.handsontable .ht__manualRowMove--backlight {\n  position: absolute;\n  width: 100%;\n  display: none;\n}\n.handsontable .ht__manualRowMove--guideline {\n  background: #757575;\n  height: 2px;\n  left: 0;\n  margin-top: -1px;\n  z-index: 105;\n}\n.handsontable .ht__manualRowMove--backlight {\n  background: #343434;\n  background: rgba(52, 52, 52, 0.25);\n  display: none;\n  z-index: 105;\n  pointer-events: none;\n}\n.handsontable.on-moving--rows.show-ui .ht__manualRowMove--guideline,\n.handsontable.on-moving--rows .ht__manualRowMove--backlight {\n  display: block;\n}\n.handsontable tbody td[rowspan][class*=\"area\"][class*=\"highlight\"]:not([class*=\"fullySelectedMergedCell\"]):before {\n    opacity: 0;\n}\n.handsontable tbody td[rowspan][class*=\"area\"][class*=\"highlight\"][class*=\"fullySelectedMergedCell-multiple\"]:before {\n    opacity: 0.1;\n}\n.handsontable tbody td[rowspan][class*=\"area\"][class*=\"highlight\"][class*=\"fullySelectedMergedCell-0\"]:before {\n    opacity: 0.1;\n}\n.handsontable tbody td[rowspan][class*=\"area\"][class*=\"highlight\"][class*=\"fullySelectedMergedCell-1\"]:before {\n    opacity: 0.2;\n}\n.handsontable tbody td[rowspan][class*=\"area\"][class*=\"highlight\"][class*=\"fullySelectedMergedCell-2\"]:before {\n    opacity: 0.27;\n}\n.handsontable tbody td[rowspan][class*=\"area\"][class*=\"highlight\"][class*=\"fullySelectedMergedCell-3\"]:before {\n    opacity: 0.35;\n}\n.handsontable tbody td[rowspan][class*=\"area\"][class*=\"highlight\"][class*=\"fullySelectedMergedCell-4\"]:before {\n    opacity: 0.41;\n}\n.handsontable tbody td[rowspan][class*=\"area\"][class*=\"highlight\"][class*=\"fullySelectedMergedCell-5\"]:before {\n    opacity: 0.47;\n}\n.handsontable tbody td[rowspan][class*=\"area\"][class*=\"highlight\"][class*=\"fullySelectedMergedCell-6\"]:before {\n    opacity: 0.54;\n}\n.handsontable tbody td[rowspan][class*=\"area\"][class*=\"highlight\"][class*=\"fullySelectedMergedCell-7\"]:before {\n    opacity: 0.58;\n}\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--8-3!./src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.scss");


/***/ })

},[3]);
//# sourceMappingURL=styles.bundle.js.map