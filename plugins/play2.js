const _0x145391=_0x13bf;function _0x2c8e(){const _0x2e34af=['Error:\x20','stream','audio','sendMessage','videoId','data','result','Mohon\x20tunggu,\x20sedang\x20mengirim\x20audio...','328936VrEcGm','chat','3cdOOdU','seconds','message','duration','&apikey=aluxi','.ytv\x20','createWriteStream','description','exports','timestamp','log','audio/mp4','error','response','18bNTpDc','Error\x20fetching\x20YouTube\x20content:','5754661qMftKQ','https://api.alvianuxio.my.id/api/ytdl?message=','Error\x20fetching\x20YouTube\x20content','\x0a*•\x20Ago:*\x20','.mp3','views','video','download','ago','1726700NmbjVH','tmpdir','776244wtfdyI','help','url','1081888aDFyIM','\x0a*•\x20Duration:*\x20','util','Deleted\x20audio\x20file:\x20','Download\x20Video','No\x20results\x20found','Failed\x20to\x20delete\x20audio\x20file:\x20','Please\x20wait...','*•\x20Example\x20:*\x20','250145eahzqe','5pIJyjs','command','success','axios','2tNGjCX','name','reply','\x20*[query]*','author','get','play','*[\x20DURATION\x20TOO\x20LONG\x20]*\x0aI\x20cannot\x20download\x20media\x20that\x20exceeds\x20*1\x20hour*\x20duration.','downloader','835716Vhcceu','\x0a*•\x20Views:*\x20','thumbnail'];_0x2c8e=function(){return _0x2e34af;};return _0x2c8e();}(function(_0x761a48,_0x54b7d0){const _0x27b489=_0x13bf,_0x339ca7=_0x761a48();while(!![]){try{const _0x5edcdd=-parseInt(_0x27b489(0x142))/0x1*(-parseInt(_0x27b489(0x147))/0x2)+-parseInt(_0x27b489(0x11b))/0x3*(-parseInt(_0x27b489(0x139))/0x4)+parseInt(_0x27b489(0x143))/0x5*(parseInt(_0x27b489(0x136))/0x6)+parseInt(_0x27b489(0x10e))/0x7+-parseInt(_0x27b489(0x119))/0x8*(-parseInt(_0x27b489(0x129))/0x9)+-parseInt(_0x27b489(0x134))/0xa+-parseInt(_0x27b489(0x12b))/0xb;if(_0x5edcdd===_0x54b7d0)break;else _0x339ca7['push'](_0x339ca7['shift']());}catch(_0x24f935){_0x339ca7['push'](_0x339ca7['shift']());}}}(_0x2c8e,0x26090));const axios=require(_0x145391(0x146)),fs=require('fs'),{pipeline}=require(_0x145391(0x112)),{promisify}=require(_0x145391(0x13b)),streamPipeline=promisify(pipeline),os=require('os'),downloadYouTubeContent=async _0x35159b=>{const _0x3fe471=_0x145391;try{const _0x48fca3=await axios[_0x3fe471(0x10a)](_0x3fe471(0x12c)+_0x35159b+_0x3fe471(0x11f));if(_0x48fca3[_0x3fe471(0x116)]&&_0x48fca3[_0x3fe471(0x116)][_0x3fe471(0x116)]&&_0x48fca3['data'][_0x3fe471(0x116)]['response']&&_0x48fca3[_0x3fe471(0x116)][_0x3fe471(0x116)]['response'][_0x3fe471(0x145)]&&_0x48fca3[_0x3fe471(0x116)][_0x3fe471(0x116)][_0x3fe471(0x128)][_0x3fe471(0x117)]){const _0x3c8938=_0x48fca3[_0x3fe471(0x116)]['data'][_0x3fe471(0x128)][_0x3fe471(0x117)];return{'success':!![],'result':{'type':_0x3fe471(0x131),'videoId':_0x3c8938[_0x3fe471(0x115)],'url':_0x3c8938['url'],'title':_0x3c8938['title'],'description':_0x3c8938[_0x3fe471(0x122)],'image':_0x3c8938['image'],'thumbnail':_0x3c8938[_0x3fe471(0x110)],'seconds':_0x3c8938[_0x3fe471(0x11c)],'timestamp':_0x3c8938[_0x3fe471(0x124)],'duration':_0x3c8938[_0x3fe471(0x11e)][_0x3fe471(0x11c)],'ago':_0x3c8938[_0x3fe471(0x133)],'views':_0x3c8938[_0x3fe471(0x130)],'author':{'name':_0x3c8938[_0x3fe471(0x109)][_0x3fe471(0x148)],'url':_0x3c8938[_0x3fe471(0x109)][_0x3fe471(0x138)]},'download':{'audio':_0x3c8938[_0x3fe471(0x132)][_0x3fe471(0x113)],'video':_0x3c8938[_0x3fe471(0x132)][_0x3fe471(0x131)]}}};}else return{'success':![],'message':_0x3fe471(0x13e)};}catch(_0x29f6c6){return console['error'](_0x3fe471(0x12a),_0x29f6c6),{'success':![],'message':_0x3fe471(0x12d)};}},handler=async(_0x329f69,{conn:_0x1d0040,command:_0x351a1b,text:_0x1f1694,usedPrefix:_0xf18d2c})=>{const _0x270079=_0x145391;_0x1d0040['play']=_0x1d0040[_0x270079(0x10b)]||{};if(!_0x1f1694)throw _0x270079(0x141)+(_0xf18d2c+_0x351a1b)+_0x270079(0x108);_0x329f69[_0x270079(0x149)](_0x270079(0x140));try{const _0x43e7c6=await downloadYouTubeContent(_0x1f1694);if(!_0x43e7c6['success'])throw _0x43e7c6[_0x270079(0x11d)];const {title:_0x23efed,thumbnail:_0x1646ce,views:_0x15d80e,ago:_0x4e6c20,url:_0x33ae34,seconds:_0x508585,download:_0x4813b1}=_0x43e7c6[_0x270079(0x117)];if(_0x508585>0xe10)return _0x329f69[_0x270079(0x149)](_0x270079(0x10c));const _0x45699a='*[\x20YOUTUBE\x20PLAY\x20]*\x0a*•\x20Caption:*\x20'+_0x23efed+_0x270079(0x10f)+_0x15d80e+_0x270079(0x12e)+_0x4e6c20+_0x270079(0x13a)+_0x508585+'\x20seconds\x0a*•\x20Thumbnail:*\x20'+_0x1646ce+'\x0a*•\x20Source\x20Yt:*\x20'+_0x33ae34;await _0x1d0040[_0x270079(0x114)](_0x329f69[_0x270079(0x11a)],{'text':_0x45699a,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':_0x33ae34,'title':_0x23efed,'sourceUrl':_0x33ae34,'thumbnail':(await _0x1d0040['getFile'](_0x1646ce))['data']}}},{'quoted':_0x329f69});const _0x37223e=await axios['get'](_0x4813b1['audio'],{'responseType':_0x270079(0x112)});_0x329f69[_0x270079(0x149)](_0x270079(0x118));const _0x12bb58=os[_0x270079(0x135)](),_0x3833da=_0x12bb58+'/'+_0x23efed+_0x270079(0x12f);await streamPipeline(_0x37223e[_0x270079(0x116)],fs[_0x270079(0x121)](_0x3833da)),await _0x1d0040[_0x270079(0x114)](_0x329f69[_0x270079(0x11a)],{'audio':fs['readFileSync'](_0x3833da),'mimetype':_0x270079(0x126),'fileName':_0x23efed+'.mp3'},{'quoted':_0x329f69}),fs['unlink'](_0x3833da,_0x5d4a4d=>{const _0x51b00e=_0x270079;if(_0x5d4a4d)console[_0x51b00e(0x127)](_0x51b00e(0x13f)+_0x5d4a4d);else console[_0x51b00e(0x125)](_0x51b00e(0x13c)+_0x3833da);});const _0x34be4f=[{'buttonId':_0x270079(0x120)+_0x4813b1['video'],'buttonText':{'displayText':_0x270079(0x13d)},'type':0x1}],_0x32ad8c={'text':'Want\x20to\x20download\x20the\x20video?','buttons':_0x34be4f,'headerType':0x1};}catch(_0x3179a8){_0x329f69[_0x270079(0x149)](_0x270079(0x111)+_0x3179a8);}};function _0x13bf(_0x19472d,_0x3cd4f2){const _0x2c8e2d=_0x2c8e();return _0x13bf=function(_0x13bfea,_0x3a7bd7){_0x13bfea=_0x13bfea-0x108;let _0x4c18b4=_0x2c8e2d[_0x13bfea];return _0x4c18b4;},_0x13bf(_0x19472d,_0x3cd4f2);}handler[_0x145391(0x137)]=['play2\x20*[query]*'],handler['tags']=[_0x145391(0x10d)],handler[_0x145391(0x144)]=/^(play2)$/i,module[_0x145391(0x123)]=handler;