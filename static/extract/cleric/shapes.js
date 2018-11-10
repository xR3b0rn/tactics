const IMAGES = {};
for (let frame in FRAMES) {
    const img = new Image();
    img.src = FRAMES[frame];
    IMAGES[frame] = img;
}

function shape1024(ctx, translate) {
    const pathData = 'M 380 220 L -320 220 -320 -1220 380 -1220 380 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7259521484375, -340, -1240);
    ctx.transform(1.0263157894736843, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1023]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1026(ctx, translate) {
    const pathData = 'M 380 240 L -320 240 -320 -1240 380 -1240 380 240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7332763671875, -340, -1260);
    ctx.transform(1.0263157894736843, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1025]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1028(ctx, translate) {
    const pathData = 'M 380 240 L -320 240 -320 -1240 380 -1240 380 240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7332763671875, -340, -1260);
    ctx.transform(1.0263157894736843, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1027]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1030(ctx, translate) {
    const pathData = 'M 380 240 L -320 240 -320 -1240 380 -1240 380 240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7332763671875, -340, -1260);
    ctx.transform(1.0263157894736843, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1029]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1032(ctx, translate) {
    const pathData = 'M 380 240 L -320 240 -320 -1260 380 -1260 380 240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7369384765625, -340, -1280);
    ctx.transform(1.0263157894736843, 0, 0, 1.0128205128205128, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1031]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1034(ctx, translate) {
    const pathData = 'M 380 220 L -320 220 -320 -1300 380 -1300 380 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.74029541015625, -340, -1320);
    ctx.transform(1.0263157894736843, 0, 0, 1.0126582278481013, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1033]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1036(ctx, translate) {
    const pathData = 'M 380 240 L -320 240 -320 -1260 380 -1260 380 240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7369384765625, -340, -1280);
    ctx.transform(1.0263157894736843, 0, 0, 1.0128205128205128, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1035]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1038(ctx, translate) {
    const pathData = 'M 360 240 L -320 240 -320 -1240 360 -1240 360 240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.7332763671875, -339, -1260);
    ctx.transform(1.027027027027027, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1037]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1040(ctx, translate) {
    const pathData = 'M 300 220 L -320 220 -320 -1240 300 -1240 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7296142578125, -339, -1260);
    ctx.transform(1.0294117647058822, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1039]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1042(ctx, translate) {
    const pathData = 'M 300 -1240 L 300 220 -320 220 -320 -1240 300 -1240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7296142578125, -339, -1260);
    ctx.transform(1.0294117647058822, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1041]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1044(ctx, translate) {
    const pathData = 'M 440 -1259 L 440 181 -380 181 -380 -1259 440 -1259';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7259521484375, -399, -1279);
    ctx.transform(1.0227272727272727, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1043]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1046(ctx, translate) {
    const pathData = 'M -299 -760 L -299 720 -1159 720 -1159 -760 -299 -760';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.54559326171875, 0, 0, 19.7332763671875, -1179, -780);
    ctx.transform(1.0217391304347827, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1045]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1048(ctx, translate) {
    const pathData = 'M -220 -839 L -220 621 -1040 621 -1040 -839 -220 -839';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7296142578125, -1060, -859);
    ctx.transform(1.0227272727272727, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1047]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1050(ctx, translate) {
    const pathData = 'M 680 -1499 L 680 -119 60 -119 60 -1499 680 -1499';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.71435546875, 41, -1519);
    ctx.transform(1.0294117647058822, 0, 0, 1.0138888888888888, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1049]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1051(ctx, translate) {
    const pathData = 'M 741 -1520 L 741 -60 121 -60 121 -1520 741 -1520';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7296142578125, 101, -1540);
    ctx.transform(1.0294117647058822, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1041]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1053(ctx, translate) {
    const pathData = 'M 220 -1200 L 220 200 -400 200 -400 -1200 220 -1200';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.71832275390625, -420, -1220);
    ctx.transform(1.0294117647058822, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1052]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1055(ctx, translate) {
    const pathData = 'M 140 -1120 L 140 280 -540 280 -540 -1120 140 -1120';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.71832275390625, -560, -1140);
    ctx.transform(1.027027027027027, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1054]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1057(ctx, translate) {
    const pathData = 'M 60 360 L -680 360 -680 -1020 60 -1020 60 360';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.47357177734375, 0, 0, 19.71435546875, -700, -1040);
    ctx.transform(1.025, 0, 0, 1.0138888888888888, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1056]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1059(ctx, translate) {
    const pathData = 'M -80 -980 L -80 400 -740 400 -740 -980 -80 -980';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.71435546875, -760, -1000);
    ctx.transform(1.0277777777777777, 0, 0, 1.0138888888888888, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1058]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1060(ctx, translate) {
    const pathData = 'M -200 -939 L -200 441 -820 441 -820 -939 -200 -939';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.71435546875, -840, -959);
    ctx.transform(1.0294117647058822, 0, 0, 1.0138888888888888, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1049]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1061(ctx, translate) {
    const pathData = 'M -440 -700 L -440 740 -1260 740 -1260 -700 -440 -700';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7259521484375, -1280, -720);
    ctx.transform(1.0227272727272727, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1043]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1063(ctx, translate) {
    const pathData = 'M 300 220 L -340 220 -340 -1260 300 -1260 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.7332763671875, -360, -1280);
    ctx.transform(1.0285714285714285, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1062]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1065(ctx, translate) {
    const pathData = 'M 300 220 L -420 220 -420 -1240 300 -1240 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.45953369140625, 0, 0, 19.7296142578125, -440, -1260);
    ctx.transform(1.0256410256410255, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1064]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1067(ctx, translate) {
    const pathData = 'M 300 220 L -440 220 -440 -1240 300 -1240 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.47357177734375, 0, 0, 19.7296142578125, -460, -1260);
    ctx.transform(1.025, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1066]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1069(ctx, translate) {
    const pathData = 'M 300 220 L -420 220 -420 -1220 300 -1220 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.45953369140625, 0, 0, 19.7259521484375, -440, -1240);
    ctx.transform(1.0256410256410255, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1068]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1071(ctx, translate) {
    const pathData = 'M 300 220 L -420 220 -420 -1240 300 -1240 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.45953369140625, 0, 0, 19.7296142578125, -440, -1260);
    ctx.transform(1.0256410256410255, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1070]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1073(ctx, translate) {
    const pathData = 'M 300 220 L -440 220 -440 -1240 300 -1240 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.47357177734375, 0, 0, 19.7296142578125, -460, -1260);
    ctx.transform(1.025, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1072]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1075(ctx, translate) {
    const pathData = 'M 300 220 L -440 220 -440 -1240 300 -1240 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.47357177734375, 0, 0, 19.7296142578125, -460, -1260);
    ctx.transform(1.025, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1074]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1077(ctx, translate) {
    const pathData = 'M 300 220 L -440 220 -440 -1260 300 -1260 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.47357177734375, 0, 0, 19.7332763671875, -460, -1280);
    ctx.transform(1.025, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1076]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1079(ctx, translate) {
    const pathData = 'M 300 220 L -440 220 -440 -1280 300 -1280 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.47357177734375, 0, 0, 19.7369384765625, -460, -1300);
    ctx.transform(1.025, 0, 0, 1.0128205128205128, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1078]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1081(ctx, translate) {
    const pathData = 'M 300 220 L -420 220 -420 -1260 300 -1260 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.45953369140625, 0, 0, 19.7332763671875, -440, -1280);
    ctx.transform(1.0256410256410255, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1080]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1083(ctx, translate) {
    const pathData = 'M 300 220 L -460 220 -460 -1260 300 -1260 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.7332763671875, -480, -1280);
    ctx.transform(1.024390243902439, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1082]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1085(ctx, translate) {
    const pathData = 'M 300 220 L -340 220 -340 -1240 300 -1240 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.7296142578125, -360, -1260);
    ctx.transform(1.0285714285714285, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1084]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1087(ctx, translate) {
    const pathData = 'M 300 -1340 L 300 220 -320 220 -320 -1340 300 -1340';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7467041015625, -339, -1360);
    ctx.transform(1.0294117647058822, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1086]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1089(ctx, translate) {
    const pathData = 'M 380 220 L -300 220 -300 -1320 380 -1320 380 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.74365234375, -320, -1340);
    ctx.transform(1.027027027027027, 0, 0, 1.0125, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1088]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1091(ctx, translate) {
    const pathData = 'M -380 -279 L -1100 -279 -1100 -1759 -380 -1759 -380 -279';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.45953369140625, 0, 0, 19.7332763671875, -1120, -1779);
    ctx.transform(1.0256410256410255, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1090]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1093(ctx, translate) {
    const pathData = 'M 580 380 L -100 380 -100 -1180 580 -1180 580 380';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.7467041015625, -120, -1200);
    ctx.transform(1.027027027027027, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1092]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1095(ctx, translate) {
    const pathData = 'M 660 -1120 L 660 400 20 400 20 -1120 660 -1120';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.74029541015625, 0, -1140);
    ctx.transform(1.0285714285714285, 0, 0, 1.0126582278481013, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1094]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1096(ctx, translate) {
    const pathData = 'M 741 -1059 L 741 501 121 501 121 -1059 741 -1059';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7467041015625, 101, -1079);
    ctx.transform(1.0294117647058822, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1086]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1098(ctx, translate) {
    const pathData = 'M 240 -1420 L 240 180 -420 180 -420 -1420 240 -1420';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.75311279296875, -440, -1440);
    ctx.transform(1.0277777777777777, 0, 0, 1.0120481927710843, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1097]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1100(ctx, translate) {
    const pathData = 'M 200 -1479 L 200 121 -620 121 -620 -1479 200 -1479';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.75311279296875, -640, -1499);
    ctx.transform(1.0227272727272727, 0, 0, 1.0120481927710843, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1099]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1102(ctx, translate) {
    const pathData = 'M -720 -1540 L 120 -1540 120 41 -720 41 -720 -1540';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.534912109375, 0, 0, 19.75006103515625, -740, -1560);
    ctx.transform(1.0222222222222221, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1101]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1104(ctx, translate) {
    const pathData = 'M -840 -60 L -840 -1620 -20 -1620 -20 -60 -840 -60';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7467041015625, -860, -1640);
    ctx.transform(1.0227272727272727, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1103]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1105(ctx, translate) {
    const pathData = 'M -220 -160 L -860 -160 -860 -1680 -220 -1680 -220 -160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.74029541015625, -879, -1700);
    ctx.transform(1.0285714285714285, 0, 0, 1.0126582278481013, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1094]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1106(ctx, translate) {
    const pathData = 'M -300 -180 L -980 -180 -980 -1740 -300 -1740 -300 -180';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.7467041015625, -999, -1760);
    ctx.transform(1.027027027027027, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1092]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1108(ctx, translate) {
    const pathData = 'M 300 220 L -380 220 -380 -1340 300 -1340 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.7467041015625, -400, -1360);
    ctx.transform(1.027027027027027, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1107]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1110(ctx, translate) {
    const pathData = 'M 300 220 L -460 220 -460 -1340 300 -1340 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.7467041015625, -480, -1360);
    ctx.transform(1.024390243902439, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1109]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1112(ctx, translate) {
    const pathData = 'M 300 220 L -460 220 -460 -1340 300 -1340 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.7467041015625, -480, -1360);
    ctx.transform(1.024390243902439, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1111]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1114(ctx, translate) {
    const pathData = 'M 300 220 L -460 220 -460 -1360 300 -1360 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.75006103515625, -480, -1380);
    ctx.transform(1.024390243902439, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1113]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1116(ctx, translate) {
    const pathData = 'M 300 220 L -460 220 -460 -1340 300 -1340 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.7467041015625, -480, -1360);
    ctx.transform(1.024390243902439, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1115]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1118(ctx, translate) {
    const pathData = 'M 300 220 L -460 220 -460 -1360 300 -1360 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.75006103515625, -480, -1380);
    ctx.transform(1.024390243902439, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1117]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1120(ctx, translate) {
    const pathData = 'M 300 220 L -460 220 -460 -1360 300 -1360 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.75006103515625, -480, -1380);
    ctx.transform(1.024390243902439, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1119]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1122(ctx, translate) {
    const pathData = 'M 300 220 L -460 220 -460 -1340 300 -1340 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.7467041015625, -480, -1360);
    ctx.transform(1.024390243902439, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1121]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1124(ctx, translate) {
    const pathData = 'M 300 220 L -460 220 -460 -1340 300 -1340 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.7467041015625, -480, -1360);
    ctx.transform(1.024390243902439, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1123]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1126(ctx, translate) {
    const pathData = 'M 300 220 L -480 220 -480 -1340 300 -1340 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5001220703125, 0, 0, 19.7467041015625, -500, -1360);
    ctx.transform(1.0238095238095237, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1125]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1128(ctx, translate) {
    const pathData = 'M 300 220 L -480 220 -480 -1360 300 -1360 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5001220703125, 0, 0, 19.75006103515625, -500, -1380);
    ctx.transform(1.0238095238095237, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1127]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1130(ctx, translate) {
    const pathData = 'M 300 220 L -400 220 -400 -1360 300 -1360 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.75006103515625, -419, -1380);
    ctx.transform(1.0263157894736843, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1129]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1132(ctx, translate) {
    const pathData = 'M 300 -1340 L 300 220 -320 220 -320 -1340 300 -1340';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7467041015625, -339, -1360);
    ctx.transform(1.0294117647058822, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1131]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1134(ctx, translate) {
    const pathData = 'M 360 -1320 L 360 220 -460 220 -460 -1320 360 -1320';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.74365234375, -480, -1340);
    ctx.transform(1.0227272727272727, 0, 0, 1.0125, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1133]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1136(ctx, translate) {
    const pathData = 'M 1140 -1820 L 1140 -240 300 -240 300 -1820 1140 -1820';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.534912109375, 0, 0, 19.75006103515625, 280, -1840);
    ctx.transform(1.0222222222222221, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1135]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1138(ctx, translate) {
    const pathData = 'M 1020 -1740 L 1020 -160 200 -160 200 -1740 1020 -1740';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.75006103515625, 181, -1760);
    ctx.transform(1.0227272727272727, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1137]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1140(ctx, translate) {
    const pathData = 'M -80 -1120 L -80 460 -700 460 -700 -1120 -80 -1120';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.75006103515625, -719, -1140);
    ctx.transform(1.0294117647058822, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1139]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1141(ctx, translate) {
    const pathData = 'M -140 -1059 L -140 501 -760 501 -760 -1059 -140 -1059';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7467041015625, -780, -1079);
    ctx.transform(1.0294117647058822, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1131]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1143(ctx, translate) {
    const pathData = 'M 380 -1419 L 380 101 -240 101 -240 -1419 380 -1419';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.74029541015625, -260, -1439);
    ctx.transform(1.0294117647058822, 0, 0, 1.0126582278481013, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1142]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1145(ctx, translate) {
    const pathData = 'M 520 -1459 L 520 101 -160 101 -160 -1459 520 -1459';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.7467041015625, -180, -1479);
    ctx.transform(1.027027027027027, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1144]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1147(ctx, translate) {
    const pathData = 'M 660 0 L -80 0 -80 -1520 660 -1520 660 0';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.47357177734375, 0, 0, 19.74029541015625, -99, -1540);
    ctx.transform(1.025, 0, 0, 1.0126582278481013, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1146]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1149(ctx, translate) {
    const pathData = 'M 721 -1580 L 721 -80 61 -80 61 -1580 721 -1580';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.7369384765625, 41, -1600);
    ctx.transform(1.0277777777777777, 0, 0, 1.0128205128205128, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1148]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1150(ctx, translate) {
    const pathData = 'M 800 -1680 L 800 -100 180 -100 180 -1680 800 -1680';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.75006103515625, 160, -1700);
    ctx.transform(1.0294117647058822, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1139]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1152(ctx, translate) {
    const pathData = 'M 340 -1360 L 340 220 -320 220 -320 -1360 340 -1360';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.75006103515625, -340, -1380);
    ctx.transform(1.0277777777777777, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1151]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1154(ctx, translate) {
    const pathData = 'M 400 -1340 L 400 220 -320 220 -320 -1340 400 -1340';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.45953369140625, 0, 0, 19.7467041015625, -340, -1360);
    ctx.transform(1.0256410256410255, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1153]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1156(ctx, translate) {
    const pathData = 'M 440 -1340 L 440 220 -320 220 -320 -1340 440 -1340';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.7467041015625, -339, -1360);
    ctx.transform(1.024390243902439, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1155]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1158(ctx, translate) {
    const pathData = 'M 400 -1360 L 400 220 -320 220 -320 -1360 400 -1360';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.45953369140625, 0, 0, 19.75006103515625, -340, -1380);
    ctx.transform(1.0256410256410255, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1157]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1160(ctx, translate) {
    const pathData = 'M 420 -1340 L 420 220 -320 220 -320 -1340 420 -1340';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.47357177734375, 0, 0, 19.7467041015625, -340, -1360);
    ctx.transform(1.025, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1159]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1162(ctx, translate) {
    const pathData = 'M 460 -1340 L 460 220 -320 220 -320 -1340 460 -1340';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5001220703125, 0, 0, 19.7467041015625, -340, -1360);
    ctx.transform(1.0238095238095237, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1161]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1164(ctx, translate) {
    const pathData = 'M 500 -1360 L 500 220 -320 220 -320 -1360 500 -1360';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.75006103515625, -340, -1380);
    ctx.transform(1.0227272727272727, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1163]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1166(ctx, translate) {
    const pathData = 'M 500 -1360 L 500 220 -320 220 -320 -1360 500 -1360';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.75006103515625, -340, -1380);
    ctx.transform(1.0227272727272727, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1165]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1168(ctx, translate) {
    const pathData = 'M 500 -1360 L 500 220 -320 220 -320 -1360 500 -1360';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.75006103515625, -340, -1380);
    ctx.transform(1.0227272727272727, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1167]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1170(ctx, translate) {
    const pathData = 'M 480 -1340 L 480 220 -320 220 -320 -1340 480 -1340';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5123291015625, 0, 0, 19.7467041015625, -340, -1360);
    ctx.transform(1.0232558139534884, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1169]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1172(ctx, translate) {
    const pathData = 'M 460 -1340 L 460 220 -320 220 -320 -1340 460 -1340';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5001220703125, 0, 0, 19.7467041015625, -340, -1360);
    ctx.transform(1.0238095238095237, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1171]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1174(ctx, translate) {
    const pathData = 'M 320 -1360 L 320 220 -320 220 -320 -1360 320 -1360';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.75006103515625, -340, -1380);
    ctx.transform(1.0285714285714285, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1173]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1177(ctx, translate) {
    const pathData = 'M -360 80 L -360 -1280 260 -1280 260 80 -360 80';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7100830078125, -380, -1300);
    ctx.transform(1.0294117647058822, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1176]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1179(ctx, translate) {
    const pathData = 'M 1080 -780 L 1080 600 380 600 380 -780 1080 -780';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.71435546875, 360, -800);
    ctx.transform(1.0263157894736843, 0, 0, 1.0138888888888888, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1178]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1181(ctx, translate) {
    const pathData = 'M 940 -859 L 940 501 280 501 280 -859 940 -859';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.7100830078125, 260, -879);
    ctx.transform(1.0277777777777777, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1180]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1183(ctx, translate) {
    const pathData = 'M 880 -940 L 880 420 200 420 200 -940 880 -940';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.7100830078125, 180, -960);
    ctx.transform(1.027027027027027, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1182]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1184(ctx, translate) {
    const pathData = 'M -99 -1540 L -99 -100 -739 -100 -739 -1540 -99 -1540';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.7259521484375, -759, -1560);
    ctx.transform(1.0285714285714285, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[994]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1186(ctx, translate) {
    const pathData = 'M 440 -1220 L 440 120 -220 120 -220 -1220 440 -1220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.705810546875, -240, -1240);
    ctx.transform(1.0277777777777777, 0, 0, 1.0142857142857142, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1185]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1188(ctx, translate) {
    const pathData = 'M 620 300 L -240 300 -240 -1120 620 -1120 620 300';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.54559326171875, 0, 0, 19.7222900390625, -260, -1140);
    ctx.transform(1.0217391304347827, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1187]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1190(ctx, translate) {
    const pathData = 'M 720 381 L -160 381 -160 -1039 720 -1039 720 381';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.7222900390625, -180, -1059);
    ctx.transform(1.0212765957446808, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1189]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1192(ctx, translate) {
    const pathData = 'M 840 440 L -20 440 -20 -1000 840 -1000 840 440';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.54559326171875, 0, 0, 19.7259521484375, -40, -1020);
    ctx.transform(1.0217391304347827, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1191]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1194(ctx, translate) {
    const pathData = 'M 400 -1240 L 400 180 -300 180 -300 -1240 400 -1240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7222900390625, -320, -1260);
    ctx.transform(1.0263157894736843, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1193]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1196(ctx, translate) {
    const pathData = 'M 500 -1240 L 500 180 -300 180 -300 -1240 500 -1240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5123291015625, 0, 0, 19.7222900390625, -320, -1260);
    ctx.transform(1.0232558139534884, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1195]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1198(ctx, translate) {
    const pathData = 'M 520 180 L -300 180 -300 -1220 520 -1220 520 180';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.71832275390625, -319, -1240);
    ctx.transform(1.0227272727272727, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1197]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1200(ctx, translate) {
    const pathData = 'M 520 -1220 L 520 180 -300 180 -300 -1220 520 -1220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.71832275390625, -319, -1240);
    ctx.transform(1.0227272727272727, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1199]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1202(ctx, translate) {
    const pathData = 'M 520 -1220 L 520 180 -300 180 -300 -1220 520 -1220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.71832275390625, -319, -1240);
    ctx.transform(1.0227272727272727, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1201]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1205(ctx, translate) {
    const pathData = 'M 520 -1240 L 520 180 -300 180 -300 -1240 520 -1240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7222900390625, -319, -1260);
    ctx.transform(1.0227272727272727, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1204]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1207(ctx, translate) {
    const pathData = 'M 560 181 L -300 181 -300 -1259 560 -1259 560 181';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.54559326171875, 0, 0, 19.7259521484375, -320, -1279);
    ctx.transform(1.0217391304347827, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1206]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1209(ctx, translate) {
    const pathData = 'M 600 -1259 L 600 181 -300 181 -300 -1259 600 -1259';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.56512451171875, 0, 0, 19.7259521484375, -320, -1279);
    ctx.transform(1.0208333333333333, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1208]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1211(ctx, translate) {
    const pathData = 'M 600 -1259 L 600 181 -300 181 -300 -1259 600 -1259';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.56512451171875, 0, 0, 19.7259521484375, -320, -1279);
    ctx.transform(1.0208333333333333, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1210]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1213(ctx, translate) {
    const pathData = 'M 540 -1259 L 540 181 -300 181 -300 -1259 540 -1259';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.534912109375, 0, 0, 19.7259521484375, -320, -1279);
    ctx.transform(1.0222222222222221, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1212]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1215(ctx, translate) {
    const pathData = 'M 500 -1260 L 500 180 -300 180 -300 -1260 500 -1260';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5123291015625, 0, 0, 19.7259521484375, -320, -1280);
    ctx.transform(1.0232558139534884, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1214]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1217(ctx, translate) {
    const pathData = 'M 420 -1259 L 420 181 -300 181 -300 -1259 420 -1259';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.45953369140625, 0, 0, 19.7259521484375, -319, -1279);
    ctx.transform(1.0256410256410255, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1216]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1219(ctx, translate) {
    const pathData = 'M 740 -1540 L 740 -100 80 -100 80 -1540 740 -1540';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.7259521484375, 60, -1560);
    ctx.transform(1.0277777777777777, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1218]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1221(ctx, translate) {
    const pathData = 'M -420 -1280 L 460 -1280 460 140 -420 140 -420 -1280';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.7222900390625, -440, -1300);
    ctx.transform(1.0212765957446808, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1220]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1223(ctx, translate) {
    const pathData = 'M -300 -1319 L 580 -1319 580 101 -300 101 -300 -1319';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.7222900390625, -320, -1339);
    ctx.transform(1.0212765957446808, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1222]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1225(ctx, translate) {
    const pathData = 'M -200 -860 L -200 580 -1080 580 -1080 -860 -200 -860';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.7259521484375, -1100, -880);
    ctx.transform(1.0212765957446808, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1224]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1227(ctx, translate) {
    const pathData = 'M 660 -1500 L 660 -160 20 -160 20 -1500 660 -1500';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.705810546875, 0, -1520);
    ctx.transform(1.0285714285714285, 0, 0, 1.0142857142857142, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1226]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1229(ctx, translate) {
    const pathData = 'M -440 -1219 L 220 -1219 220 161 -440 161 -440 -1219';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.71435546875, -459, -1239);
    ctx.transform(1.0277777777777777, 0, 0, 1.0138888888888888, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1228]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1231(ctx, translate) {
    const pathData = 'M -520 -1140 L 120 -1140 120 220 -520 220 -520 -1140';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.7100830078125, -540, -1160);
    ctx.transform(1.0285714285714285, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1230]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1233(ctx, translate) {
    const pathData = 'M -659 -1040 L 41 -1040 41 320 -659 320 -659 -1040';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7100830078125, -679, -1060);
    ctx.transform(1.0263157894736843, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1232]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1235(ctx, translate) {
    const pathData = 'M -100 -999 L -100 361 -720 361 -720 -999 -100 -999';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7100830078125, -740, -1019);
    ctx.transform(1.0294117647058822, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1234]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1236(ctx, translate) {
    const pathData = 'M -220 -940 L -220 400 -860 400 -860 -940 -220 -940';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.705810546875, -879, -960);
    ctx.transform(1.0285714285714285, 0, 0, 1.0142857142857142, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1226]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1237(ctx, translate) {
    const pathData = 'M -300 -760 L -300 660 -1180 660 -1180 -760 -300 -760';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.7222900390625, -1199, -780);
    ctx.transform(1.0212765957446808, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1222]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1239(ctx, translate) {
    const pathData = 'M 280 -1240 L 280 180 -380 180 -380 -1240 280 -1240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.7222900390625, -399, -1260);
    ctx.transform(1.0277777777777777, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1238]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1241(ctx, translate) {
    const pathData = 'M 280 180 L -460 180 -460 -1240 280 -1240 280 180';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.47357177734375, 0, 0, 19.7222900390625, -479, -1260);
    ctx.transform(1.025, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1240]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1243(ctx, translate) {
    const pathData = 'M 280 180 L -520 180 -520 -1220 280 -1220 280 180';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5123291015625, 0, 0, 19.71832275390625, -540, -1240);
    ctx.transform(1.0232558139534884, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1242]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1245(ctx, translate) {
    const pathData = 'M 280 -1220 L 280 180 -480 180 -480 -1220 280 -1220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.71832275390625, -500, -1240);
    ctx.transform(1.024390243902439, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1244]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1247(ctx, translate) {
    const pathData = 'M 279 -1220 L 279 180 -500 180 -500 -1220 279 -1220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.47509765625, 0, 0, 19.71832275390625, -519, -1240);
    ctx.transform(1.0238095238095237, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1246]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1249(ctx, translate) {
    const pathData = 'M 280 -1240 L 280 180 -540 180 -540 -1240 280 -1240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7222900390625, -560, -1260);
    ctx.transform(1.0227272727272727, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1248]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1251(ctx, translate) {
    const pathData = 'M 280 181 L -580 181 -580 -1259 280 -1259 280 181';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.54559326171875, 0, 0, 19.7259521484375, -599, -1279);
    ctx.transform(1.0217391304347827, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1250]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1253(ctx, translate) {
    const pathData = 'M 280 180 L -600 180 -600 -1260 280 -1260 280 180';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.7259521484375, -620, -1280);
    ctx.transform(1.0212765957446808, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1252]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1255(ctx, translate) {
    const pathData = 'M 280 -1260 L 280 180 -620 180 -620 -1260 280 -1260';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.56512451171875, 0, 0, 19.7259521484375, -640, -1280);
    ctx.transform(1.0208333333333333, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1254]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1257(ctx, translate) {
    const pathData = 'M 280 -1259 L 280 181 -520 181 -520 -1259 280 -1259';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5123291015625, 0, 0, 19.7259521484375, -540, -1279);
    ctx.transform(1.0232558139534884, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1256]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1259(ctx, translate) {
    const pathData = 'M 280 -1259 L 280 181 -520 181 -520 -1259 280 -1259';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5123291015625, 0, 0, 19.7259521484375, -540, -1279);
    ctx.transform(1.0232558139534884, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1258]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1261(ctx, translate) {
    const pathData = 'M 280 -1259 L 280 181 -380 181 -380 -1259 280 -1259';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.7259521484375, -399, -1279);
    ctx.transform(1.0277777777777777, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1260]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1263(ctx, translate) {
    const pathData = 'M -360 -1280 L 280 -1280 280 160 -360 160 -360 -1280';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.7259521484375, -379, -1300);
    ctx.transform(1.0285714285714285, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1262]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1265(ctx, translate) {
    const pathData = 'M 340 120 L -260 120 -260 -1240 340 -1240 340 120';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3548583984375, 0, 0, 19.7100830078125, -280, -1260);
    ctx.transform(1.0303030303030303, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1264]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1267(ctx, translate) {
    const pathData = 'M 480 -1160 L 480 200 -220 200 -220 -1160 480 -1160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7100830078125, -239, -1180);
    ctx.transform(1.0263157894736843, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1266]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1269(ctx, translate) {
    const pathData = 'M -299 -259 L -939 -259 -939 -1659 -299 -1659 -299 -259';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.71832275390625, -959, -1679);
    ctx.transform(1.0285714285714285, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1268]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1271(ctx, translate) {
    const pathData = 'M -220 -240 L -900 -240 -900 -1620 -220 -1620 -220 -240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.71435546875, -920, -1640);
    ctx.transform(1.027027027027027, 0, 0, 1.0138888888888888, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1270]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1272(ctx, translate) {
    const pathData = 'M 720 -1000 L 720 440 80 440 80 -1000 720 -1000';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.7259521484375, 60, -1020);
    ctx.transform(1.0285714285714285, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1262]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1274(ctx, translate) {
    const pathData = 'M -460 -1339 L 220 -1339 220 101 -460 101 -460 -1339';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.7259521484375, -479, -1359);
    ctx.transform(1.027027027027027, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1273]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1276(ctx, translate) {
    const pathData = 'M -640 -1400 L 220 -1400 220 40 -640 40 -640 -1400';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.54559326171875, 0, 0, 19.7259521484375, -660, -1420);
    ctx.transform(1.0217391304347827, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1275]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1278(ctx, translate) {
    const pathData = 'M 141 -20 L -739 -20 -739 -1460 141 -1460 141 -20';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.7259521484375, -759, -1480);
    ctx.transform(1.0212765957446808, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1277]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1280(ctx, translate) {
    const pathData = 'M -860 -119 L -860 -1539 0 -1539 0 -119 -860 -119';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.54559326171875, 0, 0, 19.7222900390625, -880, -1559);
    ctx.transform(1.0217391304347827, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1279]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1281(ctx, translate) {
    const pathData = 'M -400 -360 L -1100 -360 -1100 -1720 -400 -1720 -400 -360';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7100830078125, -1120, -1740);
    ctx.transform(1.0263157894736843, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1266]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1283(ctx, translate) {
    const pathData = 'M 280 -1280 L 280 160 -420 160 -420 -1280 280 -1280';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7259521484375, -440, -1300);
    ctx.transform(1.0263157894736843, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1282]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1285(ctx, translate) {
    const pathData = 'M 280 -1280 L 280 160 -520 160 -520 -1280 280 -1280';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5123291015625, 0, 0, 19.7259521484375, -540, -1300);
    ctx.transform(1.0232558139534884, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1284]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1287(ctx, translate) {
    const pathData = 'M 280 -1280 L 280 160 -540 160 -540 -1280 280 -1280';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7259521484375, -560, -1300);
    ctx.transform(1.0227272727272727, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1286]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1289(ctx, translate) {
    const pathData = 'M 280 -1280 L 280 160 -540 160 -540 -1280 280 -1280';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7259521484375, -560, -1300);
    ctx.transform(1.0227272727272727, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1288]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1291(ctx, translate) {
    const pathData = 'M 280 -1300 L 280 160 -540 160 -540 -1300 280 -1300';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7296142578125, -560, -1320);
    ctx.transform(1.0227272727272727, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1290]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1293(ctx, translate) {
    const pathData = 'M 280 -1340 L 280 160 -540 160 -540 -1340 280 -1340';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7369384765625, -560, -1360);
    ctx.transform(1.0227272727272727, 0, 0, 1.0128205128205128, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1292]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1295(ctx, translate) {
    const pathData = 'M 280 160 L -580 160 -580 -1400 280 -1400 280 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.54559326171875, 0, 0, 19.7467041015625, -599, -1420);
    ctx.transform(1.0217391304347827, 0, 0, 1.0123456790123457, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1294]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1297(ctx, translate) {
    const pathData = 'M 280 -1420 L 280 160 -620 160 -620 -1420 280 -1420';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.56512451171875, 0, 0, 19.75006103515625, -640, -1440);
    ctx.transform(1.0208333333333333, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1296]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1299(ctx, translate) {
    const pathData = 'M 280 160 L -600 160 -600 -1420 280 -1420 280 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.75006103515625, -620, -1440);
    ctx.transform(1.0212765957446808, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1298]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1301(ctx, translate) {
    const pathData = 'M 280 -1340 L 280 160 -560 160 -560 -1340 280 -1340';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.534912109375, 0, 0, 19.7369384765625, -580, -1360);
    ctx.transform(1.0222222222222221, 0, 0, 1.0128205128205128, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1300]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1303(ctx, translate) {
    const pathData = 'M 280 -1280 L 280 160 -520 160 -520 -1280 280 -1280';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5123291015625, 0, 0, 19.7259521484375, -540, -1300);
    ctx.transform(1.0232558139534884, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1302]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1305(ctx, translate) {
    const pathData = 'M 280 161 L -440 161 -440 -1259 280 -1259 280 161';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.45953369140625, 0, 0, 19.7222900390625, -460, -1279);
    ctx.transform(1.0256410256410255, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1304]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1307(ctx, translate) {
    const pathData = 'M -99 -1000 L -99 440 -759 440 -759 -1000 -99 -1000';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.7259521484375, -779, -1020);
    ctx.transform(1.0277777777777777, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1306]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1309(ctx, translate) {
    const pathData = 'M -480 161 L -480 -1239 400 -1239 400 161 -480 161';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.71832275390625, -500, -1259);
    ctx.transform(1.0212765957446808, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1308]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1311(ctx, translate) {
    const pathData = 'M 1160 -1720 L 1160 -280 280 -280 280 -1720 1160 -1720';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.7259521484375, 260, -1740);
    ctx.transform(1.0212765957446808, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1310]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1313(ctx, translate) {
    const pathData = 'M 1060 -1660 L 1060 -220 180 -220 180 -1660 1060 -1660';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.7259521484375, 160, -1680);
    ctx.transform(1.0212765957446808, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1312]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1315(ctx, translate) {
    const pathData = 'M -40 -1060 L -40 380 -680 380 -680 -1060 -40 -1060';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.7259521484375, -700, -1080);
    ctx.transform(1.0285714285714285, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1314]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1317(ctx, translate) {
    const pathData = 'M -240 -1339 L 420 -1339 420 21 -240 21 -240 -1339';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.7100830078125, -259, -1359);
    ctx.transform(1.0277777777777777, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1316]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1319(ctx, translate) {
    const pathData = 'M 500 0 L -140 0 -140 -1380 500 -1380 500 0';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.71435546875, -159, -1400);
    ctx.transform(1.0285714285714285, 0, 0, 1.0138888888888888, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1318]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1321(ctx, translate) {
    const pathData = 'M 640 -80 L -60 -80 -60 -1440 640 -1440 640 -80';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.444580078125, 0, 0, 19.7100830078125, -80, -1460);
    ctx.transform(1.0263157894736843, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1320]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1323(ctx, translate) {
    const pathData = 'M 700 -1520 L 700 -160 80 -160 80 -1520 700 -1520';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7100830078125, 60, -1540);
    ctx.transform(1.0294117647058822, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1322]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1324(ctx, translate) {
    const pathData = 'M 840 -180 L 200 -180 200 -1620 840 -1620 840 -180';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.7259521484375, 181, -1640);
    ctx.transform(1.0285714285714285, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1314]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1325(ctx, translate) {
    const pathData = 'M 1280 -1799 L 1280 -399 400 -399 400 -1799 1280 -1799';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.71832275390625, 381, -1819);
    ctx.transform(1.0212765957446808, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1308]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1327(ctx, translate) {
    const pathData = 'M 380 160 L -300 160 -300 -1280 380 -1280 380 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.7259521484375, -320, -1300);
    ctx.transform(1.027027027027027, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1326]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1329(ctx, translate) {
    const pathData = 'M 440 -1280 L 440 160 -300 160 -300 -1280 440 -1280';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.47357177734375, 0, 0, 19.7259521484375, -320, -1300);
    ctx.transform(1.025, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1328]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1331(ctx, translate) {
    const pathData = 'M 500 160 L -300 160 -300 -1280 500 -1280 500 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5123291015625, 0, 0, 19.7259521484375, -320, -1300);
    ctx.transform(1.0232558139534884, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1330]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1333(ctx, translate) {
    const pathData = 'M 460 160 L -300 160 -300 -1280 460 -1280 460 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4873046875, 0, 0, 19.7259521484375, -320, -1300);
    ctx.transform(1.024390243902439, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1332]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1335(ctx, translate) {
    const pathData = 'M 480 160 L -300 160 -300 -1320 480 -1320 480 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.50006103515625, 0, 0, 19.7332763671875, -320, -1340);
    ctx.transform(1.0238095238095237, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1334]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1337(ctx, translate) {
    const pathData = 'M 520 160 L -300 160 -300 -1360 520 -1360 520 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.74029541015625, -319, -1380);
    ctx.transform(1.0227272727272727, 0, 0, 1.0126582278481013, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1336]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1339(ctx, translate) {
    const pathData = 'M 540 160 L -300 160 -300 -1420 540 -1420 540 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.534912109375, 0, 0, 19.75006103515625, -320, -1440);
    ctx.transform(1.0222222222222221, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1338]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1341(ctx, translate) {
    const pathData = 'M 580 160 L -300 160 -300 -1420 580 -1420 580 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5556640625, 0, 0, 19.75006103515625, -320, -1440);
    ctx.transform(1.0212765957446808, 0, 0, 1.0121951219512195, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1340]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1343(ctx, translate) {
    const pathData = 'M 600 160 L -300 160 -300 -1440 600 -1440 600 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.56512451171875, 0, 0, 19.75311279296875, -320, -1460);
    ctx.transform(1.0208333333333333, 0, 0, 1.0120481927710843, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1342]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1345(ctx, translate) {
    const pathData = 'M 500 160 L -300 160 -300 -1360 500 -1360 500 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5123291015625, 0, 0, 19.74029541015625, -320, -1380);
    ctx.transform(1.0232558139534884, 0, 0, 1.0126582278481013, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1344]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1347(ctx, translate) {
    const pathData = 'M 500 160 L -300 160 -300 -1280 500 -1280 500 160';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.5123291015625, 0, 0, 19.7259521484375, -320, -1300);
    ctx.transform(1.0232558139534884, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1346]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1349(ctx, translate) {
    const pathData = 'M 380 161 L -300 161 -300 -1259 380 -1259 380 161';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.7222900390625, -320, -1279);
    ctx.transform(1.027027027027027, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1348]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape995(ctx, translate) {
    const pathData = 'M -300 -1259 L 340 -1259 340 181 -300 181 -300 -1259';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.3939208984375, 0, 0, 19.7259521484375, -319, -1279);
    ctx.transform(1.0285714285714285, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[994]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape997(ctx, translate) {
    const pathData = 'M 300 220 L -320 220 -320 -1240 300 -1240 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7296142578125, -339, -1260);
    ctx.transform(1.0294117647058822, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[996]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape999(ctx, translate) {
    const pathData = 'M 280 120 L -400 120 -400 -1280 280 -1280 280 120';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.71832275390625, -420, -1300);
    ctx.transform(1.027027027027027, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[998]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1001(ctx, translate) {
    const pathData = 'M 200 80 L -520 80 -520 -1320 200 -1320 200 80';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.45953369140625, 0, 0, 19.71832275390625, -539, -1340);
    ctx.transform(1.0256410256410255, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1000]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1003(ctx, translate) {
    const pathData = 'M 960 -860 L 960 540 280 540 280 -860 960 -860';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.71832275390625, 261, -880);
    ctx.transform(1.027027027027027, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1002]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1005(ctx, translate) {
    const pathData = 'M -40 -1500 L -40 -100 -700 -100 -700 -1500 -40 -1500';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.71832275390625, -720, -1520);
    ctx.transform(1.0277777777777777, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1004]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1006(ctx, translate) {
    const pathData = 'M -140 -1520 L -140 -60 -760 -60 -760 -1520 -140 -1520';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7296142578125, -780, -1540);
    ctx.transform(1.0294117647058822, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[996]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1008(ctx, translate) {
    const pathData = 'M 400 161 L -260 161 -260 -1199 400 -1199 400 161';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.7100830078125, -280, -1219);
    ctx.transform(1.0277777777777777, 0, 0, 1.0140845070422535, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1007]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1010(ctx, translate) {
    const pathData = 'M 600 360 L -220 360 -220 -1100 600 -1100 600 360';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7296142578125, -239, -1120);
    ctx.transform(1.0227272727272727, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1009]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1012(ctx, translate) {
    const pathData = 'M 701 -1020 L 701 440 -139 440 -139 -1020 701 -1020';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.534912109375, 0, 0, 19.7296142578125, -159, -1040);
    ctx.transform(1.0222222222222221, 0, 0, 1.013157894736842, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1011]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1014(ctx, translate) {
    const pathData = 'M 820 -959 L 820 461 0 461 0 -959 820 -959';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.52392578125, 0, 0, 19.7222900390625, -20, -979);
    ctx.transform(1.0227272727272727, 0, 0, 1.0135135135135136, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1013]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1015(ctx, translate) {
    const pathData = 'M 840 -940 L 840 460 180 460 180 -940 840 -940';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.71832275390625, 160, -959);
    ctx.transform(1.0277777777777777, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1004]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1016(ctx, translate) {
    const pathData = 'M 1080 -760 L 1080 640 360 640 360 -760 1080 -760';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.45953369140625, 0, 0, 19.71832275390625, 340, -780);
    ctx.transform(1.0256410256410255, 0, 0, 1.0136986301369864, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1000]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1018(ctx, translate) {
    const pathData = 'M 300 220 L -320 220 -320 -1220 300 -1220 300 220';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.375, 0, 0, 19.7259521484375, -339, -1240);
    ctx.transform(1.0294117647058822, 0, 0, 1.0133333333333334, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1017]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1020(ctx, translate) {
    const pathData = 'M 340 240 L -320 240 -320 -1240 340 -1240 340 240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.41162109375, 0, 0, 19.7332763671875, -340, -1260);
    ctx.transform(1.0277777777777777, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1019]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape1022(ctx, translate) {
    const pathData = 'M 360 240 L -320 240 -320 -1240 360 -1240 360 240';
    drawPath(ctx, pathData, false);
    ctx.save();
    ctx.clip();
    ctx.transform(19.4287109375, 0, 0, 19.7332763671875, -339, -1260);
    ctx.transform(1.027027027027027, 0, 0, 1.0129870129870129, -0.5, -0.5);
    ctx.fillStyle = ctx.createPattern(translate.applyToImage(IMAGES[1021]), 'repeat');
    ctx.fillRect(-16384, -16384, 32768, 32768);
    ctx.restore();
}

function shape5504(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 920 600 L 160 600 160 100 920 100 920 600";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.4873046875, 0, 0, 19.23065185546875, 140, 81);
  ctx.transform(1.024390243902439, 0, 0, 1.0357142857142858, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5493]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5505(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 1000 740 L 260 740 260 100 1000 100 1000 740";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.47357177734375, 0, 0, 19.3939208984375, 241, 81);
  ctx.transform(1.025, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5491]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5506(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 1140 800 L 340 800 340 160 1140 160 1140 800";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.5123291015625, 0, 0, 19.3939208984375, 320, 141);
  ctx.transform(1.0232558139534884, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5489]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5507(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 1200 880 L 460 880 460 240 1200 240 1200 880";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.47357177734375, 0, 0, 19.3939208984375, 440, 220);
  ctx.transform(1.025, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5487]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5509(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 440 300 L -340 300 -340 -220 440 -220 440 300";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.50006103515625, 0, 0, 19.25933837890625, -360, -239);
  ctx.transform(1.0238095238095237, 0, 0, 1.0344827586206897, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5508]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5511(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 540 -220 L 540 340 -340 340 -340 -220 540 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.5556640625, 0, 0, 19.310302734375, -360, -240);
  ctx.transform(1.0212765957446808, 0, 0, 1.032258064516129, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5510]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5513(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 580 -220 L 580 380 -340 380 -340 -220 580 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.5745849609375, 0, 0, 19.3548583984375, -359, -239);
  ctx.transform(1.0204081632653061, 0, 0, 1.0303030303030303, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5512]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5515(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 560 -220 L 560 340 -340 340 -340 -220 560 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.56512451171875, 0, 0, 19.310302734375, -360, -240);
  ctx.transform(1.0208333333333333, 0, 0, 1.032258064516129, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5514]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5517(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 560 -220 L 560 360 -340 360 -340 -220 560 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.56512451171875, 0, 0, 19.33319091796875, -360, -240);
  ctx.transform(1.0208333333333333, 0, 0, 1.03125, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5516]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5519(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 560 -220 L 560 400 -340 400 -340 -220 560 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.56512451171875, 0, 0, 19.375, -360, -239);
  ctx.transform(1.0208333333333333, 0, 0, 1.0294117647058822, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5518]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5521(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 620 -220 L 620 420 -340 420 -340 -220 620 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.59197998046875, 0, 0, 19.3939208984375, -360, -240);
  ctx.transform(1.0196078431372548, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5520]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5523(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 640 -220 L 640 440 -340 440 -340 -220 640 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.59991455078125, 0, 0, 19.41162109375, -360, -240);
  ctx.transform(1.0192307692307692, 0, 0, 1.0277777777777777, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5522]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5525(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 640 -220 L 640 460 -340 460 -340 -220 640 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.59991455078125, 0, 0, 19.4287109375, -360, -240);
  ctx.transform(1.0192307692307692, 0, 0, 1.027027027027027, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5524]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5527(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 600 -220 L 600 380 -340 380 -340 -220 600 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.58343505859375, 0, 0, 19.3548583984375, -360, -239);
  ctx.transform(1.02, 0, 0, 1.0303030303030303, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5526]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5529(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 560 -220 L 560 380 -340 380 -340 -220 560 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.56512451171875, 0, 0, 19.3548583984375, -360, -239);
  ctx.transform(1.0208333333333333, 0, 0, 1.0303030303030303, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5528]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5531(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 460 300 L -340 300 -340 -220 460 -220 460 300";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.5123291015625, 0, 0, 19.25933837890625, -360, -239);
  ctx.transform(1.0232558139534884, 0, 0, 1.0344827586206897, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5530]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5533(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 780 -20 L 40 -20 40 -500 780 -500 780 -20";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.47357177734375, 0, 0, 19.20013427734375, 20, -519);
  ctx.transform(1.025, 0, 0, 1.037037037037037, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5532]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5535(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 480 240 L -460 240 -460 -260 480 -260 480 240";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.58343505859375, 0, 0, 19.23065185546875, -480, -279);
  ctx.transform(1.02, 0, 0, 1.0357142857142858, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5534]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5537(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 600 200 L -360 200 -360 -360 600 -360 600 200";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.59197998046875, 0, 0, 19.310302734375, -380, -380);
  ctx.transform(1.0196078431372548, 0, 0, 1.032258064516129, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5536]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5539(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 700 100 L -240 100 -240 -400 700 -400 700 100";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.58343505859375, 0, 0, 19.23065185546875, -260, -420);
  ctx.transform(1.02, 0, 0, 1.0357142857142858, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5538]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5541(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 700 60 L -20 60 -20 -460 700 -460 700 60";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.45953369140625, 0, 0, 19.25933837890625, -40, -479);
  ctx.transform(1.0256410256410255, 0, 0, 1.0344827586206897, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5540]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5543(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 240 -180 L 240 340 -460 340 -460 -180 240 -180";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.444580078125, 0, 0, 19.25933837890625, -480, -200);
  ctx.transform(1.0263157894736843, 0, 0, 1.0344827586206897, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5542]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5545(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 160 -180 L 160 460 -580 460 -580 -180 160 -180";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.47357177734375, 0, 0, 19.3939208984375, -600, -200);
  ctx.transform(1.025, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5544]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5547(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 100 -140 L 100 500 -700 500 -700 -140 100 -140";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.5123291015625, 0, 0, 19.3939208984375, -719, -159);
  ctx.transform(1.0232558139534884, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5546]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5549(ctx, ctrans, frame, ratio, time) {
  var pathData = "M -40 -40 L -40 600 -780 600 -780 -40 -40 -40";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.47357177734375, 0, 0, 19.3939208984375, -800, -59);
  ctx.transform(1.025, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5548]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5550(ctx, ctrans, frame, ratio, time) {
  var pathData = "M -179 621 L -899 621 -899 101 -179 101 -179 621";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.45953369140625, 0, 0, 19.25933837890625, -919, 81);
  ctx.transform(1.0256410256410255, 0, 0, 1.0344827586206897, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5540]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5551(ctx, ctrans, frame, ratio, time) {
  var pathData = "M -179 660 L -1119 660 -1119 160 -179 160 -179 660";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.58343505859375, 0, 0, 19.23065185546875, -1139, 141);
  ctx.transform(1.02, 0, 0, 1.0357142857142858, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5538]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5552(ctx, ctrans, frame, ratio, time) {
  var pathData = "M -279 760 L -1239 760 -1239 200 -279 200 -279 760";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.59197998046875, 0, 0, 19.310302734375, -1259, 181);
  ctx.transform(1.0196078431372548, 0, 0, 1.032258064516129, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5536]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5553(ctx, ctrans, frame, ratio, time) {
  var pathData = "M -400 800 L -1340 800 -1340 300 -400 300 -400 800";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.58343505859375, 0, 0, 19.23065185546875, -1360, 280);
  ctx.transform(1.02, 0, 0, 1.0357142857142858, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5534]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5555(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 300 L -420 300 -420 -220 320 -220 320 300";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.47357177734375, 0, 0, 19.25933837890625, -439, -239);
  ctx.transform(1.025, 0, 0, 1.0344827586206897, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5554]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5557(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 380 L -500 380 -500 -220 320 -220 320 380";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.52392578125, 0, 0, 19.3548583984375, -520, -239);
  ctx.transform(1.0227272727272727, 0, 0, 1.0303030303030303, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5556]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5559(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 -220 L 320 400 -560 400 -560 -220 320 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.5556640625, 0, 0, 19.375, -580, -239);
  ctx.transform(1.0212765957446808, 0, 0, 1.0294117647058822, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5558]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5561(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 400 L -520 400 -520 -220 320 -220 320 400";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.534912109375, 0, 0, 19.375, -539, -239);
  ctx.transform(1.0222222222222221, 0, 0, 1.0294117647058822, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5560]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5563(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 -220 L 320 400 -540 400 -540 -220 320 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.54559326171875, 0, 0, 19.375, -560, -239);
  ctx.transform(1.0217391304347827, 0, 0, 1.0294117647058822, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5562]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5565(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 -220 L 320 400 -580 400 -580 -220 320 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.56512451171875, 0, 0, 19.375, -600, -239);
  ctx.transform(1.0208333333333333, 0, 0, 1.0294117647058822, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5564]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5567(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 -220 L 320 420 -620 420 -620 -220 320 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.58343505859375, 0, 0, 19.3939208984375, -640, -240);
  ctx.transform(1.02, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5566]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5569(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 -220 L 320 440 -660 440 -660 -220 320 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.59991455078125, 0, 0, 19.41162109375, -679, -240);
  ctx.transform(1.0192307692307692, 0, 0, 1.0277777777777777, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5568]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5571(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 -220 L 320 440 -680 440 -680 -220 320 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.60784912109375, 0, 0, 19.41162109375, -700, -240);
  ctx.transform(1.0188679245283019, 0, 0, 1.0277777777777777, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5570]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5573(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 -220 L 320 420 -560 420 -560 -220 320 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.5556640625, 0, 0, 19.3939208984375, -580, -240);
  ctx.transform(1.0212765957446808, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5572]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5575(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 -220 L 320 380 -560 380 -560 -220 320 -220";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.5556640625, 0, 0, 19.3548583984375, -580, -239);
  ctx.transform(1.0212765957446808, 0, 0, 1.0303030303030303, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5574]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5577(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 320 L -420 320 -420 -220 320 -220 320 320";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.47357177734375, 0, 0, 19.28558349609375, -439, -239);
  ctx.transform(1.025, 0, 0, 1.0333333333333334, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5576]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}

function shape5486(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 360 280 L -340 280 -340 -220 360 -220 360 280";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.444580078125, 0, 0, 19.23065185546875, -360, -240);
  ctx.transform(1.0263157894736843, 0, 0, 1.0357142857142858, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5485]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5488(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 320 320 L -420 320 -420 -320 320 -320 320 320";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.47357177734375, 0, 0, 19.3939208984375, -439, -340);
  ctx.transform(1.025, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5487]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5490(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 260 240 L -540 240 -540 -400 260 -400 260 240";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.5123291015625, 0, 0, 19.3939208984375, -559, -419);
  ctx.transform(1.0232558139534884, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5489]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5492(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 120 180 L -620 180 -620 -460 120 -460 120 180";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.47357177734375, 0, 0, 19.3939208984375, -640, -479);
  ctx.transform(1.025, 0, 0, 1.0285714285714285, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5491]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5494(ctx, ctrans, frame, ratio, time) {
  var pathData = "M -719 -460 L 41 -460 41 40 -719 40 -719 -460";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.4873046875, 0, 0, 19.23065185546875, -739, -480);
  ctx.transform(1.024390243902439, 0, 0, 1.0357142857142858, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5493]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5495(ctx, ctrans, frame, ratio, time) {
  var pathData = "M -80 -500 L -80 0 -780 0 -780 -500 -80 -500";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.444580078125, 0, 0, 19.23065185546875, -800, -519);
  ctx.transform(1.0263157894736843, 0, 0, 1.0357142857142858, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5485]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5497(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 480 320 L -300 320 -300 -180 480 -180 480 320";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.50006103515625, 0, 0, 19.23065185546875, -320, -199);
  ctx.transform(1.0238095238095237, 0, 0, 1.0357142857142858, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5496]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5499(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 660 -120 L 660 380 -280 380 -280 -120 660 -120";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.58343505859375, 0, 0, 19.23065185546875, -300, -140);
  ctx.transform(1.02, 0, 0, 1.0357142857142858, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5498]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5501(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 740 -80 L 740 460 -200 460 -200 -80 740 -80";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.58343505859375, 0, 0, 19.28558349609375, -219, -99);
  ctx.transform(1.02, 0, 0, 1.0333333333333334, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5500]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
function shape5503(ctx, ctrans, frame, ratio, time) {
  var pathData = "M 881 520 L -59 520 -59 20 881 20 881 520";
  drawPath(ctx, pathData, false);
  ctx.save();
  ctx.clip();
  ctx.transform(19.58343505859375, 0, 0, 19.23065185546875, -79, 1);
  ctx.transform(1.02, 0, 0, 1.0357142857142858, -0.5, -0.5);
  var fimg = ctrans.applyToImage(IMAGES[5502]);
  var pat = ctx.createPattern(fimg, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(-16384, -16384, 32768, 32768);
  ctx.restore()
}
