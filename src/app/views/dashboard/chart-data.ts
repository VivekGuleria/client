import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

import {DashboardComponent}from './dashboard.component'
import * as moment from 'moment';

export interface IChartProps {
  data?: any;
  labels?: any;
  options?: any;
  colors?: any;
  type?: any;
  legend?: any;

  [propName: string]: any;
}
interface IUser {
  // name: string;
  Date: string,
  REJECTED: Number,
  REQUEST: Number,
  SUCCESS: Number,
  GrandTotal: Number
}
const item:any= [
  {
   "Date": "01/01/2022",
   "REJECTED": 7,
   "REQUEST": 4,
   "SUCCESS": 63,
   "GrandTotal": 77,
   
  },
  {
   "Date": "01/02/2022",
   "REJECTED": 6,
   "REQUEST": 4,
   "SUCCESS": 41,
   "GrandTotal": 53
  },
  {
   "Date": "01/03/2022",
   "REJECTED": 5,
   "REQUEST": 8,
   "SUCCESS": 43,
   "GrandTotal": 53
  },
  {
   "Date": "01/04/2022",
   "REJECTED": 9,
   "REQUEST": 5,
   "SUCCESS": 43,
   "GrandTotal": 53
  },
  {
   "Date": "01/05/2022",
   "REJECTED": 12,
   "REQUEST": 32,
   "SUCCESS": 42,
   "GrandTotal": 53
  },
  {
   "Date": "01/06/2022",
   "REJECTED": 15,
   "REQUEST": 6,
   "SUCCESS": 42,
   "GrandTotal": 53
  },
  {
   "Date": "01/07/2022",
   "REJECTED": 18,
   "REQUEST": 26,
   "SUCCESS": 43,
   "GrandTotal": 53
  },
  {
   "Date": "01/08/2022",
   "REJECTED": 20,
   "REQUEST": 5,
   "SUCCESS": 43,
   "GrandTotal": 53
  },
  {
   "Date": "01/09/2022",
   "REJECTED": 6,
   "REQUEST": 19,
   "SUCCESS": 41,
   "GrandTotal": 53
  },
  {
   "Date": "01/10/2022",
   "REJECTED": 5,
   "REQUEST": 13,
   "SUCCESS": 43,
   "GrandTotal": 53
  },
  {
   "Date": "01/11/2022",
   "REJECTED": 5,
   "REQUEST": 2,
   "SUCCESS": 43,
   "GrandTotal": 53
  },
  {
   "Date": "01/12/2022",
   "REJECTED": 6,
   "REQUEST": 2,
   "SUCCESS": 41,
   "GrandTotal": 53
  },
  {
   "Date": "01/13/2022",
   "REJECTED": 2,
   "REQUEST": 6,
   "SUCCESS": 24,
   "GrandTotal": 28
  },
  {
   "Date": "01/14/2022",
   "REJECTED": 20,
   "REQUEST": 3,
   "SUCCESS": 22,
   "GrandTotal": 28
  },
  {
   "Date": "01/15/2022",
   "REJECTED": 3,
   "REQUEST": 36,
   "SUCCESS": 22,
   "GrandTotal": 28
  },
  {
   "Date": "01/16/2022",
   "REJECTED": 8,
   "REQUEST": 28,
   "SUCCESS": 62,
   "GrandTotal": 78
  },
  {
   "Date": "01/17/2022",
   "REJECTED": 8,
   "REQUEST": 38,
   "SUCCESS": 62,
   "GrandTotal": 78
  },
  {
   "Date": "01/18/2022",
   "REJECTED": 22,
   "REQUEST": 12,
   "SUCCESS": 104,
   "GrandTotal": 128
  },
  {
   "Date": "01/19/2022",
   "REJECTED": 11,
   "REQUEST": 5,
   "SUCCESS": 81,
   "GrandTotal": 103
  },
  {
   "Date": "01/20/2022",
   "REJECTED": 15,
   "REQUEST": 10,
   "SUCCESS": 123,
   "GrandTotal": 153
  },
  {
   "Date": "01/21/2022",
   "REJECTED": 25,
   "REQUEST": 35,
   "SUCCESS": 203,
   "GrandTotal": 253
  },
  {
   "Date": "01/22/2022",
   "REJECTED": 16,
   "REQUEST": 6,
   "SUCCESS": 121,
   "GrandTotal": 153
  },
  {
   "Date": "01/23/2022",
   "REJECTED": 45,
   "REQUEST": 15,
   "SUCCESS": 123,
   "GrandTotal": 153
  },
  {
   "Date": "01/24/2022",
   "REJECTED": 55,
   "REQUEST": 25,
   "SUCCESS": 123,
   "GrandTotal": 153
  },
  {
   "Date": "01/25/2022",
   "REJECTED": 3,
   "REQUEST": 43,
   "SUCCESS": 182,
   "GrandTotal": 228
  },
  {
   "Date": "01/26/2022",
   "REJECTED": 10,
   "REQUEST": 20,
   "SUCCESS": 163,
   "GrandTotal": 203
  },
  {
   "Date": "01/27/2022",
   "REJECTED": 21,
   "REQUEST": 11,
   "SUCCESS": 161,
   "GrandTotal": 203
  },
  {
   "Date": "01/28/2022",
   "REJECTED": 22,
   "REQUEST": 2,
   "SUCCESS": 184,
   "GrandTotal": 228
  },
  {
   "Date": "01/29/2022",
   "REJECTED": 23,
   "REQUEST": 40,
   "SUCCESS": 182,
   "GrandTotal": 228
  },
  {
   "Date": "01/30/2022",
   "REJECTED": 31,
   "REQUEST": 30,
   "SUCCESS": 242,
   "GrandTotal": 303
  },
  {
   "Date": "01/31/2022",
   "REJECTED": 35,
   "REQUEST": 6,
   "SUCCESS": 282,
   "GrandTotal": 353
  },
  {
   "Date": "02/01/2022",
   "REJECTED": 35,
   "REQUEST": 20,
   "SUCCESS": 283,
   "GrandTotal": 353
  },
  {
   "Date": "02/02/2022",
   "REJECTED": 35,
   "REQUEST": 30,
   "SUCCESS": 283,
   "GrandTotal": 353
  },
  {
   "Date": "02/03/2022",
   "REJECTED": 26,
   "REQUEST": 20,
   "SUCCESS": 201,
   "GrandTotal": 253
  },
  {
   "Date": "02/04/2022",
   "REJECTED": 28,
   "REQUEST": 22,
   "SUCCESS": 223,
   "GrandTotal": 278
  },
  {
   "Date": "02/05/2022",
   "REJECTED": 30,
   "REQUEST":40,
   "SUCCESS": 282,
   "GrandTotal": 353
  },
  {
   "Date": "02/06/2022",
   "REJECTED": 23,
   "REQUEST": 73,
   "SUCCESS": 182,
   "GrandTotal": 228
  },
  {
   "Date": "02/07/2022",
   "REJECTED": 20,
   "REQUEST": 40,
   "SUCCESS": 163,
   "GrandTotal": 203
  }
 ]
 const item2:any=[
  {
   "Date": "01/01/2022",
   "REJECTED": 7,
   "REQUEST": 17,
   "SUCCESS": 63,
   "GrandTotal": 77,
   "AMOUNT": 233975.78139534872
  },
  {
   "Date": "01/02/2022",
   "REJECTED": 6,
   "REQUEST": 65,
   "SUCCESS": 41,
   "GrandTotal": 53,
   "AMOUNT": 162784.7291754756
  },
  {
   "Date": "01/03/2022",
   "REJECTED": 25,
   "REQUEST": 5,
   "SUCCESS": 43,
   "GrandTotal": 53,
   "AMOUNT": 238101.5240310076
  },
  {
   "Date": "01/04/2022",
   "REJECTED": 5,
   "REQUEST": 65,
   "SUCCESS": 43,
   "GrandTotal": 53,
   "AMOUNT": 140924.22832980967
  },
  {
   "Date": "01/05/2022",
   "REJECTED": 86,
   "REQUEST": 5,
   "SUCCESS": 42,
   "GrandTotal": 53,
   "AMOUNT": 242778.7687808314
  },
  {
   "Date": "01/06/2022",
   "REJECTED": 25,
   "REQUEST": 6,
   "SUCCESS": 42,
   "GrandTotal": 53,
   "AMOUNT": 138042.28985200843
  },
  {
   "Date": "01/07/2022",
   "REJECTED": 5,
   "REQUEST": 25,
   "SUCCESS": 43,
   "GrandTotal": 53,
   "AMOUNT": 212595.22071881595
  },
  {
   "Date": "01/08/2022",
   "REJECTED": 5,
   "REQUEST": 59,
   "SUCCESS": 43,
   "GrandTotal": 53,
   "AMOUNT": 175345.74566596185
  },
  {
   "Date": "01/09/2022",
   "REJECTED": 76,
   "REQUEST": 6,
   "SUCCESS": 41,
   "GrandTotal": 53,
   "AMOUNT": 197470.26490486247
  },
  {
   "Date": "01/10/2022",
   "REJECTED": 5,
   "REQUEST": 55,
   "SUCCESS": 43,
   "GrandTotal": 53,
   "AMOUNT": 197590.6092318533
  },
  {
   "Date": "01/11/2022",
   "REJECTED": 5,
   "REQUEST": 25,
   "SUCCESS": 43,
   "GrandTotal": 53,
   "AMOUNT": 153046.90133897105
  },
  {
   "Date": "01/12/2022",
   "REJECTED": 6,
   "REQUEST": 56,
   "SUCCESS": 41,
   "GrandTotal": 53,
   "AMOUNT": 249133.8805496827
  },
  {
   "Date": "01/13/2022",
   "REJECTED": 2,
   "REQUEST": 12,
   "SUCCESS": 24,
   "GrandTotal": 28,
   "AMOUNT": 76691.63002114164
  },
  {
   "Date": "01/14/2022",
   "REJECTED": 23,
   "REQUEST": 3,
   "SUCCESS": 22,
   "GrandTotal": 28,
   "AMOUNT": 70347.58498942916
  },
  {
   "Date": "01/15/2022",
   "REJECTED": 43,
   "REQUEST": 3,
   "SUCCESS": 22,
   "GrandTotal": 28,
   "AMOUNT": 128743.02424242412
  },
  {
   "Date": "01/16/2022",
   "REJECTED": 8,
   "REQUEST": 68,
   "SUCCESS": 62,
   "GrandTotal": 78,
   "AMOUNT": 255314.356095842
  },
  {
   "Date": "01/17/2022",
   "REJECTED": 88,
   "REQUEST": 8,
   "SUCCESS": 62,
   "GrandTotal": 78,
   "AMOUNT": 272319.75560253684
  },
  {
   "Date": "01/18/2022",
   "REJECTED": 12,
   "REQUEST": 2,
   "SUCCESS": 104,
   "GrandTotal": 128,
   "AMOUNT": 483918.0849894288
  },
  {
   "Date": "01/19/2022",
   "REJECTED": 11,
   "REQUEST": 1,
   "SUCCESS": 81,
   "GrandTotal": 103,
   "AMOUNT": 383767.7727272725
  },
  {
   "Date": "01/20/2022",
   "REJECTED": 15,
   "REQUEST": 25,
   "SUCCESS": 123,
   "GrandTotal": 153,
   "AMOUNT": 502395.40584918926
  },
  {
   "Date": "01/21/2022",
   "REJECTED": 25,
   "REQUEST": 5,
   "SUCCESS": 203,
   "GrandTotal": 253,
   "AMOUNT": 933924.1106412963
  },
  {
   "Date": "01/22/2022",
   "REJECTED": 16,
   "REQUEST": 6,
   "SUCCESS": 121,
   "GrandTotal": 153,
   "AMOUNT": 536959.3329809721
  },
  {
   "Date": "01/23/2022",
   "REJECTED": 25,
   "REQUEST": 15,
   "SUCCESS": 123,
   "GrandTotal": 153,
   "AMOUNT": 516699.69873150066
  },
  {
   "Date": "01/24/2022",
   "REJECTED": 5,
   "REQUEST": 15,
   "SUCCESS": 123,
   "GrandTotal": 153,
   "AMOUNT": 615861.5211416486
  },
  {
   "Date": "01/25/2022",
   "REJECTED": 13,
   "REQUEST": 23,
   "SUCCESS": 182,
   "GrandTotal": 228,
   "AMOUNT": 748840.5211416486
  },
  {
   "Date": "01/26/2022",
   "REJECTED": 70,
   "REQUEST": 20,
   "SUCCESS": 163,
   "GrandTotal": 203,
   "AMOUNT": 726727.2014094429
  },
  {
   "Date": "01/27/2022",
   "REJECTED": 1,
   "REQUEST": 21,
   "SUCCESS": 161,
   "GrandTotal": 203,
   "AMOUNT": 732764.4011275544
  },
  {
   "Date": "01/28/2022",
   "REJECTED": 22,
   "REQUEST": 12,
   "SUCCESS": 184,
   "GrandTotal": 228,
   "AMOUNT": 846535.4714587732
  },
  {
   "Date": "01/29/2022",
   "REJECTED": 23,
   "REQUEST": 13,
   "SUCCESS": 182,
   "GrandTotal": 228,
   "AMOUNT": 771631.7629316417
  },
  {
   "Date": "01/30/2022",
   "REJECTED": 31,
   "REQUEST": 10,
   "SUCCESS": 242,
   "GrandTotal": 303,
   "AMOUNT": 1089116.3061310777
  },
  {
   "Date": "01/31/2022",
   "REJECTED": 15,
   "REQUEST": 36,
   "SUCCESS": 282,
   "GrandTotal": 353,
   "AMOUNT": 1244698.0260747003
  },
  {
   "Date": "02/01/2022",
   "REJECTED": 25,
   "REQUEST": 35,
   "SUCCESS": 283,
   "GrandTotal": 353,
   "AMOUNT": 1303890.5422832977
  },
  {
   "Date": "02/02/2022",
   "REJECTED": 25,
   "REQUEST": 35,
   "SUCCESS": 283,
   "GrandTotal": 353,
   "AMOUNT": 1249522.3059196612
  },
  {
   "Date": "02/03/2022",
   "REJECTED": 16,
   "REQUEST": 26,
   "SUCCESS": 201,
   "GrandTotal": 253,
   "AMOUNT": 875458.499295278
  },
  {
   "Date": "02/04/2022",
   "REJECTED": 98,
   "REQUEST": 27,
   "SUCCESS": 223,
   "GrandTotal": 278,
   "AMOUNT": 990119.2899224801
  },
  {
   "Date": "02/05/2022",
   "REJECTED": 35,
   "REQUEST": 16,
   "SUCCESS": 282,
   "GrandTotal": 353,
   "AMOUNT": 1290882.7318534176
  },
  {
   "Date": "02/06/2022",
   "REJECTED": 23,
   "REQUEST": 13,
   "SUCCESS": 182,
   "GrandTotal": 228,
   "AMOUNT": 781633.1061310779
  },
  {
   "Date": "02/07/2022",
   "REJECTED": 20,
   "REQUEST": 2,
   "SUCCESS": 163,
   "GrandTotal": 203,
   "AMOUNT": 731999.4523608171
  }
 ]
 const data2:any=[
  {
  
        "Date": "01/01/2022",
        "IMPS": 9,
        "NEFT": 47,
        "RTGS": 21,
        "WALLET": 43,
        "Grand Total": 77
       },
       {
        "Date": "01/02/2022",
        "IMPS": 12,
        "NEFT": 5,
        "RTGS": 2,
        "WALLET": 48,
        "Grand Total": 53
       },
       {
        "Date": "01/03/2022",
        "IMPS": 9,
        "NEFT": 16,
        "RTGS": 21,
        "WALLET": 7,
        "Grand Total": 53
       },
       {
        "Date": "01/04/2022",
        "IMPS": 5,
        "NEFT": 36,
        "RTGS": 23,
        "WALLET": 17,
        "Grand Total": 53
       },
       {
        "Date": "01/05/2022",
        "IMPS": 12,
        "NEFT": 45,
        "RTGS": 15,
        "WALLET": 38,
        "Grand Total": 53
       },
       {
        "Date": "01/06/2022",
        "IMPS": 9,
        "NEFT": 38,
        "RTGS": 6,
        "WALLET": 56,
        "Grand Total": 53
       },
       {
        "Date": "01/07/2022",
        "IMPS": 12,
        "NEFT": 14,
        "RTGS": 45,
        "WALLET": 39,
        "Grand Total": 53
       },
       {
        "Date": "01/08/2022",
        "IMPS": 9,
        "NEFT": 7,
        "RTGS": 21,
        "WALLET": 16,
        "Grand Total": 53
       },
       {
        "Date": "01/09/2022",
        "IMPS": 56,
        "NEFT": 45,
        "RTGS": 78,
        "WALLET": 8,
        "Grand Total": 53
       },
       {
        "Date": "01/10/2022",
        "IMPS": 90,
        "NEFT": 23,
        "RTGS": 6,
        "WALLET": 47,
        "Grand Total": 53
       },
       {
        "Date": "01/11/2022",
        "IMPS": 9,
        "NEFT": 29,
        "RTGS": 15,
        "WALLET": 2,
        "Grand Total": 53
       },
       {
        "Date": "01/12/2022",
        "IMPS": 3,
        "NEFT": 23,
        "RTGS": 45,
        "WALLET": 30,
        "Grand Total": 53
       },
       {
        "Date": "01/13/2022",
        "IMPS": 10,
        "NEFT": 12,
        "RTGS": 3,
        "WALLET": 25,
        "Grand Total": 28
       },
       {
        "Date": "01/14/2022",
        "IMPS": 9,
        "NEFT": 1,
        "RTGS": 18,
        "WALLET": 2,
        "Grand Total": 28
       },
       {
        "Date": "01/15/2022",
        "IMPS": 12,
        "NEFT": 28,
        "RTGS":5,
        "WALLET": 23,
        "Grand Total": 28
       },
       {
        "Date": "01/16/2022",
        "IMPS": 12,
        "NEFT": 23,
        "RTGS": 27,
        "WALLET": 55,
        "Grand Total": 78
       },
       {
        "Date": "01/17/2022",
        "IMPS": 9,
        "NEFT": 48,
        "RTGS": 21,
        "WALLET": 78,
        "Grand Total": 78
       },
       {
        "Date": "01/18/2022",
        "IMPS": 9,
        "NEFT": 43,
        "RTGS": 21,
        "WALLET": 55,
        "Grand Total": 128
       },
       {
        "Date": "01/19/2022",
        "IMPS": 9,
        "NEFT": 18,
        "RTGS": 21,
        "WALLET": 55,
        "Grand Total": 103
       },
       {
        "Date": "01/20/2022",
        "IMPS": 9,
        "NEFT": 68,
        "RTGS": 21,
        "WALLET": 55,
        "Grand Total": 153
       },
       {
        "Date": "01/21/2022",
        "IMPS": 18,
        "NEFT": 83,
        "RTGS": 42,
        "WALLET": 110,
        "Grand Total": 253
       },
       {
        "Date": "01/22/2022",
        "IMPS": 9,
        "NEFT": 68,
        "RTGS": 21,
        "WALLET": 55,
        "Grand Total": 153
       },
       {
        "Date": "01/23/2022",
        "IMPS": 9,
        "NEFT": 68,
        "RTGS": 21,
        "WALLET": 55,
        "Grand Total": 153
       },
       {
        "Date": "01/24/2022",
        "IMPS": 9,
        "NEFT": 68,
        "RTGS": 21,
        "WALLET": 55,
        "Grand Total": 153
       },
       {
        "Date": "01/25/2022",
        "IMPS": 18,
        "NEFT": 58,
        "RTGS": 42,
        "WALLET": 110,
        "Grand Total": 228
       },
       {
        "Date": "01/26/2022",
        "IMPS": 9,
        "NEFT": 102,
        "RTGS": 21,
        "WALLET": 71,
        "Grand Total": 203
       },
       {
        "Date": "01/27/2022",
        "IMPS": 15,
        "NEFT": 52,
        "RTGS": 42,
        "WALLET": 94,
        "Grand Total": 203
       },
       {
        "Date": "01/28/2022",
        "IMPS": 12,
        "NEFT": 104,
        "RTGS": 21,
        "WALLET": 91,
        "Grand Total": 228
       },
       {
        "Date": "01/29/2022",
        "IMPS": 18,
        "NEFT": 94,
        "RTGS": 42,
        "WALLET": 74,
        "Grand Total": 228
       },
       {
        "Date": "01/30/2022",
        "IMPS": 18,
        "NEFT": 114,
        "RTGS": 42,
        "WALLET": 129,
        "Grand Total": 303
       },
       {
        "Date": "01/31/2022",
        "IMPS": 27,
        "NEFT": 117,
        "RTGS": 63,
        "WALLET": 146,
        "Grand Total": 353
       },
       {
        "Date": "02/01/2022",
        "IMPS": 18,
        "NEFT": 143,
        "RTGS": 42,
        "WALLET": 150,
        "Grand Total": 353
       },
       {
        "Date": "02/02/2022",
        "IMPS": 27,
        "NEFT": 138,
        "RTGS": 63,
        "WALLET": 125,
        "Grand Total": 353
       },
       {
        "Date": "02/03/2022",
        "IMPS": 18,
        "NEFT": 83,
        "RTGS": 42,
        "WALLET": 110,
        "Grand Total": 253
       },
       {
        "Date": "02/04/2022",
        "IMPS": 18,
        "NEFT": 108,
        "RTGS": 42,
        "WALLET": 110,
        "Grand Total": 278
       },
       {
        "Date": "02/05/2022",
        "IMPS": 18,
        "NEFT": 139,
        "RTGS": 42,
        "WALLET": 154,
        "Grand Total": 353
       },
       {
        "Date": "02/06/2022",
        "IMPS": 18,
        "NEFT": 102,
        "RTGS": 42,
        "WALLET": 66,
        "Grand Total": 228
       },
       {
        "Date": "02/07/2022",
        "IMPS": 9,
        "NEFT": 54,
        "RTGS": 30,
        "WALLET": 110,
        "Grand Total": 203    
  }]
  const data:any=[
    {
    "Date":"01-12-2022 to 01-18-2022",
    "REJECTED":42,
    "REQUEST":70,
    "SUCCESS":337,
    "GrandTotal":421
    },
    
    {
    "Date":"01-19-2022 to 01-25-2022",
    "REJECTED":120,
    "REQUEST":400,
    "SUCCESS":956,
    "GrandTotal":1196
    },
    
    {
    "Date":"01-26-2022 to 02-01-2022",
    "REJECTED":387,
    "REQUEST":187,
    "SUCCESS":1497,
    "GrandTotal":1871
    },
    
    {
    "Date":"02-02-2022 to 02-07-2022",
    "REJECTED":767,
    "REQUEST":167,
    "SUCCESS":1334,
    "GrandTotal":1668
    }
    ]
  const weekdata2:any=[
      {
     "Date": "01/12/2022 to 01/18/2022"  ,
     "IMPS": 64,
     "NEFT": 178,
     "RTGS":140,
     "WALLET":268,
     "Grand Total":421
    },
    {
     "Date": "01/19/2022 to 01/25/2022",
     "IMPS": 81,
     "NEFT": 431,
     "RTGS": 189,
     "WALLET":495,
     "Grand Total":1196
    },
    {
     "Date": "01/26/2022 to 02/01/2022",
     "IMPS": 117,    
     "NEFT": 726,
     "RTGS": 273,
     "WALLET": 755,
     "Grand Total": 1871
    },


     {
     "Date": "02/02/2022 to 02/07/2022",
     "IMPS": 108,
     "NEFT": 624,
     "RTGS": 261,
     "WALLET": 675,
     "Grand Total": 1668
    }
]

