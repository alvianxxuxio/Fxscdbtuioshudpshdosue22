const _0x2494cc=_0x2cb9;function _0x3ad6(){const _0x47f509=['audio/mp4','\x0a*•\x20Views:*\x20','91DqRebD','Failed\x20to\x20delete\x20audio\x20file:\x20','22Qxdctn','*[\x20YOUTUBE\x20MP3\x20]*\x0a*•\x20Caption:*\x20','response','1671059jNheuA','.ytv\x20','seconds','hello','sender','.mp4','sendMessage','1535TBROQj','*•\x20Example\x20:*\x20','download','YOUTUBE\x20MP3','.mp3','Deleted\x20audio\x20file:\x20','24GpXRNH','util','timestamp','4yztsfM','Error\x20fetching\x20YouTube\x20content:','44eONrdB','decodeJid','reply','738LyDgDQ','audio','Error\x20fetching\x20YouTube\x20content','*[\x20DURATION\x20TOO\x20LONG\x20]*\x0aI\x20cannot\x20download\x20media\x20that\x20exceeds\x20*1\x20hour*\x20duration.','command','&apikey=aluxi','duration','ALVIAN\x20UXIO\x20Inc.','readFileSync','thumbnail','image','image/png','1216491bMRhKc','YOUTUBE','tags','17767gEUikR','Mohon\x20tunggu,\x20sedang\x20mengirim\x20audio...','Want\x20to\x20download\x20the\x20video?','play','ytmp3\x20*[query]*','stream','author','222088bgJTuk','videoId','./package.json','get','chat','466750GBMKav','tmpdir','axios','\x20*[link]*','error','url','result','description','success','exports','Please\x20wait...','video','3274866dfwjmw','ago','\x0a*•\x20Duration:*\x20','help','Download\x20Video','data','./media/alxo.png'];_0x3ad6=function(){return _0x47f509;};return _0x3ad6();}(function(_0x5b222f,_0x2dd75e){const _0x1d40a9=_0x2cb9,_0x1b90e6=_0x5b222f();while(!![]){try{const _0xcfedc8=-parseInt(_0x1d40a9(0xb1))/0x1*(parseInt(_0x1d40a9(0x9f))/0x2)+-parseInt(_0x1d40a9(0xae))/0x3*(-parseInt(_0x1d40a9(0x9d))/0x4)+-parseInt(_0x1d40a9(0x94))/0x5*(-parseInt(_0x1d40a9(0xa2))/0x6)+parseInt(_0x1d40a9(0x88))/0x7*(parseInt(_0x1d40a9(0xb8))/0x8)+-parseInt(_0x1d40a9(0x7f))/0x9+parseInt(_0x1d40a9(0xbd))/0xa*(-parseInt(_0x1d40a9(0x8a))/0xb)+-parseInt(_0x1d40a9(0x9a))/0xc*(-parseInt(_0x1d40a9(0x8d))/0xd);if(_0xcfedc8===_0x2dd75e)break;else _0x1b90e6['push'](_0x1b90e6['shift']());}catch(_0x4bbfce){_0x1b90e6['push'](_0x1b90e6['shift']());}}}(_0x3ad6,0x34093));const axios=require(_0x2494cc(0xbf)),fs=require('fs'),{pipeline}=require(_0x2494cc(0xb6)),{promisify}=require(_0x2494cc(0x9b)),streamPipeline=promisify(pipeline),os=require('os'),downloadYouTubeContent=async _0x4c32ac=>{const _0x5e82e5=_0x2494cc;try{const _0x48fd21=await axios[_0x5e82e5(0xbb)]('https://api.alvianuxio.my.id/api/ytdl?message='+_0x4c32ac+_0x5e82e5(0xa7));if(_0x48fd21[_0x5e82e5(0x84)]&&_0x48fd21[_0x5e82e5(0x84)][_0x5e82e5(0x84)]&&_0x48fd21[_0x5e82e5(0x84)]['data'][_0x5e82e5(0x8c)]&&_0x48fd21[_0x5e82e5(0x84)][_0x5e82e5(0x84)][_0x5e82e5(0x8c)][_0x5e82e5(0xc5)]&&_0x48fd21[_0x5e82e5(0x84)]['data'][_0x5e82e5(0x8c)]['result']){const _0x2bffc5=_0x48fd21[_0x5e82e5(0x84)][_0x5e82e5(0x84)][_0x5e82e5(0x8c)][_0x5e82e5(0xc3)];return{'success':!![],'result':{'type':'video','videoId':_0x2bffc5[_0x5e82e5(0xb9)],'url':_0x2bffc5[_0x5e82e5(0xc2)],'title':_0x2bffc5['title'],'description':_0x2bffc5[_0x5e82e5(0xc4)],'image':_0x2bffc5[_0x5e82e5(0xac)],'thumbnail':_0x2bffc5[_0x5e82e5(0xab)],'seconds':_0x2bffc5[_0x5e82e5(0x8f)],'timestamp':_0x2bffc5[_0x5e82e5(0x9c)],'duration':_0x2bffc5[_0x5e82e5(0xa8)]['seconds'],'ago':_0x2bffc5[_0x5e82e5(0x80)],'views':_0x2bffc5['views'],'author':{'name':_0x2bffc5[_0x5e82e5(0xb7)]['name'],'url':_0x2bffc5[_0x5e82e5(0xb7)][_0x5e82e5(0xc2)]},'download':{'audio':_0x2bffc5[_0x5e82e5(0x96)]['audio'],'video':_0x2bffc5[_0x5e82e5(0x96)][_0x5e82e5(0x7e)]}}};}else return{'success':![],'message':'No\x20results\x20found'};}catch(_0x1cc4ec){return console[_0x5e82e5(0xc1)](_0x5e82e5(0x9e),_0x1cc4ec),{'success':![],'message':_0x5e82e5(0xa4)};}},handler=async(_0x21a97a,{conn:_0x31ae62,command:_0x139555,text:_0x257161,usedPrefix:_0x4d4c76})=>{const _0x18c7d4=_0x2494cc;_0x31ae62[_0x18c7d4(0xb4)]=_0x31ae62[_0x18c7d4(0xb4)]||{};if(!_0x257161)throw _0x18c7d4(0x95)+(_0x4d4c76+_0x139555)+_0x18c7d4(0xc0);_0x21a97a[_0x18c7d4(0xa1)](_0x18c7d4(0x7d));try{const _0x35d612=await downloadYouTubeContent(_0x257161);if(!_0x35d612[_0x18c7d4(0xc5)])throw _0x35d612['message'];const {title:_0x484a8f,thumbnail:_0x33f2f7,views:_0x34bf27,ago:_0x4abaa8,url:_0x1dc150,seconds:_0x17b4ce,download:_0x1496dc}=_0x35d612[_0x18c7d4(0xc3)];if(_0x17b4ce>0xe10)return _0x21a97a[_0x18c7d4(0xa1)](_0x18c7d4(0xa5));const _0xd059cc=_0x18c7d4(0x8b)+_0x484a8f+_0x18c7d4(0x87)+_0x34bf27+'\x0a*•\x20Ago:*\x20'+_0x4abaa8+_0x18c7d4(0x81)+_0x17b4ce+'\x20seconds\x0a*•\x20Thumbnail:*\x20'+_0x33f2f7+'\x0a*•\x20Source\x20Yt:*\x20'+_0x1dc150;await _0x31ae62['sendMessage'](_0x21a97a['chat'],{'document':fs[_0x18c7d4(0xaa)](_0x18c7d4(0xba)),'fileName':_0x18c7d4(0xaf),'mimetype':_0x18c7d4(0xad),'fileLength':0x38d7ea4c67fff,'jpegThumbnail':fs[_0x18c7d4(0xaa)](_0x18c7d4(0x85)),'description':_0x18c7d4(0x90),'caption':_0xd059cc,'contextInfo':{'isForwarded':!![],'mentionedJid':[_0x21a97a?.[_0x18c7d4(0x91)]],'forwardedNewsletterMessageInfo':{'newsletterJid':'120363199957492480@newsletter','newsletterName':_0x18c7d4(0xa9),'serverMessageId':-0x1},'businessMessageForwardInfo':{'businessOwnerJid':_0x31ae62[_0x18c7d4(0xa0)](_0x31ae62['user']['id'])},'externalAdReply':{'title':_0x18c7d4(0x97),'body':'©\x20ALUXI\x20-\x20MD','thumbnail':(await _0x31ae62['getFile'](_0x33f2f7))['data'],'sourceUrl':'-','mediaType':0x1,'renderLargerThumbnail':!![]}}},{'quoted':_0x21a97a});const _0xb3e2d3=await axios[_0x18c7d4(0xbb)](_0x1496dc[_0x18c7d4(0xa3)],{'responseType':_0x18c7d4(0xb6)});_0x21a97a[_0x18c7d4(0xa1)](_0x18c7d4(0xb2));const _0x24181a=os[_0x18c7d4(0xbe)](),_0x22b4e3=_0x24181a+'/'+_0x484a8f+_0x18c7d4(0x92);await streamPipeline(_0xb3e2d3[_0x18c7d4(0x84)],fs['createWriteStream'](_0x22b4e3)),await _0x31ae62[_0x18c7d4(0x93)](_0x21a97a[_0x18c7d4(0xbc)],{'audio':fs[_0x18c7d4(0xaa)](_0x22b4e3),'mimetype':_0x18c7d4(0x86),'fileName':_0x484a8f+_0x18c7d4(0x98)},{'quoted':_0x21a97a}),fs['unlink'](_0x22b4e3,_0x1d6dcc=>{const _0x15dc4f=_0x18c7d4;if(_0x1d6dcc)console[_0x15dc4f(0xc1)](_0x15dc4f(0x89)+_0x1d6dcc);else console['log'](_0x15dc4f(0x99)+_0x22b4e3);});const _0x14aa19=[{'buttonId':_0x18c7d4(0x8e)+_0x1496dc[_0x18c7d4(0x7e)],'buttonText':{'displayText':_0x18c7d4(0x83)},'type':0x1}],_0x53942f={'text':_0x18c7d4(0xb3),'buttons':_0x14aa19,'headerType':0x1};}catch(_0x96189e){_0x21a97a[_0x18c7d4(0xa1)]('Error:\x20'+_0x96189e);}};function _0x2cb9(_0x250a74,_0x5033d9){const _0x3ad6b6=_0x3ad6();return _0x2cb9=function(_0x2cb915,_0x2466a3){_0x2cb915=_0x2cb915-0x7c;let _0x508c5b=_0x3ad6b6[_0x2cb915];return _0x508c5b;},_0x2cb9(_0x250a74,_0x5033d9);}handler[_0x2494cc(0x82)]=[_0x2494cc(0xb5)],handler[_0x2494cc(0xb0)]=['downloader'],handler[_0x2494cc(0xa6)]=/^(ytmp3|yta|ytaudio)$/i,module[_0x2494cc(0x7c)]=handler;