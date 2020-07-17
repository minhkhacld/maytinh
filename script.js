window.onload = function reload() {
  document.getElementById("smv").focus();
  timeoption1.value = 0;
  timeoption2.value = 0;
  mpoption1.value = 0;
  mpoption2.value = 0;
};
th_tinhtoan.onclick = () => {
  var smv1 = smv.value;
  var ltime = losttime.value;
  var sltt1 = sltt.value;
  var smv2 = document.getElementById('smvhai').value;
  var sltthai = document.getElementById('sltthai').value;
  var losttimehai = document.getElementById('losttimehai').value;
  var tarper1 = parseInt(tarper.value);
  console.log(tarper1);
  var baygio1 = baygio.value;
  var baybamuoi1 = baybamuoi.value;
  var tamgio1 = tamgio.value;
  var tambamuoi1 = tambamuoi.value;
  var chingio1 = chingio.value;
  var chinbamuoi1 = chinbamuoi.value;
  var muoigio1 = muoigio.value;
  var muoibamuoi1 = muoibamuoi.value;
  var muoimotgio1 = muoimotgio.value;
  var muoimotbamuoi1 = muoimotbamuoi.value;
  var timeoptionmot = parseInt(timeoption1.value);
  console.log(timeoptionmot);
  var timeoptionhai = parseInt(timeoption2.value);
  console.log(timeoptionhai);
  var mpoptionmot = parseInt(mpoption1.value);
  console.log(mpoptionmot);
  var mpoptionhai = parseInt(mpoption2.value);
  console.log(mpoptionhai);

  var nptmp = document.getElementById("npt-mp").value;
  console.log(nptmp);
  var npttime = document.getElementById("npt-time").value;
  console.log(npttime);

  var attentmin =
    (Math.round(
      baygio1 * 420 +
      baybamuoi1 * 450 +
      tamgio1 * 480 +
      tambamuoi1 * 510 +
      chingio1 * 540 +
      chinbamuoi1 * 570 +
      muoigio1 * 600 +
      muoibamuoi1 * 630 +
      muoimotgio1 * 660 +
      muoimotbamuoi1 * 690 +
      timeoptionmot * mpoptionmot * 60 +
      timeoptionhai * mpoptionhai * 60
      // - nptmp * npttime * 60
      // - nptmp * npttime * 60 - ltime * sltt1
      - nptmp * npttime * 60 
    ) *
      tarper1) /
    100;
  attent_min.innerHTML = attentmin + " phút";
  var producemin = Math.round(sltt1 * smv1 +sltthai*smv2);
  produce_min.innerHTML = producemin + " phút";
  //Dư/ thiếu
  result_min.innerHTML = attentmin - producemin + " phút";
  //Target
  var target1 = Math.round(attentmin / smv1);
  target.innerHTML = target1 + " cái/ngày";
  //Eff
  var eff1 = Math.ceil(((producemin+(ltime*sltt1)+(losttimehai*sltthai)) / attentmin) * 100);
  // var eff1 = Math.ceil((producemin +(ltime * sltt1)/ attentmin) * 100);
  // console.log(eff1)
  eff.innerHTML = (((producemin+(ltime*sltt1)+(losttimehai*sltthai)) / attentmin)*100).toFixed(2) + " %";
  // eff.innerHTML = (((producemin +(ltime * sltt1))/ attentmin)*100).toFixed(2) + " %";
  // Insentive
  var hieusuat = [
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    123,
    124,
    125,
    126,
    127,
    128,
    129,
    130,
  ];

  function checkScore(hieusuat) {
    return hieusuat === eff1;
    // console.log(hieusuat)
  }
  function myFunction() {
    var result = hieusuat.findIndex(checkScore);
    result = parseInt(result);
    return result;
  }
  // console.log(myFunction())
  if (myFunction() !== -1 && typeofpd.value === "1") {
    //OPERATOR
    if (myFunction() <= 19) {
      var tiencongnhan = myFunction() * 1726 + 30264;
      opeins.innerHTML = tiencongnhan + " VND";
    } else if (myFunction() > 19 && myFunction() <= 29) {
      var tiencongnhan = myFunction() * 1726 + 30264 + 14726 - 1726;
      opeins.innerHTML = tiencongnhan + " VND";
    } else if (myFunction() > 29 && myFunction() <= 70) {
      var tiencongnhan =
        myFunction() * 1726 + 30264 + 17260 + 14726 - 1726 - 1726;
      opeins.innerHTML = tiencongnhan + " VND";
    } else if (myFunction() > 70) {
      var tiencongnhan = 70 * 1726 + 30264 + 17260 + 14726 - 1726 - 1726;
      opeins.innerHTML = tiencongnhan + " VND";
    }

    //Normal garment-LEADER
    if (myFunction() <= 10 && myFunction() >= 1) {
      var tientotruong = Math.round((myFunction() * 1726 + 30264) * 1.1);
      leaderins.innerHTML = tientotruong + " VND";
    } else if (myFunction() === 0) {
      var tientotruong = Math.round(myFunction() * 1726 + 30264);
      leaderins.innerHTML = tientotruong + " VND";
    } else if (myFunction() > 10 && myFunction() < 20) {
      var tientotruong = Math.round((myFunction() * 1726 + 30264) * 1.2);
      leaderins.innerHTML = tientotruong + " VND";
    } else if (myFunction() === 20) {
      var tientotruong = Math.round(
        (myFunction() * 1726 + 30264 + 14726 - 1726) * 1.2
      );
      leaderins.innerHTML = tientotruong + " VND";
    } else if (myFunction() > 20 && myFunction() < 30) {
      var tientotruong = Math.round(
        (myFunction() * 1726 + 30264 + 14726 - 1726) * 1.4
      );
      leaderins.innerHTML = tientotruong + "VND";
    } else if (myFunction() === 30) {
      var tientotruong = Math.round(
        (myFunction() * 1726 + 30264 + 14726 + 17260 - 1726 - 1726) * 1.4
      );
      leaderins.innerHTML = tientotruong + "VND";
    } else if (myFunction() > 30 && myFunction() <= 40) {
      var tientotruong = Math.round(
        (myFunction() * 1726 + 30264 + 14726 + 17260 - 1726 - 1726) * 1.6
      );
      leaderins.innerHTML = tientotruong + " VND";
    } else if (myFunction() > 40 && myFunction() <= 50) {
      var tientotruong = Math.round(
        (myFunction() * 1726 + 30264 + 14726 + 17260 - 1726 - 1726) * 1.8
      );
      leaderins.innerHTML = tientotruong + " VND";
    } else if (myFunction() > 50 && myFunction() <= 60) {
      var tientotruong = Math.round(
        (myFunction() * 1726 + 30264 + 14726 + 17260 - 1726 - 1726) * 2
      );
      leaderins.innerHTML = tientotruong + " VND";
    } else if (myFunction() > 60 && myFunction() <= 70) {
      var tientotruong = Math.round(
        (myFunction() * 1726 + 30264 + 14726 + 17260 - 1726 - 1726) * 2.2
      );
      leaderins.innerHTML = tientotruong + " VND";
    } else if (myFunction() > 70) {
      var tientotruong = Math.round(
        (70 * 1726 + 30264 + 14726 + 17260 - 1726 - 1726) * 2.2
      );
      leaderins.innerHTML = tientotruong + " VND";
    }
  }
  //SPORTFIELD
  else if (myFunction() !== -1 && typeofpd.value === "2") {
    //OPERATOR
    if (myFunction() <= 19) {
      var tiencongnhan = myFunction() * 2942 + 44418;
      opeins.innerHTML = tiencongnhan + " VND";
    } else if (myFunction() > 19 && myFunction() <= 29) {
      var tiencongnhan = myFunction() * 2942 + 44418 + 17942 - 2942;
      opeins.innerHTML = tiencongnhan + " VND";
    } else if (myFunction() > 29 && myFunction() <= 70) {
      var tiencongnhan =
        myFunction() * 2942 + 44418 + 17942 + 29420 - 2942 - 2942;
      opeins.innerHTML = tiencongnhan + " VND";
    } else if (myFunction() > 70) {
      var tiencongnhan = 70 * 2942 + 44418 + 17942 + 29420 - 2942 - 2942;
      opeins.innerHTML = tiencongnhan + " VND";
    }
    //technical garment - LEADER

    if (myFunction() <= 10 && myFunction() >= 1) {
      var tientotruongsf = Math.round((myFunction() * 2942 + 44418) * 1.1);
      leaderins.innerHTML = tientotruongsf + " VND";
    } else if (myFunction() === 0) {
      var tientotruongsf = Math.round(myFunction() * 2942 + 44418);
      leaderins.innerHTML = tientotruongsf + " VND";
    } else if (myFunction() > 10 && myFunction() < 20) {
      var tientotruongsf = Math.round((myFunction() * 2942 + 44418) * 1.2);
      leaderins.innerHTML = tientotruongsf + " VND";
    } else if (myFunction() === 20) {
      var tientotruongsf = Math.round(
        (myFunction() * 2942 + 44418 + 17942 - 2942) * 1.2
      );
      leaderins.innerHTML = tientotruongsf + " VND";
    } else if (myFunction() > 20 && myFunction() < 30) {
      var tientotruongsf = Math.round(
        (myFunction() * 2942 + 44418 + 17942 - 2942) * 1.4
      );
      leaderins.innerHTML = tientotruongsf + " VND";
    } else if (myFunction() === 30) {
      var tientotruongsf = Math.round(
        (myFunction() * 2942 + 44418 + 17942 + 29420 - 2942 - 2942) * 1.4
      );
      leaderins.innerHTML = tientotruongsf + "VND";
    } else if (myFunction() > 30 && myFunction() <= 40) {
      var tientotruongsf = Math.round(
        (myFunction() * 2942 + 44418 + 17942 + 29420 - 2942 - 2942) * 1.6
      );
      leaderins.innerHTML = tientotruongsf + " VND";
    } else if (myFunction() > 40 && myFunction() <= 50) {
      var tientotruongsf = Math.round(
        (myFunction() * 2942 + 44418 + 17942 + 29420 - 2942 - 2942) * 1.8
      );
      leaderins.innerHTML = tientotruongsf + " VND";
    } else if (myFunction() > 50 && myFunction() <= 60) {
      var tientotruongsf = Math.round(
        (myFunction() * 2942 + 44418 + 17942 + 29420 - 2942 - 2942) * 2
      );
      leaderins.innerHTML = tientotruongsf + " VND";
    } else if (myFunction() > 60 && myFunction() <= 70) {
      var tientotruongsf = Math.round(
        (myFunction() * 2942 + 44418 + 17942 + 29420 - 2942 - 2942) * 2.2
      );
      leaderins.innerHTML = tientotruongsf + " VND";
    } else if (myFunction() > 70) {
      var tientotruong = Math.round(
        (70 * 2942 + 44418 + 17942 + 29420 - 2942 - 2942) * 2.2
      );
      leaderins.innerHTML = tientotruong + " VND";
    }
  } else {
    opeins.innerHTML = "Chưa đủ 50% để hưởng tiền thưởng";
    leaderins.innerHTML = "Chưa đủ 50% để hưởng tiền thưởng";
  }
};