const paymentbyamount:any=[
    {
     "Date": "01/01/2022",
     "IMPS": 8099.5,
     "NEFT": 184330.78139534872,
     "RTGS": 41545.5,
     "WALLET": 71545.5,
     "Column6": 233975.78139534872
    },
    {
     "Date": "01/02/2022",
     "IMPS":  57255,
     "NEFT": 27255.886187455926,
     "RTGS": 22551,
     "WALLET": 135528.8429880197,
     "Column6": 162784.7291754756
    },
    {
     "Date": "01/03/2022",
     "IMPS": 42705.63615221984,
     "NEFT": 87689.57350246648,
     "RTGS": 84123.31437632129,
     "WALLET": 23583,
     "Column6": 238101.5240310076
    },
    {
     "Date": "0/04/2022",
     "IMPS": 41511,
     "NEFT": 91511.98653981675,
     "RTGS": 31511,
     "WALLET": 49412.24178999295,
     "Column6": 140924.22832980967
    },
    {
     "Date": "01/05/2022",
     "IMPS": 38056,
     "NEFT": 18056,
     "RTGS": 68056.09302325577,
     "WALLET": 174722.6757575756,
     "Column6": 242778.7687808314
    },
    {
     "Date": "01/06/2022",
     "IMPS": 25684,
     "NEFT": 107247.28985200843,
     "RTGS": 5111,
     "WALLET": 7111,
     "Column6": 138042.28985200843
    },
    {
     "Date": "01/07/2022",
     "IMPS": 35684,
     "NEFT": 63547.721141648995,
     "RTGS": 45684,
     "WALLET": 149047.49957716692,
     "Column6": 212595.22071881595
    },
    {
     "Date": "01/08/2022",
     "IMPS": 36880.2570824524,
     "NEFT": 31979.808315715254,
     "RTGS": 67774.18026779419,
     "WALLET": 38711.5,
     "Column6": 175345.74566596185
    },
    {
     "Date": "01/09/2022",
     "IMPS": 279320,
     "NEFT": 179320.76490486247,
     "RTGS": 379320,
     "WALLET": 18149.5,
     "Column6": 197470.26490486247
    },
    {
     "Date": "01/10/2022",
     "IMPS": 479320,
     "NEFT": 379320,
     "RTGS": 31471.376955602514,
     "WALLET": 166119.23227625078,
     "Column6": 197590.6092318533
    },
    {
     "Date": "01/11/2022",
     "IMPS": 10488.31042988019,
     "NEFT": 54612.5,
     "RTGS": 87946.09090909085,
     "WALLET": 779320,
     "Column6": 153046.90133897105
    },
    {
     "Date": "01/12/2022",
     "IMPS": 179320,
     "NEFT": 93542.26215644814,
     "RTGS": 79320,
     "WALLET": 155591.61839323453,
     "Column6": 249133.8805496827
    },
    {
     "Date": "01/13/2022",
     "IMPS": 679320,
     "NEFT": 379320,
     "RTGS": 9739.5,
     "WALLET": 66952.13002114164,
     "Column6": 76691.63002114164
    },
    {
     "Date": "01/14/2022",
     "IMPS": 34307.83192389004,
     "NEFT": 3744.75306553911,
     "RTGS": 32295,
     "WALLET": 279320,
     "Column6": 70347.58498942916
    },
    {
     "Date": "01/15/2022",
     "IMPS": 179320,
     "NEFT": 128743.02424242412,
     "RTGS": 79320,
     "WALLET": 279320,
     "Column6": 128743.02424242412
    },
    {
     "Date": "01/16/2022",
     "IMPS": 379320,
     "NEFT": 97200.40133897105,
     "RTGS": 279320,
     "WALLET": 158113.95475687098,
     "Column6": 255314.356095842
    },
    {
     "Date": "01/17/2022",
     "IMPS": 53297.23446088792,
     "NEFT": 113197.6044397463,
     "RTGS": 105824.91670190266,
     "WALLET":613197,
     "Column6": 272319.75560253684
    },
    {
     "Date": "01/18/2022",
     "IMPS": 21353,
     "NEFT": 182466.49548978137,
     "RTGS": 43147.5,
     "WALLET": 236951.08949964747,
     "Column6": 483918.0849894288
    },
    {
     "Date": "01/19/2022",
     "IMPS": 47471.85539112047,
     "NEFT": 103122.77836504573,
     "RTGS": 92232.36553911195,
     "WALLET": 140940.77343199434,
     "Column6": 383767.7727272725
    },
    {
     "Date": "01/20/2022",
     "IMPS": 15245.5,
     "NEFT": 177974.89527836497,
     "RTGS": 45024.27864693445,
     "WALLET": 264150.7319238899,
     "Column6": 502395.40584918926
    },
    {
     "Date": "01/21/2022",
     "IMPS": 62999.476321353024,
     "NEFT": 329528.4622973923,
     "RTGS": 164094.7803382663,
     "WALLET": 377301.39168428443,
     "Column6": 933924.1106412963
    },
    {
     "Date": "01/22/2022",
     "IMPS": 35821.09725158559,
     "NEFT": 243369.05179703998,
     "RTGS": 63802.83192389004,
     "WALLET": 193966.35200845657,
     "Column6": 536959.3329809721
    },
    {
     "Date": "01/23/2022",
     "IMPS": 20995.404651162782,
     "NEFT": 192279.18816067645,
     "RTGS": 116946.09492600415,
     "WALLET": 186479.01099365743,
     "Column6": 516699.69873150066
    },
    {
     "Date": "01/24/2022",
     "IMPS": 33902.85243128963,
     "NEFT": 315798.59654686373,
     "RTGS": 42036.5,
     "WALLET": 224123.5721634953,
     "Column6": 615861.5211416486
    },
    {
     "Date": "01/25/2022",
     "IMPS": 63344.07463002111,
     "NEFT": 146244.25602536998,
     "RTGS": 148094.04376321344,
     "WALLET": 391158.14672304405,
     "Column6": 748840.5211416486
    },
    {
     "Date": "01/26/2022",
     "IMPS": 46412.69556025366,
     "NEFT": 383156.18252290314,
     "RTGS": 89760.99260042276,
     "WALLET": 207397.3307258632,
     "Column6": 726727.2014094429
    },
    {
     "Date": "01/27/2022",
     "IMPS": 48132.13107822408,
     "NEFT": 192198.27420718805,
     "RTGS": 136302.61761804082,
     "WALLET": 356131.37822410127,
     "Column6": 732764.4011275544
    },
    {
     "Date": "01/28/2022",
     "IMPS": 25164.68541226214,
     "NEFT": 367230.9398872443,
     "RTGS": 90999.22410147986,
     "WALLET": 363140.62205778685,
     "Column6": 846535.4714587732
    },
    {
     "Date": "01/29/2022",
     "IMPS": 67463.0674418604,
     "NEFT": 308043.9625088089,
     "RTGS": 172164.57441860458,
     "WALLET": 223960.15856236772,
     "Column6": 771631.7629316417
    },
    {
     "Date": "01/30/2022",
     "IMPS": 90235.15658914724,
     "NEFT": 417154.19682875235,
     "RTGS": 142917.67082452425,
     "WALLET": 438809.28188865364,
     "Column6": 1089116.3061310777
    },
    {
     "Date": "01/31/2022",
     "IMPS": 88586.03572938686,
     "NEFT": 407245.33826638456,
     "RTGS": 183076.8490486257,
     "WALLET": 565789.8030303026,
     "Column6": 1244698.0260747003
    },
    {
     "Date": "02/01/2022",
     "IMPS": 50196.15665961942,
     "NEFT": 537610.7551092315,
     "RTGS": 182942.5262156447,
     "WALLET": 533141.1042988015,
     "Column6": 1303890.5422832977
    },
    {
     "Date": "02/02/2022",
     "IMPS": 110356.26412966872,
     "NEFT": 494622.6628611695,
     "RTGS": 208812.0908386187,
     "WALLET": 435731.288090204,
     "Column6": 1249522.3059196612
    },
    {
     "Date": "02/03/2022",
     "IMPS": 60845.75496828749,
     "NEFT": 282970.9523608174,
     "RTGS": 143471.297885835,
     "WALLET": 388170.4940803379,
     "Column6": 875458.499295278
    },
    {
     "Date": "02/04/2022",
     "IMPS": 77496.37589852005,
     "NEFT": 373693.7522198729,
     "RTGS": 146129.6482029597,
     "WALLET": 392799.51360112726,
     "Column6": 990119.2899224801
    },
    {
     "Date": "02/05/2022",
     "IMPS": 49331.99682875261,
     "NEFT": 516213.86680761055,
     "RTGS": 179119.08872445373,
     "WALLET": 546217.7794926,
     "Column6": 1290882.7318534176
    },
    {
     "Date": "02/06/2022",
     "IMPS": 82316.59915433398,
     "NEFT": 338350.1980972514,
     "RTGS": 159299.36236786464,
     "WALLET": 201666.9465116278,
     "Column6": 781633.1061310779
    },
    {
     "Date": "02/07/2022",
     "IMPS": 29902,
     "NEFT": 259611.54334038033,
     "RTGS": 83314.49682875258,
     "WALLET": 359171.41219168407,
     "Column6": 731999.4523608171
    },
   
   
]
@Injectable({
  providedIn:'root'
})
export class DashboardChartsData {
  constructor() {
    this.initMainChart();
    this.initPaymentChart();
    this.initAmountPieChart();
    this.initAmountPaymentChart()
  }

