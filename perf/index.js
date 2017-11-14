'use strict';

const createCompiler = require('../src');

let html = createCompiler((tag, props, children) => {
  return { tag, props, children };
}, { cache: new WeakMap() });

function time(name, count, fn) {
  let start = Date.now();
  for (let i = 0; i < count; ++i) {
    fn(i);
  }
  console.log(`${name}: ${Date.now() - start}ms`);
}

time('Large document scan', 100, i => {
  return html`
  <div class="WyeMbd">
  <c-wiz jsrenderer="Jzy2fd" class="NrQFve" jslog="34950; 4:null; track: impression; index:0" data-label="Top Stories" jsshadow="" jsdata="deferred-i98" data-p="%.@.]
    " jscontroller="KrNKOe" jsaction="JIbuQc:SvHzRc" data-node-index="8;0" jsmodel="hc6Ubd">
    <div class="deQdld">
      <div class="tgGNL">
        <h1 class="oEoZRe"><span jsname="QiyZ6c" class="adH5zf">Top Stories</span></h1>
      </div>
      <c-wiz jsrenderer="JTBx5b" class="PaqQNc QwxBBf f2t20b PBWx0c" jslog="31217; 3:null; track:impression,click; index:0" jsshadow="" jsdata="deferred-i99" data-p="%.@.]
        " jscontroller="Iq3X6d" jsaction="eUCkkd:KoToPc(preventDefault=true);JIbuQc:Xl5dff(DZOBcb);Izrsnf:KoToPc;Z8obd:KoToPc;NqdJMc:KoToPc; click:aXeNOc; keydown:I481le;" data-node-index="0;0" jsmodel="hc6Ubd">
        <c-wiz class="lPV2Xe k3Pzib" tabindex="0" jsshadow="" jsdata="deferred-i100" jsmodel="hc6Ubd">
          <div class="qx0yFc" jsname="UNxEwf">
            <div class="X20oP" jsaction="click:KoToPc(yobjD)">
              <a class="MWG8ab" href="https://www.nytimes.com/2017/11/07/us/politics/virginia-election-democrats.html" target="_blank" jsname="yobjD" jslog="31218; 1:EAciT2h0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTcvMTEvMDcvdXMvcG9saXRpY3MvdmlyZ2luaWEtZWxlY3Rpb24tZGVtb2NyYXRzLmh0bWw; track: impression,click" tabindex="-1"><img class="lmFAjc" title="New York Times" aria-hidden="true" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiE9oH-RbAcHd8Uz9qX12N9Dks0RArBuNvrKDeXhyBNsT8zbwbQ8vSDIwwO1C1q5fUUUdnTIHf_bA" tabindex="-1"></a>
              <div class="LKUwLd" tabindex="0" jsaction="focus:aQjDLd"></div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              <div class="X20oP alVsqf" jsname="dNnLb">
                <div class="Sp02Fc">More about</div>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf" jslog="31222; 6:CgA; track:impression,click; index:0" jsshadow="" jsdata="deferred-i101" data-p="%.@.]
                  " data-node-index="0;0" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Ralph%20Northam/Ralph%20Northam?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Ralph Northam</div>
                  </a>
                  <c-data id="i101" jsdata=" Bh5rtc;https://www.nytimes.com/2017/11/07/us/politics/virginia-election-democrats.html;12"></c-data>
                </c-wiz>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf" jslog="31222; 6:CgA; track:impression,click; index:1" jsshadow="" jsdata="deferred-i102" data-p="%.@.]
                  " data-node-index="0;0" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Ed%20Gillespie/Ed%20Gillespie?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Ed Gillespie</div>
                  </a>
                  <c-data id="i102" jsdata=" Bh5rtc;https://www.nytimes.com/2017/11/07/us/politics/virginia-election-democrats.html;12"></c-data>
                </c-wiz>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf Qbfsob" jslog="31222; 6:CgA; track:impression,click; index:2" jsshadow="" jsdata="deferred-i103" data-p="%.@.]
                  " data-node-index="0;0" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Donald%20Trump/Donald%20Trump?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Donald Trump</div>
                  </a>
                  <c-data id="i103" jsdata=" Bh5rtc;https://www.nytimes.com/2017/11/07/us/politics/virginia-election-democrats.html;12"></c-data>
                </c-wiz>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
            </div>
            <div class="v4IxVd" jsname="JdibKd">
              <div class="LKUwLd" tabindex="0" jsaction="focus:InbbBf"></div>
              <c-wiz class="M1Uqc kWyHVd" jslog="31219; 1:EAciT2h0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTcvMTEvMDcvdXMvcG9saXRpY3MvdmlyZ2luaWEtZWxlY3Rpb24tZGVtb2NyYXRzLmh0bWw; track: impression,click" data-thumbnail-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiE9oH-RbAcHd8Uz9qX12N9Dks0RArBuNvrKDeXhyBNsT8zbwbQ8vSDIwwO1C1q5fUUUdnTIHf_bA" jsshadow="" jsdata="deferred-i104" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                <a class="nuEeue hzdq5d ME7ew" target="_blank" href="https://www.nytimes.com/2017/11/07/us/politics/virginia-election-democrats.html" jsname="NV4Anc" role="heading" aria-level="2">Ralph Northam Wins the Virginia Governor's Race</a>
                <div class="a5SXAc iYiEmb">
                  <span class="IH8C7b Pc0Wt" jsname="lVVfob">New York Times</span>
                  <span class="oM4Eqe">
                    <span class="d5kXP YBZVLb" jsname="U9s4xe">56m ago</span>
                    <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i105" jsname="ymIaV" jsmodel="hc6Ubd">
                      <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                        <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                        <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                      </div>
                      <c-data id="i105"></c-data>
                    </c-wiz>
                  </span>
                </div>
                <c-data id="i104"></c-data>
              </c-wiz>
              <div class="fkWPz">Related Coverage</div>
              <c-wiz class="M1Uqc cZgiac" jslog="31220; 1:EBAiamh0dHBzOi8vd3d3LnJlYWxjbGVhcnBvbGl0aWNzLmNvbS9lcG9sbHMvMjAxNy9nb3Zlcm5vci92YS92aXJnaW5pYV9nb3Zlcm5vcl9naWxsZXNwaWVfdnNfbm9ydGhhbS02MTk3Lmh0bWw; track: impression,click" jsshadow="" jsdata="deferred-i106" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsname="l0ilAc" jsmodel="hc6Ubd">
                <a class="nuEeue hzdq5d ME7ew" target="_blank" href="https://www.realclearpolitics.com/epolls/2017/governor/va/virginia_governor_gillespie_vs_northam-6197.html" jsname="NV4Anc" role="heading" aria-level="3">RealClearPolitics - Election 2017 - Virginia Governor - Gillespie vs. Northam</a>
                <div class="a5SXAc iYiEmb">
                  <span class="FOvasf">Most Referenced</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">RealClearPolitics</span>
                  <span class="oM4Eqe">
                    <span class="d5kXP YBZVLb" jsname="U9s4xe">8h ago</span>
                    <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i107" jsname="ymIaV" jsmodel="hc6Ubd">
                      <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                        <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                        <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                      </div>
                      <c-data id="i107"></c-data>
                    </c-wiz>
                  </span>
                </div>
                <c-data id="i106"></c-data>
              </c-wiz>
              <div class="cDUkId" jsname="vG6Vuf" tabindex="0" role="presentation" aria-label="Expand Story" jsaction="click:KoToPc; keydown:nSnvcc;">
                <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
                <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              </div>
              <div class="alVsqf">
                <div class="jJzAOb">
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:IklodHRwOi8vdGhlaGlsbC5jb20vaG9tZW5ld3MvY2FtcGFpZ24vMzU5MjA5LWRlbXMtbm9ydGhhbS13aW5zLXZhLWdvdi1yYWNl; track: impression,click; index:0" jsshadow="" jsdata="deferred-i108" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://thehill.com/homenews/campaign/359209-dems-northam-wins-va-gov-race" jsname="NV4Anc" role="heading" aria-level="3">Northam wins big in Virginia, thrilling Democrats</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="IH8C7b Pc0Wt" jsname="lVVfob">The Hill</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">1h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i109" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i109"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i108"></c-data>
                  </c-wiz>
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:EAIihQFodHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vb3BpbmlvbnMvcmFscGgtbm9ydGhhbXMtdmljdG9yeS1pbi12aXJnaW5pYS8yMDE3LzExLzA3LzdiN2UzYTE0LWMzZTctMTFlNy04NGJjLTVlMjg1YzdmNDUxMl9zdG9yeS5odG1s; track: impression,click; index:1" jsshadow="" jsdata="deferred-i110" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="https://www.washingtonpost.com/opinions/ralph-northams-victory-in-virginia/2017/11/07/7b7e3a14-c3e7-11e7-84bc-5e285c7f4512_story.html" jsname="NV4Anc" role="heading" aria-level="3">A triumph of decency over dread</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="FOvasf">Opinion</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">Washington Post</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">1h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i111" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i111"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i110"></c-data>
                  </c-wiz>
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:EAkiaGh0dHA6Ly9hYmNuZXdzLmdvLmNvbS9Qb2xpdGljcy9saXZlLXVwZGF0ZXMtdm90ZXJzLXZpcmdpbmlhLWplcnNleS1zZXQtZWxlY3QtZ292ZXJub3JzL3N0b3J5P2lkPTUwOTgxMDYy; track: impression,click; index:2" jsshadow="" jsdata="deferred-i112" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://abcnews.go.com/Politics/live-updates-voters-virginia-jersey-set-elect-governors/story?id=50981062" jsname="NV4Anc" role="heading" aria-level="3">Live Updates: Voters in Virginia, New Jersey set to elect new governors in tests of party strength</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="FOvasf">Live Updating</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">ABC News</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">6h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i113" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i113"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i112"></c-data>
                  </c-wiz>
                  <div role="presentation" class="O0WRkf oG5Srb HQ8yf C0oVfc iXfUzb" jslog="31225; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="Si8wCc" aria-label="See all related coverage" aria-disabled="false" data-tooltip="See all related coverage" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                    <a class="FKF6mc TpQm9d" href="story/dYpt7X0-7b3k5hMQcFSGsDNhDhXrM?ned=us" aria-label="See all related coverage">
                      <div class="Vwe4Vb MbhUzd" jsname="ksKsZd"></div>
                      <div class="ZFr60d CeoRYc"></div>
                      <content class="CwaK9"><span class="RveJvd snByac"><span class="Xyuyg ME7ew">View full coverage</span><span class="DPvwYc sYvQuc ME7ew" aria-hidden="true"></span></span></content>
                    </a>
                  </div>
                </div>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:hV5qRc"></div>
            </div>
            <div class="LKUwLd" tabindex="0" jsaction="focus:anyny"></div>
            <div class="qwxlVe">
              <div role="button" class="mUbCce fKz7Od" jslog="31227; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="DZOBcb" aria-label="Collapse Story" aria-disabled="false" tabindex="0" data-tooltip="Collapse Story" data-cveid="31227" data-eveid="31226" data-aria-expanded="Collapse Story" data-aria-collapsed="Expand Story" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc PC1R3e" aria-hidden="true"></span></span></content>
              </div>
            </div>
          </div>
          <c-data id="i100"></c-data>
        </c-wiz>
        <c-data id="i99" jsdata=" Bh5rtc;https://www.nytimes.com/2017/11/07/us/politics/virginia-election-democrats.html;12"></c-data>
      </c-wiz>
      <c-wiz jsrenderer="JTBx5b" class="PaqQNc f2t20b" jslog="31217; 3:null; track:impression,click; index:1" jsshadow="" jsdata="deferred-i114" data-p="%.@.]
        " jscontroller="Iq3X6d" jsaction="eUCkkd:KoToPc(preventDefault=true);JIbuQc:Xl5dff(DZOBcb);Izrsnf:KoToPc;Z8obd:KoToPc;NqdJMc:KoToPc; click:aXeNOc; keydown:I481le;" data-node-index="0;1" jsmodel="hc6Ubd">
        <c-wiz class="lPV2Xe k3Pzib" tabindex="0" jsshadow="" jsdata="deferred-i115" jsmodel="hc6Ubd">
          <div class="qx0yFc" jsname="UNxEwf">
            <div class="X20oP" jsaction="click:KoToPc(yobjD)">
              <a class="MWG8ab" href="https://www.nytimes.com/2017/11/06/us/texas-shooting-church.html" target="_blank" jsname="yobjD" jslog="31218; 1:IkBodHRwczovL3d3dy5ueXRpbWVzLmNvbS8yMDE3LzExLzA2L3VzL3RleGFzLXNob290aW5nLWNodXJjaC5odG1s; track: impression,click" tabindex="-1"><img class="lmFAjc" title="New York Times" aria-hidden="true" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTU9EMXXbNLMktGSHQXtNnR8yQrb2mgwc-Lxss0_xlfSknfJJ6eTMityLX3PAgJQKgJ6wE5P4MHkgw" tabindex="-1"></a>
              <div class="LKUwLd" tabindex="0" jsaction="focus:aQjDLd"></div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              <div class="X20oP alVsqf" jsname="dNnLb">
                <div class="Sp02Fc">More about</div>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf" jslog="31222; 6:CgA; track:impression,click; index:0" jsshadow="" jsdata="deferred-i116" data-p="%.@.]
                  " data-node-index="0;1" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Texas/Texas?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Texas</div>
                  </a>
                  <c-data id="i116" jsdata=" Bh5rtc;https://www.nytimes.com/2017/11/06/us/texas-shooting-church.html;13"></c-data>
                </c-wiz>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf" jslog="31222; 6:CgA; track:impression,click; index:1" jsshadow="" jsdata="deferred-i117" data-p="%.@.]
                  " data-node-index="0;1" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Sutherland%20Springs/Sutherland%20Springs?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Sutherland Springs</div>
                  </a>
                  <c-data id="i117" jsdata=" Bh5rtc;https://www.nytimes.com/2017/11/06/us/texas-shooting-church.html;13"></c-data>
                </c-wiz>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf Qbfsob" jslog="31222; 6:CgA; track:impression,click; index:2" jsshadow="" jsdata="deferred-i118" data-p="%.@.]
                  " data-node-index="0;1" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Charleston%20church%20shooting/Charleston%20church%20shooting?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Charleston church shooting</div>
                  </a>
                  <c-data id="i118" jsdata=" Bh5rtc;https://www.nytimes.com/2017/11/06/us/texas-shooting-church.html;13"></c-data>
                </c-wiz>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
            </div>
            <div class="v4IxVd" jsname="JdibKd">
              <div class="LKUwLd" tabindex="0" jsaction="focus:InbbBf"></div>
              <c-wiz class="M1Uqc kWyHVd" jslog="31219; 1:IkBodHRwczovL3d3dy5ueXRpbWVzLmNvbS8yMDE3LzExLzA2L3VzL3RleGFzLXNob290aW5nLWNodXJjaC5odG1s; track: impression,click" data-thumbnail-url="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTU9EMXXbNLMktGSHQXtNnR8yQrb2mgwc-Lxss0_xlfSknfJJ6eTMityLX3PAgJQKgJ6wE5P4MHkgw" jsshadow="" jsdata="deferred-i119" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                <a class="nuEeue hzdq5d ME7ew" target="_blank" href="https://www.nytimes.com/2017/11/06/us/texas-shooting-church.html" jsname="NV4Anc" role="heading" aria-level="2">Air Force Error Allowed Texas Gunman to Buy Weapons</a>
                <div class="a5SXAc iYiEmb">
                  <span class="IH8C7b Pc0Wt" jsname="lVVfob">New York Times</span>
                  <span class="oM4Eqe">
                    <span class="d5kXP YBZVLb" jsname="U9s4xe">9h ago</span>
                    <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i120" jsname="ymIaV" jsmodel="hc6Ubd">
                      <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                        <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                        <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                      </div>
                      <c-data id="i120"></c-data>
                    </c-wiz>
                  </span>
                </div>
                <c-data id="i119"></c-data>
              </c-wiz>
              <div class="fkWPz">Related Coverage</div>
              <c-wiz class="M1Uqc cZgiac" jslog="31220; 1:EA4if2h0dHA6Ly93d3cucG9saXRpZmFjdC5jb20vcHVuZGl0ZmFjdC9zdGF0ZW1lbnRzLzIwMTcvbm92LzA2L3lvdXJuZXdzd2lyZWNvbS9mYWtlLW5ld3Mtbm8tcHJvb2YtYW50aWZhLWNvbW11bmlzbS1jb21wZWxsZWQtdGV4YS8; track: impression,click" jsshadow="" jsdata="deferred-i121" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsname="l0ilAc" jsmodel="hc6Ubd">
                <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.politifact.com/punditfact/statements/2017/nov/06/yournewswirecom/fake-news-no-proof-antifa-communism-compelled-texa/" jsname="NV4Anc" role="heading" aria-level="3">Fake news: No proof Antifa, communism compelled Texas shooter Devin Kelley</a>
                <div class="a5SXAc iYiEmb">
                  <span class="FOvasf">Fact Check</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">PolitiFact</span>
                  <span class="oM4Eqe">
                    <span class="d5kXP YBZVLb" jsname="U9s4xe">Nov 6, 2017</span>
                    <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i122" jsname="ymIaV" jsmodel="hc6Ubd">
                      <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                        <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                        <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                      </div>
                      <c-data id="i122"></c-data>
                    </c-wiz>
                  </span>
                </div>
                <c-data id="i121"></c-data>
              </c-wiz>
              <div class="cDUkId" jsname="vG6Vuf" tabindex="0" role="presentation" aria-label="Expand Story" jsaction="click:KoToPc; keydown:nSnvcc;">
                <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
                <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              </div>
              <div class="alVsqf">
                <div class="jJzAOb">
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:EAcikwFodHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vbmV3cy9wb3N0LW5hdGlvbi93cC8yMDE3LzExLzA3L2FzLXRleGFzLXRvd24tbW91cm5zLWRldGFpbHMtZW1lcmdlLW9uLWd1bm1hbnMtbWV0aG9kaWNhbC10YWN0aWNzLWluLWNodXJjaC1tYXNzYWNyZS8; track: impression,click; index:0" jsshadow="" jsdata="deferred-i123" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="https://www.washingtonpost.com/news/post-nation/wp/2017/11/07/as-texas-town-mourns-details-emerge-on-gunmans-methodical-tactics-in-church-massacre/" jsname="NV4Anc" role="heading" aria-level="3">Texas church gunman escaped mental health facility in 2012 after threatening military superiors</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="FOvasf">In Depth</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">Washington Post</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">7h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i124" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i124"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i123"></c-data>
                  </c-wiz>
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:EA0ib2h0dHA6Ly93d3cuZ292ZXJuaW5nLmNvbS90b3BpY3MvcHVibGljLWp1c3RpY2Utc2FmZXR5L2dvdi1ndW5zLWRvbWVzdGljLWFidXNlLXN0YXRlcy10ZXhhcy1jaHVyY2gtc2hvb3RpbmcuaHRtbA; track: impression,click; index:1" jsshadow="" jsdata="deferred-i125" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.governing.com/topics/public-justice-safety/gov-guns-domestic-abuse-states-texas-church-shooting.html" jsname="NV4Anc" role="heading" aria-level="3">In Texas and Beyond, Loopholes Let Domestic Abusers Own Guns</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="FOvasf">Featured</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">Governing</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">22h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i126" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i126"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i125"></c-data>
                  </c-wiz>
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:EAIiZGh0dHA6Ly93d3cuY2hpY2Fnb3RyaWJ1bmUuY29tL25ld3MvY29sdW1uaXN0cy9rYXNzL2N0LW1ldC10ZXhhcy1jaHVyY2gtc2hvb3Rpbmcta2Fzcy0xMTA4LXN0b3J5Lmh0bWw; track: impression,click; index:2" jsshadow="" jsdata="deferred-i127" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.chicagotribune.com/news/columnists/kass/ct-met-texas-church-shooting-kass-1108-story.html" jsname="NV4Anc" role="heading" aria-level="3">A good man with a gun did what he had to do in Texas</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="FOvasf">Opinion</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">Chicago Tribune</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">2h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i128" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i128"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i127"></c-data>
                  </c-wiz>
                  <div role="presentation" class="O0WRkf oG5Srb HQ8yf C0oVfc iXfUzb" jslog="31225; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="Si8wCc" aria-label="See all related coverage" aria-disabled="false" data-tooltip="See all related coverage" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                    <a class="FKF6mc TpQm9d" href="story/d2ug3J5CbzKixfMCoPCkSsH0W8y-M?ned=us" aria-label="See all related coverage">
                      <div class="Vwe4Vb MbhUzd" jsname="ksKsZd"></div>
                      <div class="ZFr60d CeoRYc"></div>
                      <content class="CwaK9"><span class="RveJvd snByac"><span class="Xyuyg ME7ew">View full coverage</span><span class="DPvwYc sYvQuc ME7ew" aria-hidden="true"></span></span></content>
                    </a>
                  </div>
                </div>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:hV5qRc"></div>
            </div>
            <div class="LKUwLd" tabindex="0" jsaction="focus:anyny"></div>
            <div class="qwxlVe">
              <div role="button" class="mUbCce fKz7Od" jslog="31226; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="DZOBcb" aria-label="Expand Story" aria-disabled="false" tabindex="-1" data-tooltip="Expand Story" data-cveid="31227" data-eveid="31226" data-aria-expanded="Collapse Story" data-aria-collapsed="Expand Story" aria-hidden="true" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc PC1R3e" aria-hidden="true"></span></span></content>
              </div>
            </div>
          </div>
          <c-data id="i115"></c-data>
        </c-wiz>
        <c-data id="i114" jsdata=" Bh5rtc;https://www.nytimes.com/2017/11/06/us/texas-shooting-church.html;13"></c-data>
      </c-wiz>
      <c-wiz jsrenderer="JTBx5b" class="PaqQNc f2t20b" jslog="31217; 3:null; track:impression,click; index:2" jsshadow="" jsdata="deferred-i129" data-p="%.@.]
        " jscontroller="Iq3X6d" jsaction="eUCkkd:KoToPc(preventDefault=true);JIbuQc:Xl5dff(DZOBcb);Izrsnf:KoToPc;Z8obd:KoToPc;NqdJMc:KoToPc; click:aXeNOc; keydown:I481le;" data-node-index="0;2" jsmodel="hc6Ubd">
        <c-wiz class="lPV2Xe k3Pzib" tabindex="0" jsshadow="" jsdata="deferred-i130" jsmodel="hc6Ubd">
          <div class="qx0yFc" jsname="UNxEwf">
            <div class="X20oP" jsaction="click:KoToPc(yobjD)">
              <a class="MWG8ab" href="https://www.washingtonpost.com/local/virginia-politics/danica-roem-will-be-vas-first-openly-transgender-elected-official-after-unseating-conservative-robert-g-marshall-in-house-race/2017/11/07/d534bdde-c0af-11e7-959c-fe2b598d8c00_story.html" target="_blank" jsname="yobjD" jslog="31218; 1:EAEi8AFodHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vbG9jYWwvdmlyZ2luaWEtcG9saXRpY3MvZGFuaWNhLXJvZW0td2lsbC1iZS12YXMtZmlyc3Qtb3Blbmx5LXRyYW5zZ2VuZGVyLWVsZWN0ZWQtb2ZmaWNpYWwtYWZ0ZXItdW5zZWF0aW5nLWNvbnNlcnZhdGl2ZS1yb2JlcnQtZy1tYXJzaGFsbC1pbi1ob3VzZS1yYWNlLzIwMTcvMTEvMDcvZDUzNGJkZGUtYzBhZi0xMWU3LTk1OWMtZmUyYjU5OGQ4YzAwX3N0b3J5Lmh0bWw; track: impression,click" tabindex="-1"><img class="lmFAjc" title="Washington Post" aria-hidden="true" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRV3BP-fe4HMLZxbjPChr4WSB2_aGFN3bWnicaYlQOQz07OQe7R25E5WRE-n0v_3ptJgW4_6H63UNc" tabindex="-1"></a>
              <div class="LKUwLd" tabindex="0" jsaction="focus:aQjDLd"></div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              <div class="X20oP alVsqf" jsname="dNnLb">
                <div class="Sp02Fc">More about</div>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf" jslog="31222; 6:CgA; track:impression,click; index:0" jsshadow="" jsdata="deferred-i131" data-p="%.@.]
                  " data-node-index="0;2" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Danica%20Roem/Danica%20Roem?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Danica Roem</div>
                  </a>
                  <c-data id="i131" jsdata=" Bh5rtc;https://www.washingtonpost.com/local/virginia-politics/danica-roem-will-be-vas-first-openly-transgender-elected-official-after-unseating-conservative-robert-g-marshall-in-house-race/2017/11/07/d534bdde-c0af-11e7-959c-fe2b598d8c00_story.html;14"></c-data>
                </c-wiz>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf Qbfsob" jslog="31222; 6:CgA; track:impression,click; index:1" jsshadow="" jsdata="deferred-i132" data-p="%.@.]
                  " data-node-index="0;2" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Virginia/Virginia?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Virginia</div>
                  </a>
                  <c-data id="i132" jsdata=" Bh5rtc;https://www.washingtonpost.com/local/virginia-politics/danica-roem-will-be-vas-first-openly-transgender-elected-official-after-unseating-conservative-robert-g-marshall-in-house-race/2017/11/07/d534bdde-c0af-11e7-959c-fe2b598d8c00_story.html;14"></c-data>
                </c-wiz>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
            </div>
            <div class="v4IxVd" jsname="JdibKd">
              <div class="LKUwLd" tabindex="0" jsaction="focus:InbbBf"></div>
              <c-wiz class="M1Uqc kWyHVd" jslog="31219; 1:EAEi8AFodHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vbG9jYWwvdmlyZ2luaWEtcG9saXRpY3MvZGFuaWNhLXJvZW0td2lsbC1iZS12YXMtZmlyc3Qtb3Blbmx5LXRyYW5zZ2VuZGVyLWVsZWN0ZWQtb2ZmaWNpYWwtYWZ0ZXItdW5zZWF0aW5nLWNvbnNlcnZhdGl2ZS1yb2JlcnQtZy1tYXJzaGFsbC1pbi1ob3VzZS1yYWNlLzIwMTcvMTEvMDcvZDUzNGJkZGUtYzBhZi0xMWU3LTk1OWMtZmUyYjU5OGQ4YzAwX3N0b3J5Lmh0bWw; track: impression,click" data-thumbnail-url="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRV3BP-fe4HMLZxbjPChr4WSB2_aGFN3bWnicaYlQOQz07OQe7R25E5WRE-n0v_3ptJgW4_6H63UNc" jsshadow="" jsdata="deferred-i133" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                <a class="nuEeue hzdq5d ME7ew" target="_blank" href="https://www.washingtonpost.com/local/virginia-politics/danica-roem-will-be-vas-first-openly-transgender-elected-official-after-unseating-conservative-robert-g-marshall-in-house-race/2017/11/07/d534bdde-c0af-11e7-959c-fe2b598d8c00_story.html" jsname="NV4Anc" role="heading" aria-level="2">Virginia's Danica Roem to be first openly transgender state lawmaker in US</a>
                <div class="a5SXAc iYiEmb">
                  <span class="IH8C7b Pc0Wt" jsname="lVVfob">Washington Post</span>
                  <span class="oM4Eqe">
                    <span class="d5kXP YBZVLb" jsname="U9s4xe">42m ago</span>
                    <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i134" jsname="ymIaV" jsmodel="hc6Ubd">
                      <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                        <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                        <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                      </div>
                      <c-data id="i134"></c-data>
                    </c-wiz>
                  </span>
                </div>
                <c-data id="i133"></c-data>
              </c-wiz>
              <div class="fkWPz">Related Coverage</div>
              <c-wiz class="M1Uqc cZgiac" jslog="31220; 1:EBAiVGh0dHA6Ly93d3cud2FzaGluZ3RvbnBvc3QuY29tL3dwLWR5bi9jb250ZW50L2FydGljbGUvMjAwNi8xMS8wMy9BUjIwMDYxMTAzMDE1ODAuaHRtbA; track: impression,click" jsshadow="" jsdata="deferred-i135" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsname="l0ilAc" jsmodel="hc6Ubd">
                <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.washingtonpost.com/wp-dyn/content/article/2006/11/03/AR2006110301580.html" jsname="NV4Anc" role="heading" aria-level="3">Marshall Admits No Doubts About Marriage - The Washington Post</a>
                <div class="a5SXAc iYiEmb">
                  <span class="FOvasf">Most Referenced</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">Washington Post</span>
                  <span class="oM4Eqe">
                    <span class="d5kXP YBZVLb" jsname="U9s4xe">50m ago</span>
                    <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i136" jsname="ymIaV" jsmodel="hc6Ubd">
                      <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                        <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                        <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                      </div>
                      <c-data id="i136"></c-data>
                    </c-wiz>
                  </span>
                </div>
                <c-data id="i135"></c-data>
              </c-wiz>
              <div class="cDUkId" jsname="vG6Vuf" tabindex="0" role="presentation" aria-label="Expand Story" jsaction="click:KoToPc; keydown:nSnvcc;">
                <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
                <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              </div>
              <div class="alVsqf">
                <div class="jJzAOb">
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:ImlodHRwOi8vdGhlaGlsbC5jb20vaG9tZW5ld3MvY2FtcGFpZ24vMzU5MjcxLWZpcnN0LW9wZW5seS10cmFuc2dlbmRlci1zdGF0ZS1sZWdpc2xhdG9yLWVsZWN0ZWQtaW4tdmlyZ2luaWE; track: impression,click; index:0" jsshadow="" jsdata="deferred-i137" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://thehill.com/homenews/campaign/359271-first-openly-transgender-state-legislator-elected-in-virginia" jsname="NV4Anc" role="heading" aria-level="3">First openly transgender state legislator elected in Virginia</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="IH8C7b Pc0Wt" jsname="lVVfob">The Hill</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">1h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i138" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i138"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i137"></c-data>
                  </c-wiz>
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:EAEijwFodHRwOi8vd3d3Lm1vdGhlcmpvbmVzLmNvbS9wb2xpdGljcy8yMDE3LzExL29uZS1vZi10aGUtbW9zdC1hbnRpLWxnYnQtbGF3bWFrZXJzLWluLXRoZS1jb3VudHJ5LW1pZ2h0LWxvc2UtaGlzLXNlYXQtdG8tYS10cmFuc2dlbmRlci1qb3VybmFsaXN0Lw; track: impression,click; index:1" jsshadow="" jsdata="deferred-i139" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.motherjones.com/politics/2017/11/one-of-the-most-anti-lgbt-lawmakers-in-the-country-might-lose-his-seat-to-a-transgender-journalist/" jsname="NV4Anc" role="heading" aria-level="3">One of the Most Anti-LGBT Lawmakers in the Country Might Lose His Seat to a Transgender Journalist</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="FOvasf">Highly Cited</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">Mother Jones</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">Nov 6, 2017</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i140" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i140"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i139"></c-data>
                  </c-wiz>
                  <div role="presentation" class="O0WRkf oG5Srb HQ8yf C0oVfc iXfUzb" jslog="31225; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="Si8wCc" aria-label="See all related coverage" aria-disabled="false" data-tooltip="See all related coverage" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                    <a class="FKF6mc TpQm9d" href="story/d26xHMtQbswj7DMZ2eLKq0ywyeC2M?ned=us" aria-label="See all related coverage">
                      <div class="Vwe4Vb MbhUzd" jsname="ksKsZd"></div>
                      <div class="ZFr60d CeoRYc"></div>
                      <content class="CwaK9"><span class="RveJvd snByac"><span class="Xyuyg ME7ew">View full coverage</span><span class="DPvwYc sYvQuc ME7ew" aria-hidden="true"></span></span></content>
                    </a>
                  </div>
                </div>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:hV5qRc"></div>
            </div>
            <div class="LKUwLd" tabindex="0" jsaction="focus:anyny"></div>
            <div class="qwxlVe">
              <div role="button" class="mUbCce fKz7Od" jslog="31226; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="DZOBcb" aria-label="Expand Story" aria-disabled="false" tabindex="-1" data-tooltip="Expand Story" data-cveid="31227" data-eveid="31226" data-aria-expanded="Collapse Story" data-aria-collapsed="Expand Story" aria-hidden="true" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc PC1R3e" aria-hidden="true"></span></span></content>
              </div>
            </div>
          </div>
          <c-data id="i130"></c-data>
        </c-wiz>
        <c-data id="i129" jsdata=" Bh5rtc;https://www.washingtonpost.com/local/virginia-politics/danica-roem-will-be-vas-first-openly-transgender-elected-official-after-unseating-conservative-robert-g-marshall-in-house-race/2017/11/07/d534bdde-c0af-11e7-959c-fe2b598d8c00_story.html;14"></c-data>
      </c-wiz>
      <c-wiz jsrenderer="JTBx5b" class="PaqQNc f2t20b" jslog="31217; 3:null; track:impression,click; index:3" jsshadow="" jsdata="deferred-i141" data-p="%.@.]
        " jscontroller="Iq3X6d" jsaction="eUCkkd:KoToPc(preventDefault=true);JIbuQc:Xl5dff(DZOBcb);Izrsnf:KoToPc;Z8obd:KoToPc;NqdJMc:KoToPc; click:aXeNOc; keydown:I481le;" data-node-index="0;3" jsmodel="hc6Ubd">
        <c-wiz class="lPV2Xe k3Pzib" tabindex="0" jsshadow="" jsdata="deferred-i142" jsmodel="hc6Ubd">
          <div class="qx0yFc" jsname="UNxEwf">
            <div class="X20oP" jsaction="click:KoToPc(yobjD)">
              <a class="MWG8ab" href="http://www.cnn.com/2017/11/07/politics/president-donald-trump-south-korean-address/index.html" target="_blank" jsname="yobjD" jslog="31218; 1:EAciXWh0dHA6Ly93d3cuY25uLmNvbS8yMDE3LzExLzA3L3BvbGl0aWNzL3ByZXNpZGVudC1kb25hbGQtdHJ1bXAtc291dGgta29yZWFuLWFkZHJlc3MvaW5kZXguaHRtbA; track: impression,click" tabindex="-1"><img class="lmFAjc" title="CNN" aria-hidden="true" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSzro9Z9aektu0tTu4161tVOeEZe4Y7cTt8bFlmena0DHIzheSjLG7MpnXlg8ZgSH-EM8RYVe0ods" tabindex="-1"></a>
              <div class="LKUwLd" tabindex="0" jsaction="focus:aQjDLd"></div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              <div class="X20oP alVsqf" jsname="dNnLb">
                <div class="Sp02Fc">More about</div>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf" jslog="31222; 6:CgA; track:impression,click; index:0" jsshadow="" jsdata="deferred-i143" data-p="%.@.]
                  " data-node-index="0;3" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Donald%20Trump/Donald%20Trump?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Donald Trump</div>
                  </a>
                  <c-data id="i143" jsdata=" Bh5rtc;http://www.cnn.com/2017/11/07/politics/president-donald-trump-south-korean-address/index.html;15"></c-data>
                </c-wiz>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf" jslog="31222; 6:CgA; track:impression,click; index:1" jsshadow="" jsdata="deferred-i144" data-p="%.@.]
                  " data-node-index="0;3" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/North%20Korea/North%20Korea?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">North Korea</div>
                  </a>
                  <c-data id="i144" jsdata=" Bh5rtc;http://www.cnn.com/2017/11/07/politics/president-donald-trump-south-korean-address/index.html;15"></c-data>
                </c-wiz>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf" jslog="31222; 6:CgA; track:impression,click; index:2" jsshadow="" jsdata="deferred-i145" data-p="%.@.]
                  " data-node-index="0;3" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/President%20of%20the%20United%20States/President%20of%20the%20United%20States?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">President of the United States</div>
                  </a>
                  <c-data id="i145" jsdata=" Bh5rtc;http://www.cnn.com/2017/11/07/politics/president-donald-trump-south-korean-address/index.html;15"></c-data>
                </c-wiz>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf Qbfsob" jslog="31222; 6:CgA; track:impression,click; index:3" jsshadow="" jsdata="deferred-i146" data-p="%.@.]
                  " data-node-index="0;3" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Japan/Japan?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Japan</div>
                  </a>
                  <c-data id="i146" jsdata=" Bh5rtc;http://www.cnn.com/2017/11/07/politics/president-donald-trump-south-korean-address/index.html;15"></c-data>
                </c-wiz>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
            </div>
            <div class="v4IxVd" jsname="JdibKd">
              <div class="LKUwLd" tabindex="0" jsaction="focus:InbbBf"></div>
              <c-wiz class="M1Uqc kWyHVd" jslog="31219; 1:EAciXWh0dHA6Ly93d3cuY25uLmNvbS8yMDE3LzExLzA3L3BvbGl0aWNzL3ByZXNpZGVudC1kb25hbGQtdHJ1bXAtc291dGgta29yZWFuLWFkZHJlc3MvaW5kZXguaHRtbA; track: impression,click" data-thumbnail-url="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSzro9Z9aektu0tTu4161tVOeEZe4Y7cTt8bFlmena0DHIzheSjLG7MpnXlg8ZgSH-EM8RYVe0ods" jsshadow="" jsdata="deferred-i147" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.cnn.com/2017/11/07/politics/president-donald-trump-south-korean-address/index.html" jsname="NV4Anc" role="heading" aria-level="2">Trump tells North Korea: 'Do not try us'</a>
                <div class="a5SXAc iYiEmb">
                  <span class="IH8C7b Pc0Wt" jsname="lVVfob">CNN</span>
                  <span class="oM4Eqe">
                    <span class="d5kXP YBZVLb" jsname="U9s4xe">22m ago</span>
                    <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i148" jsname="ymIaV" jsmodel="hc6Ubd">
                      <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                        <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                        <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                      </div>
                      <c-data id="i148"></c-data>
                    </c-wiz>
                  </span>
                </div>
                <c-data id="i147"></c-data>
              </c-wiz>
              <div class="fkWPz">Related Coverage</div>
              <c-wiz class="M1Uqc cZgiac" jslog="31220; 1:EA4ib2h0dHA6Ly93d3cucG9saXRpZmFjdC5jb20vdHJ1dGgtby1tZXRlci9hcnRpY2xlLzIwMTcvbm92LzA2L2RvbmFsZC10cnVtcC1hbmQtZmlzaC1mb29kLWR1bXAtaG93LWVhcmx5LXJlcG9ydHMtLw; track: impression,click" jsshadow="" jsdata="deferred-i149" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsname="l0ilAc" jsmodel="hc6Ubd">
                <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.politifact.com/truth-o-meter/article/2017/nov/06/donald-trump-and-fish-food-dump-how-early-reports-/" jsname="NV4Anc" role="heading" aria-level="3">Donald Trump and the fish food dump: How early reports got it wrong</a>
                <div class="a5SXAc iYiEmb">
                  <span class="FOvasf">Fact Check</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">PolitiFact</span>
                  <span class="oM4Eqe">
                    <span class="d5kXP YBZVLb" jsname="U9s4xe">Nov 6, 2017</span>
                    <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i150" jsname="ymIaV" jsmodel="hc6Ubd">
                      <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                        <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                        <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                      </div>
                      <c-data id="i150"></c-data>
                    </c-wiz>
                  </span>
                </div>
                <c-data id="i149"></c-data>
              </c-wiz>
              <div class="cDUkId" jsname="vG6Vuf" tabindex="0" role="presentation" aria-label="Expand Story" jsaction="click:KoToPc; keydown:nSnvcc;">
                <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
                <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              </div>
              <div class="alVsqf">
                <div class="jJzAOb">
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:ImNodHRwczovL3d3dy5wb2xpdGljby5jb20vc3RvcnkvMjAxNy8xMS8wNy90cnVtcC1mb3JjZWQtdG8tYWJhbmRvbi10cmlwLXRvLWRtei1kdWUtdG8td2VhdGhlci0yNDQ2NjY; track: impression,click; index:0" jsshadow="" jsdata="deferred-i151" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="https://www.politico.com/story/2017/11/07/trump-forced-to-abandon-trip-to-dmz-due-to-weather-244666" jsname="NV4Anc" role="heading" aria-level="3">Trump forced to abandon secret trip to DMZ due to weather</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="IH8C7b Pc0Wt" jsname="lVVfob">Politico</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">1h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i152" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i152"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i151"></c-data>
                  </c-wiz>
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:EAUiLWh0dHA6Ly93d3cuMzhub3J0aC5vcmcvMjAxNy8xMS9yY2FybGluMTEwNzE3Lw; track: impression,click; index:1" jsshadow="" jsdata="deferred-i153" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.38north.org/2017/11/rcarlin110717/" jsname="NV4Anc" role="heading" aria-level="3">Death's Dusty Measure</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="FOvasf">International</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">38 North</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">12h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i154" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i154"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i153"></c-data>
                  </c-wiz>
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:EAIiRmh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTcvMTEvMDcvb3Bpbmlvbi90cnVtcC1ub3J0aC1rb3JlYS10YWxrLmh0bWw; track: impression,click; index:2" jsshadow="" jsdata="deferred-i155" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="https://www.nytimes.com/2017/11/07/opinion/trump-north-korea-talk.html" jsname="NV4Anc" role="heading" aria-level="3">How Trump Should Talk to North Korea</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="FOvasf">Opinion</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">New York Times</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">2h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i156" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i156"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i155"></c-data>
                  </c-wiz>
                  <c-wiz class="zaeuPd OEt0Bd" jslog="31307; 2:CgtjbHZuNDdDZzFVdw; track: impression,click; index:3" data-yt-video-id="clvn47Cg1Uw" data-ncl="dzrEmskq9Km2IUMQii9_QS1Nb3OXM" jsshadow="" jsdata="deferred-i157" jscontroller="E9EmFb" jsaction="JIbuQc: euCgFf(ymIaV); keydown:I481le;" jsmodel="hc6Ubd">
                    <div class="NQ2iDc JAhkXe" tabindex="0" jsaction="click:HylBab" role="presentation">
                      <div class="RISdJb u794Bf">
                        <img class="kyrgsf ho144" src="//i.ytimg.com/vi/clvn47Cg1Uw/default.jpg" jsname="HIXA3e">
                        <div class="VaKSmd zlxCQc"><span class="DPvwYc ufBmke Dp59vc" aria-hidden="true"></span><span class="Cbb6Wb">3:09</span></div>
                      </div>
                      <div class="jAT6sd TcEvp">
                        <span class="JoEvud hzdq5d ME7ew" jsname="zljxwd">Trump urges N Korea to 'come to the table'</span>
                        <div class="pSg0vf iYiEmb">
                          <span class="G3ZKgb">Video</span>
                          <span class="LIYKqc Pc0Wt">
                            <span jsname="Mw9GVe">Aljazeera.com</span>
                            <c-wiz class="unCtkb" jsshadow="" jsdata="deferred-i158" jsname="ymIaV" jsmodel="hc6Ubd">
                              <div role="button" class="mUbCce fKz7Od HksA2c unCtkb" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                                <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                                <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                              </div>
                              <c-data id="i158"></c-data>
                            </c-wiz>
                          </span>
                        </div>
                      </div>
                    </div>
                    <c-data id="i157"></c-data>
                  </c-wiz>
                  <div role="presentation" class="O0WRkf oG5Srb HQ8yf C0oVfc iXfUzb" jslog="31225; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="Si8wCc" aria-label="See all related coverage" aria-disabled="false" data-tooltip="See all related coverage" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                    <a class="FKF6mc TpQm9d" href="story/dzrEmskq9Km2IUMQii9_QS1Nb3OXM?ned=us" aria-label="See all related coverage">
                      <div class="Vwe4Vb MbhUzd" jsname="ksKsZd"></div>
                      <div class="ZFr60d CeoRYc"></div>
                      <content class="CwaK9"><span class="RveJvd snByac"><span class="Xyuyg ME7ew">View full coverage</span><span class="DPvwYc sYvQuc ME7ew" aria-hidden="true"></span></span></content>
                    </a>
                  </div>
                </div>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:hV5qRc"></div>
            </div>
            <div class="LKUwLd" tabindex="0" jsaction="focus:anyny"></div>
            <div class="qwxlVe">
              <div role="button" class="mUbCce fKz7Od" jslog="31226; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="DZOBcb" aria-label="Expand Story" aria-disabled="false" tabindex="-1" data-tooltip="Expand Story" data-cveid="31227" data-eveid="31226" data-aria-expanded="Collapse Story" data-aria-collapsed="Expand Story" aria-hidden="true" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc PC1R3e" aria-hidden="true"></span></span></content>
              </div>
            </div>
          </div>
          <c-data id="i142"></c-data>
        </c-wiz>
        <c-data id="i141" jsdata=" Bh5rtc;http://www.cnn.com/2017/11/07/politics/president-donald-trump-south-korean-address/index.html;15"></c-data>
      </c-wiz>
      <c-wiz jsrenderer="JTBx5b" class="PaqQNc f2t20b" jslog="31217; 3:null; track:impression,click; index:4" jsshadow="" jsdata="deferred-i159" data-p="%.@.]
        " jscontroller="Iq3X6d" jsaction="eUCkkd:KoToPc(preventDefault=true);JIbuQc:Xl5dff(DZOBcb);Izrsnf:KoToPc;Z8obd:KoToPc;NqdJMc:KoToPc; click:aXeNOc; keydown:I481le;" data-node-index="0;4" jsmodel="hc6Ubd">
        <c-wiz class="lPV2Xe k3Pzib" tabindex="0" jsshadow="" jsdata="deferred-i160" jsmodel="hc6Ubd">
          <div class="qx0yFc" jsname="UNxEwf">
            <div class="X20oP" jsaction="click:KoToPc(yobjD)">
              <a class="MWG8ab" href="http://www.latimes.com/nation/la-na-new-york-mayor-election-20171107-story.html" target="_blank" jsname="yobjD" jslog="31218; 1:EAciT2h0dHA6Ly93d3cubGF0aW1lcy5jb20vbmF0aW9uL2xhLW5hLW5ldy15b3JrLW1heW9yLWVsZWN0aW9uLTIwMTcxMTA3LXN0b3J5Lmh0bWw; track: impression,click" tabindex="-1"><img class="lmFAjc" title="Los Angeles Times" aria-hidden="true" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRweTFblkYrGSlltSUh_XoctqUN9qPA6-pqVCH0aSvyOE9LJJv1PYBu2hz0wj76M45Y8G7q-p1wFuk" tabindex="-1"></a>
              <div class="LKUwLd" tabindex="0" jsaction="focus:aQjDLd"></div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              <div class="X20oP alVsqf" jsname="dNnLb">
                <div class="Sp02Fc">More about</div>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf Qbfsob" jslog="31222; 6:CgA; track:impression,click; index:0" jsshadow="" jsdata="deferred-i161" data-p="%.@.]
                  " data-node-index="0;4" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Bill%20de%20Blasio/Bill%20de%20Blasio?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Bill de Blasio</div>
                  </a>
                  <c-data id="i161" jsdata=" Bh5rtc;http://www.latimes.com/nation/la-na-new-york-mayor-election-20171107-story.html;16"></c-data>
                </c-wiz>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
            </div>
            <div class="v4IxVd" jsname="JdibKd">
              <div class="LKUwLd" tabindex="0" jsaction="focus:InbbBf"></div>
              <c-wiz class="M1Uqc kWyHVd" jslog="31219; 1:EAciT2h0dHA6Ly93d3cubGF0aW1lcy5jb20vbmF0aW9uL2xhLW5hLW5ldy15b3JrLW1heW9yLWVsZWN0aW9uLTIwMTcxMTA3LXN0b3J5Lmh0bWw; track: impression,click" data-thumbnail-url="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRweTFblkYrGSlltSUh_XoctqUN9qPA6-pqVCH0aSvyOE9LJJv1PYBu2hz0wj76M45Y8G7q-p1wFuk" jsshadow="" jsdata="deferred-i162" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.latimes.com/nation/la-na-new-york-mayor-election-20171107-story.html" jsname="NV4Anc" role="heading" aria-level="2">It may be Trump's hometown, but it's de Blasio's city — and will be for the next four years</a>
                <div class="a5SXAc iYiEmb">
                  <span class="IH8C7b Pc0Wt" jsname="lVVfob">Los Angeles Times</span>
                  <span class="oM4Eqe">
                    <span class="d5kXP YBZVLb" jsname="U9s4xe">54m ago</span>
                    <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i163" jsname="ymIaV" jsmodel="hc6Ubd">
                      <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                        <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                        <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                      </div>
                      <c-data id="i163"></c-data>
                    </c-wiz>
                  </span>
                </div>
                <c-data id="i162"></c-data>
              </c-wiz>
              <div class="fkWPz">Related Coverage</div>
              <c-wiz class="M1Uqc cZgiac" jslog="31220; 1:EBIiR2h0dHA6Ly93d3cubnlkYWlseW5ld3MuY29tL29waW5pb24vbm92LTctZWxlY3Rpb24tZGF5LWFydGljbGUtMS4zNjE1NDcz; track: impression,click" jsshadow="" jsdata="deferred-i164" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsname="l0ilAc" jsmodel="hc6Ubd">
                <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.nydailynews.com/opinion/nov-7-election-day-article-1.3615473" jsname="NV4Anc" role="heading" aria-level="3">Readers sound off Election Day</a>
                <div class="a5SXAc iYiEmb">
                  <span class="FOvasf">Local Source</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">New York Daily News</span>
                  <span class="oM4Eqe">
                    <span class="d5kXP YBZVLb" jsname="U9s4xe">19h ago</span>
                    <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i165" jsname="ymIaV" jsmodel="hc6Ubd">
                      <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                        <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                        <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                      </div>
                      <c-data id="i165"></c-data>
                    </c-wiz>
                  </span>
                </div>
                <c-data id="i164"></c-data>
              </c-wiz>
              <div class="cDUkId" jsname="vG6Vuf" tabindex="0" role="presentation" aria-label="Expand Story" jsaction="click:KoToPc; keydown:nSnvcc;">
                <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
                <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              </div>
              <div class="alVsqf">
                <div class="jJzAOb">
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:IpABaHR0cHM6Ly93d3cud2FzaGluZ3RvbnBvc3QuY29tL3Bvd2VycG9zdC9kZS1ibGFzaW8td2lucy1zZWNvbmQtdGVybS1hcy1uZXcteW9yay1tYXlvci8yMDE3LzExLzA3LzAxNzlhMjg0LWMzZTgtMTFlNy1hYWUwLWNiMThhOGMyOWM2NV9zdG9yeS5odG1s; track: impression,click; index:0" jsshadow="" jsdata="deferred-i166" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="https://www.washingtonpost.com/powerpost/de-blasio-wins-second-term-as-new-york-mayor/2017/11/07/0179a284-c3e8-11e7-aae0-cb18a8c29c65_story.html" jsname="NV4Anc" role="heading" aria-level="3">De Blasio wins second term as New York mayor</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="IH8C7b Pc0Wt" jsname="lVVfob">Washington Post</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">33m ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i167" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i167"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i166"></c-data>
                  </c-wiz>
                  <div role="presentation" class="O0WRkf oG5Srb HQ8yf C0oVfc iXfUzb" jslog="31225; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="Si8wCc" aria-label="See all related coverage" aria-disabled="false" data-tooltip="See all related coverage" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                    <a class="FKF6mc TpQm9d" href="story/d9o8OKALAj7F1VMEtiV6CwU_mlVzM?ned=us" aria-label="See all related coverage">
                      <div class="Vwe4Vb MbhUzd" jsname="ksKsZd"></div>
                      <div class="ZFr60d CeoRYc"></div>
                      <content class="CwaK9"><span class="RveJvd snByac"><span class="Xyuyg ME7ew">View full coverage</span><span class="DPvwYc sYvQuc ME7ew" aria-hidden="true"></span></span></content>
                    </a>
                  </div>
                </div>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:hV5qRc"></div>
            </div>
            <div class="LKUwLd" tabindex="0" jsaction="focus:anyny"></div>
            <div class="qwxlVe">
              <div role="button" class="mUbCce fKz7Od" jslog="31226; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="DZOBcb" aria-label="Expand Story" aria-disabled="false" tabindex="-1" data-tooltip="Expand Story" data-cveid="31227" data-eveid="31226" data-aria-expanded="Collapse Story" data-aria-collapsed="Expand Story" aria-hidden="true" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc PC1R3e" aria-hidden="true"></span></span></content>
              </div>
            </div>
          </div>
          <c-data id="i160"></c-data>
        </c-wiz>
        <c-data id="i159" jsdata=" Bh5rtc;http://www.latimes.com/nation/la-na-new-york-mayor-election-20171107-story.html;16"></c-data>
      </c-wiz>
      <c-wiz jsrenderer="JTBx5b" class="PaqQNc  Qbfsob f2t20b" jslog="31217; 3:null; track:impression,click; index:5" jsshadow="" jsdata="deferred-i168" data-p="%.@.]
        " jscontroller="Iq3X6d" jsaction="eUCkkd:KoToPc(preventDefault=true);JIbuQc:Xl5dff(DZOBcb);Izrsnf:KoToPc;Z8obd:KoToPc;NqdJMc:KoToPc; click:aXeNOc; keydown:I481le;" data-node-index="0;5" jsmodel="hc6Ubd">
        <c-wiz class="lPV2Xe k3Pzib" tabindex="0" jsshadow="" jsdata="deferred-i169" jsmodel="hc6Ubd">
          <div class="qx0yFc" jsname="UNxEwf">
            <div class="X20oP" jsaction="click:KoToPc(yobjD)">
              <a class="MWG8ab" href="http://www.espn.com/mlb/story/_/id/21332949/halladay-example-generation-pitchers" target="_blank" jsname="yobjD" jslog="31218; 1:EAciUGh0dHA6Ly93d3cuZXNwbi5jb20vbWxiL3N0b3J5L18vaWQvMjEzMzI5NDkvaGFsbGFkYXktZXhhbXBsZS1nZW5lcmF0aW9uLXBpdGNoZXJz; track: impression,click" tabindex="-1"><img class="lmFAjc" title="ESPN" aria-hidden="true" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWuDH54AYS-PAszU6g-wcFPBguQ4SQx8LwDodS6siD5HQb8mEHdJd4O9fFGNMJc5svUw5h5iFiSQ" tabindex="-1"></a>
              <div class="LKUwLd" tabindex="0" jsaction="focus:aQjDLd"></div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              <div class="X20oP alVsqf" jsname="dNnLb">
                <div class="Sp02Fc">More about</div>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf" jslog="31222; 6:CgA; track:impression,click; index:0" jsshadow="" jsdata="deferred-i170" data-p="%.@.]
                  " data-node-index="0;5" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Roy%20Halladay/Roy%20Halladay?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Roy Halladay</div>
                  </a>
                  <c-data id="i170" jsdata=" Bh5rtc;http://www.espn.com/mlb/story/_/id/21332949/halladay-example-generation-pitchers;17"></c-data>
                </c-wiz>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf" jslog="31222; 6:CgA; track:impression,click; index:1" jsshadow="" jsdata="deferred-i171" data-p="%.@.]
                  " data-node-index="0;5" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/Philadelphia%20Phillies/Philadelphia%20Phillies?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">Philadelphia Phillies</div>
                  </a>
                  <c-data id="i171" jsdata=" Bh5rtc;http://www.espn.com/mlb/story/_/id/21332949/halladay-example-generation-pitchers;17"></c-data>
                </c-wiz>
                <c-wiz jsrenderer="JTBx5b" class="HzT8Gd QGRmIf Qbfsob" jslog="31222; 6:CgA; track:impression,click; index:2" jsshadow="" jsdata="deferred-i172" data-p="%.@.]
                  " data-node-index="0;5" jsmodel="hc6Ubd">
                  <a target="_self" href="./explore/section/q/MLB/MLB?ned=us" class="J3nBBd ME7ew" role="complementary">
                    <div class="Q3vG6d kzAuJ">MLB</div>
                  </a>
                  <c-data id="i172" jsdata=" Bh5rtc;http://www.espn.com/mlb/story/_/id/21332949/halladay-example-generation-pitchers;17"></c-data>
                </c-wiz>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
            </div>
            <div class="v4IxVd" jsname="JdibKd">
              <div class="LKUwLd" tabindex="0" jsaction="focus:InbbBf"></div>
              <c-wiz class="M1Uqc kWyHVd" jslog="31219; 1:EAciUGh0dHA6Ly93d3cuZXNwbi5jb20vbWxiL3N0b3J5L18vaWQvMjEzMzI5NDkvaGFsbGFkYXktZXhhbXBsZS1nZW5lcmF0aW9uLXBpdGNoZXJz; track: impression,click" data-thumbnail-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWuDH54AYS-PAszU6g-wcFPBguQ4SQx8LwDodS6siD5HQb8mEHdJd4O9fFGNMJc5svUw5h5iFiSQ" jsshadow="" jsdata="deferred-i173" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.espn.com/mlb/story/_/id/21332949/halladay-example-generation-pitchers" jsname="NV4Anc" role="heading" aria-level="2">Miller: Halladay an example for a generation of pitchers</a>
                <div class="a5SXAc iYiEmb">
                  <span class="IH8C7b Pc0Wt" jsname="lVVfob">ESPN</span>
                  <span class="oM4Eqe">
                    <span class="d5kXP YBZVLb" jsname="U9s4xe">1h ago</span>
                    <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i174" jsname="ymIaV" jsmodel="hc6Ubd">
                      <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                        <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                        <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                      </div>
                      <c-data id="i174"></c-data>
                    </c-wiz>
                  </span>
                </div>
                <c-data id="i173"></c-data>
              </c-wiz>
              <div class="fkWPz">Related Coverage</div>
              <c-wiz jsrenderer="JTBx5b" class="zaeuPd uZELd" jslog="31308; 2:CgtCbk1LOXF3UjhQcw; track: impression,click" data-yt-video-id="BnMK9qwR8Ps" data-ncl="dXfjYHrKUdS9C3MT5YN5P1rhrA5KM" jsshadow="" jsdata="deferred-i175" data-p="%.@.]
                " jscontroller="E9EmFb" jsaction="JIbuQc: euCgFf(ymIaV); keydown:I481le;" jsname="Bp15bc" data-node-index="0;5" jsmodel="hc6Ubd">
                <div class="NQ2iDc JAhkXe" tabindex="0" jsaction="click:HylBab" role="presentation">
                  <div class="RISdJb u794Bf">
                    <img class="kyrgsf ho144" src="//i.ytimg.com/vi/BnMK9qwR8Ps/default.jpg" jsname="HIXA3e">
                    <div class="VaKSmd zlxCQc"><span class="DPvwYc ufBmke Dp59vc" aria-hidden="true"></span><span class="Cbb6Wb">17:40</span></div>
                  </div>
                  <div class="jAT6sd TcEvp">
                    <span class="JoEvud hzdq5d ME7ew" jsname="zljxwd">'Doctober' 6, 2010: Halladay no-hits Reds in NLDS</span>
                    <div class="pSg0vf iYiEmb">
                      <span class="G3ZKgb">Video</span>
                      <span class="LIYKqc Pc0Wt">
                        <span jsname="Mw9GVe">MLB.com</span>
                        <c-wiz class="unCtkb" jsshadow="" jsdata="deferred-i176" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c unCtkb" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i176"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                  </div>
                </div>
                <c-data id="i175" jsdata=" Bh5rtc;http://www.espn.com/mlb/story/_/id/21332949/halladay-example-generation-pitchers;17"></c-data>
              </c-wiz>
              <div class="cDUkId" jsname="vG6Vuf" tabindex="0" role="presentation" aria-label="Expand Story" jsaction="click:KoToPc; keydown:nSnvcc;">
                <div class="LKUwLd" tabindex="0" jsaction="focus:GBEkSb"></div>
                <div class="LKUwLd" tabindex="0" jsaction="focus:ZWOl6d"></div>
              </div>
              <div class="alVsqf">
                <div class="jJzAOb">
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:IlpodHRwOi8vbnlwb3N0LmNvbS8yMDE3LzExLzA3L3JveS1oYWxsYWRheS13YXMtYS1jb21wbGV0ZS1wbGF5ZXItYW5kLXBlcnNvbi1pbi1ldmVyeS1zZW5zZS8; track: impression,click; index:0" jsshadow="" jsdata="deferred-i177" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://nypost.com/2017/11/07/roy-halladay-was-a-complete-player-and-person-in-every-sense/" jsname="NV4Anc" role="heading" aria-level="3">Roy Halladay was a complete player and person in every sense</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="IH8C7b Pc0Wt" jsname="lVVfob">New York Post</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">3h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i178" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i178"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i177"></c-data>
                  </c-wiz>
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:EA0ia2h0dHA6Ly93d3cucG9wdWxhcm1lY2hhbmljcy5jb20vZmxpZ2h0L25ld3MvYTI4OTQ0L3JveS1oYWxsYWRheS1raWxsZWQtaWNvbi1hNS1hbXBoaWJpb3VzLWFpcmNyYWZ0LWNyYXNoZXMv; track: impression,click; index:1" jsshadow="" jsdata="deferred-i179" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="http://www.popularmechanics.com/flight/news/a28944/roy-halladay-killed-icon-a5-amphibious-aircraft-crashes/" jsname="NV4Anc" role="heading" aria-level="3">MLB Pitcher Roy Halladay Killed in Icon A5 Amphibious Airplane Crash</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="FOvasf">Featured</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">Popular Mechanics</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">5h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i180" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i180"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i179"></c-data>
                  </c-wiz>
                  <c-wiz class="M1Uqc MLSuAf" jslog="31221; 1:EAIikQFodHRwczovL3d3dy51c2F0b2RheS5jb20vc3Rvcnkvc3BvcnRzL21sYi9jb2x1bW5pc3QvYm9iLW5pZ2h0ZW5nYWxlLzIwMTcvMTEvMDcvcm95LWhhbGxhZGF5LWdlbnVpbmUtYWNlLXdoby1zeW1ib2xpemVkLWNvbXBldGl0aXZlbmVzcy84NDE3MTUwMDEv; track: impression,click; index:2" jsshadow="" jsdata="deferred-i181" jscontroller="nr9dEc" jsaction="rcuQ6b : npT2md;JIbuQc: euCgFf(ymIaV); click: VFSEAc(NV4Anc);" jsmodel="hc6Ubd">
                    <a class="nuEeue hzdq5d ME7ew" target="_blank" href="https://www.usatoday.com/story/sports/mlb/columnist/bob-nightengale/2017/11/07/roy-halladay-genuine-ace-who-symbolized-competitiveness/841715001/" jsname="NV4Anc" role="heading" aria-level="3">Roy Halladay: A genuine ace who symbolized competitiveness</a>
                    <div class="a5SXAc iYiEmb">
                      <span class="FOvasf">Opinion</span> <span class="IH8C7b Pc0Wt" jsname="lVVfob">USA TODAY</span>
                      <span class="oM4Eqe">
                        <span class="d5kXP YBZVLb" jsname="U9s4xe">3h ago</span>
                        <c-wiz class="jjs37b" jsshadow="" jsdata="deferred-i182" jsname="ymIaV" jsmodel="hc6Ubd">
                          <div role="button" class="mUbCce fKz7Od HksA2c jjs37b" jslog="34938; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="ymIaV" aria-label="Share" aria-disabled="false" tabindex="0" data-tooltip="Share" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                            <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                            <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc lp2Tfd LNKTWd" aria-hidden="true" jsname="Cgn8bd"></span></span></content>
                          </div>
                          <c-data id="i182"></c-data>
                        </c-wiz>
                      </span>
                    </div>
                    <c-data id="i181"></c-data>
                  </c-wiz>
                  <div role="presentation" class="O0WRkf oG5Srb HQ8yf C0oVfc iXfUzb" jslog="31225; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="Si8wCc" aria-label="See all related coverage" aria-disabled="false" data-tooltip="See all related coverage" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                    <a class="FKF6mc TpQm9d" href="story/dXfjYHrKUdS9C3MT5YN5P1rhrA5KM?ned=us" aria-label="See all related coverage">
                      <div class="Vwe4Vb MbhUzd" jsname="ksKsZd"></div>
                      <div class="ZFr60d CeoRYc"></div>
                      <content class="CwaK9"><span class="RveJvd snByac"><span class="Xyuyg ME7ew">View full coverage</span><span class="DPvwYc sYvQuc ME7ew" aria-hidden="true"></span></span></content>
                    </a>
                  </div>
                </div>
              </div>
              <div class="LKUwLd" tabindex="0" jsaction="focus:hV5qRc"></div>
            </div>
            <div class="LKUwLd" tabindex="0" jsaction="focus:anyny"></div>
            <div class="qwxlVe">
              <div role="button" class="mUbCce fKz7Od" jslog="31226; track: click" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" jsname="DZOBcb" aria-label="Expand Story" aria-disabled="false" tabindex="-1" data-tooltip="Expand Story" data-cveid="31227" data-eveid="31226" data-aria-expanded="Collapse Story" data-aria-collapsed="Expand Story" aria-hidden="true" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                <div class="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                <content class="xjKiLb"><span style="top: -12px"><span class="DPvwYc PC1R3e" aria-hidden="true"></span></span></content>
              </div>
            </div>
          </div>
          <c-data id="i169"></c-data>
        </c-wiz>
        <c-data id="i168" jsdata=" Bh5rtc;http://www.espn.com/mlb/story/_/id/21332949/halladay-example-generation-pitchers;17"></c-data>
      </c-wiz>
    </div>
    <c-data id="i98" jsdata=" RcW86c;Top|32+Stories;18"></c-data>
  </c-wiz>
  </div>
  `;
});