th_lammoi.onclick = () => {
  smv.value = "";
  sltt.value = "";
  tarper.value = "";
  baygio.value = "";
  baybamuoi.value = "";
  tamgio.value = "";
  tambamuoi.value = "";
  chingio.value = "";
  chinbamuoi.value = "";
  muoigio.value = "";
  muoibamuoi.value = "";
  muoimotgio.value = "";
  th_thongbaonhaplieu.innerHTML = "Vui lòng nhập lại dữ liệu";
  attent_min.innerHTML = "Chưa nhập dữ liệu";
  produce_min.innerHTML = "Chưa nhập dữ liệu";
  result_min.innerHTML = "Chưa nhập dữ liệu";
  target.innerHTML = "Chưa nhập dữ liệu";
  eff.innerHTML = "Chưa nhập dữ liệu";
  opeins.innerHTML = "Chưa nhập dữ liệu";
  leaderins.innerHTML = "Chưa nhập dữ liệu";
  timeoption1.value = 0;
  timeoption2.value = 0;
  mpoption1.value = 0;
  mpoption2.value = 0;
  losttime.value = 0;
  tarper.value = 1 + "00%";
  document.getElementById("smv").focus();
};

// Khu vực Hieu suất _ tiền hưởng
var board = [
  {
    hieu_suat: 50,
    norm_oper: 30264,
    tech_oper: 44418,
    norm_lead: 30264,
    tech_lead: 44418,
    ie_ppc: 37830,
    spre_bund: 25899,
    cut_iron: 28901,
  },
  {
    hieu_suat: 51,
    norm_oper: 31990,
    tech_oper: 47360,
    norm_lead: 35189,
    tech_lead: 52096,
    ie_ppc: 39988,
    spre_bund: 26842,
    cut_iron: 29943,
  },
  {
    hieu_suat: 52,
    norm_oper: 33716,
    tech_oper: 50302,
    norm_lead: 37088,
    tech_lead: 55332,
    ie_ppc: 42145,
    spre_bund: 27785,
    cut_iron: 30985,
  },
  {
    hieu_suat: 53,
    norm_oper: 35442,
    tech_oper: 53244,
    norm_lead: 38986,
    tech_lead: 58568,
    ie_ppc: 44303,
    spre_bund: 28728,
    cut_iron: 32027,
  },
  {
    hieu_suat: 54,
    norm_oper: 37168,
    tech_oper: 56186,
    norm_lead: 40885,
    tech_lead: 61805,
    ie_ppc: 46460,
    spre_bund: 29671,
    cut_iron: 33069,
  },
  {
    hieu_suat: 55,
    norm_oper: 38894,
    tech_oper: 59128,
    norm_lead: 42783,
    tech_lead: 65041,
    ie_ppc: 48618,
    spre_bund: 30614,
    cut_iron: 34111,
  },
  {
    hieu_suat: 56,
    norm_oper: 40620,
    tech_oper: 62070,
    norm_lead: 44682,
    tech_lead: 68277,
    ie_ppc: 50775,
    spre_bund: 31557,
    cut_iron: 35153,
  },
  {
    hieu_suat: 57,
    norm_oper: 42346,
    tech_oper: 65012,
    norm_lead: 46581,
    tech_lead: 71513,
    ie_ppc: 52933,
    spre_bund: 32500,
    cut_iron: 36195,
  },
  {
    hieu_suat: 58,
    norm_oper: 44072,
    tech_oper: 67954,
    norm_lead: 48479,
    tech_lead: 74749,
    ie_ppc: 55090,
    spre_bund: 33443,
    cut_iron: 37237,
  },
  {
    hieu_suat: 59,
    norm_oper: 45798,
    tech_oper: 70896,
    norm_lead: 50378,
    tech_lead: 77986,
    ie_ppc: 57248,
    spre_bund: 34386,
    cut_iron: 38279,
  },
  {
    hieu_suat: 60,
    norm_oper: 47524,
    tech_oper: 73838,
    norm_lead: 52276,
    tech_lead: 81222,
    ie_ppc: 59405,
    spre_bund: 35329,
    cut_iron: 39321,
  },
  {
    hieu_suat: 61,
    norm_oper: 49250,
    tech_oper: 76780,
    norm_lead: 59100,
    tech_lead: 92136,
    ie_ppc: 61563,
    spre_bund: 36272,
    cut_iron: 40363,
  },
  {
    hieu_suat: 62,
    norm_oper: 50976,
    tech_oper: 79722,
    norm_lead: 61171,
    tech_lead: 95666,
    ie_ppc: 63720,
    spre_bund: 37215,
    cut_iron: 41405,
  },
  {
    hieu_suat: 63,
    norm_oper: 52702,
    tech_oper: 82664,
    norm_lead: 63242,
    tech_lead: 99197,
    ie_ppc: 65878,
    spre_bund: 38158,
    cut_iron: 42447,
  },
  {
    hieu_suat: 64,
    norm_oper: 54428,
    tech_oper: 85606,
    norm_lead: 65314,
    tech_lead: 102727,
    ie_ppc: 68035,
    spre_bund: 39101,
    cut_iron: 43489,
  },
  {
    hieu_suat: 65,
    norm_oper: 56154,
    tech_oper: 88548,
    norm_lead: 67385,
    tech_lead: 106258,
    ie_ppc: 70193,
    spre_bund: 40044,
    cut_iron: 44531,
  },
  {
    hieu_suat: 66,
    norm_oper: 57880,
    tech_oper: 91490,
    norm_lead: 69456,
    tech_lead: 109788,
    ie_ppc: 72350,
    spre_bund: 40987,
    cut_iron: 45573,
  },
  {
    hieu_suat: 67,
    norm_oper: 59606,
    tech_oper: 94432,
    norm_lead: 71527,
    tech_lead: 113318,
    ie_ppc: 74508,
    spre_bund: 41930,
    cut_iron: 46615,
  },
  {
    hieu_suat: 68,
    norm_oper: 61332,
    tech_oper: 97374,
    norm_lead: 73598,
    tech_lead: 116849,
    ie_ppc: 76665,
    spre_bund: 42873,
    cut_iron: 47657,
  },
  {
    hieu_suat: 69,
    norm_oper: 63058,
    tech_oper: 100316,
    norm_lead: 75670,
    tech_lead: 120379,
    ie_ppc: 78823,
    spre_bund: 43816,
    cut_iron: 48699,
  },
  {
    hieu_suat: 70,
    norm_oper: 77784,
    tech_oper: 118258,
    norm_lead: 93341,
    tech_lead: 141910,
    ie_ppc: 97230,
    spre_bund: 54645,
    cut_iron: 71178,
  },
  {
    hieu_suat: 71,
    norm_oper: 79510,
    tech_oper: 121200,
    norm_lead: 111314,
    tech_lead: 169680,
    ie_ppc: 99388,
    spre_bund: 55588,
    cut_iron: 72220,
  },
  {
    hieu_suat: 72,
    norm_oper: 81236,
    tech_oper: 124142,
    norm_lead: 113730,
    tech_lead: 173799,
    ie_ppc: 101545,
    spre_bund: 56531,
    cut_iron: 73262,
  },
  {
    hieu_suat: 73,
    norm_oper: 82962,
    tech_oper: 127084,
    norm_lead: 116147,
    tech_lead: 177918,
    ie_ppc: 103703,
    spre_bund: 57474,
    cut_iron: 74304,
  },
  {
    hieu_suat: 74,
    norm_oper: 84688,
    tech_oper: 130026,
    norm_lead: 118563,
    tech_lead: 182036,
    ie_ppc: 105860,
    spre_bund: 58417,
    cut_iron: 75346,
  },
  {
    hieu_suat: 75,
    norm_oper: 86414,
    tech_oper: 132968,
    norm_lead: 120980,
    tech_lead: 186155,
    ie_ppc: 108018,
    spre_bund: 59360,
    cut_iron: 76388,
  },
  {
    hieu_suat: 76,
    norm_oper: 88140,
    tech_oper: 135910,
    norm_lead: 123396,
    tech_lead: 190274,
    ie_ppc: 110175,
    spre_bund: 60303,
    cut_iron: 77430,
  },
  {
    hieu_suat: 77,
    norm_oper: 89866,
    tech_oper: 138852,
    norm_lead: 125812,
    tech_lead: 194393,
    ie_ppc: 112333,
    spre_bund: 61246,
    cut_iron: 78472,
  },
  {
    hieu_suat: 78,
    norm_oper: 91592,
    tech_oper: 141794,
    norm_lead: 128229,
    tech_lead: 198512,
    ie_ppc: 114490,
    spre_bund: 62189,
    cut_iron: 79514,
  },
  {
    hieu_suat: 79,
    norm_oper: 93318,
    tech_oper: 144736,
    norm_lead: 130645,
    tech_lead: 202630,
    ie_ppc: 116648,
    spre_bund: 63132,
    cut_iron: 80556,
  },
  {
    hieu_suat: 80,
    norm_oper: 110578,
    tech_oper: 174156,
    norm_lead: 154809,
    tech_lead: 243818,
    ie_ppc: 138223,
    spre_bund: 78904,
    cut_iron: 102724,
  },
  {
    hieu_suat: 81,
    norm_oper: 112304,
    tech_oper: 177098,
    norm_lead: 179686,
    tech_lead: 283357,
    ie_ppc: 140380,
    spre_bund: 79847,
    cut_iron: 103766,
  },
  {
    hieu_suat: 82,
    norm_oper: 114030,
    tech_oper: 180040,
    norm_lead: 182448,
    tech_lead: 288064,
    ie_ppc: 142538,
    spre_bund: 80790,
    cut_iron: 104808,
  },
  {
    hieu_suat: 83,
    norm_oper: 115756,
    tech_oper: 182982,
    norm_lead: 185210,
    tech_lead: 292771,
    ie_ppc: 144695,
    spre_bund: 81733,
    cut_iron: 105850,
  },
  {
    hieu_suat: 84,
    norm_oper: 117482,
    tech_oper: 185924,
    norm_lead: 187971,
    tech_lead: 297478,
    ie_ppc: 146853,
    spre_bund: 82676,
    cut_iron: 106892,
  },
  {
    hieu_suat: 85,
    norm_oper: 119208,
    tech_oper: 188866,
    norm_lead: 190733,
    tech_lead: 302186,
    ie_ppc: 149010,
    spre_bund: 83619,
    cut_iron: 107934,
  },
  {
    hieu_suat: 86,
    norm_oper: 120934,
    tech_oper: 191808,
    norm_lead: 193494,
    tech_lead: 306893,
    ie_ppc: 151168,
    spre_bund: 84562,
    cut_iron: 108976,
  },
  {
    hieu_suat: 87,
    norm_oper: 122660,
    tech_oper: 194750,
    norm_lead: 196256,
    tech_lead: 311600,
    ie_ppc: 153325,
    spre_bund: 85505,
    cut_iron: 110018,
  },
  {
    hieu_suat: 88,
    norm_oper: 124386,
    tech_oper: 197692,
    norm_lead: 199018,
    tech_lead: 316307,
    ie_ppc: 155483,
    spre_bund: 86448,
    cut_iron: 111060,
  },
  {
    hieu_suat: 89,
    norm_oper: 126112,
    tech_oper: 200634,
    norm_lead: 201779,
    tech_lead: 321014,
    ie_ppc: 157640,
    spre_bund: 87391,
    cut_iron: 112102,
  },
  {
    hieu_suat: 90,
    norm_oper: 127838,
    tech_oper: 203576,
    norm_lead: 204541,
    tech_lead: 325722,
    ie_ppc: 159798,
    spre_bund: 88334,
    cut_iron: 113144,
  },
  {
    hieu_suat: 91,
    norm_oper: 129564,
    tech_oper: 206518,
    norm_lead: 233215,
    tech_lead: 371732,
    ie_ppc: 161955,
    spre_bund: 89277,
    cut_iron: 114186,
  },
  {
    hieu_suat: 92,
    norm_oper: 131290,
    tech_oper: 209460,
    norm_lead: 236322,
    tech_lead: 377028,
    ie_ppc: 164113,
    spre_bund: 90220,
    cut_iron: 115228,
  },
  {
    hieu_suat: 93,
    norm_oper: 133016,
    tech_oper: 212402,
    norm_lead: 239429,
    tech_lead: 382324,
    ie_ppc: 166270,
    spre_bund: 91163,
    cut_iron: 116270,
  },
  {
    hieu_suat: 94,
    norm_oper: 134742,
    tech_oper: 215344,
    norm_lead: 242536,
    tech_lead: 387619,
    ie_ppc: 168428,
    spre_bund: 92106,
    cut_iron: 117312,
  },
  {
    hieu_suat: 95,
    norm_oper: 136468,
    tech_oper: 218286,
    norm_lead: 245642,
    tech_lead: 392915,
    ie_ppc: 170585,
    spre_bund: 93049,
    cut_iron: 118354,
  },
  {
    hieu_suat: 96,
    norm_oper: 138194,
    tech_oper: 221228,
    norm_lead: 248749,
    tech_lead: 398210,
    ie_ppc: 172743,
    spre_bund: 93992,
    cut_iron: 119396,
  },
  {
    hieu_suat: 97,
    norm_oper: 139920,
    tech_oper: 224170,
    norm_lead: 251856,
    tech_lead: 403506,
    ie_ppc: 174900,
    spre_bund: 94935,
    cut_iron: 120438,
  },
  {
    hieu_suat: 98,
    norm_oper: 141646,
    tech_oper: 227112,
    norm_lead: 254963,
    tech_lead: 408802,
    ie_ppc: 177058,
    spre_bund: 95878,
    cut_iron: 121480,
  },
  {
    hieu_suat: 99,
    norm_oper: 143372,
    tech_oper: 230054,
    norm_lead: 258070,
    tech_lead: 414097,
    ie_ppc: 179215,
    spre_bund: 96821,
    cut_iron: 122522,
  },
  {
    hieu_suat: 100,
    norm_oper: 145098,
    tech_oper: 232996,
    norm_lead: 261176,
    tech_lead: 419393,
    ie_ppc: 181373,
    spre_bund: 97764,
    cut_iron: 123564,
  },
  {
    hieu_suat: 101,
    norm_oper: 146824,
    tech_oper: 235938,
    norm_lead: 293648,
    tech_lead: 471876,
    ie_ppc: 183530,
    spre_bund: 98707,
    cut_iron: 124606,
  },
  {
    hieu_suat: 102,
    norm_oper: 148550,
    tech_oper: 238880,
    norm_lead: 297100,
    tech_lead: 477760,
    ie_ppc: 185688,
    spre_bund: 99650,
    cut_iron: 125648,
  },
  {
    hieu_suat: 103,
    norm_oper: 150276,
    tech_oper: 241822,
    norm_lead: 300552,
    tech_lead: 483644,
    ie_ppc: 187845,
    spre_bund: 100593,
    cut_iron: 126690,
  },
  {
    hieu_suat: 104,
    norm_oper: 152002,
    tech_oper: 244764,
    norm_lead: 304004,
    tech_lead: 489528,
    ie_ppc: 190003,
    spre_bund: 101536,
    cut_iron: 127732,
  },
  {
    hieu_suat: 105,
    norm_oper: 153728,
    tech_oper: 247706,
    norm_lead: 307456,
    tech_lead: 495412,
    ie_ppc: 192160,
    spre_bund: 102479,
    cut_iron: 128774,
  },
  {
    hieu_suat: 106,
    norm_oper: 155454,
    tech_oper: 250648,
    norm_lead: 310908,
    tech_lead: 501296,
    ie_ppc: 194318,
    spre_bund: 103422,
    cut_iron: 129816,
  },
  {
    hieu_suat: 107,
    norm_oper: 157180,
    tech_oper: 253590,
    norm_lead: 314360,
    tech_lead: 507180,
    ie_ppc: 196475,
    spre_bund: 104365,
    cut_iron: 130858,
  },
  {
    hieu_suat: 108,
    norm_oper: 158906,
    tech_oper: 256532,
    norm_lead: 317812,
    tech_lead: 513064,
    ie_ppc: 198633,
    spre_bund: 105308,
    cut_iron: 131900,
  },
  {
    hieu_suat: 109,
    norm_oper: 160632,
    tech_oper: 259474,
    norm_lead: 321264,
    tech_lead: 518948,
    ie_ppc: 200790,
    spre_bund: 106251,
    cut_iron: 132942,
  },
  {
    hieu_suat: 110,
    norm_oper: 162358,
    tech_oper: 262416,
    norm_lead: 324716,
    tech_lead: 524832,
    ie_ppc: 202948,
    spre_bund: 107194,
    cut_iron: 133984,
  },
  {
    hieu_suat: 111,
    norm_oper: 164084,
    tech_oper: 265358,
    norm_lead: 360985,
    tech_lead: 583788,
    ie_ppc: 205105,
    spre_bund: 108137,
    cut_iron: 135026,
  },
  {
    hieu_suat: 112,
    norm_oper: 165810,
    tech_oper: 268300,
    norm_lead: 364782,
    tech_lead: 590260,
    ie_ppc: 207263,
    spre_bund: 109080,
    cut_iron: 136068,
  },
  {
    hieu_suat: 113,
    norm_oper: 167536,
    tech_oper: 271242,
    norm_lead: 368579,
    tech_lead: 596732,
    ie_ppc: 209420,
    spre_bund: 110023,
    cut_iron: 137110,
  },
  {
    hieu_suat: 114,
    norm_oper: 169262,
    tech_oper: 274184,
    norm_lead: 372376,
    tech_lead: 603205,
    ie_ppc: 211578,
    spre_bund: 110966,
    cut_iron: 138152,
  },
  {
    hieu_suat: 115,
    norm_oper: 170988,
    tech_oper: 277126,
    norm_lead: 376174,
    tech_lead: 609677,
    ie_ppc: 213735,
    spre_bund: 111909,
    cut_iron: 139194,
  },
  {
    hieu_suat: 116,
    norm_oper: 172714,
    tech_oper: 280068,
    norm_lead: 379971,
    tech_lead: 616150,
    ie_ppc: 215893,
    spre_bund: 112852,
    cut_iron: 140236,
  },
  {
    hieu_suat: 117,
    norm_oper: 174440,
    tech_oper: 283010,
    norm_lead: 383768,
    tech_lead: 622622,
    ie_ppc: 218050,
    spre_bund: 113795,
    cut_iron: 141278,
  },
  {
    hieu_suat: 118,
    norm_oper: 176166,
    tech_oper: 285952,
    norm_lead: 387565,
    tech_lead: 629094,
    ie_ppc: 220208,
    spre_bund: 114738,
    cut_iron: 142320,
  },
  {
    hieu_suat: 119,
    norm_oper: 177892,
    tech_oper: 288894,
    norm_lead: 391362,
    tech_lead: 635567,
    ie_ppc: 222365,
    spre_bund: 115681,
    cut_iron: 143362,
  },
  {
    hieu_suat: 120,
    norm_oper: 179618,
    tech_oper: 291836,
    norm_lead: 395160,
    tech_lead: 642039,
    ie_ppc: 224523,
    spre_bund: 116624,
    cut_iron: 144404,
  },
  {
    hieu_suat: 121,
    norm_oper: 179618,
    tech_oper: 291836,
    norm_lead: 395160,
    tech_lead: 642039,
    ie_ppc: 224523,
    spre_bund: 116624,
    cut_iron: 144404,
  },
  {
    hieu_suat: 122,
    norm_oper: 179618,
    tech_oper: 291836,
    norm_lead: 395160,
    tech_lead: 642039,
    ie_ppc: 224523,
    spre_bund: 116624,
    cut_iron: 144404,
  },
  {
    hieu_suat: 123,
    norm_oper: 179618,
    tech_oper: 291836,
    norm_lead: 395160,
    tech_lead: 642039,
    ie_ppc: 224523,
    spre_bund: 116624,
    cut_iron: 144404,
  },
  {
    hieu_suat: 124,
    norm_oper: 179618,
    tech_oper: 291836,
    norm_lead: 395160,
    tech_lead: 642039,
    ie_ppc: 224523,
    spre_bund: 116624,
    cut_iron: 144404,
  },
  {
    hieu_suat: 125,
    norm_oper: 179618,
    tech_oper: 291836,
    norm_lead: 395160,
    tech_lead: 642039,
    ie_ppc: 224523,
    spre_bund: 116624,
    cut_iron: 144404,
  },
  {
    hieu_suat: 126,
    norm_oper: 179618,
    tech_oper: 291836,
    norm_lead: 395160,
    tech_lead: 642039,
    ie_ppc: 224523,
    spre_bund: 116624,
    cut_iron: 144404,
  },
  {
    hieu_suat: 127,
    norm_oper: 179618,
    tech_oper: 291836,
    norm_lead: 395160,
    tech_lead: 642039,
    ie_ppc: 224523,
    spre_bund: 116624,
    cut_iron: 144404,
  },
  {
    hieu_suat: 128,
    norm_oper: 179618,
    tech_oper: 291836,
    norm_lead: 395160,
    tech_lead: 642039,
    ie_ppc: 224523,
    spre_bund: 116624,
    cut_iron: 144404,
  },
  {
    hieu_suat: 129,
    norm_oper: 179618,
    tech_oper: 291836,
    norm_lead: 395160,
    tech_lead: 642039,
    ie_ppc: 224523,
    spre_bund: 116624,
    cut_iron: 144404,
  },
  {
    hieu_suat: 130,
    norm_oper: 179618,
    tech_oper: 291836,
    norm_lead: 395160,
    tech_lead: 642039,
    ie_ppc: 224523,
    spre_bund: 116624,
    cut_iron: 144404,
  },
];
//Onchange
area.onchange = () => {
  if (area.value == 1) {
    document.getElementById("loaihang").style.display = "block";
  } else {
    document.getElementById("loaihang").style.display = "none";
  }
};
th_xemkq.onclick = () => {
  //Sewing
  if (area.value == 1) {
    //normal garment
    if (typeof_pd.value == 1) {
      function tao_bang() {
        var html =
          "<table border='0' width=100% margin=10px auto text-align=center";
        html += "<tbody>";
        html += "<tr>";
        html += "<th>Hiệu Suất</th>";
        html += "<th>Công Nhân</th>";
        html += "<th>Tổ Trưởng</th>";
        html += "</tr>";
        for (var i = 0; i < board.length; i++) {
          html += '<tr id="">';
          html += '<td scope="row">' + board[i].hieu_suat + "</td>";
          html += '<td scope="row">' + board[i].norm_oper + "</td>";
          html += '<td scope="row">' + board[i].norm_lead + "</td>";
          html += " </tr>";
          html += "</tbody>";
        }
        html += "</table>";
        document.getElementById("box").style.margin = "0px";
        document.getElementById("box").style.fontSize = "15px";
        document.getElementById("box").style.textAlign = "center";
        return html;
      }
      document.getElementById("box").innerHTML = tao_bang();
      console.log("kv" + area.value);
      console.log("loai" + typeof_pd.value);
    }
    //technical garment
    else if (typeof_pd.value == 2) {
      function tao_bang() {
        var html =
          "<table border='0' width=100% margin=10px auto text-align=center";
        html += "<tbody>";
        html += "<tr>";
        html += "<th>Hiệu Suất</th>";
        html += "<th>Công Nhân</th>";
        html += "<th>Tổ Trưởng</th>";
        html += "</tr>";
        for (var i = 0; i < board.length; i++) {
          html += '<tr id="">';
          html += '<td scope="row">' + board[i].hieu_suat + "</td>";
          html += '<td scope="row">' + board[i].tech_oper + "</td>";
          html += '<td scope="row">' + board[i].tech_lead + "</td>";
          html += " </tr>";
          html += "</tbody>";
        }
        html += "</table>";
        document.getElementById("box").style.margin = "0px";
        document.getElementById("box").style.fontSize = "15px";
        document.getElementById("box").style.textAlign = "center";
        return html;
      }
      document.getElementById("box").innerHTML = tao_bang();
      console.log("kv" + area.value);
      console.log("loai" + typeof_pd.value);
    }
  }
  // Spreading, numbering, printing, HT, bundling, supermaket, fusing, bonding, recut
  else if (area.value == 2) {
    function tao_bang() {
      var html =
        "<table border='0' width=100% margin=10px auto text-align=center";
      html += "<tbody>";
      html += "<tr>";
      html += "<th>Hiệu Suất</th>";
      html += "<th>Công Nhân</th>";
      html += "<th>Tổ Trưởng</th>";
      html += "</tr>";
      for (var i = 0; i < board.length; i++) {
        html += '<tr id="">';
        html += '<td scope="row">' + board[i].hieu_suat + "</td>";
        html += '<td scope="row">' + board[i].spre_bund + "</td>";
        html += '<td scope="row">' + board[i].norm_lead + "</td>";
        html += " </tr>";
        html += "</tbody>";
      }
      html += "</table>";
      document.getElementById("box").style.margin = "0px";
      document.getElementById("box").style.fontSize = "15px";
      document.getElementById("box").style.textAlign = "center";
      return html;
    }
    document.getElementById("box").innerHTML = tao_bang();
    console.log("kv" + area.value);
  }
  // ironing , cutter
  else if (area.value == 3) {
    function tao_bang() {
      var html =
        "<table border='0' width=100% margin=10px auto text-align=center";
      html += "<tbody>";
      html += "<tr>";
      html += "<th>Hiệu Suất</th>";
      html += "<th>Công Nhân</th>";
      html += "<th>Tổ Trưởng</th>";
      html += "</tr>";
      for (var i = 0; i < board.length; i++) {
        html += '<tr id="">';
        html += '<td scope="row">' + board[i].hieu_suat + "</td>";
        html += '<td scope="row">' + board[i].cut_iron + "</td>";
        html += '<td scope="row">' + board[i].norm_lead + "</td>";
        html += " </tr>";
        html += "</tbody>";
      }
      html += "</table>";
      document.getElementById("box").style.margin = "0px";
      document.getElementById("box").style.fontSize = "15px";
      document.getElementById("box").style.textAlign = "center";
      return html;
    }
    document.getElementById("box").innerHTML = tao_bang();
    console.log("kv" + area.value);
  }
  // staff non sewing, automation, production assitant
  else if (area.value == 4) {
    function tao_bang() {
      var html =
        "<table border='0' width=100% margin=10px auto text-align=center";
      html += "<tbody>";
      html += "<tr>";
      html += "<th>Hiệu Suất</th>";
      html += "<th>Công Nhân</th>";
      html += "<th>Tổ Trưởng</th>";
      html += "</tr>";
      for (var i = 0; i < board.length; i++) {
        html += '<tr id="">';
        html += '<td scope="row">' + board[i].hieu_suat + "</td>";
        html += '<td scope="row">' + board[i].spre_bund + "</td>";
        html += '<td scope="row">' + board[i].norm_lead + "</td>";
        html += " </tr>";
        html += "</tbody>";
      }
      html += "</table>";
      document.getElementById("box").style.margin = "0px";
      document.getElementById("box").style.fontSize = "15px";
      document.getElementById("box").style.textAlign = "center";
      return html;
    }
    document.getElementById("box").innerHTML = tao_bang();
    console.log("kv" + area.value);
  }
  //Fabric, accessory
  else if (area.value == 5) {
    function tao_bang() {
      var html =
        "<table border='0' width=100% margin=10px auto text-align=center";
      html += "<tbody>";
      html += "<tr>";
      html += "<th>Hiệu Suất</th>";
      html += "<th>Công Nhân</th>";
      html += "<th>Tổ Trưởng</th>";
      html += "</tr>";
      for (var i = 0; i < board.length; i++) {
        html += '<tr id="">';
        html += '<td scope="row">' + board[i].hieu_suat + "</td>";
        html += '<td scope="row">' + board[i].spre_bund + "</td>";
        html += '<td scope="row">' + board[i].ie_ppc + "</td>";
        html += " </tr>";
        html += "</tbody>";
      }
      html += "</table>";
      document.getElementById("box").style.margin = "0px";
      document.getElementById("box").style.fontSize = "15px";
      document.getElementById("box").style.textAlign = "center";
      return html;
    }
    document.getElementById("box").innerHTML = tao_bang();
    console.log("kv" + area.value);
  }
  // QA, QC
  else if (area.value == 6) {
    function tao_bang() {
      var html =
        "<table border='0' width=100% margin=10px auto text-align=center";
      html += "<tbody>";
      html += "<tr>";
      html += "<th>Hiệu Suất</th>";
      html += "<th>Công Nhân</th>";
      html += "<th>Tổ Trưởng</th>";
      html += "</tr>";
      for (var i = 0; i < board.length; i++) {
        html += '<tr id="">';
        html += '<td scope="row">' + board[i].hieu_suat + "</td>";
        html += '<td scope="row">' + board[i].spre_bund + "</td>";
        html += '<td scope="row">' + board[i].ie_ppc + "</td>";
        html += " </tr>";
        html += "</tbody>";
      }
      html += "</table>";
      document.getElementById("box").style.margin = "0px";
      document.getElementById("box").style.fontSize = "15px";
      document.getElementById("box").style.textAlign = "center";
      return html;
    }
    document.getElementById("box").innerHTML = tao_bang();
    console.log("kv" + area.value);
  }
  //scan and pack, finishing, packing, cleaniing, change needle
  else if (area.value == 7) {
    function tao_bang() {
      var html =
        "<table border='0' width=100% margin=10px auto text-align=center";
      html += "<tbody>";
      html += "<tr>";
      html += "<th>Hiệu Suất</th>";
      html += "<th>Công Nhân</th>";
      html += "<th>Tổ Trưởng</th>";
      html += "</tr>";
      for (var i = 0; i < board.length; i++) {
        html += '<tr id="">';
        html += '<td scope="row">' + board[i].hieu_suat + "</td>";
        html += '<td scope="row">' + board[i].spre_bund + "</td>";
        html += '<td scope="row">' + board[i].norm_lead + "</td>";
        html += " </tr>";
        html += "</tbody>";
      }
      html += "</table>";
      document.getElementById("box").style.margin = "0px";
      document.getElementById("box").style.fontSize = "15px";
      document.getElementById("box").style.textAlign = "center";
      return html;
    }
    document.getElementById("box").innerHTML = tao_bang();
    console.log("kv" + area.value);
  }
  //ie, ppc, main, mech, tech
  else if (area.value == 8) {
    function tao_bang() {
      var html =
        "<table border='0' width=100% margin=10px auto text-align=center";
      html += "<tbody>";
      html += "<tr>";
      html += "<th>Hiệu Suất</th>";
      html += "<th>Công Nhân</th>";
      html += "<th>Tổ Trưởng</th>";
      html += "</tr>";
      for (var i = 0; i < board.length; i++) {
        html += '<tr id="">';
        html += '<td scope="row">' + board[i].hieu_suat + "</td>";
        html += '<td scope="row">' + board[i].ie_ppc + "</td>";
        html += '<td scope="row">' + board[i].ie_ppc + "</td>";
        html += " </tr>";
        html += "</tbody>";
      }
      html += "</table>";
      document.getElementById("box").style.margin = "0px";
      document.getElementById("box").style.fontSize = "15px";
      document.getElementById("box").style.textAlign = "center";
      return html;
    }
    document.getElementById("box").innerHTML = tao_bang();
    console.log("kv" + area.value);
  }
  document.getElementById("btn_thugon").style.display = "block";
  document.getElementById("box").style.display = "block";
};
btn_thugon.onclick = () => {
  document.getElementById("box").style.display = "none";
  document.getElementById("btn_thugon").style.display = "none";
};
//Lam mới
th_refresh.onclick = () => {
  location.reload();
};


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}