  public mainChart: IChartProps = {};
  public mainChart2: IChartProps = {};
  public mainChart3: IChartProps = {};
  public mainChart4: IChartProps = {};
  public mainChartData1: Array<any> = [];
  public mainChartData2: Array<any> = [];
  public mainChartData3: Array<any> = [];
  public mainChartData4: Array<any> = [];
  public labels:Array<any>=[]
  public lineChartData: any = [
    { data: [], label: 'SUCCESS',fill:false },
    { data: [], label: 'REQUEST' ,fill:false},
    { data: [], label: 'REJECTED' ,fill:false}
  ];

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
val:any;
val2:any="value"
  initMainChart(period: string='Week')
   {
       console.log("hello");
       
     console.log(period);
     
    
    if( period=='Month' ){
      this.getMonthData();
     }
     if(period=='Week')
     {
       this.getWeekData();
     }
     if( period=='Day')
     {
       this.getDayData();
     }
    // if(this.val2=="Amount"){
    //   this.initAmountChart(this.val2);
    // }
 
    const brandSuccess =  '#4dbd74';
    const brandInfo = '#20a8d8';
    const brandInfoBg =  '#20a8d8';
    const brandDanger =  '#f86c6b';
    const brandPrimary ='#a662a3';

    this.mainChart['Data1']= [];
    this.mainChart['Data2'] = [];
    this.mainChart['Data3'] = [];
  

    const colors = [
      {
        // brandInfo
        backgroundColor: 'transparent',
        
        // pointHoverBackgroundColor: brandInfo,

      
      },
      {
        // brandSuccess
        backgroundColor: 'transparent',
        borderColor: brandSuccess || '#4dbd74',
        // pointHoverBackgroundColor: '#fff'
        pointHoverBackgroundColor: '#fff',
      },
      {
        // brandDanger
        backgroundColor: 'transparent',
        borderColor: brandDanger || '#f86c6b',
        // pointHoverBackgroundColor: brandDanger,
        pointHoverBackgroundColor: '#fff',
        // borderWidth: 1,
        // borderDash: [8, 5]
      },
      {
        // brandPrimary
        backgroundColor: 'transparent',
        borderColor: brandPrimary || '#a662a3',
        pointHoverBackgroundColor: brandPrimary,
        // borderWidth: 1,
        // borderDash: [8, 5]
      }
    ];

    const datasets = [
      {
        data: this.mainChartData1,
        label: 'SUCCESS',
        
        ...colors[0]
      },
      {
        data: this.mainChartData2,
        label: 'REQUEST',
       
        ...colors[1]
      },
      {
        data: this.mainChartData3,
        label: 'REJECT',
      
        ...colors[2]
      },
     
    ];

    const plugins = {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
      position: 'nearest',
        callbacks: {
          labelColor: function(context: any) {
            return {
              backgroundColor: context.dataset.borderColor
            };
          }
        }
      }
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins,
        scales: {
          x: {
            grid: {
              drawOnChartArea: false
            }
          },
          y: {
            beginAtZero: true,
            // max: 250,
            ticks: {
              // maxTicksLimit: 5,
              // stepSize: Math.ceil(250 / 5)
            }
          }
        },
        
      
      };
    this.mainChart.type = 'line';
    this.mainChart.options = options;
    this.mainChart.data = {
      datasets,
      labels:this.labels,
      
    };
  }
