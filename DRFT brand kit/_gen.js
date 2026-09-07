/* eslint-disable */
// DRFT geometry + drawing helpers (shared by generation scripts)
var INK='#111111', PAPER='#F6F4EF', NIGHT='#0A0A0A', LIGHT='#F0F0F0', MINT='#00E5A0', MINTD='#0B8F66', WHITE='#FFFFFF', BLACK='#000000';
var W_D_STEM='M91 0V150', W_R='M9 150V50M9 100A41 41 0 0 1 50 59H62V78', W_F='M41 150V50A41 41 0 0 1 82 9M18 59H82', W_T='M41 27V109A41 41 0 0 0 82 150M18 59H82';
var WM_W=433, WM_H=150, MK_W=152, MK_H=150;
var wordmarkSvg=(x,y,col)=>`<g transform="translate(${x} ${y})" fill="none" stroke="${col}" stroke-width="18"><circle cx="50" cy="100" r="41"/><path d="${W_D_STEM}"/><path transform="translate(130 0)" d="${W_R}"/><path transform="translate(225 0)" d="${W_F}"/><path transform="translate(342 0)" d="${W_T}"/></g>`;
var markSvg=(x,y,col,acc)=>`<g transform="translate(${x} ${y})" fill="none"><circle cx="50" cy="100" r="38" stroke="${col}" stroke-width="24"/><path d="M138 0V150" stroke="${acc}" stroke-width="28"/></g>`;
var svg=(w,h,inner,bg)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${bg?`<rect width="${w}" height="${h}" fill="${bg}"/>`:''}${inner}</svg>`;
var V={ light:{col:INK,acc:MINTD}, dark:{col:LIGHT,acc:MINT}, 'mono-black':{col:BLACK,acc:BLACK}, 'mono-white':{col:WHITE,acc:WHITE} };
var drawMark = function(ctx,x,y,h,col,acc,sw=24){ var s=h/150; ctx.save(); ctx.translate(x,y); ctx.scale(s,s); ctx.lineWidth=sw; ctx.lineCap='butt'; ctx.strokeStyle=col; ctx.beginPath(); ctx.arc(50,100,38,0,Math.PI*2); ctx.stroke(); ctx.strokeStyle=acc; ctx.lineWidth=sw+4; ctx.stroke(new Path2D('M138 0V150')); ctx.restore(); }
var drawWord = function(ctx,x,y,h,col){ var s=h/150; ctx.save(); ctx.translate(x,y); ctx.scale(s,s); ctx.lineWidth=18; ctx.lineCap='butt'; ctx.strokeStyle=col; ctx.beginPath(); ctx.arc(50,100,41,0,Math.PI*2); ctx.stroke(); ctx.stroke(new Path2D(W_D_STEM)); ctx.translate(130,0); ctx.stroke(new Path2D(W_R)); ctx.translate(95,0); ctx.stroke(new Path2D(W_F)); ctx.translate(117,0); ctx.stroke(new Path2D(W_T)); ctx.restore(); }
var cv=(w,h,f)=>{var c=createCanvas(w,h);var ctx=c.getContext('2d');f(ctx,w,h);return c;};
var bg=(ctx,w,h,c)=>{if(c){ctx.fillStyle=c;ctx.fillRect(0,0,w,h);}};