//   initAmountChart(period: string="Value")
//   {
//    console.log(period);
//    this.val2=period
//    console.log(this.val);


//    const brandSuccess = getStyle('--cui-success') ?? '#4dbd74';
//    const brandInfo = getStyle('--cui-info') ?? '#20a8d8';
//    const brandInfoBg = hexToRgba(getStyle('--cui-info'), 10) ?? '#20a8d8';
//    const brandDanger = getStyle('--cui-danger') || '#f86c6b';
//    const brandPrimary = getStyle('--cui-primary') || '#a662a3';

//    this.mainChart['Data1']= [];
//    this.mainChart['Data2'] = [];
//    this.mainChart['Data3'] = [];
 

//    const colors = [
//      {
//        // brandInfo
//        backgroundColor: brandInfoBg,
//        borderColor: brandInfo,
//        // pointHoverBackgroundColor: brandInfo,
//        pointHoverBackgroundColor: '#fff',
//        borderWidth: 2,
//        fill: true
//      },
//      {
//        // brandSuccess
//        backgroundColor: 'transparent',
//        borderColor: brandSuccess || '#4dbd74',
//        // pointHoverBackgroundColor: '#fff'
//        pointHoverBackgroundColor: '#fff',
//      },
//      {
//        // brandDanger
//        backgroundColor: 'transparent',
//        borderColor: brandDanger || '#f86c6b',
//        // pointHoverBackgroundColor: brandDanger,
//        pointHoverBackgroundColor: '#fff',
//        // borderWidth: 1,
//        // borderDash: [8, 5]
//      },
//      {
//       // brandPrimary
//       backgroundColor: 'transparent',
//       borderColor: brandPrimary || '#a662a3',
//       pointHoverBackgroundColor: brandPrimary,
//       // borderWidth: 1,
//       // borderDash: [8, 5]
//     }
//    ];

//    const datasets = [
//      {
//        data: this.mainChartData1,
//        label: 'SUCCESS',
//        ...colors[0]
//      },
//      {
//        data: this.mainChartData2,
//        label: 'REQUEST',
//        ...colors[1]
//      },
//      {
//        data: this.mainChartData3,
//        label: 'REJECT',
//        ...colors[2]
//      },
//      {
//       data: this.mainChartData4,
//       label: 'AMOUNT',
//       ...colors[3]
//     }
//    ];

//    const plugins = {
//      legend: {
//        display: false
//      },
//      tooltip: {
//        mode: 'index',
//      position: 'nearest',
//        callbacks: {
//          labelColor: function(context: any) {
//            return {
//              backgroundColor: context.dataset.borderColor
//            };
//          }
//        }
//      }
//    };

//    const options = {
//      maintainAspectRatio: false,
//      plugins,
//      scales: {
//        x: {
//          grid: {
//            drawOnChartArea: false
//          }
//        },
//        y: {
//          beginAtZero: true,
//          // max: 250,
//          ticks: {
//            // maxTicksLimit: 5,
//            // stepSize: Math.ceil(250 / 5)
//          }
//        }
//      },
//      elements: {
//        line: {
//          tension: 0.4
//        },
//        point: {
//          radius: 0,
//          hitRadius: 10,
//          hoverRadius: 4,
         
//          hoverBorderWidth: 3
//        }
//      }
//    };

//    this.mainChart.type = 'line';
//    this.mainChart.options = options;
//    this.mainChart.data = {
//      datasets,
//      labels:this.labels
//    };
//  }
//   initPaymentChart(period: string = 'Week')
//   {
//    console.log(period);
//    console.log(data2);
//    if(period=='Week'){
//     this.getPaymentWeekData();
//    }
//    if(period=='Day')
//    {
//      this.getPaymentDayData();
//    }
//    if(period=='Month')
//    {
//      this.getPaymentMonthData();
//    }
  

//    const brandSuccess = getStyle('--cui-success') ?? '#4dbd74';
//    const brandInfo = getStyle('--cui-info') ?? '#20a8d8';
//    const brandInfoBg = hexToRgba(getStyle('--cui-info'), 10) ?? '#20a8d8';
//    const brandDanger = getStyle('--cui-danger') || '#f86c6b';
//    const brandPrimary = getStyle('--cui-primary') || '#a662a3';

//    this.mainChart['Data1']= [];
//    this.mainChart['Data2'] = [];
//    this.mainChart['Data3'] = [];
    

//    const colors = [
//      {
//        // brandInfo
//        backgroundColor: brandInfoBg,
//        borderColor: brandInfo,
//        pointHoverBackgroundColor: brandInfo,
//        borderWidth: 2,
//        fill: true
//      },
//      {
//        // brandSuccess
//        backgroundColor: 'transparent',
//        borderColor: brandSuccess || '#4dbd74',
//        pointHoverBackgroundColor: '#fff'
//      },
//      {
//        // brandDanger
//        backgroundColor: 'transparent',
//        borderColor: brandDanger || '#f86c6b',
//        pointHoverBackgroundColor: brandDanger,
//       //  borderWidth: 1,
//       //  borderDash: [8, 5]
//      },
//      {
//       // brandPrimary
//       backgroundColor: 'transparent',
//       borderColor: brandPrimary || '#a662a3',
//       pointHoverBackgroundColor: brandPrimary,
//       // borderWidth: 1,
//       // borderDash: [8, 5]
//     }
//    ];

//    const datasets = [
//      {
//        data: this.mainChartData1,
//        label: 'IMPS',
//        ...colors[0]
//      },
//      {
//        data: this.mainChartData2,
//        label: 'NEFT',
//        ...colors[1]
//      },
//      {
//        data: this.mainChartData3,
//        label: 'RTGS',
//        ...colors[2]
//      },
//      {
//       data: this.mainChartData4,
//       label: 'WALLET',
//       ...colors[3]
//     }
//    ];

//    const plugins = {
//      legend: {
//        display: false
//      },
//      tooltip: {
//        callbacks: {
//          labelColor: function(context: any) {
//            return {
//              backgroundColor: context.dataset.borderColor
//            };
//          }
//        }
//      }
//    };

//    const options = {
//      maintainAspectRatio: false,
//      plugins,
//      scales: {
//        x: {
//          grid: {
//            drawOnChartArea: false
//          }
//        },
//        y: {
//          beginAtZero: true,
//          // max: 250,
//          ticks: {
//            // maxTicksLimit: 5,
//            // stepSize: Math.ceil(250 / 5)
//          }
//        }
//      },
//      elements: {
//        line: {
//          tension: 0.4
//        },
//        point: {
//          radius: 0,
//          hitRadius: 10,
//          hoverRadius: 4,
         
//          hoverBorderWidth: 3
//        }
//      }
//    };

//    this.mainChart2.type = 'line';
//    this.mainChart2.options = options;
//    this.mainChart2.data = {
//      datasets,
//      labels:this.labels
//    };
//  }
// initPaymentChart(period: string = 'Week')
// {
//  console.log(period);
//  console.log(data2);
//  if(period=='Week'){
//   this.getPaymentWeekData();
//  }
//  if(period=='Day')
//  {
//    this.getPaymentDayData();
//  }
//  if(period=='Month')
//  {
//    this.getPaymentMonthData();
//  }


//  const brandSuccess = getStyle('--cui-success') ?? '#4dbd74';
//  const brandInfo = getStyle('--cui-info') ?? '#20a8d8';
//  const brandInfoBg = hexToRgba(getStyle('--cui-info'), 10) ?? '#20a8d8';
//  const brandDanger = getStyle('--cui-danger') || '#f86c6b';
//  const brandPrimary = getStyle('--cui-primary') || '#a662a3';

//  this.mainChart['Data1']= [];
//  this.mainChart['Data2'] = [];
//  this.mainChart['Data3'] = [];
  

//  const colors = [
//    {
//      // brandInfo
//      backgroundColor: brandInfoBg,
//      borderColor: brandInfo,
//      pointHoverBackgroundColor: brandInfo,
//      borderWidth: 2,
//      fill: true
//    },
//    {
//      // brandSuccess
//      backgroundColor: 'transparent',
//      borderColor: brandSuccess || '#4dbd74',
//      pointHoverBackgroundColor: '#fff'
//    },
//    {
//      // brandDanger
//      backgroundColor: 'transparent',
//      borderColor: brandDanger || '#f86c6b',
//      pointHoverBackgroundColor: brandDanger,
//     //  borderWidth: 1,
//     //  borderDash: [8, 5]
//    },
//    {
//     // brandPrimary
//     backgroundColor: 'transparent',
//     borderColor: brandPrimary || '#a662a3',
//     pointHoverBackgroundColor: brandPrimary,
//     // borderWidth: 1,
//     // borderDash: [8, 5]
//   }
//  ];

//  const datasets = [
//    {
//      data: this.mainChartData1,
//      label: 'IMPS',
//      ...colors[0]
//    },
//    {
//      data: this.mainChartData2,
//      label: 'NEFT',
//      ...colors[1]
//    },
//    {
//      data: this.mainChartData3,
//      label: 'RTGS',
//      ...colors[2]
//    },
//    {
//     data: this.mainChartData4,
//     label: 'WALLET',
//     ...colors[3]
//   }
//  ];

//  const plugins = {
//    legend: {
//      display: false
//    },
//    tooltip: {
//      callbacks: {
//        labelColor: function(context: any) {
//          return {
//            backgroundColor: context.dataset.borderColor
//          };
//        }
//      }
//    }
//  };

//  const options = {
//    maintainAspectRatio: false,
//    plugins,
//    scales: {
//      x: {
//        grid: {
//          drawOnChartArea: false
//        }
//      },
//      y: {
//        beginAtZero: true,
//        // max: 250,
//        ticks: {
//          // maxTicksLimit: 5,
//          // stepSize: Math.ceil(250 / 5)
//        }
//      }
//    },
//    elements: {
//      line: {
//        tension: 0.4
//      },
//      point: {
//        radius: 0,
//        hitRadius: 10,
//        hoverRadius: 4,
       
//        hoverBorderWidth: 3
//      }
//    }
//  };

//  this.mainChart2.type = 'line';
//  this.mainChart2.options = options;
//  this.mainChart2.data = {
//    datasets,
//    labels:this.labels
//  };
// }
initAmountPieChart(period: string = 'Week')
{
 console.log(period);
 console.log(data2);
 if(period=='Week'){
  this.getAmountWeekData();
 }
 if(period=='Day')
 {
   this.getAmountDayData();
 }
 if(period=='Month')
 {
   this.getAmountMonthData();
 }


 const brandSuccess =  '#4dbd74';
 const brandInfo =  '#20a8d8';
 const brandInfoBg =  '#20a8d8';
 const brandDanger =  '#f86c6b';
 const brandPrimary = '#a662a3';

 this.mainChart['Data1']= [];
 this.mainChart['Data2'] = [];
 this.mainChart['Data3'] = [];
  
 const colors = [
  {
    // brandInfo
    backgroundColor: brandInfoBg,
    borderColor: brandInfo,
    // pointHoverBackgroundColor: brandInfo,
    pointHoverBackgroundColor: '#fff',
    // borderWidth: 2,
    // fill: true
  },
  {
    // brandSuccess
    backgroundColor: 'transparent',
    borderColor: brandSuccess || '#4dbd74',
    // pointHoverBackgroundColor: '#fff'
    pointHoverBackgroundColor: '#fff',
  },
  {
    // brandDanger
    backgroundColor: 'transparent',
    borderColor: brandDanger || '#f86c6b',
    // pointHoverBackgroundColor: brandDanger,
    pointHoverBackgroundColor: '#fff',
    // borderWidth: 1,
    // borderDash: [8, 5]
  },
  {
    // brandPrimary
    backgroundColor: 'transparent',
    borderColor: brandPrimary || '#a662a3',
    pointHoverBackgroundColor: brandPrimary,
    // borderWidth: 1,
    // borderDash: [8, 5]
  }
];



 const datasets = [
   {
     data: this.mainChartData1,
     label: 'SUCCESS',
     ...colors[0]
   },
   {
     data: this.mainChartData2,
     label: 'REQUEST',
     ...colors[1]
   },
   {
     data: this.mainChartData3,
     label: 'REJECTED',
     ...colors[2]
   },
   {
    data: this.mainChartData4,
    label: 'AMOUNT',
    ...colors[3]
  }
 ];

 const plugins = {
   legend: {
     display: false
   },
   tooltip: {
     callbacks: {
       labelColor: function(context: any) {
         return {
           backgroundColor: context.dataset.borderColor
         };
       }
     }
   }
 };

 const options = {
  maintainAspectRatio: false,
  plugins,
  scales: {
    x: {
      grid: {
        drawOnChartArea: false
      }
    },
    y: {
      beginAtZero: true,
      // max: 250,
      ticks: {
        // maxTicksLimit: 5,
        // stepSize: Math.ceil(250 / 5)
      }
    }
  },
  elements: {
    line: {
      tension: 0.4
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      
      hoverBorderWidth: 3
    }
  }
};

 this.mainChart3.type = 'line';
 this.mainChart3.options = options;
 this.mainChart3.data = {
   datasets,
   labels:this.labels
 };
}
// initAmountChart(period:String="value"){
//   this.val2=period;
//   console.log(this.val2);
//   console.log("this.val1",this.val);
  
//   this.initMainChart(this.val);
// }
initPaymentChart(period: string = 'Week')
{
 console.log(period);
 console.log(data2);
 if(period=='Week'){
  this.getPaymentWeekData();
 }
 if(period=='Day')
 {
   this.getPaymentDayData();
 }
 if(period=='Month')
 {
   this.getPaymentMonthData();
 }


 const brandSuccess = '#4dbd74';
 const brandInfo =  '#20a8d8';
 const brandInfoBg =  '#20a8d8';
 const brandDanger = '#f86c6b';
 const brandPrimary =  '#a662a3';

 this.mainChart['Data1']= [];
 this.mainChart['Data2'] = [];
 this.mainChart['Data3'] = [];
  
 const colors = [
  {
    // brandInfo
   //  backgroundColor: brandInfoBg,
   //  borderColor: brandInfo,
   //  pointBackgroundColor:  brandInfoBg,
   //  pointBorderColor: '#fafafa',
   //  pointHoverBackgroundColor: brandInfo,
   //  borderWidth: 2,
   //  fill: true
   backgroundColor: 'rgba(105,159,177,0.2)',
     borderColor: 'rgba(105,159,177,1)',
     pointBackgroundColor: 'rgba(105,159,177,1)',
     pointBorderColor: '#fafafa',
     pointHoverBackgroundColor: '#fafafa',
     pointHoverBorderColor: 'rgba(105,159,177)',
   
  },
  {
    // brandSuccess
   //  backgroundColor: 'transparent',
   //  borderColor: brandSuccess || '#4dbd74',
   //  pointBackgroundColor:  brandSuccess,
   //  pointHoverBackgroundColor: '#fff',
   //  borderWidth: 2,

     backgroundColor: 'rgba(77,20,96,0.3)',
     borderColor: 'rgba(77,20,96,1)',
     pointBackgroundColor: 'rgba(77,20,96,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(77,20,96,1)',
  
  
  },
  {
    // brandDanger
   //  backgroundColor: 'transparent',
   //  borderColor: brandDanger || '#f86c6b',
   //  pointHoverBackgroundColor: brandDanger,
   //  borderWidth: 2,
   //  borderDash: [8, 5]
   
   backgroundColor: 'rgb(7, 12, 15,0.3)',
   borderColor: 'rgba(77,20,96,1)',
   pointBackgroundColor: 'rgba(77,20,96,1)',
   pointBorderColor: '#fff',
   pointHoverBackgroundColor: '#fff',
   pointHoverBorderColor: 'rgba(77,20,96,1)',
  
  },
  {
   // brandPrimary
   // backgroundColor: 'transparent',
   // borderColor: brandPrimary || '#a662a3',
   // pointHoverBackgroundColor: brandPrimary,
   // borderWidth: 2,
   // borderWidth: 1,
   // borderDash: [8, 5]
   backgroundColor: 'rgb(160, 201, 0,0.3)',
   borderColor: 'rgba(77,20,96,1)',
   pointBackgroundColor: 'rgba(77,20,96,1)',
   pointBorderColor: '#fff',
   pointHoverBackgroundColor: '#fff',
   pointHoverBorderColor: 'rgba(77,20,96,1)',
  
 }
];


 const datasets = [
   {
      
     data: this.mainChartData1,
     label: 'IMPS',
     ...colors[0]
   },
   {
     data: this.mainChartData2,
     label: 'NEFT',
     ...colors[1]
   },
   {
     data: this.mainChartData3,
     label: 'RTGS',
     ...colors[2]
   },
   {
    data: this.mainChartData4,
    label: 'WALLET',
    ...colors[3]
  }
 ];

 const plugins = {
   legend: {
     display: false
   },
   tooltip: {
     callbacks: {
       labelColor: function(context: any) {
         return {
           backgroundColor: context.dataset.borderColor
         };
       }
     }
   }
 };

 const options = 
 {
  scaleShowVerticalLines: false,
  // barThickness: 26,
  // barPercentage: 0.5,
  // maxBarThickness: 78,
  //       minBarLength: 2,
 }

 this.mainChart2.type = 'bar';
 this.mainChart2.options = options;
 this.mainChart2.data = {
   datasets,
   labels:this.labels
 };
}
initAmountPaymentChart(period:string='Week'){
  console.log("hello func");
  
 console.log(paymentbyamount);
 
  if(period=='Week'){
   this.getPaymentAmountWeekData();
  }
  if(period=='Day')
  {
    this.getPaymentAmountDayData();
  }
  if(period=='Month')
  {
    this.getPaymentAmountMonthData();
  }
  

  const brandSuccess =  '#4dbd74';
 const brandInfo =  '#20a8d8';
 const brandInfoBg = '#20a8d8';
 const brandDanger =  '#f86c6b';
 const brandPrimary = '#a662a3';

 this.mainChart['Data1']= [];
 this.mainChart['Data2'] = [];
 this.mainChart['Data3'] = [];
  
 const colors = [
  {
    // brandInfo
   //  backgroundColor: brandInfoBg,
   //  borderColor: brandInfo,
   //  pointBackgroundColor:  brandInfoBg,
   //  pointBorderColor: '#fafafa',
   //  pointHoverBackgroundColor: brandInfo,
   //  borderWidth: 2,
   //  fill: true
   backgroundColor: 'rgba(105,159,177,0.2)',
     borderColor: 'rgba(105,159,177,1)',
     pointBackgroundColor: 'rgba(105,159,177,1)',
     pointBorderColor: '#fafafa',
     pointHoverBackgroundColor: '#fafafa',
     pointHoverBorderColor: 'rgba(105,159,177)',
   
  },
  {
    // brandSuccess
   //  backgroundColor: 'transparent',
   //  borderColor: brandSuccess || '#4dbd74',
   //  pointBackgroundColor:  brandSuccess,
   //  pointHoverBackgroundColor: '#fff',
   //  borderWidth: 2,

     backgroundColor: 'rgba(77,20,96,0.3)',
     borderColor: 'rgba(77,20,96,1)',
     pointBackgroundColor: 'rgba(77,20,96,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(77,20,96,1)',
  
  
  },
  {
    // brandDanger
   //  backgroundColor: 'transparent',
   //  borderColor: brandDanger || '#f86c6b',
   //  pointHoverBackgroundColor: brandDanger,
   //  borderWidth: 2,
   //  borderDash: [8, 5]
   
   backgroundColor: 'rgb(7, 12, 15,0.3)',
   borderColor: 'rgba(77,20,96,1)',
   pointBackgroundColor: 'rgba(77,20,96,1)',
   pointBorderColor: '#fff',
   pointHoverBackgroundColor: '#fff',
   pointHoverBorderColor: 'rgba(77,20,96,1)',
  
  },
  {
   // brandPrimary
   // backgroundColor: 'transparent',
   // borderColor: brandPrimary || '#a662a3',
   // pointHoverBackgroundColor: brandPrimary,
   // borderWidth: 2,
   // borderWidth: 1,
   // borderDash: [8, 5]
   backgroundColor: 'rgb(160, 201, 0,0.3)',
   borderColor: 'rgba(77,20,96,1)',
   pointBackgroundColor: 'rgba(77,20,96,1)',
   pointBorderColor: '#fff',
   pointHoverBackgroundColor: '#fff',
   pointHoverBorderColor: 'rgba(77,20,96,1)',
  
 }
];


 const datasets = [
   {
      
     data: this.mainChartData1,
     label: 'IMPS',
     ...colors[0]
   },
   {
     data: this.mainChartData2,
     label: 'NEFT',
     ...colors[1]
   },
   {
     data: this.mainChartData3,
     label: 'RTGS',
     ...colors[2]
   },
   {
    data: this.mainChartData4,
    label: 'WALLET',
    ...colors[3]
  }
 ];

 const plugins = {
   legend: {
     display: false
   },
   tooltip: {
     callbacks: {
       labelColor: function(context: any) {
         return {
           backgroundColor: context.dataset.borderColor
         };
       }
     }
   }
 };

 const options = 
 {
  scaleShowVerticalLines: false,
  // barThickness: 26,
  // barPercentage: 0.5,
  // maxBarThickness: 78,
  //       minBarLength: 2,
 }

 this.mainChart4.type = 'bar';
 this.mainChart4.options = options;
 this.mainChart4.data = {
   datasets,
   labels:this.labels
 };
}


  final:any
  Date:any=[];
  getDays = new Date();
  getMonth=new Date();
  finalData:any=[];
  today=new Date()
//   getMonthData()
//   {
//     console.log("val2=",this.val2);
    
//   this.labels=[]
//   this.mainChartData1=[]
//   this.mainChartData2=[]
//   this.mainChartData3=[]
  
//     this.getMonth=new Date();
//     this.getDays.setDate( this.getDays.getDate()-90) ;
//     this.getDays = new Date(this.getDays);

//     this.getMonth.setDate( this.getMonth.getDate()-90) ;
//     this.getMonth = new Date(this.getMonth);
//     this.final=[];
 
// this.finalData.push(item)


//     for(let i=0;i<item.length;i++)
//     {

//       if(item[i].Date)
//       {
      
//            this.Date = item[i].Date;
//           this.Date=new Date(Date.parse(this.Date));
//           if(!isNaN(Date.parse(this.Date))){
  
//             if(this.today>=this.Date && this.Date>=this.getMonth )
//             {
           
                
//              let obj={
//               //  Date:new Date(this.item[i].Date).getMonth(),
//               Date:item[i].Date,
//                REJECTED:item[i].REJECTED,
//                REQUEST:item[i].REQUEST,
//                SUCCESS:item[i].SUCCESS
               
//              } ;
//              this.final.push(obj)
//           //  console.log(obj);
           
            
            
//             // this.mainChart['Data1'].push(obj.SUCCESS)
//             this.mainChartData1.push(obj.SUCCESS);
//             this.mainChartData2.push(obj.REQUEST);
//             this.mainChartData3.push(obj.REJECTED)
//                 this.labels.push(obj.Date)
           
//         }          
//       }
//     }
//     }
//     console.log(this.final);
    
//   }
getMonthData()
{
  console.log("val2=",this.val2);
  
this.labels=[]
this.mainChartData1=[]
this.mainChartData2=[]
this.mainChartData3=[]
this.lineChartData=[]

  this.getMonth=new Date();
  this.getDays.setDate( this.getDays.getDate()-90) ;
  this.getDays = new Date(this.getDays);

  this.getMonth.setDate( this.getMonth.getDate()-90) ;
  this.getMonth = new Date(this.getMonth);
  this.final=[];

this.finalData.push(item)


  for(let i=0;i<item.length;i++)
  {

    if(item[i].Date)
    {
    
         this.Date = item[i].Date;
        this.Date=new Date(Date.parse(this.Date));
        if(!isNaN(Date.parse(this.Date))){

          if(this.today>=this.Date && this.Date>=this.getMonth )
          {
         
              
           let obj={
            //  Date:new Date(this.item[i].Date).getMonth(),
            Date:item[i].Date,
             REJECTED:item[i].REJECTED,
             REQUEST:item[i].REQUEST,
             SUCCESS:item[i].SUCCESS,
             AMOUNT:item[i].AMOUNT
           } ;
           this.final.push(obj)
        //  console.log(obj);
         
          
          console.log("month check value=",this.val2);
          
          // this.mainChart['Data1'].push(obj.SUCCESS)
      
          this.mainChartData1.push(obj.SUCCESS);
          this.mainChartData2.push(obj.REQUEST);
          this.mainChartData3.push(obj.REJECTED)
             
              
         
      }          
    }
  }
  }
  console.log(this.final);
  
}
  getDayData()
  {
    console.log("val2",this.val2);
    
  this.labels=[];
  this.mainChartData1=[]
  this.mainChartData2=[]
  this.mainChartData3=[]
    // this.mainChartLabels=[];
    // console.log("hello");
    // console.log(typeof item);
    
    // console.log(this.item);
    // console.log(this.item.length);
    // console.log(this.category);
    this.getDays=new Date();
    this.getDays.setDate( this.getDays.getDate()-30) ;
    this.getDays = new Date(this.getDays);

    this.getMonth.setDate( this.getMonth.getDate()-90) ;
    this.getMonth = new Date(this.getMonth);
    this.final=[];
  //   for (const Date in item) {

  //     console.log(`${Date}: ${item[Date]}`);
  // }

this.finalData.push(item)
console.log(this.finalData[0]);

    for(let i=0;i<item.length;i++)
    {

  //     console.log(item[i].Date);
  // console.log(this.finalData[0].Date);
  
      if(item[i].Date)
      {
        // console.log(item[i].Date);
        // this.Date=item[i].Date;
        // console.log(this.Date);
        // this.Date.push(item[i].Date)
           this.Date = item[i].Date;
          this.Date=new Date(Date.parse(this.Date));
          if(!isNaN(Date.parse(this.Date))){
    // console.log("today",this.today);
    // console.log("dates=",this.Date);
    // console.log("getdays=",this.getDays);
    
    
         
            if(this.today>=this.Date && this.Date>=this.getDays )
            {
              // console.log(item[i]);
                
             let obj={
              //  Date:new Date(this.item[i].Date).getMonth(),
              Date:item[i].Date,
               REJECTED:item[i].REJECTED,
               REQUEST:item[i].REQUEST,
               SUCCESS:item[i].SUCCESS
               
             } ;
             
             
             this.final.push(obj)
            // console.log(obj);
            
            

           
            // this.mainChart['Data1'].push(obj.SUCCESS)
            this.mainChartData1.push(obj.SUCCESS);
            this.mainChartData2.push(obj.REQUEST);
            this.mainChartData3.push(obj.REJECTED)
                this.labels.push(obj.Date)
            
        }          
      }
    }
    }
    // console.log(this.final);
    // for(let i=0;i<this.final.length;i++){
    //   console.log(this.final[i].SUCCESS);
    //    this.mainChartData1=this.final[i].SUCCESS
    // //   this.mainChartData1.push(this.final[i].SUCCESS);
    // //   this.mainChartData2.push(this.final[i].REQUEST);
    // //  this.mainChartData3.push(this.final[i].REJECTED)
    // }
    
    // console.log(this.mainChartData1);
    // console.log(this.mainChartData1);
    // console.log(this.mainChartData1);
  }
  storeDate:any=[]
  getWeekData()
{
  // console.log("hello week");
  console.log(this.val2);
  
  this.labels=[]
  this.mainChartData1=[]
  this.mainChartData2=[]
  this.mainChartData3=[]
    // this.mainChartLabels=[];
    // console.log("hello");
    // console.log(typeof item);
    
    // console.log(this.item);
    // console.log(this.item.length);
    // console.log(this.category);
    this.getDays=new Date();
    this.getDays.setDate( this.getDays.getDate()-30) ;
    this.getDays = new Date(this.getDays);

    this.getMonth.setDate( this.getMonth.getDate()-90) ;
    this.getMonth = new Date(this.getMonth);
    this.final=[];
  //   for (const Date in item) {

  //     console.log(`${Date}: ${item[Date]}`);
  // }

  this.finalData.push(item)
  //  console.log(this.finalData[0]);

    for(let i=0;i<item.length;i++)
    {

  
      if(item[i].Date)
      {
      
           this.Date = item[i].Date;
          this.Date=new Date(Date.parse(this.Date));
          if(!isNaN(Date.parse(this.Date))){
            if(this.today>=this.Date && this.Date>=this.getDays )
            {
              // console.log('in if') 
              // console.log(this.Date);
              // console.log(this.getMonth);
              // console.log(item[i]);
                
             let obj={
             
              Date:item[i].Date,
               REJECTED:item[i].REJECTED,
               REQUEST:item[i].REQUEST,
               SUCCESS:item[i].SUCCESS
               
             } ;
             this.final.push(obj)
             console.log(typeof obj.Date);
             this.storeDate.push(obj.Date)
            //  console.log(this.storeDate);
            //  console.log(typeof this.storeDate);
             
             
  
            // this.mainChartData1.push(obj.SUCCESS);
            // this.mainChartData2.push(obj.REQUEST);
            // this.mainChartData3.push(obj.REJECTED)
                
           
        }          
      }
    }
    }
    for(let i=0;i<data.length;i++){
      console.log(data);
      
    let obj={
             
      Date:data[i].Date,
       REJECTED:data[i].REJECTED,
       REQUEST:data[i].REQUEST,
       SUCCESS:data[i].SUCCESS
       
     } ;
    //  console.log(obj);
     
      this.mainChartData1.push(obj.SUCCESS);
      this.mainChartData2.push(obj.REQUEST);
      this.mainChartData3.push(obj.REJECTED);
    }
    // console.log(this.mainChartData1);
    // console.log(this.mainChartData2);
    // console.log(this.mainChartData3);

     let objWeekly=this.formatDates();
            //  console.log(objWeekly);
             
             for(let i=0;i<objWeekly.length;i++){
              this.labels.push(objWeekly[i].labe)
             
              
            // console.log(objWeekly[i].labe)
             }
  }
  lastObj:any
  formatDates() {
    // console.log(this.storeDate);
    // console.log(this.storeDate.length);
    // console.log(this.storeDate[0]);
    
    let startDate=moment(new Date(this.storeDate[0]));
    // console.log(startDate);
    let endDate=moment(new Date(this.storeDate[this.storeDate.length-1]));
    // console.log(endDate);
    let labe:any
    let weekData = [];
    while(startDate.isSameOrBefore(endDate)) {
              if(weekData.length > 0) {
                  // Update end date
                  this.lastObj  = weekData[weekData.length - 1];
                  this.lastObj['endDate'] =  moment(startDate).format('MM/DD/YY');
                  this.lastObj['labe'] = `${this.lastObj.startDate} - ${this.lastObj['endDate']} `
                  startDate.add(1, 'days');
              }
              weekData.push({startDate: moment(startDate).format('MM/DD/YY'), endDate:endDate,labe:labe});
              startDate.add(6, 'days');
          }
          if(startDate.isAfter(endDate)) {
              // Update last object
             this.lastObj = weekData[weekData.length - 1];
              this.lastObj['endDate'] =  moment(endDate).format('MM/DD/YY');
              this.lastObj['labe'] = `${this.lastObj.startDate} - ${this.lastObj['endDate']}`
            
          }
          // console.log(weekData);
          
          return weekData;
          
}
getPaymentWeekData()
{
  this.labels=[]
  this.mainChartData1=[]
  this.mainChartData2=[]
  this.mainChartData3=[]
  this.mainChartData4=[]
    // this.mainChartLabels=[];
    // console.log("hello");
    // console.log(typeof item);
    
    // console.log(this.item);
    // console.log(this.item.length);
    // console.log(this.category);
    this.getDays=new Date();
    this.getDays.setDate( this.getDays.getDate()-30) ;
    this.getDays = new Date(this.getDays);

    this.getMonth.setDate( this.getMonth.getDate()-90) ;
    this.getMonth = new Date(this.getMonth);
    this.final=[];
  //   for (const Date in item) {

  //     console.log(`${Date}: ${item[Date]}`);
  // }

  this.finalData.push(data2)
   console.log(this.finalData[0]);

    for(let i=0;i<data2.length;i++)
    {

    //     console.log(item[i].Date);
     // console.log(this.finalData[0].Date);
  
      if(data2[i].Date)
      {
        // console.log(item[i].Date);
        // // this.Date=item[i].Date;
        // console.log(this.Date);
        // this.Date.push(item[i].Date)
           this.Date = data2[i].Date;
          this.Date=new Date(Date.parse(this.Date));
          if(!isNaN(Date.parse(this.Date))){
    // console.log("today",this.today);
    // console.log("dates=",this.Date);
    // console.log("getdays=",this.getDays);
    
    
         
            if(this.today>=this.Date && this.Date>=this.getDays )
            {
              // console.log('in if') 
              // console.log(this.Date);
              // console.log(this.getMonth);
              // console.log(item[i]);
                
             let obj={
           
              Date:data2[i].Date,
              IMPS:data2[i].IMPS,
              NEFT:data2[i].NEFT,
              RTGS:data2[i].RTGS,
              WALLET:data2[i].WALLET
               
             } ;
             this.final.push(obj)
            //  console.log(typeof obj.Date);
             this.storeDate.push(obj.Date)
            //  console.log(this.storeDate);
            //  console.log(typeof this.storeDate);
             
            
            // this.mainChartData1.push(obj.IMPS);
            // this.mainChartData2.push(obj.NEFT);
            // this.mainChartData3.push(obj.RTGS)
            // this.mainChartData4.push(obj.WALLET)
            
           
        }          
      }
    }
    }
    for(let i=0;i<weekdata2.length;i++){
      // console.log(weekdata2);
      
    let obj={
             
      Date:weekdata2[i].Date,
      IMPS:weekdata2[i].IMPS,
       NEFT:weekdata2[i].NEFT,
       RTGS:weekdata2[i].RTGS,
       WALLET:weekdata2[i].WALLET,

       
     } ;
     console.log(obj);
     
      this.mainChartData1.push(obj.IMPS);
      this.mainChartData2.push(obj.NEFT);
      this.mainChartData3.push(obj.RTGS);
      this.mainChartData4.push(obj.WALLET)
    }
    // console.log(this.mainChartData1);
    // console.log(this.mainChartData2);
    // console.log(this.mainChartData3);

     let objWeekly=this.formatDates();
            //  console.log(objWeekly);
            
            //  console.log(this.final);
             
             for(let i=0;i<objWeekly.length;i++){
              this.labels.push(objWeekly[i].labe)
              
              
            // console.log(objWeekly[i].labe)
             }
  }
  getPaymentDayData()
  {
  this.labels=[];
  this.mainChartData1=[]
  this.mainChartData2=[]
  this.mainChartData3=[]
  this.mainChartData4=[]
    // this.mainChartLabels=[];
    // console.log("hello");
    // console.log(typeof item);
    
    // console.log(this.item);
    // console.log(this.item.length);
    // console.log(this.category);
    this.getDays=new Date();
    this.getDays.setDate( this.getDays.getDate()-30) ;
    this.getDays = new Date(this.getDays);

    this.getMonth.setDate( this.getMonth.getDate()-90) ;
    this.getMonth = new Date(this.getMonth);
    this.final=[];
  //   for (const Date in item) {

  //     console.log(`${Date}: ${item[Date]}`);
  // }

this.finalData.push(data2)
// console.log(this.finalData[0]);

    for(let i=0;i<item.length;i++)
    {
      if(data2[i].Date)
      {
        // console.log(data2[i].Date);
        // this.Date=item[i].Date;
        // console.log(this.Date);
        // this.Date.push(item[i].Date)
           this.Date = data2[i].Date;
          this.Date=new Date(Date.parse(this.Date));
          if(!isNaN(Date.parse(this.Date))){
        
            if(this.today>=this.Date && this.Date>=this.getDays )
            {
              // console.log(item[i]);
                
             let obj={
              //  Date:new Date(this.item[i].Date).getMonth(),
              Date:data2[i].Date,
              IMPS:data2[i].IMPS,
               NEFT:data2[i].NEFT,
               RTGS:data2[i].RTGS,
               WALLET:data2[i].WALLET
               
             } ;
             
             
             this.final.push(obj)
            // console.log(obj);
            
            

           
            // this.mainChart['Data1'].push(obj.SUCCESS)
            this.mainChartData1.push(obj.IMPS);
            this.mainChartData2.push(obj.NEFT);
            this.mainChartData3.push(obj.RTGS);
            this.mainChartData4.push(obj.WALLET)
                this.labels.push(obj.Date)
            
        }          
      }
    }
    }
    // console.log(this.final);
    // for(let i=0;i<this.final.length;i++){
    //   console.log(this.final[i].SUCCESS);
    //    this.mainChartData1=this.final[i].SUCCESS
    // //   this.mainChartData1.push(this.final[i].SUCCESS);
    // //   this.mainChartData2.push(this.final[i].REQUEST);
    // //  this.mainChartData3.push(this.final[i].REJECTED)
    // }
    
    // console.log(this.mainChartData1);
    // console.log(this.mainChartData1);
    // console.log(this.mainChartData1);
  }
  getPaymentMonthData()
  {
  this.labels=[]
  this.mainChartData1=[]
  this.mainChartData2=[]
  this.mainChartData3=[]
  this.mainChartData4=[]
    this.getMonth=new Date();
    this.getDays.setDate( this.getDays.getDate()-90) ;
    this.getDays = new Date(this.getDays);

    this.getMonth.setDate( this.getMonth.getDate()-90) ;
    this.getMonth = new Date(this.getMonth);
    this.final=[];
 
this.finalData.push(data2)


    for(let i=0;i<data2.length;i++)
    {

      if(data2[i].Date)
      {
      
           this.Date = data2[i].Date;
          this.Date=new Date(Date.parse(this.Date));
          if(!isNaN(Date.parse(this.Date))){
  
            if(this.today>=this.Date && this.Date>=this.getMonth )
            {
           
                
             let obj={
              //  Date:new Date(this.item[i].Date).getMonth(),
              Date:data2[i].Date,
               IMPS:data2[i].IMPS,
               NEFT:data2[i].NEFT,
               RTGS:data2[i].RTGS,
               WALLET:data2[i].WALLET
               
             } ;
             this.final.push(obj)
          //  console.log(obj);
           
            
            
            // this.mainChart['Data1'].push(obj.SUCCESS)
            this.mainChartData1.push(obj.IMPS);
            this.mainChartData2.push(obj.NEFT);
            this.mainChartData3.push(obj.RTGS);
            this.mainChartData4.push(obj.WALLET)
                this.labels.push(obj.Date)
           
        }          
      }
    }
    }
    // console.log(this.final);
    
  }
  getAmountMonthData()
  {
    console.log("amount=",item2);
    
  this.labels=[]
  this.mainChartData1=[]
  this.mainChartData2=[]
  this.mainChartData3=[]
  this.mainChartData4=[]
  
    this.getMonth=new Date();
    this.getDays.setDate( this.getDays.getDate()-90) ;
    this.getDays = new Date(this.getDays);

    this.getMonth.setDate( this.getMonth.getDate()-90) ;
    this.getMonth = new Date(this.getMonth);
    this.final=[];
 
this.finalData.push(item2)


    for(let i=0;i<item2.length;i++)
    {

      if(item2[i].Date)
      {
      
           this.Date = item2[i].Date;
          this.Date=new Date(Date.parse(this.Date));
          if(!isNaN(Date.parse(this.Date))){
  
            if(this.today>=this.Date && this.Date>=this.getMonth )
            {
           
                
             let obj={
              //  Date:new Date(this.item[i].Date).getMonth(),
              Date:item2[i].Date,
               REJECTED:item2[i].SUCCESS,
               REQUEST:item2[i].REQUEST,
               SUCCESS:item2[i].REJECTED,
               AMOUNT:item2[i].AMOUNT
               
             } ;
             this.final.push(obj)
          //  console.log(obj);
           
            
            
            // this.mainChart['Data1'].push(obj.SUCCESS)
            this.mainChartData1.push(obj.SUCCESS);
            this.mainChartData2.push(obj.REQUEST);
            this.mainChartData3.push(obj.REJECTED)
            this.mainChartData4.push(obj.AMOUNT)
                this.labels.push(obj.Date)
           
        }          
      }
    }
    }
    console.log(this.final);
    
  }
  getAmountDayData()
  {
  this.labels=[];
  this.mainChartData1=[]
  this.mainChartData2=[]
  this.mainChartData3=[]
  this.mainChartData4=[]
    // this.mainChartLabels=[];
    // console.log("hello");
    // console.log(typeof item);
    
    // console.log(this.item);
    // console.log(this.item.length);
    // console.log(this.category);
    this.getDays=new Date();
    this.getDays.setDate( this.getDays.getDate()-30) ;
    this.getDays = new Date(this.getDays);

    this.getMonth.setDate( this.getMonth.getDate()-90) ;
    this.getMonth = new Date(this.getMonth);
    this.final=[];
  //   for (const Date in item) {

  //     console.log(`${Date}: ${item[Date]}`);
  // }

this.finalData.push(item2)
console.log(this.finalData[0]);

    for(let i=0;i<item2.length;i++)
    {

  //     console.log(item[i].Date);
  // console.log(this.finalData[0].Date);
  
      if(item2[i].Date)
      {
        // console.log(item[i].Date);
        // this.Date=item[i].Date;
        // console.log(this.Date);
        // this.Date.push(item[i].Date)
           this.Date = item2[i].Date;
          this.Date=new Date(Date.parse(this.Date));
          if(!isNaN(Date.parse(this.Date))){
    // console.log("today",this.today);
    // console.log("dates=",this.Date);
    // console.log("getdays=",this.getDays);
    
    
         
            if(this.today>=this.Date && this.Date>=this.getDays )
            {
              // console.log(item[i]);
                
             let obj={
              //  Date:new Date(this.item[i].Date).getMonth(),
              Date:item2[i].Date,
               REJECTED:item2[i].SUCCESS,
               REQUEST:item2[i].REQUEST,
               SUCCESS:item2[i].REJECTED,
               AMOUNT:item2[i].AMOUNT
               
             } ;
             
             
             this.final.push(obj)
            // console.log(obj);
            
            

           
            // this.mainChart['Data1'].push(obj.SUCCESS)
            this.mainChartData1.push(obj.SUCCESS);
            this.mainChartData2.push(obj.REQUEST);
            this.mainChartData3.push(obj.REJECTED);
            this.mainChartData4.push(obj.AMOUNT)
                this.labels.push(obj.Date)
            
        }          
      }
    }
    }
    // console.log(this.final);
    // for(let i=0;i<this.final.length;i++){
    //   console.log(this.final[i].SUCCESS);
    //    this.mainChartData1=this.final[i].SUCCESS
    // //   this.mainChartData1.push(this.final[i].SUCCESS);
    // //   this.mainChartData2.push(this.final[i].REQUEST);
    // //  this.mainChartData3.push(this.final[i].REJECTED)
    // }
    
    // console.log(this.mainChartData1);
    // console.log(this.mainChartData1);
    // console.log(this.mainChartData1);
  }

  getAmountWeekData()
{

  this.labels=[]
  this.mainChartData1=[]
  this.mainChartData2=[]
  this.mainChartData3=[]
  this.mainChartData4=[]
  
    this.getDays=new Date();
    this.getDays.setDate( this.getDays.getDate()-30) ;
    this.getDays = new Date(this.getDays);

    this.getMonth.setDate( this.getMonth.getDate()-90) ;
    this.getMonth = new Date(this.getMonth);
    this.final=[];


  this.finalData.push(item2)


    for(let i=0;i<item2.length;i++)
    {

  
      if(item2[i].Date)
      {
      
           this.Date = item2[i].Date;
          this.Date=new Date(Date.parse(this.Date));
          if(!isNaN(Date.parse(this.Date))){
            if(this.today>=this.Date && this.Date>=this.getDays )
            {
        
             let obj={
             
              Date:item2[i].Date,
               REJECTED:item2[i].SUCCESS,
               REQUEST:item2[i].REQUEST,
               SUCCESS:item2[i].REJECTED,
               AMOUNT:item2[i].AMOUNT
               
             } ;
             this.final.push(obj)
             console.log(typeof obj.Date);
             this.storeDate.push(obj.Date)
             console.log(this.storeDate);
             console.log(typeof this.storeDate);
             
             
  
            this.mainChartData1.push(obj.SUCCESS);
            this.mainChartData2.push(obj.REQUEST);
            this.mainChartData3.push(obj.REJECTED)
            this.mainChartData4.push(obj.AMOUNT)
                
           
        }          
      }
    }
    }
    // for(let i=0;i<data.length;i++){
    //   console.log(data);
      
    // let obj={
             
    //   Date:data[i].Date,
    //    REJECTED:data[i].REJECTED,
    //    REQUEST:data[i].REQUEST,
    //    SUCCESS:data[i].SUCCESS
       
    //  } ;
  
     
    //   this.mainChartData1.push(obj.SUCCESS);
    //   this.mainChartData2.push(obj.REQUEST);
    //   this.mainChartData3.push(obj.REJECTED);
    // }
 
     let objWeekly=this.formatDates();
            //  console.log(objWeekly);
             
             for(let i=0;i<objWeekly.length;i++){
              this.labels.push(objWeekly[i].labe)
             
              
            // console.log(objWeekly[i].labe)
             }
  }



  // ----------------------------------

  getPaymentAmountMonthData()
  {
    console.log("amount=",item2);
    
  this.labels=[]
  this.mainChartData1=[]
  this.mainChartData2=[]
  this.mainChartData3=[]
  this.mainChartData4=[]
  
    this.getMonth=new Date();
    this.getDays.setDate( this.getDays.getDate()-90) ;
    this.getDays = new Date(this.getDays);

    this.getMonth.setDate( this.getMonth.getDate()-90) ;
    this.getMonth = new Date(this.getMonth);
    this.final=[];
 
this.finalData.push(item2)


    for(let i=0;i<paymentbyamount.length;i++)
    {

      if(paymentbyamount[i].Date)
      {
      
           this.Date = paymentbyamount[i].Date;
          this.Date=new Date(Date.parse(this.Date));
          if(!isNaN(Date.parse(this.Date))){
  
            if(this.today>=this.Date && this.Date>=this.getMonth )
            {
           
                
             let obj={
              //  Date:new Date(this.item[i].Date).getMonth(),
              Date:paymentbyamount[i].Date,
               IMPS:paymentbyamount[i].IMPS,
               NEFT:paymentbyamount[i].NEFT,
               RTGS:paymentbyamount[i].RTGS,
               WALLET:paymentbyamount[i].WALLET
               
             } ;
             this.final.push(obj)
          //  console.log(obj);
           
            
            
            // this.mainChart['Data1'].push(obj.SUCCESS)
            this.mainChartData1.push(obj.IMPS);
            this.mainChartData2.push(obj.NEFT);
            this.mainChartData3.push(obj.RTGS)
            this.mainChartData4.push(obj.WALLET)
                this.labels.push(obj.Date)
           
        }          
      }
    }
    }
    console.log(this.final);
    
  }
  getPaymentAmountDayData()
  {
  this.labels=[];
  this.mainChartData1=[]
  this.mainChartData2=[]
  this.mainChartData3=[]
  this.mainChartData4=[]
    // this.mainChartLabels=[];
    // console.log("hello");
    // console.log(typeof item);
    
    // console.log(this.item);
    // console.log(this.item.length);
    // console.log(this.category);
    this.getDays=new Date();
    this.getDays.setDate( this.getDays.getDate()-30) ;
    this.getDays = new Date(this.getDays);

    this.getMonth.setDate( this.getMonth.getDate()-90) ;
    this.getMonth = new Date(this.getMonth);
    this.final=[];
  //   for (const Date in item) {

  //     console.log(`${Date}: ${item[Date]}`);
  // }

this.finalData.push(item2)
console.log(this.finalData[0]);

    for(let i=0;i<paymentbyamount.length;i++)
    {

  //     console.log(item[i].Date);
  // console.log(this.finalData[0].Date);
  
      if(paymentbyamount[i].Date)
      {
        // console.log(item[i].Date);
        // this.Date=item[i].Date;
        // console.log(this.Date);
        // this.Date.push(item[i].Date)
           this.Date = paymentbyamount[i].Date;
          this.Date=new Date(Date.parse(this.Date));
          if(!isNaN(Date.parse(this.Date))){
    // console.log("today",this.today);
    // console.log("dates=",this.Date);
    // console.log("getdays=",this.getDays);
    
    
         
            if(this.today>=this.Date && this.Date>=this.getDays )
            {
              // console.log(item[i]);
                
             let obj={
              //  Date:new Date(this.item[i].Date).getMonth(),
              Date:paymentbyamount[i].Date,
               IMPS:paymentbyamount[i].IMPS,
               NEFT:paymentbyamount[i].NEFT,
               RTGS:paymentbyamount[i].RTGS,
               WALLET:paymentbyamount[i].WALLET
               
             } ;
             
             
             this.final.push(obj)
            // console.log(obj);
            
            

           
            // this.mainChart['Data1'].push(obj.SUCCESS)
            this.mainChartData1.push(obj.IMPS);
            this.mainChartData2.push(obj.NEFT);
            this.mainChartData3.push(obj.RTGS);
            this.mainChartData4.push(obj.WALLET)
                this.labels.push(obj.Date)
            
        }          
      }
    }
    }
    // console.log(this.final);
    // for(let i=0;i<this.final.length;i++){
    //   console.log(this.final[i].SUCCESS);
    //    this.mainChartData1=this.final[i].SUCCESS
    // //   this.mainChartData1.push(this.final[i].SUCCESS);
    // //   this.mainChartData2.push(this.final[i].REQUEST);
    // //  this.mainChartData3.push(this.final[i].REJECTED)
    // }
    
    // console.log(this.mainChartData1);
    // console.log(this.mainChartData1);
    // console.log(this.mainChartData1);
  }

  getPaymentAmountWeekData()
{

  this.labels=[]
  this.mainChartData1=[]
  this.mainChartData2=[]
  this.mainChartData3=[]
  this.mainChartData4=[]
  
    this.getDays=new Date();
    this.getDays.setDate( this.getDays.getDate()-30) ;
    this.getDays = new Date(this.getDays);

    this.getMonth.setDate( this.getMonth.getDate()-90) ;
    this.getMonth = new Date(this.getMonth);
    this.final=[];


  this.finalData.push(item2)


    for(let i=0;i<paymentbyamount.length;i++)
    {

  
      if(paymentbyamount[i].Date)
      {
      
           this.Date = paymentbyamount[i].Date;
          this.Date=new Date(Date.parse(this.Date));
          if(!isNaN(Date.parse(this.Date))){
            if(this.today>=this.Date && this.Date>=this.getDays )
            {
        
             let obj={
             
              Date:paymentbyamount[i].Date,
               IMPS:paymentbyamount[i].IMPS,
               NEFT:paymentbyamount[i].NEFT,
               RTGS:paymentbyamount[i].RTGS,
               WALLET:paymentbyamount[i].WALLET
               
             } ;
             this.final.push(obj)
             console.log(typeof obj.Date);
             this.storeDate.push(obj.Date)
             console.log(this.storeDate);
             console.log(typeof this.storeDate);
             
             
  
            this.mainChartData1.push(obj.IMPS);
            this.mainChartData2.push(obj.NEFT);
            this.mainChartData3.push(obj.RTGS)
            this.mainChartData4.push(obj.WALLET)
                
           
        }          
      }
    }
    }
    // for(let i=0;i<data.length;i++){
    //   console.log(data);
      
    // let obj={
             
    //   Date:data[i].Date,
    //    REJECTED:data[i].REJECTED,
    //    REQUEST:data[i].REQUEST,
    //    SUCCESS:data[i].SUCCESS
       
    //  } ;
  
     
    //   this.mainChartData1.push(obj.SUCCESS);
    //   this.mainChartData2.push(obj.REQUEST);
    //   this.mainChartData3.push(obj.REJECTED);
    // }
 
     let objWeekly=this.formatDates();
            //  console.log(objWeekly);
             
             for(let i=0;i<objWeekly.length;i++){
              this.labels.push(objWeekly[i].labe)
             
              
            // console.log(objWeekly[i].labe)
             }
  }
}