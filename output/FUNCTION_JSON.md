### appndc_c
```js
{
  "signature": "void appndc_c ( ConstSpiceChar   * item,\n                   SpiceCell        * cell  )",
  "name": "appndc_c",
  "args": {
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "cell": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cell",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### appndd_c
```js
{
  "signature": "void appndd_c ( SpiceDouble     item,\n                   SpiceCell     * cell )",
  "name": "appndd_c",
  "args": {
    "item": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "item",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "cell": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cell",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### appndi_c
```js
{
  "signature": "void appndi_c ( SpiceInt        item,\n                   SpiceCell     * cell )",
  "name": "appndi_c",
  "args": {
    "item": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "item",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "cell": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cell",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### axisar_c
```js
{
  "signature": "void axisar_c ( ConstSpiceDouble  axis   [3],\n                   SpiceDouble       angle,\n                   SpiceDouble       r      [3][3]  )",
  "name": "axisar_c",
  "args": {
    "axis": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axis",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "angle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "angle",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### b1900_c
```js
{
  "signature": "SpiceDouble b1900_c ( void )",
  "name": "b1900_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### b1950_c
```js
{
  "signature": "SpiceDouble b1950_c ( void )",
  "name": "b1950_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### badkpv_c
```js
{
  "signature": "SpiceBoolean badkpv_c ( ConstSpiceChar    *caller,\n                           ConstSpiceChar    *name,\n                           ConstSpiceChar    *comp,\n                           SpiceInt           size,\n                           SpiceInt           divby,\n                           SpiceChar          type   )",
  "name": "badkpv_c",
  "args": {
    "caller": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "caller",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "comp": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "comp",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "size": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "size",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "divby": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "divby",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "type": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "type",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### bodc2n_c
```js
{
  "signature": "void bodc2n_c ( SpiceInt        code,\n                   SpiceInt        lenout,\n                   SpiceChar     * name,\n                   SpiceBoolean  * found   )",
  "name": "bodc2n_c",
  "args": {
    "code": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "code",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### bodc2s_c
```js
{
  "signature": "void bodc2s_c ( SpiceInt        code,\n                   SpiceInt        lenout,\n                   SpiceChar     * name )",
  "name": "bodc2s_c",
  "args": {
    "code": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "code",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### boddef_c
```js
{
  "signature": "void boddef_c ( ConstSpiceChar   * name,\n                   SpiceInt           code )",
  "name": "boddef_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "code": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "code",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### bodfnd_c
```js
{
  "signature": "SpiceBoolean bodfnd_c ( SpiceInt           body,\n                           ConstSpiceChar   * item )",
  "name": "bodfnd_c",
  "args": {
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### bodn2c_c
```js
{
  "signature": "void bodn2c_c ( ConstSpiceChar  * name,\n                   SpiceInt        * code,\n                   SpiceBoolean    * found )",
  "name": "bodn2c_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "code": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "code",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### bods2c_c
```js
{
  "signature": "void bods2c_c ( ConstSpiceChar  * name,\n                   SpiceInt        * code,\n                   SpiceBoolean    * found )",
  "name": "bods2c_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "code": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "code",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### bodvar_c
```js
{
  "signature": "void bodvar_c ( SpiceInt           body,\n                   ConstSpiceChar   * item,\n                   SpiceInt         * dim,\n                   SpiceDouble      * values )",
  "name": "bodvar_c",
  "args": {
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "dim": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "values": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "values",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### bodvcd_c
```js
{
  "signature": "void bodvcd_c ( SpiceInt           bodyid,\n                   ConstSpiceChar   * item,\n                   SpiceInt           maxn,\n                   SpiceInt         * dim,\n                   SpiceDouble      * values )",
  "name": "bodvcd_c",
  "args": {
    "bodyid": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "bodyid",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "maxn": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "maxn",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "dim": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "values": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "values",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### bodvrd_c
```js
{
  "signature": "void bodvrd_c ( ConstSpiceChar   * bodynm,\n                   ConstSpiceChar   * item,\n                   SpiceInt           maxn,\n                   SpiceInt         * dim,\n                   SpiceDouble      * values )",
  "name": "bodvrd_c",
  "args": {
    "bodynm": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "bodynm",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "maxn": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "maxn",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "dim": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "values": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "values",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### brcktd_c
```js
{
  "signature": "SpiceDouble brcktd_c ( SpiceDouble  number, \n                          SpiceDouble  end1,\n                          SpiceDouble  end2   )",
  "name": "brcktd_c",
  "args": {
    "number": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "number",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "end1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "end1",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "end2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "end2",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### brckti_c
```js
{
  "signature": "SpiceInt brckti_c ( SpiceInt  number, \n                       SpiceInt  end1,\n                       SpiceInt  end2   )",
  "name": "brckti_c",
  "args": {
    "number": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "number",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "end1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "end1",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "end2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "end2",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### bschoc_c
```js
{
  "signature": "SpiceInt bschoc_c ( ConstSpiceChar  * value,\n                       SpiceInt          ndim,   \n                       SpiceInt          lenvals,\n                       const void      * array,\n                       ConstSpiceInt   * order    )",
  "name": "bschoc_c",
  "args": {
    "value": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "value",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "void",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "order": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "order",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### bschoi_c
```js
{
  "signature": "SpiceInt bschoi_c ( SpiceInt          value,\n                       SpiceInt          ndim,\n                       ConstSpiceInt   * array,\n                       ConstSpiceInt   * order  )",
  "name": "bschoi_c",
  "args": {
    "value": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "value",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "order": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "order",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### bsrchc_c
```js
{
  "signature": "SpiceInt bsrchc_c ( ConstSpiceChar  * value,\n                       SpiceInt          ndim,   \n                       SpiceInt          lenvals,\n                       const void      * array   )",
  "name": "bsrchc_c",
  "args": {
    "value": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "value",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "void",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### bsrchd_c
```js
{
  "signature": "SpiceInt bsrchd_c ( SpiceDouble          value,\n                       SpiceInt             ndim,\n                       ConstSpiceDouble   * array )",
  "name": "bsrchd_c",
  "args": {
    "value": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "value",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### bsrchi_c
```js
{
  "signature": "SpiceInt bsrchi_c ( SpiceInt          value,\n                       SpiceInt          ndim,\n                       ConstSpiceInt   * array )",
  "name": "bsrchi_c",
  "args": {
    "value": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "value",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### byebye_
```js
{
  "signature": "int byebye_ ( char *status,   ftnlen statusLen )",
  "name": "byebye_",
  "args": {
    "status": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "status",
      "type": "char",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "statusLen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "statusLen",
      "type": "ftnlen",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "int"
  }
}```
### card_c
```js
{
  "signature": "SpiceInt card_c ( SpiceCell  * cell )",
  "name": "card_c",
  "args": {
    "cell": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cell",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### cgv2el_c
```js
{
  "signature": "void cgv2el_c ( ConstSpiceDouble    center[3],\n                   ConstSpiceDouble    vec1  [3],\n                   ConstSpiceDouble    vec2  [3],\n                   SpiceEllipse      * ellipse   )",
  "name": "cgv2el_c",
  "args": {
    "center": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "center",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "vec1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vec1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "vec2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vec2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "ellipse": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ellipse",
      "type": "SpiceEllipse",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### chkin_c
```js
{
  "signature": "void chkin_c ( ConstSpiceChar * module )",
  "name": "chkin_c",
  "args": {
    "module": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "module",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### chkout_c
```js
{
  "signature": "void chkout_c ( ConstSpiceChar  * module )",
  "name": "chkout_c",
  "args": {
    "module": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "module",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### cidfrm_c
```js
{
  "signature": "void cidfrm_c ( SpiceInt        cent,\n                   SpiceInt        lenout,\n                   SpiceInt      * frcode,\n                   SpiceChar     * frname,\n                   SpiceBoolean  * found  )",
  "name": "cidfrm_c",
  "args": {
    "cent": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "cent",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "frcode": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frcode",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "frname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frname",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ckcls_c
```js
{
  "signature": "void ckcls_c ( SpiceInt handle )",
  "name": "ckcls_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ckcov_c
```js
{
  "signature": "void ckcov_c ( ConstSpiceChar    * ck,\n                  SpiceInt            idcode,\n                  SpiceBoolean        needav,\n                  ConstSpiceChar    * level,\n                  SpiceDouble         tol,\n                  ConstSpiceChar    * timsys,\n                  SpiceCell         * cover   )",
  "name": "ckcov_c",
  "args": {
    "ck": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ck",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "idcode": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "idcode",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "needav": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "needav",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "level": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "level",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "tol": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "tol",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "timsys": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "timsys",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "cover": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cover",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ckgpav_c
```js
{
  "signature": "void ckgpav_c ( SpiceInt            inst, \n                   SpiceDouble         sclkdp, \n                   SpiceDouble         tol, \n                   ConstSpiceChar    * ref, \n                   SpiceDouble         cmat[3][3], \n                   SpiceDouble         av[3],\n                   SpiceDouble       * clkout,  \n                   SpiceBoolean      * found      )",
  "name": "ckgpav_c",
  "args": {
    "inst": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "inst",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "sclkdp": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sclkdp",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "tol": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "tol",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "cmat": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "cmat",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 4,
      "isInput": false
    },
    "av": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "av",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 5,
      "isInput": false
    },
    "clkout": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "clkout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ckgp_c
```js
{
  "signature": "void ckgp_c ( SpiceInt            inst, \n                 SpiceDouble         sclkdp, \n                 SpiceDouble         tol, \n                 ConstSpiceChar    * ref, \n                 SpiceDouble         cmat[3][3], \n                 SpiceDouble       * clkout,  \n                 SpiceBoolean      * found      )",
  "name": "ckgp_c",
  "args": {
    "inst": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "inst",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "sclkdp": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sclkdp",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "tol": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "tol",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "cmat": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "cmat",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 4,
      "isInput": false
    },
    "clkout": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "clkout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### cklpf_c
```js
{
  "signature": "void cklpf_c ( ConstSpiceChar * filename,\n                  SpiceInt       * handle    )",
  "name": "cklpf_c",
  "args": {
    "filename": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "filename",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ckobj_c
```js
{
  "signature": "void ckobj_c ( ConstSpiceChar  * ck,\n                  SpiceCell       * ids )",
  "name": "ckobj_c",
  "args": {
    "ck": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ck",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ids": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ids",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ckopn_c
```js
{
  "signature": "void ckopn_c (  ConstSpiceChar   * fname, \n                   ConstSpiceChar   * ifname, \n                   SpiceInt           ncomch, \n                   SpiceInt         * handle  )",
  "name": "ckopn_c",
  "args": {
    "fname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ifname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ifname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ncomch": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ncomch",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ckupf_c
```js
{
  "signature": "void ckupf_c ( SpiceInt handle )",
  "name": "ckupf_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ckw01_c
```js
{
  "signature": "void ckw01_c ( SpiceInt            handle, \n                  SpiceDouble         begtim,\n                  SpiceDouble         endtim,\n                  SpiceInt            inst,\n                  ConstSpiceChar    * ref,\n                  SpiceBoolean        avflag,\n                  ConstSpiceChar    * segid, \n                  SpiceInt            nrec,\n                  ConstSpiceDouble    sclkdp [],\n                  ConstSpiceDouble    quats  [][4],\n                  ConstSpiceDouble    avvs   [][3]  )",
  "name": "ckw01_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "begtim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "begtim",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "endtim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "endtim",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "inst": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "inst",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "avflag": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "avflag",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "nrec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nrec",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "sclkdp": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sclkdp",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "quats": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "quats",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "avvs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "avvs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ckw02_c
```js
{
  "signature": "void ckw02_c ( SpiceInt            handle, \n                  SpiceDouble         begtim,\n                  SpiceDouble         endtim,\n                  SpiceInt            inst,\n                  ConstSpiceChar    * ref,\n                  ConstSpiceChar    * segid, \n                  SpiceInt            nrec,\n                  ConstSpiceDouble    start  [],\n                  ConstSpiceDouble    stop   [],\n                  ConstSpiceDouble    quats  [][4],\n                  ConstSpiceDouble    avvs   [][3],\n                  ConstSpiceDouble    rates  []    )",
  "name": "ckw02_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "begtim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "begtim",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "endtim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "endtim",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "inst": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "inst",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "nrec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nrec",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "start": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "start",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "stop": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "stop",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "quats": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "quats",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "avvs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "avvs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": false
    },
    "rates": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "rates",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 11,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ckw03_c
```js
{
  "signature": "void ckw03_c ( SpiceInt            handle, \n                  SpiceDouble         begtim,\n                  SpiceDouble         endtim,\n                  SpiceInt            inst,\n                  ConstSpiceChar    * ref,\n                  SpiceBoolean        avflag,\n                  ConstSpiceChar    * segid, \n                  SpiceInt            nrec,\n                  ConstSpiceDouble    sclkdp [],\n                  ConstSpiceDouble    quats  [][4],\n                  ConstSpiceDouble    avvs   [][3],\n                  SpiceInt            nints,\n                  ConstSpiceDouble    starts []    )",
  "name": "ckw03_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "begtim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "begtim",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "endtim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "endtim",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "inst": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "inst",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "avflag": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "avflag",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "nrec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nrec",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "sclkdp": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sclkdp",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "quats": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "quats",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "avvs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "avvs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "nints": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nints",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    },
    "starts": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "starts",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 12,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ckw05_c
```js
{
  "signature": "void ckw05_c ( SpiceInt            handle,\n                  SpiceCK05Subtype    subtyp,\n                  SpiceInt            degree,\n                  SpiceDouble         begtim,\n                  SpiceDouble         endtim,\n                  SpiceInt            inst,\n                  ConstSpiceChar    * ref,\n                  SpiceBoolean        avflag,\n                  ConstSpiceChar    * segid, \n                  SpiceInt            n,\n                  ConstSpiceDouble    sclkdp [],\n                  const void        * packts,\n                  SpiceDouble         rate,\n                  SpiceInt            nints,\n                  ConstSpiceDouble    starts []    )",
  "name": "ckw05_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "subtyp": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "subtyp",
      "type": "SpiceCK05Subtype",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "degree": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "degree",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "begtim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "begtim",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "endtim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "endtim",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "inst": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "inst",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "avflag": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "avflag",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 9,
      "isInput": false
    },
    "sclkdp": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sclkdp",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": false
    },
    "packts": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "packts",
      "type": "void",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    },
    "rate": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "rate",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 12,
      "isInput": true
    },
    "nints": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nints",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 13,
      "isInput": true
    },
    "starts": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "starts",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 14,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### clight_c
```js
{
  "signature": "SpiceDouble clight_c ( void )",
  "name": "clight_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### clpool_c
```js
{
  "signature": "void clpool_c ( void )",
  "name": "clpool_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### cmprss_c
```js
{
  "signature": "void cmprss_c ( SpiceChar          delim,\n                   SpiceInt           n,\n                   ConstSpiceChar   * input,\n                   SpiceInt           lenout,\n                   SpiceChar        * output  )",
  "name": "cmprss_c",
  "args": {
    "delim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "delim",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "input": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "input",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "output": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "output",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### cnmfrm_c
```js
{
  "signature": "void cnmfrm_c ( ConstSpiceChar   * cname,\n                   SpiceInt           lenout,\n                   SpiceInt         * frcode,\n                   SpiceChar        * frname,\n                   SpiceBoolean     * found   )",
  "name": "cnmfrm_c",
  "args": {
    "cname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "frcode": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frcode",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "frname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frname",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### conics_c
```js
{
  "signature": "void conics_c ( ConstSpiceDouble  elts[8],\n                   SpiceDouble       et,\n                   SpiceDouble       state[6] )",
  "name": "conics_c",
  "args": {
    "elts": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "elts",
      "type": "ConstSpiceDouble",
      "arrayLength": 8,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "state": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "state",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### convrt_c
```js
{
  "signature": "void convrt_c ( SpiceDouble       x,\n                   ConstSpiceChar  * in,\n                   ConstSpiceChar  * out,\n                   SpiceDouble     * y    )",
  "name": "convrt_c",
  "args": {
    "x": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "in": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "in",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "out": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "out",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "y": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "y",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### copy_c
```js
{
  "signature": "void copy_c (  SpiceCell   * cell,\n                  SpiceCell   * copy  )",
  "name": "copy_c",
  "args": {
    "cell": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cell",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "copy": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "copy",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### cposr_c
```js
{
  "signature": "SpiceInt cposr_c ( ConstSpiceChar    * str,\n                      ConstSpiceChar    * chars,\n                      SpiceInt            start  )",
  "name": "cposr_c",
  "args": {
    "str": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "str",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "chars": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "chars",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "start": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "start",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### cpos_c
```js
{
  "signature": "SpiceInt cpos_c ( ConstSpiceChar    * str,\n                     ConstSpiceChar    * chars,\n                     SpiceInt            start  )",
  "name": "cpos_c",
  "args": {
    "str": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "str",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "chars": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "chars",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "start": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "start",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### cvpool_c
```js
{
  "signature": "void cvpool_c ( ConstSpiceChar  * agent,\n                   SpiceBoolean    * update )",
  "name": "cvpool_c",
  "args": {
    "agent": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "agent",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "update": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "update",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### cyllat_c
```js
{
  "signature": "void cyllat_c ( SpiceDouble    r,\n                   SpiceDouble    lonc,\n                   SpiceDouble    z,\n                   SpiceDouble *  radius,\n                   SpiceDouble *  lon,\n                   SpiceDouble *  lat )",
  "name": "cyllat_c",
  "args": {
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lonc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lonc",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "z": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "radius": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "radius",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "lon": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "lat": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### cylrec_c
```js
{
  "signature": "void cylrec_c ( SpiceDouble r,\n                   SpiceDouble lon,\n                   SpiceDouble z,\n                   SpiceDouble rectan[3] )",
  "name": "cylrec_c",
  "args": {
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "z": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### cylsph_c
```js
{
  "signature": "void cylsph_c ( SpiceDouble    r,\n                   SpiceDouble    lonc,\n                   SpiceDouble    z,\n                   SpiceDouble *  radius,\n                   SpiceDouble *  colat,\n                   SpiceDouble *  lon )",
  "name": "cylsph_c",
  "args": {
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lonc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lonc",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "z": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "radius": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "radius",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "colat": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "colat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "lon": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafac_c
```js
{
  "signature": "void dafac_c ( SpiceInt      handle,\n                  SpiceInt      n,\n                  SpiceInt      lenvals,\n                  const void  * buffer  )",
  "name": "dafac_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "buffer": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "buffer",
      "type": "void",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafbbs_c
```js
{
  "signature": "void dafbbs_c ( SpiceInt handle )",
  "name": "dafbbs_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafbfs_c
```js
{
  "signature": "void dafbfs_c ( SpiceInt handle )",
  "name": "dafbfs_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafcls_c
```js
{
  "signature": "void dafcls_c ( SpiceInt handle )",
  "name": "dafcls_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafcs_c
```js
{
  "signature": "void dafcs_c ( SpiceInt handle )",
  "name": "dafcs_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafdc_c
```js
{
  "signature": "void dafdc_c ( SpiceInt handle )",
  "name": "dafdc_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### daffna_c
```js
{
  "signature": "void daffna_c ( SpiceBoolean  * found )",
  "name": "daffna_c",
  "args": {
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### daffpa_c
```js
{
  "signature": "void daffpa_c ( SpiceBoolean  * found )",
  "name": "daffpa_c",
  "args": {
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafgda_c
```js
{
  "signature": "void dafgda_c ( SpiceInt       handle, \n                   SpiceInt       begin,\n                   SpiceInt       end,\n                   SpiceDouble  * data )",
  "name": "dafgda_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "begin": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "begin",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "end": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "end",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "data": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "data",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafgn_c
```js
{
  "signature": "void dafgn_c ( SpiceInt     lenout,\n                  SpiceChar  * name   )",
  "name": "dafgn_c",
  "args": {
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafgsr_c
```js
{
  "signature": "void dafgsr_c  ( SpiceInt        handle,\n                    SpiceInt        recno,\n                    SpiceInt        begin,\n                    SpiceInt        end,\n                    SpiceDouble   * data,\n                    SpiceBoolean  * found  )",
  "name": "dafgsr_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "recno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "begin": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "begin",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "end": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "end",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "data": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "data",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafgs_c
```js
{
  "signature": "void dafgs_c ( SpiceDouble sum[] )",
  "name": "dafgs_c",
  "args": {
    "sum": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sum",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafopr_c
```js
{
  "signature": "void dafopr_c ( ConstSpiceChar    * fname,\n                   SpiceInt          * handle  )",
  "name": "dafopr_c",
  "args": {
    "fname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafopw_c
```js
{
  "signature": "void dafopw_c ( ConstSpiceChar  * fname,\n                   SpiceInt        * handle )",
  "name": "dafopw_c",
  "args": {
    "fname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafps_c
```js
{
  "signature": "void dafps_c ( SpiceInt             nd,\n                  SpiceInt             ni,\n                  ConstSpiceDouble   * dc,\n                  ConstSpiceInt      * ic,\n                  SpiceDouble        * sum )",
  "name": "dafps_c",
  "args": {
    "nd": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nd",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ni": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ni",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "dc": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dc",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "ic": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ic",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "sum": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sum",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafrda_c
```js
{
  "signature": "void dafrda_c ( SpiceInt       handle, \n                   SpiceInt       begin,\n                   SpiceInt       end,\n                   SpiceDouble  * data )",
  "name": "dafrda_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "begin": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "begin",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "end": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "end",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "data": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "data",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafrfr_c
```js
{
  "signature": "void dafrfr_c ( SpiceInt     handle,\n                   SpiceInt     lenout,\n                   SpiceInt   * nd,\n                   SpiceInt   * ni,\n                   SpiceChar  * ifname,\n                   SpiceInt   * fward,\n                   SpiceInt   * bward,\n                   SpiceInt   * free    )",
  "name": "dafrfr_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "nd": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nd",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "ni": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ni",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "ifname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ifname",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "fward": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fward",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "bward": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "bward",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "free": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "free",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafrs_c
```js
{
  "signature": "void dafrs_c ( ConstSpiceDouble  * sum )",
  "name": "dafrs_c",
  "args": {
    "sum": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sum",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dafus_c
```js
{
  "signature": "void dafus_c ( ConstSpiceDouble   sum [],\n                  SpiceInt           nd,\n                  SpiceInt           ni,\n                  SpiceDouble        dc  [],\n                  SpiceInt           ic  []  )",
  "name": "dafus_c",
  "args": {
    "sum": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sum",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "nd": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nd",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ni": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ni",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "dc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "dc",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "ic": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ic",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dasac_c
```js
{
  "signature": "void dasac_c ( SpiceInt       handle,\n                  SpiceInt       n,\n                  SpiceInt       buflen,\n                  const void   * buffer  )",
  "name": "dasac_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "buflen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "buflen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "buffer": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "buffer",
      "type": "void",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dascls_c
```js
{
  "signature": "void dascls_c ( SpiceInt handle )",
  "name": "dascls_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dasopr_c
```js
{
  "signature": "void dasopr_c ( ConstSpiceChar  * fname,\n                   SpiceInt        * handle )",
  "name": "dasopr_c",
  "args": {
    "fname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dcyldr_c
```js
{
  "signature": "void dcyldr_c ( SpiceDouble    x,\n                   SpiceDouble    y,\n                   SpiceDouble    z,\n                   SpiceDouble    jacobi[3][3] )",
  "name": "dcyldr_c",
  "args": {
    "x": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "y": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "y",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "z": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "jacobi": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "jacobi",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### deltet_c
```js
{
  "signature": "void deltet_c ( SpiceDouble      epoch,\n                   ConstSpiceChar * eptype,\n                   SpiceDouble    * delta )",
  "name": "deltet_c",
  "args": {
    "epoch": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epoch",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "eptype": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "eptype",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "delta": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "delta",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### det_c
```js
{
  "signature": "SpiceDouble det_c ( ConstSpiceDouble m1[3][3] )",
  "name": "det_c",
  "args": {
    "m1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "m1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### dgeodr_c
```js
{
  "signature": "void dgeodr_c ( SpiceDouble   x,\n                   SpiceDouble   y,\n                   SpiceDouble   z,\n                   SpiceDouble   re,\n                   SpiceDouble   f,\n                   SpiceDouble   jacobi[3][3] )",
  "name": "dgeodr_c",
  "args": {
    "x": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "y": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "y",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "z": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "re": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "re",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "f": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "f",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "jacobi": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "jacobi",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### diags2_c
```js
{
  "signature": "void diags2_c ( ConstSpiceDouble    symmat [2][2],\n                   SpiceDouble         diag   [2][2],\n                   SpiceDouble         rotate [2][2]  )",
  "name": "diags2_c",
  "args": {
    "symmat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "symmat",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "diag": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "diag",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "rotate": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "rotate",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### diff_c
```js
{
  "signature": "void diff_c (  SpiceCell   * a,\n                  SpiceCell   * b,\n                  SpiceCell   * c  )",
  "name": "diff_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dlatdr_c
```js
{
  "signature": "void dlatdr_c ( SpiceDouble   x,\n                   SpiceDouble   y,\n                   SpiceDouble   z,\n                   SpiceDouble   jacobi[3][3] )",
  "name": "dlatdr_c",
  "args": {
    "x": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "y": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "y",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "z": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "jacobi": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "jacobi",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dp2hx_c
```js
{
  "signature": "void dp2hx_c ( SpiceDouble   number,\n                  SpiceInt      lenout,\n                  SpiceChar   * string,\n                  SpiceInt    * length\n                 )",
  "name": "dp2hx_c",
  "args": {
    "number": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "number",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "length": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "length",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dpgrdr_c
```js
{
  "signature": "void dpgrdr_c ( ConstSpiceChar  * body,\n                   SpiceDouble       x,\n                   SpiceDouble       y,\n                   SpiceDouble       z,\n                   SpiceDouble       re,\n                   SpiceDouble       f,\n                   SpiceDouble       jacobi[3][3]  )",
  "name": "dpgrdr_c",
  "args": {
    "body": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "body",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "x": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "y": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "y",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "z": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "re": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "re",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "f": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "f",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "jacobi": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "jacobi",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dpmax_
```js
{
  "signature": "SpiceDouble dpmax_ ()",
  "name": "dpmax_",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### dpmax_c
```js
{
  "signature": "SpiceDouble dpmax_c ()",
  "name": "dpmax_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### dpmin_
```js
{
  "signature": "SpiceDouble dpmin_ ()",
  "name": "dpmin_",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### dpmin_c
```js
{
  "signature": "SpiceDouble dpmin_c ()",
  "name": "dpmin_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### dpr_c
```js
{
  "signature": "SpiceDouble dpr_c ( void )",
  "name": "dpr_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### drdcyl_c
```js
{
  "signature": "void drdcyl_c ( SpiceDouble    r,\n                   SpiceDouble    lon,\n                   SpiceDouble    z,\n                   SpiceDouble    jacobi[3][3] )",
  "name": "drdcyl_c",
  "args": {
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "z": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "jacobi": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "jacobi",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### drdgeo_c
```js
{
  "signature": "void drdgeo_c ( SpiceDouble    lon,\n                   SpiceDouble    lat,\n                   SpiceDouble    alt,\n                   SpiceDouble    re,\n                   SpiceDouble    f,\n                   SpiceDouble    jacobi[3][3] )",
  "name": "drdgeo_c",
  "args": {
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "alt": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "alt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "re": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "re",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "f": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "f",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "jacobi": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "jacobi",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### drdlat_c
```js
{
  "signature": "void drdlat_c ( SpiceDouble   r,\n                   SpiceDouble   lon,\n                   SpiceDouble   lat,\n                   SpiceDouble   jacobi[3][3] )",
  "name": "drdlat_c",
  "args": {
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    },
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "jacobi": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "jacobi",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### drdpgr_c
```js
{
  "signature": "void drdpgr_c ( ConstSpiceChar  * body,\n                   SpiceDouble       lon,\n                   SpiceDouble       lat,\n                   SpiceDouble       alt,\n                   SpiceDouble       re,\n                   SpiceDouble       f,\n                   SpiceDouble       jacobi[3][3] )",
  "name": "drdpgr_c",
  "args": {
    "body": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "body",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "alt": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "alt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "re": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "re",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "f": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "f",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "jacobi": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "jacobi",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### drdsph_c
```js
{
  "signature": "void drdsph_c ( SpiceDouble    r,\n                   SpiceDouble    colat,\n                   SpiceDouble    lon,\n                   SpiceDouble    jacobi[3][3] )",
  "name": "drdsph_c",
  "args": {
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "colat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "colat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "jacobi": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "jacobi",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dsphdr_c
```js
{
  "signature": "void dsphdr_c ( SpiceDouble   x,\n                   SpiceDouble   y,\n                   SpiceDouble   z,\n                   SpiceDouble   jacobi[3][3] )",
  "name": "dsphdr_c",
  "args": {
    "x": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "y": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "y",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "z": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "jacobi": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "jacobi",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dtpool_c
```js
{
  "signature": "void dtpool_c ( ConstSpiceChar   * name,\n                   SpiceBoolean     * found,\n                   SpiceInt         * n,\n                   SpiceChar          type [1] )",
  "name": "dtpool_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "n": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "type": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "type",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ducrss_c
```js
{
  "signature": "void ducrss_c ( ConstSpiceDouble s1  [6],\n                   ConstSpiceDouble s2  [6],\n                   SpiceDouble      sout[6] )",
  "name": "ducrss_c",
  "args": {
    "s1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "s1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "s2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "s2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "sout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "sout",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dvcrss_c
```js
{
  "signature": "void dvcrss_c ( ConstSpiceDouble s1  [6],\n                   ConstSpiceDouble s2  [6],\n                   SpiceDouble      sout[6] )",
  "name": "dvcrss_c",
  "args": {
    "s1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "s1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "s2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "s2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "sout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "sout",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dvdot_c
```js
{
  "signature": "SpiceDouble dvdot_c ( ConstSpiceDouble s1[6],\n                         ConstSpiceDouble s2[6] )",
  "name": "dvdot_c",
  "args": {
    "s1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "s1",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 0,
      "isInput": true
    },
    "s2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "s2",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### dvhat_c
```js
{
  "signature": "void dvhat_c ( ConstSpiceDouble s1  [6],\n                  SpiceDouble      sout[6] )",
  "name": "dvhat_c",
  "args": {
    "s1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "s1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "sout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "sout",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dvnorm_c
```js
{
  "signature": "SpiceDouble       dvnorm_c ( ConstSpiceDouble state[6] )",
  "name": "dvnorm_c",
  "args": {
    "state": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "state",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble      "
  }
}```
### dvpool_c
```js
{
  "signature": "void dvpool_c ( ConstSpiceChar  * name )",
  "name": "dvpool_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### dvsep_c
```js
{
  "signature": "SpiceDouble dvsep_c (ConstSpiceDouble s1[6], ConstSpiceDouble s2[6] )",
  "name": "dvsep_c",
  "args": {
    "s1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "s1",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 0,
      "isInput": true
    },
    "s2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "s2",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### edlimb_c
```js
{
  "signature": "void edlimb_c ( SpiceDouble           a,\n                   SpiceDouble           b,\n                   SpiceDouble           c,\n                   ConstSpiceDouble      viewpt[3],\n                   SpiceEllipse        * limb      )",
  "name": "edlimb_c",
  "args": {
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "viewpt": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "viewpt",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": true
    },
    "limb": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "limb",
      "type": "SpiceEllipse",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekacec_c
```js
{
  "signature": "void ekacec_c  ( SpiceInt          handle,\n                    SpiceInt          segno,\n                    SpiceInt          recno,\n                    ConstSpiceChar  * column,\n                    SpiceInt          nvals,\n                    SpiceInt          vallen,\n                    const void      * cvals,\n                    SpiceBoolean      isnull )",
  "name": "ekacec_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "recno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "nvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "vallen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vallen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "cvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cvals",
      "type": "void",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "isnull": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "isnull",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekaced_c
```js
{
  "signature": "void ekaced_c  ( SpiceInt            handle,\n                    SpiceInt            segno,\n                    SpiceInt            recno,\n                    ConstSpiceChar    * column,\n                    SpiceInt            nvals,\n                    ConstSpiceDouble  * dvals,\n                    SpiceBoolean        isnull )",
  "name": "ekaced_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "recno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "nvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "dvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dvals",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "isnull": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "isnull",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekacei_c
```js
{
  "signature": "void ekacei_c  ( SpiceInt          handle,\n                    SpiceInt          segno,\n                    SpiceInt          recno,\n                    ConstSpiceChar  * column,\n                    SpiceInt          nvals,\n                    ConstSpiceInt   * ivals,\n                    SpiceBoolean      isnull )",
  "name": "ekacei_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "recno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "nvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "ivals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ivals",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "isnull": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "isnull",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekaclc_c
```js
{
  "signature": "void ekaclc_c ( SpiceInt                handle,\n                   SpiceInt                segno,\n                   ConstSpiceChar        * column,\n                   SpiceInt                vallen,\n                   const void            * cvals,\n                   ConstSpiceInt         * entszs,\n                   ConstSpiceBoolean     * nlflgs,\n                   ConstSpiceInt         * rcptrs,\n                   SpiceInt              * wkindx  )",
  "name": "ekaclc_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "vallen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vallen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "cvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cvals",
      "type": "void",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "entszs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "entszs",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "nlflgs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nlflgs",
      "type": "ConstSpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "rcptrs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "rcptrs",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "wkindx": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "wkindx",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekacld_c
```js
{
  "signature": "void ekacld_c ( SpiceInt                handle,\n                   SpiceInt                segno,\n                   ConstSpiceChar        * column,\n                   ConstSpiceDouble      * dvals,\n                   ConstSpiceInt         * entszs,\n                   ConstSpiceBoolean     * nlflgs,\n                   ConstSpiceInt         * rcptrs,\n                   SpiceInt              * wkindx  )",
  "name": "ekacld_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "dvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dvals",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "entszs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "entszs",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "nlflgs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nlflgs",
      "type": "ConstSpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "rcptrs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "rcptrs",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "wkindx": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "wkindx",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekacli_c
```js
{
  "signature": "void ekacli_c ( SpiceInt                handle,\n                   SpiceInt                segno,\n                   ConstSpiceChar        * column,\n                   ConstSpiceInt         * ivals,\n                   ConstSpiceInt         * entszs,\n                   ConstSpiceBoolean     * nlflgs,\n                   ConstSpiceInt         * rcptrs,\n                   SpiceInt              * wkindx  )",
  "name": "ekacli_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "ivals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ivals",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "entszs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "entszs",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "nlflgs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nlflgs",
      "type": "ConstSpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "rcptrs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "rcptrs",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "wkindx": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "wkindx",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekappr_c
```js
{
  "signature": "void ekappr_c ( SpiceInt     handle,\n                   SpiceInt     segno,\n                   SpiceInt   * recno  )",
  "name": "ekappr_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "recno": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekbseg_c
```js
{
  "signature": "void ekbseg_c ( SpiceInt           handle,\n                   ConstSpiceChar   * tabnam,\n                   SpiceInt           ncols,\n                   SpiceInt           cnmlen,\n                   const void       * cnames,\n                   SpiceInt           declen,\n                   const void       * decls,\n                   SpiceInt         * segno  )",
  "name": "ekbseg_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "tabnam": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "tabnam",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ncols": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ncols",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "cnmlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "cnmlen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "cnames": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cnames",
      "type": "void",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "declen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "declen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "decls": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "decls",
      "type": "void",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "segno": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekccnt_c
```js
{
  "signature": "void ekccnt_c ( ConstSpiceChar  * table,\n                   SpiceInt        * ccount )",
  "name": "ekccnt_c",
  "args": {
    "table": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "table",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ccount": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ccount",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekcii_c
```js
{
  "signature": "void ekcii_c ( ConstSpiceChar   * table,\n                  SpiceInt           cindex,\n                  SpiceInt           lenout,\n                  SpiceChar        * column,\n                  SpiceEKAttDsc    * attdsc  )",
  "name": "ekcii_c",
  "args": {
    "table": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "table",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "cindex": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "cindex",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "attdsc": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "attdsc",
      "type": "SpiceEKAttDsc",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekcls_c
```js
{
  "signature": "void ekcls_c ( SpiceInt handle )",
  "name": "ekcls_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekdelr_c
```js
{
  "signature": "void ekdelr_c ( SpiceInt   handle,\n                   SpiceInt   segno,\n                   SpiceInt   recno )",
  "name": "ekdelr_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "recno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekffld_c
```js
{
  "signature": "void ekffld_c ( SpiceInt     handle,\n                   SpiceInt     segno,\n                   SpiceInt   * rcptrs )",
  "name": "ekffld_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "rcptrs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "rcptrs",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekfind_c
```js
{
  "signature": "void ekfind_c ( ConstSpiceChar    * query,\n                   SpiceInt            lenout, \n                   SpiceInt          * nmrows,\n                   SpiceBoolean      * error,\n                   SpiceChar         * errmsg )",
  "name": "ekfind_c",
  "args": {
    "query": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "query",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "nmrows": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nmrows",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "error": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "error",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "errmsg": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "errmsg",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekgc_c
```js
{
  "signature": "void ekgc_c ( SpiceInt          selidx,\n                 SpiceInt          row,\n                 SpiceInt          elment,\n                 SpiceInt          lenout,\n                 SpiceChar       * cdata,\n                 SpiceBoolean    * null,\n                 SpiceBoolean    * found  )",
  "name": "ekgc_c",
  "args": {
    "selidx": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "selidx",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "row": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "row",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "elment": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "elment",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "cdata": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cdata",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "null": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "null",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekgd_c
```js
{
  "signature": "void ekgd_c ( SpiceInt          selidx,\n                 SpiceInt          row,\n                 SpiceInt          elment,\n                 SpiceDouble     * ddata,\n                 SpiceBoolean    * null,\n                 SpiceBoolean    * found  )",
  "name": "ekgd_c",
  "args": {
    "selidx": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "selidx",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "row": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "row",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "elment": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "elment",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "ddata": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ddata",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "null": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "null",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekgi_c
```js
{
  "signature": "void ekgi_c ( SpiceInt          selidx,\n                 SpiceInt          row,\n                 SpiceInt          elment,\n                 SpiceInt        * idata,\n                 SpiceBoolean    * null,\n                 SpiceBoolean    * found  )",
  "name": "ekgi_c",
  "args": {
    "selidx": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "selidx",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "row": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "row",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "elment": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "elment",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "idata": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "idata",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "null": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "null",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekifld_c
```js
{
  "signature": "void ekifld_c ( SpiceInt           handle,\n                   ConstSpiceChar   * tabnam,\n                   SpiceInt           ncols,\n                   SpiceInt           nrows,\n                   SpiceInt           cnmlen,\n                   const void       * cnames,\n                   SpiceInt           declen,\n                   const void       * decls,\n                   SpiceInt         * segno,\n                   SpiceInt         * rcptrs )",
  "name": "ekifld_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "tabnam": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "tabnam",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ncols": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ncols",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "nrows": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nrows",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "cnmlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "cnmlen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "cnames": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cnames",
      "type": "void",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "declen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "declen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "decls": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "decls",
      "type": "void",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "segno": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    },
    "rcptrs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "rcptrs",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 9,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekinsr_c
```js
{
  "signature": "void ekinsr_c ( SpiceInt  handle,\n                   SpiceInt  segno,\n                   SpiceInt  recno )",
  "name": "ekinsr_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "recno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### eklef_c
```js
{
  "signature": "void eklef_c ( ConstSpiceChar  * fname,\n                  SpiceInt        * handle )",
  "name": "eklef_c",
  "args": {
    "fname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### eknelt_c
```js
{
  "signature": "SpiceInt eknelt_c ( SpiceInt  selidx,\n                       SpiceInt  row     )",
  "name": "eknelt_c",
  "args": {
    "selidx": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "selidx",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "row": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "row",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### eknseg_c
```js
{
  "signature": "SpiceInt eknseg_c ( SpiceInt handle )",
  "name": "eknseg_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### ekntab_c
```js
{
  "signature": "void ekntab_c ( SpiceInt   * n )",
  "name": "ekntab_c",
  "args": {
    "n": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekopn_c
```js
{
  "signature": "void ekopn_c ( ConstSpiceChar    * fname,\n                  ConstSpiceChar    * ifname,\n                  SpiceInt            ncomch,\n                  SpiceInt          * handle )",
  "name": "ekopn_c",
  "args": {
    "fname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ifname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ifname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ncomch": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ncomch",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekopr_c
```js
{
  "signature": "void ekopr_c ( ConstSpiceChar  * fname,\n                  SpiceInt        * handle )",
  "name": "ekopr_c",
  "args": {
    "fname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekops_c
```js
{
  "signature": "void ekops_c ( SpiceInt   * handle )",
  "name": "ekops_c",
  "args": {
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekopw_c
```js
{
  "signature": "void ekopw_c ( ConstSpiceChar  * fname,\n                  SpiceInt        * handle )",
  "name": "ekopw_c",
  "args": {
    "fname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekrced_c
```js
{
  "signature": "void ekrced_c ( SpiceInt           handle,\n                   SpiceInt           segno,\n                   SpiceInt           recno,\n                   ConstSpiceChar   * column,\n                   SpiceInt         * nvals,\n                   SpiceDouble      * dvals,\n                   SpiceBoolean     * isnull )",
  "name": "ekrced_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "recno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "nvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "dvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dvals",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "isnull": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "isnull",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekrcei_c
```js
{
  "signature": "void ekrcei_c ( SpiceInt           handle,\n                   SpiceInt           segno,\n                   SpiceInt           recno,\n                   ConstSpiceChar   * column,\n                   SpiceInt         * nvals,\n                   SpiceInt         * ivals,\n                   SpiceBoolean     * isnull )",
  "name": "ekrcei_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "recno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "nvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "ivals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ivals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "isnull": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "isnull",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekssum_c
```js
{
  "signature": "void ekssum_c ( SpiceInt           handle,\n                   SpiceInt           segno,\n                   SpiceEKSegSum    * segsum )",
  "name": "ekssum_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "segsum": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segsum",
      "type": "SpiceEKSegSum",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ektnam_c
```js
{
  "signature": "void ektnam_c ( SpiceInt     n,\n                   SpiceInt     lenout,\n                   SpiceChar  * table  )",
  "name": "ektnam_c",
  "args": {
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "table": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "table",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekucec_c
```js
{
  "signature": "void ekucec_c  ( SpiceInt          handle,\n                    SpiceInt          segno,\n                    SpiceInt          recno,\n                    ConstSpiceChar  * column,\n                    SpiceInt          nvals,\n                    SpiceInt          vallen,\n                    const void      * cvals,\n                    SpiceBoolean      isnull )",
  "name": "ekucec_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "recno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "nvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "vallen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vallen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "cvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cvals",
      "type": "void",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "isnull": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "isnull",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekuced_c
```js
{
  "signature": "void ekuced_c  ( SpiceInt             handle,\n                    SpiceInt             segno,\n                    SpiceInt             recno,\n                    ConstSpiceChar     * column,\n                    SpiceInt             nvals,\n                    ConstSpiceDouble   * dvals,\n                    SpiceBoolean         isnull )",
  "name": "ekuced_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "recno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "nvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "dvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dvals",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "isnull": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "isnull",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekucei_c
```js
{
  "signature": "void ekucei_c  ( SpiceInt          handle,\n                    SpiceInt          segno,\n                    SpiceInt          recno,\n                    ConstSpiceChar  * column,\n                    SpiceInt          nvals,\n                    ConstSpiceInt   * ivals,\n                    SpiceBoolean      isnull )",
  "name": "ekucei_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "segno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "recno": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "recno",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "column": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "column",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "nvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "ivals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ivals",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "isnull": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "isnull",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ekuef_c
```js
{
  "signature": "void ekuef_c ( SpiceInt handle )",
  "name": "ekuef_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### el2cgv_c
```js
{
  "signature": "void el2cgv_c ( ConstSpiceEllipse   * ellipse,\n                   SpiceDouble           center[3],\n                   SpiceDouble           smajor[3],\n                   SpiceDouble           sminor[3]  )",
  "name": "el2cgv_c",
  "args": {
    "ellipse": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ellipse",
      "type": "ConstSpiceEllipse",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "center": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "center",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    },
    "smajor": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "smajor",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    },
    "sminor": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "sminor",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### elemc_c
```js
{
  "signature": "SpiceBoolean elemc_c ( ConstSpiceChar  * item,\n                          SpiceCell       * set   )",
  "name": "elemc_c",
  "args": {
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### elemd_c
```js
{
  "signature": "SpiceBoolean elemd_c ( SpiceDouble     item,\n                          SpiceCell     * set   )",
  "name": "elemd_c",
  "args": {
    "item": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "item",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### elemi_c
```js
{
  "signature": "SpiceBoolean elemi_c ( SpiceInt        item,\n                          SpiceCell     * set   )",
  "name": "elemi_c",
  "args": {
    "item": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "item",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### eqstr_c
```js
{
  "signature": "SpiceBoolean eqstr_c ( ConstSpiceChar * a,  ConstSpiceChar * b )",
  "name": "eqstr_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "a",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "b",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### erract_c
```js
{
  "signature": "void erract_c ( ConstSpiceChar * op,\n                   SpiceInt         lenout,\n                   SpiceChar      * action )",
  "name": "erract_c",
  "args": {
    "op": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "op",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "action": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "action",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### errch_c
```js
{
  "signature": "void errch_c ( ConstSpiceChar * marker,\n                  ConstSpiceChar * string )",
  "name": "errch_c",
  "args": {
    "marker": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "marker",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### errdev_c
```js
{
  "signature": "void errdev_c ( ConstSpiceChar * op,\n                   SpiceInt         lenout,\n                   SpiceChar      * device )",
  "name": "errdev_c",
  "args": {
    "op": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "op",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "device": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "device",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### errdp_c
```js
{
  "signature": "void errdp_c ( ConstSpiceChar  * marker,\n                  SpiceDouble       number  )",
  "name": "errdp_c",
  "args": {
    "marker": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "marker",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "number": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "number",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### errint_c
```js
{
  "signature": "void errint_c ( ConstSpiceChar  * marker,\n                   SpiceInt          number  )",
  "name": "errint_c",
  "args": {
    "marker": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "marker",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "number": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "number",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### errprt_c
```js
{
  "signature": "void errprt_c ( ConstSpiceChar * op,\n                   SpiceInt         lenout,\n                   SpiceChar      * list  )",
  "name": "errprt_c",
  "args": {
    "op": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "op",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "list": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "list",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### esrchc_c
```js
{
  "signature": "SpiceInt esrchc_c ( ConstSpiceChar  * value,\n                       SpiceInt          ndim,\n                       SpiceInt          lenvals,\n                       const void      * array    )",
  "name": "esrchc_c",
  "args": {
    "value": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "value",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "void",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### et2lst_c
```js
{
  "signature": "void et2lst_c ( SpiceDouble        et,\n                   SpiceInt           body,\n                   SpiceDouble        lon,\n                   ConstSpiceChar   * type,\n                   SpiceInt           timlen,\n                   SpiceInt           ampmlen,\n                   SpiceInt         * hr,\n                   SpiceInt         * mn,\n                   SpiceInt         * sc,\n                   SpiceChar        * time,\n                   SpiceChar        * ampm )",
  "name": "et2lst_c",
  "args": {
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "type": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "type",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "timlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "timlen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "ampmlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ampmlen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "hr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "hr",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "mn": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "mn",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    },
    "sc": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    },
    "time": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "time",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 9,
      "isInput": false
    },
    "ampm": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ampm",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 10,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### et2utc_c
```js
{
  "signature": "void et2utc_c (  SpiceDouble       et,\n                    ConstSpiceChar  * format,\n                    SpiceInt          prec,\n                    SpiceInt          lenout,\n                    SpiceChar       * utcstr   )",
  "name": "et2utc_c",
  "args": {
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "format": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "format",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "prec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "prec",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "utcstr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "utcstr",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### etcal_c
```js
{
  "signature": "void etcal_c ( SpiceDouble   et,\n                  SpiceInt      lenout,\n                  SpiceChar   * string )",
  "name": "etcal_c",
  "args": {
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### eul2m_c
```js
{
  "signature": "void eul2m_c ( SpiceDouble  angle3,\n                  SpiceDouble  angle2,\n                  SpiceDouble  angle1,\n                  SpiceInt     axis3,\n                  SpiceInt     axis2,\n                  SpiceInt     axis1,\n                  SpiceDouble  r [3][3] )",
  "name": "eul2m_c",
  "args": {
    "angle3": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "angle3",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "angle2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "angle2",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "angle1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "angle1",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "axis3": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axis3",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "axis2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axis2",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "axis1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axis1",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### eul2xf_c
```js
{
  "signature": "void eul2xf_c ( ConstSpiceDouble    eulang[6],\n                   SpiceInt            axisa,\n                   SpiceInt            axisb,\n                   SpiceInt            axisc,\n                   SpiceDouble         xform [6][6] )",
  "name": "eul2xf_c",
  "args": {
    "eulang": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "eulang",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 0,
      "isInput": true
    },
    "axisa": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axisa",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "axisb": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axisb",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "axisc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axisc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "xform": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "xform",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### exists_c
```js
{
  "signature": "SpiceBoolean exists_c ( ConstSpiceChar  * fname )",
  "name": "exists_c",
  "args": {
    "fname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### expool_c
```js
{
  "signature": "void expool_c ( ConstSpiceChar  * name,\n                   SpiceBoolean    * found )",
  "name": "expool_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### failed_c
```js
{
  "signature": "SpiceBoolean failed_c ()",
  "name": "failed_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### frame_c
```js
{
  "signature": "void frame_c ( SpiceDouble x[3],\n                  SpiceDouble y[3],\n                  SpiceDouble z[3] )",
  "name": "frame_c",
  "args": {
    "x": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "x",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "y": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "y",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    },
    "z": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### frinfo_c
```js
{
  "signature": "void frinfo_c ( SpiceInt       frcode,\n                   SpiceInt      *cent,\n                   SpiceInt      *frclss,\n                   SpiceInt      *clssid,\n                   SpiceBoolean  *found   )",
  "name": "frinfo_c",
  "args": {
    "frcode": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "frcode",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "cent": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cent",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "frclss": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frclss",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "clssid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "clssid",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### frmnam_c
```js
{
  "signature": "void frmnam_c ( SpiceInt      frcode,\n                   SpiceInt      lenout,\n                   SpiceChar *   frname  )",
  "name": "frmnam_c",
  "args": {
    "frcode": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "frcode",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "frname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frname",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ftncls_c
```js
{
  "signature": "void ftncls_c ( SpiceInt unit )",
  "name": "ftncls_c",
  "args": {
    "unit": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "unit",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### furnsh_c
```js
{
  "signature": "void furnsh_c ( ConstSpiceChar  * file )",
  "name": "furnsh_c",
  "args": {
    "file": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "file",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gdpool_c
```js
{
  "signature": "void gdpool_c ( ConstSpiceChar * name,\n                   SpiceInt         start,\n                   SpiceInt         room,\n                   SpiceInt       * n,\n                   SpiceDouble    * values,\n                   SpiceBoolean   * found )",
  "name": "gdpool_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "start": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "start",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "room": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "room",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "n": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "values": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "values",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### georec_c
```js
{
  "signature": "void georec_c ( SpiceDouble lon,\n                   SpiceDouble lat,\n                   SpiceDouble alt,\n                   SpiceDouble re,\n                   SpiceDouble f,\n                   SpiceDouble rectan[3] )",
  "name": "georec_c",
  "args": {
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "alt": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "alt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "re": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "re",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "f": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "f",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### getcml_c
```js
{
  "signature": "void getcml_c ( SpiceInt     * argc,\n                   SpiceChar  *** argv )",
  "name": "getcml_c",
  "args": {
    "argc": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "argc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    },
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceCha",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### getelm_c
```js
{
  "signature": "void getelm_c ( SpiceInt         frstyr,\n                   SpiceInt         lineln,\n                   const void     * lines,\n                   SpiceDouble    * epoch,\n                   SpiceDouble    * elems   )",
  "name": "getelm_c",
  "args": {
    "frstyr": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "frstyr",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lineln": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lineln",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "lines": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lines",
      "type": "void",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "epoch": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "epoch",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "elems": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "elems",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### getenv_
```js
{
  "signature": "void getenv_(fname, value, flen, vlen)",
  "name": "getenv_",
  "args": {
    "e": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "e",
      "type": "valu",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "vle",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### getfat_c
```js
{
  "signature": "void getfat_c ( ConstSpiceChar   * file,\n                   SpiceInt           arclen,\n                   SpiceInt           typlen,\n                   SpiceChar        * arch,\n                   SpiceChar        * type   )",
  "name": "getfat_c",
  "args": {
    "file": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "file",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "arclen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "arclen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "typlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "typlen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "arch": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "arch",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "type": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "type",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### getfov_c
```js
{
  "signature": "void getfov_c ( SpiceInt        instid,\n                   SpiceInt        room,\n                   SpiceInt        shapelen,\n                   SpiceInt        framelen,\n                   SpiceChar     * shape,\n                   SpiceChar     * frame,\n                   SpiceDouble     bsight [3],\n                   SpiceInt      * n,\n                   SpiceDouble     bounds [][3] )",
  "name": "getfov_c",
  "args": {
    "instid": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "instid",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "room": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "room",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "shapelen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "shapelen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "framelen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "framelen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "shape": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "shape",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "bsight": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "bsight",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "n": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    },
    "bounds": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "bounds",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### getmsg_c
```js
{
  "signature": "void getmsg_c ( ConstSpiceChar  * option,\n                   SpiceInt          lenout,\n                   SpiceChar       * msg     )",
  "name": "getmsg_c",
  "args": {
    "option": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "option",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "msg": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "msg",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfbail_c
```js
{
  "signature": "SpiceBoolean gfbail_c ()",
  "name": "gfbail_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### gfclrh_c
```js
{
  "signature": "void gfclrh_c ( void )",
  "name": "gfclrh_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfdist_c
```js
{
  "signature": "void gfdist_c ( ConstSpiceChar     * target,\n                   ConstSpiceChar     * abcorr,\n                   ConstSpiceChar     * obsrvr,\n                   ConstSpiceChar     * relate,\n                   SpiceDouble          refval,\n                   SpiceDouble          adjust,\n                   SpiceDouble          step,\n                   SpiceInt             nintvls,\n                   SpiceCell          * cnfine,\n                   SpiceCell          * result     )",
  "name": "gfdist_c",
  "args": {
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "relate": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "relate",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "refval": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "refval",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "adjust": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "adjust",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "nintvls": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nintvls",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "cnfine": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cnfine",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "result": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "result",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 9,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfevnt_c
```js
{
  "signature": "void gfevnt_c ( void             ( * udstep )",
  "name": "gfevnt_c",
  "args": {
    "d": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "d",
      "type": "voi",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gffove_c
```js
{
  "signature": "void gffove_c ( ConstSpiceChar     * inst,\n                   ConstSpiceChar     * tshape,\n                   ConstSpiceDouble     raydir [3],\n                   ConstSpiceChar     * target,\n                   ConstSpiceChar     * tframe,\n                   ConstSpiceChar     * abcorr,\n                   ConstSpiceChar     * obsrvr,\n                   SpiceDouble          tol,\n                   void             ( * udstep )",
  "name": "gffove_c",
  "args": {
    "inst": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "inst",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "tshape": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "tshape",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "raydir": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "raydir",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "tframe": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "tframe",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "tol": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "tol",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "d": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "d",
      "type": "voi",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfinth_c
```js
{
  "signature": "void gfinth_c ( int sigcode )",
  "name": "gfinth_c",
  "args": {
    "sigcode": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sigcode",
      "type": "int",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfocce_c
```js
{
  "signature": "void gfocce_c ( ConstSpiceChar     * occtyp,\n                   ConstSpiceChar     * front,\n                   ConstSpiceChar     * fshape,\n                   ConstSpiceChar     * fframe,\n                   ConstSpiceChar     * back,\n                   ConstSpiceChar     * bshape,\n                   ConstSpiceChar     * bframe,\n                   ConstSpiceChar     * abcorr,\n                   ConstSpiceChar     * obsrvr,\n                   SpiceDouble          tol,\n\n                   void             ( * udstep )",
  "name": "gfocce_c",
  "args": {
    "occtyp": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "occtyp",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "front": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "front",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "fshape": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fshape",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "fframe": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fframe",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "back": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "back",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "bshape": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "bshape",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "bframe": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "bframe",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "tol": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "tol",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "d": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "d",
      "type": "voi",
      "arrayLength": 0,
      "index": 10,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfoclt_c
```js
{
  "signature": "void gfoclt_c ( ConstSpiceChar   * occtyp,\n                   ConstSpiceChar   * front,\n                   ConstSpiceChar   * fshape,\n                   ConstSpiceChar   * fframe,\n                   ConstSpiceChar   * back,\n                   ConstSpiceChar   * bshape,\n                   ConstSpiceChar   * bframe,\n                   ConstSpiceChar   * abcorr,\n                   ConstSpiceChar   * obsrvr,\n                   SpiceDouble        step,\n                   SpiceCell        * cnfine,\n                   SpiceCell        * result )",
  "name": "gfoclt_c",
  "args": {
    "occtyp": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "occtyp",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "front": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "front",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "fshape": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fshape",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "fframe": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fframe",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "back": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "back",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "bshape": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "bshape",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "bframe": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "bframe",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "cnfine": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cnfine",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "result": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "result",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 11,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfposc_c
```js
{
  "signature": "void gfposc_c ( ConstSpiceChar     * target,\n                   ConstSpiceChar     * frame,\n                   ConstSpiceChar     * abcorr,\n                   ConstSpiceChar     * obsrvr,\n                   ConstSpiceChar     * crdsys,\n                   ConstSpiceChar     * coord,\n                   ConstSpiceChar     * relate,\n                   SpiceDouble          refval,\n                   SpiceDouble          adjust,\n                   SpiceDouble          step,\n                   SpiceInt             nintvls,\n                   SpiceCell          * cnfine,\n                   SpiceCell          * result  )",
  "name": "gfposc_c",
  "args": {
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "crdsys": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "crdsys",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "coord": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "coord",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "relate": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "relate",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "refval": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "refval",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "adjust": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "adjust",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "nintvls": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nintvls",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "cnfine": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cnfine",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    },
    "result": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "result",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 12,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfrefn_c
```js
{
  "signature": "void gfrefn_c ( SpiceDouble     t1,\n                   SpiceDouble     t2,\n                   SpiceBoolean    s1,\n                   SpiceBoolean    s2,\n                   SpiceDouble   * t  )",
  "name": "gfrefn_c",
  "args": {
    "t1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "t1",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "t2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "t2",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "s1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "s1",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "s2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "s2",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "t": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "t",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfrepf_c
```js
{
  "signature": "void gfrepf_c ( void )",
  "name": "gfrepf_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfrepi_c
```js
{
  "signature": "void gfrepi_c ( SpiceCell        * window,\n                   ConstSpiceChar   * begmss,\n                   ConstSpiceChar   * endmss  )",
  "name": "gfrepi_c",
  "args": {
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "begmss": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "begmss",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "endmss": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "endmss",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfrepu_c
```js
{
  "signature": "void gfrepu_c ( SpiceDouble ivbeg,\n                   SpiceDouble ivend,\n                   SpiceDouble time  )",
  "name": "gfrepu_c",
  "args": {
    "ivbeg": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ivbeg",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ivend": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ivend",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "time": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "time",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfrfov_c
```js
{
  "signature": "void gfrfov_c ( ConstSpiceChar     * inst,\n                   ConstSpiceDouble     raydir [3],\n                   ConstSpiceChar     * rframe,\n                   ConstSpiceChar     * abcorr,\n                   ConstSpiceChar     * obsrvr,\n                   SpiceDouble          step,\n                   SpiceCell          * cnfine,\n                   SpiceCell          * result  )",
  "name": "gfrfov_c",
  "args": {
    "inst": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "inst",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "raydir": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "raydir",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "rframe": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "rframe",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "cnfine": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cnfine",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "result": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "result",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfrr_c
```js
{
  "signature": "void gfrr_c ( ConstSpiceChar     * target,\n                 ConstSpiceChar     * abcorr,\n                 ConstSpiceChar     * obsrvr,\n                 ConstSpiceChar     * relate,\n                 SpiceDouble          refval,\n                 SpiceDouble          adjust,\n                 SpiceDouble          step,\n                 SpiceInt             nintvls,\n                 SpiceCell          * cnfine,\n                 SpiceCell          * result  )",
  "name": "gfrr_c",
  "args": {
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "relate": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "relate",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "refval": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "refval",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "adjust": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "adjust",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "nintvls": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nintvls",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "cnfine": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cnfine",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "result": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "result",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 9,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfsep_c
```js
{
  "signature": "void gfsep_c (  ConstSpiceChar     * targ1,\n                   ConstSpiceChar     * shape1,\n                   ConstSpiceChar     * frame1,\n                   ConstSpiceChar     * targ2,\n                   ConstSpiceChar     * shape2,\n                   ConstSpiceChar     * frame2,\n                   ConstSpiceChar     * abcorr,\n                   ConstSpiceChar     * obsrvr,\n                   ConstSpiceChar     * relate,\n                   SpiceDouble          refval,\n                   SpiceDouble          adjust,\n                   SpiceDouble          step,\n                   SpiceInt             nintvls,\n                   SpiceCell          * cnfine,\n                   SpiceCell          * result  )",
  "name": "gfsep_c",
  "args": {
    "targ1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "targ1",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "shape1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "shape1",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "frame1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame1",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "targ2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "targ2",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "shape2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "shape2",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "frame2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame2",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "relate": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "relate",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "refval": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "refval",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "adjust": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "adjust",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    },
    "nintvls": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nintvls",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 12,
      "isInput": true
    },
    "cnfine": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cnfine",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 13,
      "isInput": true
    },
    "result": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "result",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 14,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfsntc_c
```js
{
  "signature": "void gfsntc_c ( ConstSpiceChar     * target,\n                   ConstSpiceChar     * fixref,\n                   ConstSpiceChar     * method,\n                   ConstSpiceChar     * abcorr,\n                   ConstSpiceChar     * obsrvr,\n                   ConstSpiceChar     * dref, \n                   ConstSpiceDouble     dvec   [3],\n                   ConstSpiceChar     * crdsys,\n                   ConstSpiceChar     * coord,\n                   ConstSpiceChar     * relate,\n                   SpiceDouble          refval,\n                   SpiceDouble          adjust,\n                   SpiceDouble          step,\n                   SpiceInt             nintvls,\n                   SpiceCell          * cnfine,\n                   SpiceCell          * result  )",
  "name": "gfsntc_c",
  "args": {
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "fixref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fixref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "method": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "method",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "dref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "dvec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "dvec",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "crdsys": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "crdsys",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "coord": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "coord",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "relate": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "relate",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "refval": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "refval",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "adjust": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "adjust",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    },
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 12,
      "isInput": true
    },
    "nintvls": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nintvls",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 13,
      "isInput": true
    },
    "cnfine": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cnfine",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 14,
      "isInput": true
    },
    "result": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "result",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 15,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfsstp_c
```js
{
  "signature": "void gfsstp_c ( SpiceDouble  step )",
  "name": "gfsstp_c",
  "args": {
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfstep_c
```js
{
  "signature": "void gfstep_c ( SpiceDouble    time,\n                   SpiceDouble  * step )",
  "name": "gfstep_c",
  "args": {
    "time": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "time",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "step": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfsubc_c
```js
{
  "signature": "void gfsubc_c ( ConstSpiceChar     * target,\n                   ConstSpiceChar     * fixref,\n                   ConstSpiceChar     * method,\n                   ConstSpiceChar     * abcorr,\n                   ConstSpiceChar     * obsrvr,\n                   ConstSpiceChar     * crdsys,\n                   ConstSpiceChar     * coord,\n                   ConstSpiceChar     * relate,\n                   SpiceDouble          refval,\n                   SpiceDouble          adjust,\n                   SpiceDouble          step,\n                   SpiceInt             nintvls,\n                   SpiceCell          * cnfine,\n                   SpiceCell          * result  )",
  "name": "gfsubc_c",
  "args": {
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "fixref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fixref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "method": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "method",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "crdsys": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "crdsys",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "coord": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "coord",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "relate": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "relate",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "refval": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "refval",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "adjust": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "adjust",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "nintvls": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nintvls",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    },
    "cnfine": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cnfine",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 12,
      "isInput": true
    },
    "result": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "result",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 13,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gftfov_c
```js
{
  "signature": "void gftfov_c ( ConstSpiceChar     * inst,\n                   ConstSpiceChar     * target,\n                   ConstSpiceChar     * tshape,\n                   ConstSpiceChar     * tframe,\n                   ConstSpiceChar     * abcorr,\n                   ConstSpiceChar     * obsrvr,\n                   SpiceDouble          step,\n                   SpiceCell          * cnfine,\n                   SpiceCell          * result  )",
  "name": "gftfov_c",
  "args": {
    "inst": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "inst",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "tshape": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "tshape",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "tframe": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "tframe",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "cnfine": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cnfine",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "result": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "result",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gfuds_c
```js
{
  "signature": "void gfuds_c (  void             ( * udfunc )",
  "name": "gfuds_c",
  "args": {
    "d": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "d",
      "type": "voi",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### gipool_c
```js
{
  "signature": "void gipool_c ( ConstSpiceChar * name,\n                   SpiceInt         start,\n                   SpiceInt         room,\n                   SpiceInt       * n,\n                   SpiceInt       * ivals,\n                   SpiceBoolean   * found )",
  "name": "gipool_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "start": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "start",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "room": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "room",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "n": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "ivals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ivals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### halfpi_c
```js
{
  "signature": "SpiceDouble halfpi_c ( void )",
  "name": "halfpi_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### hx2dp_c
```js
{
  "signature": "void hx2dp_c ( ConstSpiceChar  * string,\n                  SpiceInt          lenout,\n                  SpiceDouble     * number,\n                  SpiceBoolean    * error,\n                  SpiceChar       * errmsg  )",
  "name": "hx2dp_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "number": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "number",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "error": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "error",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "errmsg": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "errmsg",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ident_c
```js
{
  "signature": "void ident_c ( SpiceDouble    matrix[3][3] )",
  "name": "ident_c",
  "args": {
    "matrix": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "matrix",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### illum_c
```js
{
  "signature": "void illum_c  ( ConstSpiceChar          * target,\n                   SpiceDouble               et,\n                   ConstSpiceChar          * abcorr, \n                   ConstSpiceChar          * obsrvr, \n                   ConstSpiceDouble          spoint [3],\n                   SpiceDouble             * phase,\n                   SpiceDouble             * solar,\n                   SpiceDouble             * emissn     )",
  "name": "illum_c",
  "args": {
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "spoint": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "spoint",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "phase": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "phase",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "solar": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "solar",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "emissn": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "emissn",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ilumin_c
```js
{
  "signature": "void ilumin_c ( ConstSpiceChar          * method,\n                   ConstSpiceChar          * target,\n                   SpiceDouble               et,\n                   ConstSpiceChar          * fixref, \n                   ConstSpiceChar          * abcorr, \n                   ConstSpiceChar          * obsrvr, \n                   ConstSpiceDouble          spoint [3],\n                   SpiceDouble             * trgepc,\n                   SpiceDouble               srfvec [3],\n                   SpiceDouble             * phase,\n                   SpiceDouble             * solar,\n                   SpiceDouble             * emissn     )",
  "name": "ilumin_c",
  "args": {
    "method": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "method",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "fixref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fixref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "spoint": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "spoint",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "trgepc": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "trgepc",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    },
    "srfvec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "srfvec",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    },
    "phase": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "phase",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": false
    },
    "solar": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "solar",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": false
    },
    "emissn": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "emissn",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 11,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### inedpl_c
```js
{
  "signature": "void inedpl_c ( SpiceDouble           a,\n                   SpiceDouble           b,\n                   SpiceDouble           c,\n                   ConstSpicePlane     * plane,\n                   SpiceEllipse        * ellipse,\n                   SpiceBoolean        * found    )",
  "name": "inedpl_c",
  "args": {
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "plane": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "plane",
      "type": "ConstSpicePlane",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "ellipse": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ellipse",
      "type": "SpiceEllipse",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### inelpl_c
```js
{
  "signature": "void inelpl_c ( ConstSpiceEllipse  * ellips,\n                   ConstSpicePlane    * plane,\n                   SpiceInt           * nxpts,\n                   SpiceDouble          xpt1[3],\n                   SpiceDouble          xpt2[3] )",
  "name": "inelpl_c",
  "args": {
    "ellips": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ellips",
      "type": "ConstSpiceEllipse",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "plane": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "plane",
      "type": "ConstSpicePlane",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "nxpts": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nxpts",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "xpt1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "xpt1",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    },
    "xpt2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "xpt2",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### inrypl_c
```js
{
  "signature": "void inrypl_c ( ConstSpiceDouble     vertex [3],\n                   ConstSpiceDouble     dir    [3],\n                   ConstSpicePlane    * plane,\n                   SpiceInt           * nxpts,\n                   SpiceDouble          xpt    [3] )",
  "name": "inrypl_c",
  "args": {
    "vertex": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vertex",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "dir": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "dir",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "plane": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "plane",
      "type": "ConstSpicePlane",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "nxpts": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nxpts",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "xpt": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "xpt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### insrtc_c
```js
{
  "signature": "void insrtc_c ( ConstSpiceChar  * item,\n                   SpiceCell       * set   )",
  "name": "insrtc_c",
  "args": {
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### insrtd_c
```js
{
  "signature": "void insrtd_c ( SpiceDouble     item,\n                   SpiceCell     * set  )",
  "name": "insrtd_c",
  "args": {
    "item": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "item",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### insrti_c
```js
{
  "signature": "void insrti_c ( SpiceInt        item,\n                   SpiceCell     * set  )",
  "name": "insrti_c",
  "args": {
    "item": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "item",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### inter_c
```js
{
  "signature": "void inter_c (  SpiceCell   * a,\n                   SpiceCell   * b,\n                   SpiceCell   * c  )",
  "name": "inter_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### intmax_
```js
{
  "signature": "SpiceInt intmax_ ()",
  "name": "intmax_",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### intmax_c
```js
{
  "signature": "SpiceInt intmax_c ()",
  "name": "intmax_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### intmin_
```js
{
  "signature": "SpiceInt intmin_ ()",
  "name": "intmin_",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### intmin_c
```js
{
  "signature": "SpiceInt intmin_c ()",
  "name": "intmin_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### invert_c
```js
{
  "signature": "void invert_c ( ConstSpiceDouble  m1  [3][3],\n                   SpiceDouble       mout[3][3] )",
  "name": "invert_c",
  "args": {
    "m1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "mout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "mout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### invort_c
```js
{
  "signature": "void invort_c ( ConstSpiceDouble   m  [3][3],\n                   SpiceDouble        mit[3][3] )",
  "name": "invort_c",
  "args": {
    "m": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "mit": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "mit",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### isordv_c
```js
{
  "signature": "SpiceBoolean isordv_c ( ConstSpiceInt  * array,\n                           SpiceInt         n      )",
  "name": "isordv_c",
  "args": {
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### isrchc_c
```js
{
  "signature": "SpiceInt isrchc_c ( ConstSpiceChar  * value,\n                       SpiceInt          ndim,   \n                       SpiceInt          lenvals,\n                       const void      * array   )",
  "name": "isrchc_c",
  "args": {
    "value": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "value",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "void",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### isrchd_c
```js
{
  "signature": "SpiceInt isrchd_c ( SpiceDouble         value,\n                       SpiceInt            ndim,\n                       ConstSpiceDouble  * array  )",
  "name": "isrchd_c",
  "args": {
    "value": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "value",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### isrchi_c
```js
{
  "signature": "SpiceInt isrchi_c ( SpiceInt         value,\n                       SpiceInt         ndim,\n                       ConstSpiceInt  * array  )",
  "name": "isrchi_c",
  "args": {
    "value": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "value",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### isrot_c
```js
{
  "signature": "SpiceBoolean isrot_c ( ConstSpiceDouble    m   [3][3],\n                          SpiceDouble         ntol,\n                          SpiceDouble         dtol       )",
  "name": "isrot_c",
  "args": {
    "m": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ntol": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ntol",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "dtol": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "dtol",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### iswhsp_c
```js
{
  "signature": "SpiceBoolean iswhsp_c ( ConstSpiceChar * string )",
  "name": "iswhsp_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### j1900_c
```js
{
  "signature": "SpiceDouble j1900_c ( void )",
  "name": "j1900_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### j1950_c
```js
{
  "signature": "SpiceDouble j1950_c ( void )",
  "name": "j1950_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### j2000_c
```js
{
  "signature": "SpiceDouble j2000_c ( void )",
  "name": "j2000_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### j2100_c
```js
{
  "signature": "SpiceDouble j2100_c ( void )",
  "name": "j2100_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### jyear_c
```js
{
  "signature": "SpiceDouble jyear_c ( void )",
  "name": "jyear_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### kclear_c
```js
{
  "signature": "void kclear_c ( void )",
  "name": "kclear_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### kdata_c
```js
{
  "signature": "void kdata_c ( SpiceInt          which,\n                  ConstSpiceChar  * kind,\n                  SpiceInt          fillen,\n                  SpiceInt          typlen,\n                  SpiceInt          srclen,\n                  SpiceChar       * file,\n                  SpiceChar       * filtyp,\n                  SpiceChar       * source,\n                  SpiceInt        * handle,\n                  SpiceBoolean    * found  )",
  "name": "kdata_c",
  "args": {
    "which": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "which",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "kind": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "kind",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "fillen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "fillen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "typlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "typlen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "srclen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "srclen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "file": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "file",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "filtyp": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "filtyp",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "source": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "source",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 9,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### kinfo_c
```js
{
  "signature": "void kinfo_c ( ConstSpiceChar  * file,\n                  SpiceInt          typlen,\n                  SpiceInt          srclen,\n                  SpiceChar       * filtyp,\n                  SpiceChar       * source,\n                  SpiceInt        * handle,\n                  SpiceBoolean    * found  )",
  "name": "kinfo_c",
  "args": {
    "file": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "file",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "typlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "typlen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "srclen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "srclen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "filtyp": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "filtyp",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "source": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "source",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ktotal_c
```js
{
  "signature": "void ktotal_c ( ConstSpiceChar   * kind,\n                   SpiceInt         * count )",
  "name": "ktotal_c",
  "args": {
    "kind": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "kind",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "count": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "count",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### kxtrct_c
```js
{
  "signature": "void kxtrct_c ( ConstSpiceChar       * keywd,\n                   SpiceInt               termlen,\n                   const void           * terms,\n                   SpiceInt               nterms,\n                   SpiceInt               stringlen,\n                   SpiceInt               substrlen,\n                   SpiceChar            * string,\n                   SpiceBoolean         * found,\n                   SpiceChar            * substr     )",
  "name": "kxtrct_c",
  "args": {
    "keywd": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "keywd",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "termlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "termlen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "terms": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "terms",
      "type": "void",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "nterms": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nterms",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "stringlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "stringlen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "substrlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "substrlen",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    },
    "substr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "substr",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### lastnb_c
```js
{
  "signature": "SpiceInt lastnb_c ( ConstSpiceChar * string )",
  "name": "lastnb_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### latcyl_c
```js
{
  "signature": "void latcyl_c ( SpiceDouble    radius,\n                   SpiceDouble    lon,\n                   SpiceDouble    lat,\n                   SpiceDouble *  r,\n                   SpiceDouble *  lonc,\n                   SpiceDouble *  z )",
  "name": "latcyl_c",
  "args": {
    "radius": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "radius",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "r": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "lonc": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lonc",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "z": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### latrec_c
```js
{
  "signature": "void latrec_c ( SpiceDouble    radius,\n                   SpiceDouble    longitude,\n                   SpiceDouble    latitude,\n                   SpiceDouble    rectan[3] )",
  "name": "latrec_c",
  "args": {
    "radius": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "radius",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "longitude": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "longitude",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "latitude": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "latitude",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### latsph_c
```js
{
  "signature": "void latsph_c ( SpiceDouble    radius,\n                   SpiceDouble    lon,\n                   SpiceDouble    lat,\n                   SpiceDouble *  rho,\n                   SpiceDouble *  colat,\n                   SpiceDouble *  lons )",
  "name": "latsph_c",
  "args": {
    "radius": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "radius",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "rho": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "rho",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "colat": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "colat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "lons": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lons",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### lcase_c
```js
{
  "signature": "void lcase_c ( SpiceChar       * in,\n                  SpiceInt          lenout, \n                  SpiceChar       * out    )",
  "name": "lcase_c",
  "args": {
    "in": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "in",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "out": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "out",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ldpool_c
```js
{
  "signature": "void ldpool_c ( ConstSpiceChar * filename )",
  "name": "ldpool_c",
  "args": {
    "filename": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "filename",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### lmpool_c
```js
{
  "signature": "void lmpool_c ( const void  * cvals,\n                   SpiceInt      lenvals,\n                   SpiceInt      n       )",
  "name": "lmpool_c",
  "args": {
    "cvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cvals",
      "type": "void",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### lparss_c
```js
{
  "signature": "void lparss_c ( ConstSpiceChar   * list,\n                   ConstSpiceChar   * delims,\n                   SpiceCell        * set     )",
  "name": "lparss_c",
  "args": {
    "list": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "list",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "delims": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "delims",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### lspcn_c
```js
{
  "signature": "SpiceDouble lspcn_c ( ConstSpiceChar   * body,\n                         SpiceDouble        et,\n                         ConstSpiceChar   * abcorr )",
  "name": "lspcn_c",
  "args": {
    "body": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "body",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### lstlec_c
```js
{
  "signature": "SpiceInt lstlec_c ( ConstSpiceChar  * string,\n                       SpiceInt          n,   \n                       SpiceInt          lenvals,\n                       const void      * array   )",
  "name": "lstlec_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "void",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### lstled_c
```js
{
  "signature": "SpiceInt lstled_c ( SpiceDouble         x,\n                       SpiceInt            n,\n                       ConstSpiceDouble  * array )",
  "name": "lstled_c",
  "args": {
    "x": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### lstlei_c
```js
{
  "signature": "SpiceInt lstlei_c ( SpiceInt            x,\n                       SpiceInt            n,\n                       ConstSpiceInt     * array )",
  "name": "lstlei_c",
  "args": {
    "x": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### lstltc_c
```js
{
  "signature": "SpiceInt lstltc_c ( ConstSpiceChar  * string,\n                       SpiceInt          n,   \n                       SpiceInt          lenvals,\n                       const void      * array   )",
  "name": "lstltc_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "void",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### lstltd_c
```js
{
  "signature": "SpiceInt lstltd_c ( SpiceDouble         x,\n                       SpiceInt            n,\n                       ConstSpiceDouble  * array )",
  "name": "lstltd_c",
  "args": {
    "x": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### lstlti_c
```js
{
  "signature": "SpiceInt lstlti_c ( SpiceInt          x,\n                       SpiceInt          n,\n                       ConstSpiceInt   * array )",
  "name": "lstlti_c",
  "args": {
    "x": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### ltime_c
```js
{
  "signature": "void ltime_c ( SpiceDouble        etobs,\n                  SpiceInt           obs,\n                  ConstSpiceChar   * dir,\n                  SpiceInt           targ,\n                  SpiceDouble      * ettarg,\n                  SpiceDouble      * elapsd  )",
  "name": "ltime_c",
  "args": {
    "etobs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "etobs",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "obs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "obs",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "dir": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dir",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "targ": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "targ",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "ettarg": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ettarg",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "elapsd": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "elapsd",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### lx4dec_c
```js
{
  "signature": "void lx4dec_c ( ConstSpiceChar   * string,\n                   SpiceInt           first,\n                   SpiceInt         * last,\n                   SpiceInt         * nchar  )",
  "name": "lx4dec_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "last": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "nchar": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nchar",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### lx4num_c
```js
{
  "signature": "void lx4num_c ( ConstSpiceChar   * string,\n                   SpiceInt           first,\n                   SpiceInt         * last,\n                   SpiceInt         * nchar  )",
  "name": "lx4num_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "last": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "nchar": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nchar",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### lx4sgn_c
```js
{
  "signature": "void lx4sgn_c ( ConstSpiceChar   * string,\n                   SpiceInt           first,\n                   SpiceInt         * last,\n                   SpiceInt         * nchar  )",
  "name": "lx4sgn_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "last": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "nchar": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nchar",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### lx4uns_c
```js
{
  "signature": "void lx4uns_c ( ConstSpiceChar   * string,\n                   SpiceInt           first,\n                   SpiceInt         * last,\n                   SpiceInt         * nchar  )",
  "name": "lx4uns_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "last": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "nchar": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nchar",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### lxqstr_c
```js
{
  "signature": "void lxqstr_c ( ConstSpiceChar    * string,\n                   SpiceChar           qchar,\n                   SpiceInt            first,\n                   SpiceInt          * last,\n                   SpiceInt          * nchar  )",
  "name": "lxqstr_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "qchar": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "qchar",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "last": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "nchar": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nchar",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### m2eul_c
```js
{
  "signature": "void  m2eul_c ( ConstSpiceDouble    r[3][3],\n                   SpiceInt            axis3,\n                   SpiceInt            axis2,\n                   SpiceInt            axis1,\n                   SpiceDouble       * angle3,\n                   SpiceDouble       * angle2,\n                   SpiceDouble       * angle1  )",
  "name": "m2eul_c",
  "args": {
    "r": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "r",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "axis3": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axis3",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "axis2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axis2",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "axis1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axis1",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "angle3": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "angle3",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "angle2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "angle2",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "angle1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "angle1",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void "
  }
}```
### m2q_c
```js
{
  "signature": "void m2q_c (  ConstSpiceDouble  r[3][3],\n                 SpiceDouble       q[4]     )",
  "name": "m2q_c",
  "args": {
    "r": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "r",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "q": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "q",
      "type": "SpiceDouble",
      "arrayLength": 4,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### matchi_c
```js
{
  "signature": "SpiceBoolean matchi_c ( ConstSpiceChar      * string,\n                           ConstSpiceChar      * templ,\n                           SpiceChar             wstr,\n                           SpiceChar             wchr   )",
  "name": "matchi_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "templ": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "templ",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "wstr": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "wstr",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "wchr": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "wchr",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### matchw_c
```js
{
  "signature": "SpiceBoolean matchw_c ( ConstSpiceChar      * string,\n                           ConstSpiceChar      * templ,\n                           SpiceChar             wstr,\n                           SpiceChar             wchr   )",
  "name": "matchw_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "templ": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "templ",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "wstr": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "wstr",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "wchr": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "wchr",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### mequ_c
```js
{
  "signature": "void mequ_c ( ConstSpiceDouble  m1  [3][3],\n                 SpiceDouble       mout[3][3] )",
  "name": "mequ_c",
  "args": {
    "m1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "mout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "mout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### moved_
```js
{
  "signature": "int moved_ ( doublereal   * arrfrm,\n                integer      * ndim,\n                doublereal   * arrto  )",
  "name": "moved_",
  "args": {
    "arrfrm": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "arrfrm",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ndim",
      "type": "integer",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "arrto": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "arrto",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "int"
  }
}```
### mtxm_c
```js
{
  "signature": "void mtxm_c ( ConstSpiceDouble    m1  [3][3],\n                 ConstSpiceDouble    m2  [3][3],\n                 SpiceDouble         mout[3][3] )",
  "name": "mtxm_c",
  "args": {
    "m1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "m2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "mout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "mout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### mtxv_c
```js
{
  "signature": "void mtxv_c ( ConstSpiceDouble     m1  [3][3],\n                 ConstSpiceDouble     vin [3],\n                 SpiceDouble          vout[3]   )",
  "name": "mtxv_c",
  "args": {
    "m1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "vin": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vin",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### mxmt_c
```js
{
  "signature": "void mxmt_c ( ConstSpiceDouble    m1  [3][3],\n                 ConstSpiceDouble    m2  [3][3],\n                 SpiceDouble         mout[3][3] )",
  "name": "mxmt_c",
  "args": {
    "m1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "m2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "mout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "mout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### mxm_c
```js
{
  "signature": "void mxm_c ( ConstSpiceDouble   m1  [3][3],\n                ConstSpiceDouble   m2  [3][3],\n                SpiceDouble        mout[3][3] )",
  "name": "mxm_c",
  "args": {
    "m1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "m2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "mout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "mout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### mxv_c
```js
{
  "signature": "void mxv_c ( ConstSpiceDouble    m1  [3][3],\n                ConstSpiceDouble    vin [3],\n                SpiceDouble         vout[3]    )",
  "name": "mxv_c",
  "args": {
    "m1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "m1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "vin": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vin",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### namfrm_c
```js
{
  "signature": "void namfrm_c ( ConstSpiceChar   * frname,\n                   SpiceInt         * frcode  )",
  "name": "namfrm_c",
  "args": {
    "frname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "frcode": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frcode",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ncposr_c
```js
{
  "signature": "SpiceInt ncposr_c ( ConstSpiceChar    * str,\n                       ConstSpiceChar    * chars,\n                       SpiceInt            start  )",
  "name": "ncposr_c",
  "args": {
    "str": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "str",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "chars": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "chars",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "start": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "start",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### ncpos_c
```js
{
  "signature": "SpiceInt ncpos_c ( ConstSpiceChar    * str,\n                      ConstSpiceChar    * chars,\n                      SpiceInt            start  )",
  "name": "ncpos_c",
  "args": {
    "str": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "str",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "chars": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "chars",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "start": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "start",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### nearpt_c
```js
{
  "signature": "void nearpt_c ( ConstSpiceDouble    positn[3],\n                   SpiceDouble         a,\n                   SpiceDouble         b,\n                   SpiceDouble         c,\n                   SpiceDouble         npoint[3],\n                   SpiceDouble       * alt        )",
  "name": "nearpt_c",
  "args": {
    "positn": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "positn",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "b": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "c": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "npoint": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "npoint",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 4,
      "isInput": false
    },
    "alt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "alt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### npedln_c
```js
{
  "signature": "void npedln_c ( SpiceDouble         a,\n                   SpiceDouble         b,\n                   SpiceDouble         c,\n                   ConstSpiceDouble    linept[3],\n                   ConstSpiceDouble    linedr[3],\n                   SpiceDouble         pnear[3],\n                   SpiceDouble       * dist      )",
  "name": "npedln_c",
  "args": {
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "linept": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "linept",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": true
    },
    "linedr": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "linedr",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 4,
      "isInput": true
    },
    "pnear": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "pnear",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 5,
      "isInput": false
    },
    "dist": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dist",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### npelpt_c
```js
{
  "signature": "void npelpt_c ( ConstSpiceDouble      point  [3],\n                   ConstSpiceEllipse   * ellips,\n                   SpiceDouble           pnear  [3],\n                   SpiceDouble         * dist       )",
  "name": "npelpt_c",
  "args": {
    "point": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "point",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ellips": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ellips",
      "type": "ConstSpiceEllipse",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "pnear": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "pnear",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "dist": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dist",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### nplnpt_c
```js
{
  "signature": "void nplnpt_c ( ConstSpiceDouble    linpt  [3],\n                   ConstSpiceDouble    lindir [3],\n                   ConstSpiceDouble    point  [3],\n                   SpiceDouble         pnear  [3],\n                   SpiceDouble       * dist       )",
  "name": "nplnpt_c",
  "args": {
    "linpt": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "linpt",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lindir": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lindir",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "point": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "point",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "pnear": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "pnear",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "dist": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dist",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### nvc2pl_c
```js
{
  "signature": "void nvc2pl_c ( ConstSpiceDouble     normal[3],\n                   SpiceDouble          constant,\n                   SpicePlane        *  plane     )",
  "name": "nvc2pl_c",
  "args": {
    "normal": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "normal",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "constant": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "constant",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "plane": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "plane",
      "type": "SpicePlane",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### nvp2pl_c
```js
{
  "signature": "void nvp2pl_c ( ConstSpiceDouble    normal[3],\n                   ConstSpiceDouble    point [3],\n                   SpicePlane        * plane     )",
  "name": "nvp2pl_c",
  "args": {
    "normal": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "normal",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "point": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "point",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "plane": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "plane",
      "type": "SpicePlane",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ordc_c
```js
{
  "signature": "SpiceInt ordc_c ( ConstSpiceChar  * item,\n                     SpiceCell       * set   )",
  "name": "ordc_c",
  "args": {
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### ordd_c
```js
{
  "signature": "SpiceInt ordd_c ( SpiceDouble     item,\n                     SpiceCell     * set  )",
  "name": "ordd_c",
  "args": {
    "item": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "item",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### orderc_c
```js
{
  "signature": "void orderc_c ( SpiceInt      lenvals,\n                   const void  * array,\n                   SpiceInt      ndim,\n                   SpiceInt    * iorder  )",
  "name": "orderc_c",
  "args": {
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "void",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "iorder": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "iorder",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### orderd_c
```js
{
  "signature": "void orderd_c ( ConstSpiceDouble  * array,\n                   SpiceInt            ndim,\n                   SpiceInt          * iorder )",
  "name": "orderd_c",
  "args": {
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "iorder": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "iorder",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### orderi_c
```js
{
  "signature": "void orderi_c ( ConstSpiceInt  * array,\n                   SpiceInt         ndim,\n                   SpiceInt       * iorder )",
  "name": "orderi_c",
  "args": {
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "iorder": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "iorder",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ordi_c
```js
{
  "signature": "SpiceInt ordi_c ( SpiceInt        item,\n                     SpiceCell     * set   )",
  "name": "ordi_c",
  "args": {
    "item": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "item",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### oscelt_c
```js
{
  "signature": "void oscelt_c ( ConstSpiceDouble   state[6],\n                   SpiceDouble        et,\n                   SpiceDouble        mu,\n                   SpiceDouble        elts[8]   )",
  "name": "oscelt_c",
  "args": {
    "state": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "state",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "mu": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "mu",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "elts": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "elts",
      "type": "SpiceDouble",
      "arrayLength": 8,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pckcov_c
```js
{
  "signature": "void pckcov_c ( ConstSpiceChar   * pck,\n                   SpiceInt           idcode,\n                   SpiceCell        * cover   )",
  "name": "pckcov_c",
  "args": {
    "pck": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "pck",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "idcode": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "idcode",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "cover": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cover",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pckfrm_c
```js
{
  "signature": "void pckfrm_c ( ConstSpiceChar  * pck,\n                   SpiceCell       * ids  )",
  "name": "pckfrm_c",
  "args": {
    "pck": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "pck",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ids": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ids",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pcklof_c
```js
{
  "signature": "void pcklof_c ( ConstSpiceChar * filename,\n                   SpiceInt       * handle    )",
  "name": "pcklof_c",
  "args": {
    "filename": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "filename",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pckuof_c
```js
{
  "signature": "void pckuof_c ( SpiceInt handle )",
  "name": "pckuof_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pcpool_c
```js
{
  "signature": "void pcpool_c ( ConstSpiceChar  * name,\n                   SpiceInt          n,\n                   SpiceInt          lenvals,\n                   const void      * cvals    )",
  "name": "pcpool_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "cvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cvals",
      "type": "void",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pdpool_c
```js
{
  "signature": "void pdpool_c ( ConstSpiceChar      * name,\n                   SpiceInt              n,\n                   ConstSpiceDouble    * dvals )",
  "name": "pdpool_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "dvals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dvals",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pgrrec_c
```js
{
  "signature": "void pgrrec_c ( ConstSpiceChar  * body,\n                   SpiceDouble       lon,\n                   SpiceDouble       lat,\n                   SpiceDouble       alt,\n                   SpiceDouble       re,\n                   SpiceDouble       f,\n                   SpiceDouble       rectan[3] )",
  "name": "pgrrec_c",
  "args": {
    "body": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "body",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "alt": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "alt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "re": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "re",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "f": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "f",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pipool_c
```js
{
  "signature": "void pipool_c ( ConstSpiceChar  * name,\n                   SpiceInt          n,\n                   ConstSpiceInt   * ivals )",
  "name": "pipool_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ivals": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ivals",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pi_c
```js
{
  "signature": "SpiceDouble pi_c ( void )",
  "name": "pi_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### pjelpl_c
```js
{
  "signature": "void pjelpl_c ( ConstSpiceEllipse  * elin,\n                   ConstSpicePlane    * plane,\n                   SpiceEllipse       * elout  )",
  "name": "pjelpl_c",
  "args": {
    "elin": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "elin",
      "type": "ConstSpiceEllipse",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "plane": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "plane",
      "type": "ConstSpicePlane",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "elout": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "elout",
      "type": "SpiceEllipse",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pl2nvc_c
```js
{
  "signature": "void pl2nvc_c ( ConstSpicePlane   * plane,\n                   SpiceDouble         normal[3],\n                   SpiceDouble       * constant  )",
  "name": "pl2nvc_c",
  "args": {
    "plane": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "plane",
      "type": "ConstSpicePlane",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "normal": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "normal",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    },
    "constant": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "constant",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pl2nvp_c
```js
{
  "signature": "void pl2nvp_c ( ConstSpicePlane   * plane,\n                   SpiceDouble         normal[3],\n                   SpiceDouble         point [3]  )",
  "name": "pl2nvp_c",
  "args": {
    "plane": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "plane",
      "type": "ConstSpicePlane",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "normal": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "normal",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    },
    "point": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "point",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pl2psv_c
```js
{
  "signature": "void pl2psv_c ( ConstSpicePlane  * plane,\n                   SpiceDouble        point[3],\n                   SpiceDouble        span1[3],\n                   SpiceDouble        span2[3]  )",
  "name": "pl2psv_c",
  "args": {
    "plane": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "plane",
      "type": "ConstSpicePlane",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "point": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "point",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    },
    "span1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "span1",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    },
    "span2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "span2",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### posr_c
```js
{
  "signature": "SpiceInt posr_c ( ConstSpiceChar    * str,\n                     ConstSpiceChar    * substr,\n                     SpiceInt            start  )",
  "name": "posr_c",
  "args": {
    "str": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "str",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "substr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "substr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "start": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "start",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### pos_c
```js
{
  "signature": "SpiceInt pos_c ( ConstSpiceChar     * str,\n                     ConstSpiceChar    * substr,\n                     SpiceInt            start  )",
  "name": "pos_c",
  "args": {
    "str": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "str",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "substr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "substr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "start": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "start",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### prompt_c
```js
{
  "signature": "SpiceChar * prompt_c ( ConstSpiceChar * prmptStr,\n                          SpiceInt         lenout,\n                          SpiceChar      * buffer )",
  "name": "prompt_c",
  "args": {
    "prmptStr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "prmptStr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "buffer": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "buffer",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceChar "
  }
}```
### prop2b_c
```js
{
  "signature": "void prop2b_c ( SpiceDouble         gm,\n                   ConstSpiceDouble    pvinit[6],\n                   SpiceDouble         dt,\n                   SpiceDouble         pvprop[6] )",
  "name": "prop2b_c",
  "args": {
    "gm": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "gm",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "pvinit": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "pvinit",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 1,
      "isInput": true
    },
    "dt": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "dt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "pvprop": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "pvprop",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### prsdp_c
```js
{
  "signature": "void prsdp_c ( ConstSpiceChar     * string,\n                  SpiceDouble        * dpval  )",
  "name": "prsdp_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "dpval": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dpval",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### prsint_c
```js
{
  "signature": "void prsint_c ( ConstSpiceChar  * string, \n                   SpiceInt        * intval )",
  "name": "prsint_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "intval": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "intval",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### psv2pl_c
```js
{
  "signature": "void psv2pl_c ( ConstSpiceDouble    point[3],\n                   ConstSpiceDouble    span1[3],\n                   ConstSpiceDouble    span2[3],\n                   SpicePlane        * plane    )",
  "name": "psv2pl_c",
  "args": {
    "point": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "point",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "span1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "span1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "span2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "span2",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": true
    },
    "plane": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "plane",
      "type": "SpicePlane",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### putcml_c
```js
{
  "signature": "void putcml_c ( SpiceInt      argc,\n                   SpiceChar  ** argv )",
  "name": "putcml_c",
  "args": {
    "argc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "argc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceCha",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### pxform_c
```js
{
  "signature": "void pxform_c ( ConstSpiceChar   * from,\n                   ConstSpiceChar   * to,\n                   SpiceDouble        et,\n                   SpiceDouble        rotate[3][3] )",
  "name": "pxform_c",
  "args": {
    "from": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "from",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "to": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "to",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "rotate": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rotate",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### q2m_c
```js
{
  "signature": "void q2m_c ( ConstSpiceDouble  q[4], \n                SpiceDouble       r[3][3] )",
  "name": "q2m_c",
  "args": {
    "q": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "q",
      "type": "ConstSpiceDouble",
      "arrayLength": 4,
      "index": 0,
      "isInput": true
    },
    "r": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### qdq2av_c
```js
{
  "signature": "void qdq2av_c ( ConstSpiceDouble    q  [4],\n                   ConstSpiceDouble    dq [4],\n                   SpiceDouble         av [3]  )",
  "name": "qdq2av_c",
  "args": {
    "q": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "q",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "dq": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "dq",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "av": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "av",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### qxq_c
```js
{
  "signature": "void qxq_c ( ConstSpiceDouble    q1   [4],\n                ConstSpiceDouble    q2   [4],\n                SpiceDouble         qout [4]  )",
  "name": "qxq_c",
  "args": {
    "q1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "q1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "q2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "q2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "qout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "qout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### radrec_c
```js
{
  "signature": "void radrec_c ( SpiceDouble range, \n                   SpiceDouble ra, \n                   SpiceDouble dec, \n                   SpiceDouble rectan[3] )",
  "name": "radrec_c",
  "args": {
    "range": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "range",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ra": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ra",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "dec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "dec",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### rav2xf_c
```js
{
  "signature": "void rav2xf_c ( ConstSpiceDouble    rot   [3][3],\n                   ConstSpiceDouble    av    [3],\n                   SpiceDouble         xform [6][6]  )",
  "name": "rav2xf_c",
  "args": {
    "rot": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "rot",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "av": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "av",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "xform": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "xform",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### raxisa_c
```js
{
  "signature": "void raxisa_c ( ConstSpiceDouble     matrix[3][3],\n                   SpiceDouble          axis  [3],\n                   SpiceDouble        * angle       )",
  "name": "raxisa_c",
  "args": {
    "matrix": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "matrix",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "axis": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axis",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "angle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "angle",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### rdtext_c
```js
{
  "signature": "void rdtext_c ( ConstSpiceChar * file,\n                   SpiceInt         lenout,\n                   SpiceChar      * line,\n                   SpiceBoolean   * eof    )",
  "name": "rdtext_c",
  "args": {
    "file": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "file",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "line": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "line",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "eof": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "eof",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### reccyl_c
```js
{
  "signature": "void reccyl_c ( ConstSpiceDouble     rectan[3], \n                   SpiceDouble        * r, \n                   SpiceDouble        * lon, \n                   SpiceDouble        * z         )",
  "name": "reccyl_c",
  "args": {
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "r": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "lon": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "z": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### recgeo_c
```js
{
  "signature": "void recgeo_c ( ConstSpiceDouble     rectan[3], \n                   SpiceDouble          re, \n                   SpiceDouble          f, \n                   SpiceDouble        * lon,\n                   SpiceDouble        * lat,\n                   SpiceDouble        * alt        )",
  "name": "recgeo_c",
  "args": {
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "re": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "re",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "f": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "f",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "lon": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "lat": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "alt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "alt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### reclat_c
```js
{
  "signature": "void reclat_c ( ConstSpiceDouble    rectan[3],\n                   SpiceDouble       * radius,\n                   SpiceDouble       * longitude,\n                   SpiceDouble       * latitude  )",
  "name": "reclat_c",
  "args": {
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "radius": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "radius",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "longitude": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "longitude",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "latitude": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "latitude",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### recpgr_c
```js
{
  "signature": "void recpgr_c ( ConstSpiceChar   * body,\n                   SpiceDouble        rectan[3],\n                   SpiceDouble        re,\n                   SpiceDouble        f,\n                   SpiceDouble      * lon,\n                   SpiceDouble      * lat,\n                   SpiceDouble      * alt       )",
  "name": "recpgr_c",
  "args": {
    "body": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "body",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "re": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "re",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "f": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "f",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "lon": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "lat": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "alt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "alt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### recrad_c
```js
{
  "signature": "void recrad_c ( ConstSpiceDouble    rectan[3],\n                   SpiceDouble       * range,\n                   SpiceDouble       * ra,\n                   SpiceDouble       * dec      )",
  "name": "recrad_c",
  "args": {
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "range": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "range",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "ra": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ra",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "dec": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dec",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### recsph_c
```js
{
  "signature": "void recsph_c ( ConstSpiceDouble     rectan[3], \n                   SpiceDouble        * r, \n                   SpiceDouble        * colat,\n                   SpiceDouble        * lon      )",
  "name": "recsph_c",
  "args": {
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "r": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "colat": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "colat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "lon": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### removc_c
```js
{
  "signature": "void removc_c ( ConstSpiceChar  * item,\n                   SpiceCell       * set   )",
  "name": "removc_c",
  "args": {
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### removd_c
```js
{
  "signature": "void removd_c ( SpiceDouble     item,\n                   SpiceCell     * set  )",
  "name": "removd_c",
  "args": {
    "item": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "item",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### removi_c
```js
{
  "signature": "void removi_c ( SpiceInt        item,\n                   SpiceCell     * set  )",
  "name": "removi_c",
  "args": {
    "item": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "item",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### reordc_c
```js
{
  "signature": "void reordc_c ( ConstSpiceInt  * iorder,\n                   SpiceInt         ndim,\n                   SpiceInt         lenvals,\n                   void           * array    )",
  "name": "reordc_c",
  "args": {
    "iorder": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "iorder",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "void",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### reordd_c
```js
{
  "signature": "void reordd_c ( ConstSpiceInt      * iorder,\n                   SpiceInt             ndim,\n                   SpiceDouble        * array  )",
  "name": "reordd_c",
  "args": {
    "iorder": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "iorder",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### reordi_c
```js
{
  "signature": "void reordi_c ( ConstSpiceInt   * iorder,\n                   SpiceInt          ndim,      \n                   SpiceInt        * array )",
  "name": "reordi_c",
  "args": {
    "iorder": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "iorder",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### reordl_c
```js
{
  "signature": "void reordl_c ( ConstSpiceInt   * iorder,\n                   SpiceInt          ndim,      \n                   SpiceBoolean    * array )",
  "name": "reordl_c",
  "args": {
    "iorder": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "iorder",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### repmct_c
```js
{
  "signature": "void repmct_c ( ConstSpiceChar   * in,\n                   ConstSpiceChar   * marker,\n                   SpiceInt           value,\n                   SpiceChar          repcase,\n                   SpiceInt           lenout,\n                   SpiceChar        * out      )",
  "name": "repmct_c",
  "args": {
    "in": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "in",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "marker": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "marker",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "value": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "value",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "repcase": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "repcase",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "out": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "out",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### repmc_c
```js
{
  "signature": "void repmc_c ( ConstSpiceChar    * in,\n                  ConstSpiceChar    * marker,\n                  ConstSpiceChar    * value,\n                  SpiceInt            lenout,\n                  SpiceChar         * out    )",
  "name": "repmc_c",
  "args": {
    "in": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "in",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "marker": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "marker",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "value": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "value",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "out": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "out",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### repmd_c
```js
{
  "signature": "void repmd_c ( ConstSpiceChar     * in,\n                  ConstSpiceChar     * marker,\n                  SpiceDouble          value,\n                  SpiceInt             sigdig,\n                  SpiceInt             lenout,\n                  SpiceChar          * out     )",
  "name": "repmd_c",
  "args": {
    "in": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "in",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "marker": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "marker",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "value": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "value",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "sigdig": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sigdig",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "out": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "out",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### repmf_c
```js
{
  "signature": "void repmf_c ( ConstSpiceChar     * in,\n                  ConstSpiceChar     * marker,\n                  SpiceDouble          value,\n                  SpiceInt             sigdig,\n                  SpiceChar            format,\n                  SpiceInt             lenout,\n                  SpiceChar          * out )",
  "name": "repmf_c",
  "args": {
    "in": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "in",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "marker": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "marker",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "value": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "value",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "sigdig": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sigdig",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "format": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "format",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "out": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "out",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### repmi_c
```js
{
  "signature": "void repmi_c ( ConstSpiceChar     * in,\n                  ConstSpiceChar     * marker,\n                  SpiceInt             value,\n                  SpiceInt             lenout,\n                  SpiceChar          * out     )",
  "name": "repmi_c",
  "args": {
    "in": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "in",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "marker": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "marker",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "value": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "value",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "out": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "out",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### repmot_c
```js
{
  "signature": "void repmot_c ( ConstSpiceChar   * in,\n                   ConstSpiceChar   * marker,\n                   SpiceInt           value,\n                   SpiceChar          repcase,\n                   SpiceInt           lenout,\n                   SpiceChar        * out      )",
  "name": "repmot_c",
  "args": {
    "in": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "in",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "marker": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "marker",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "value": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "value",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "repcase": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "repcase",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "out": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "out",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### reset_c
```js
{
  "signature": "void reset_c ( void )",
  "name": "reset_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### return_c
```js
{
  "signature": "SpiceBoolean return_c ( void )",
  "name": "return_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### rotate_c
```js
{
  "signature": "void rotate_c ( SpiceDouble     angle, \n                   SpiceInt        iaxis, \n                   SpiceDouble     mout[3][3] )",
  "name": "rotate_c",
  "args": {
    "angle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "angle",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "iaxis": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "iaxis",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "mout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "mout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### rotmat_c
```js
{
  "signature": "void rotmat_c ( ConstSpiceDouble   m1[3][3], \n                   SpiceDouble        angle, \n                   SpiceInt           iaxis, \n                   SpiceDouble        mout[3][3] )",
  "name": "rotmat_c",
  "args": {
    "m1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "m1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "angle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "angle",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "iaxis": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "iaxis",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "mout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "mout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### rotvec_c
```js
{
  "signature": "void rotvec_c ( ConstSpiceDouble  v1    [3],\n                   SpiceDouble       angle, \n                   SpiceInt          iaxis, \n                   SpiceDouble       vout  [3] )",
  "name": "rotvec_c",
  "args": {
    "v1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "angle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "angle",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "iaxis": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "iaxis",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "vout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### rpd_c
```js
{
  "signature": "SpiceDouble rpd_c ( void )",
  "name": "rpd_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### rquad_c
```js
{
  "signature": "void rquad_c ( SpiceDouble  a,\n                  SpiceDouble  b,\n                  SpiceDouble  c,\n                  SpiceDouble  root1[2],\n                  SpiceDouble  root2[2] )",
  "name": "rquad_c",
  "args": {
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "root1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "root1",
      "type": "SpiceDouble",
      "arrayLength": 2,
      "index": 3,
      "isInput": false
    },
    "root2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "root2",
      "type": "SpiceDouble",
      "arrayLength": 2,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### saelgv_c
```js
{
  "signature": "void saelgv_c ( ConstSpiceDouble   vec1  [3],\n                   ConstSpiceDouble   vec2  [3],\n                   SpiceDouble        smajor[3],\n                   SpiceDouble        sminor[3]  )",
  "name": "saelgv_c",
  "args": {
    "vec1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vec1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "vec2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vec2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "smajor": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "smajor",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    },
    "sminor": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "sminor",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### scard_c
```js
{
  "signature": "void scard_c (  SpiceInt      card,   \n                   SpiceCell   * cell  )",
  "name": "scard_c",
  "args": {
    "card": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "card",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "cell": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cell",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### scdecd_c
```js
{
  "signature": "void scdecd_c ( SpiceInt       sc, \n                   SpiceDouble    sclkdp, \n                   SpiceInt       lenout,\n                   SpiceChar    * sclkch  )",
  "name": "scdecd_c",
  "args": {
    "sc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "sclkdp": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sclkdp",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "sclkch": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sclkch",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sce2c_c
```js
{
  "signature": "void sce2c_c ( SpiceInt       sc,\n                  SpiceDouble    et,\n                  SpiceDouble  * sclkdp )",
  "name": "sce2c_c",
  "args": {
    "sc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "sclkdp": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sclkdp",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sce2s_c
```js
{
  "signature": "void sce2s_c ( SpiceInt        sc, \n                  SpiceDouble     et, \n                  SpiceInt        lenout,\n                  SpiceChar     * sclkch  )",
  "name": "sce2s_c",
  "args": {
    "sc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "sclkch": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sclkch",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sce2t_c
```js
{
  "signature": "void sce2t_c ( SpiceInt       sc, \n                  SpiceDouble    et, \n                  SpiceDouble  * sclkdp )",
  "name": "sce2t_c",
  "args": {
    "sc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "sclkdp": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sclkdp",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### scencd_c
```js
{
  "signature": "void scencd_c ( SpiceInt           sc, \n                   ConstSpiceChar   * sclkch, \n                   SpiceDouble      * sclkdp )",
  "name": "scencd_c",
  "args": {
    "sc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "sclkch": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sclkch",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "sclkdp": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sclkdp",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### scfmt_c
```js
{
  "signature": "void scfmt_c ( SpiceInt      sc, \n                  SpiceDouble   ticks, \n                  SpiceInt      lenout,\n                  SpiceChar   * clkstr  )",
  "name": "scfmt_c",
  "args": {
    "sc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ticks": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ticks",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "clkstr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "clkstr",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### scpart_c
```js
{
  "signature": "void scpart_c ( SpiceInt        sc, \n                   SpiceInt      * nparts, \n                   SpiceDouble   * pstart, \n                   SpiceDouble   * pstop  )",
  "name": "scpart_c",
  "args": {
    "sc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "nparts": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nparts",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "pstart": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "pstart",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "pstop": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "pstop",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### scs2e_c
```js
{
  "signature": "void scs2e_c ( SpiceInt          sc, \n                  ConstSpiceChar  * sclkch, \n                  SpiceDouble     * et      )",
  "name": "scs2e_c",
  "args": {
    "sc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "sclkch": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sclkch",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sct2e_c
```js
{
  "signature": "void sct2e_c ( SpiceInt       sc, \n                  SpiceDouble    sclkdp, \n                  SpiceDouble  * et     )",
  "name": "sct2e_c",
  "args": {
    "sc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "sclkdp": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sclkdp",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sctiks_c
```js
{
  "signature": "void sctiks_c ( SpiceInt           sc, \n                   ConstSpiceChar   * clkstr, \n                   SpiceDouble      * ticks   )",
  "name": "sctiks_c",
  "args": {
    "sc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "clkstr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "clkstr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ticks": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ticks",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sdiff_c
```js
{
  "signature": "void sdiff_c (  SpiceCell   * a,\n                   SpiceCell   * b,\n                   SpiceCell   * c  )",
  "name": "sdiff_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### setmsg_c
```js
{
  "signature": "void setmsg_c ( ConstSpiceChar * message )",
  "name": "setmsg_c",
  "args": {
    "message": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "message",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### set_c
```js
{
  "signature": "SpiceBoolean set_c (  SpiceCell        * a,\n                         ConstSpiceChar   * op,\n                         SpiceCell        * b   )",
  "name": "set_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "op": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "op",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### shellc_c
```js
{
  "signature": "void shellc_c ( SpiceInt     ndim,\n                   SpiceInt     lenvals,\n                   void       * array   )",
  "name": "shellc_c",
  "args": {
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "void",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### shelld_c
```js
{
  "signature": "void shelld_c ( SpiceInt       ndim,\n                   SpiceDouble  * array )",
  "name": "shelld_c",
  "args": {
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### shelli_c
```js
{
  "signature": "void shelli_c ( SpiceInt     ndim,\n                   SpiceInt   * array )",
  "name": "shelli_c",
  "args": {
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sigerr_c
```js
{
  "signature": "void sigerr_c ( ConstSpiceChar * message )",
  "name": "sigerr_c",
  "args": {
    "message": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "message",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sincpt_c
```js
{
  "signature": "void sincpt_c ( ConstSpiceChar      * method,\n                   ConstSpiceChar      * target,\n                   SpiceDouble           et,\n                   ConstSpiceChar      * fixref,\n                   ConstSpiceChar      * abcorr,\n                   ConstSpiceChar      * obsrvr,\n                   ConstSpiceChar      * dref,\n                   ConstSpiceDouble      dvec   [3],\n                   SpiceDouble           spoint [3],\n                   SpiceDouble         * trgepc,\n                   SpiceDouble           srfvec [3],\n                   SpiceBoolean        * found       )",
  "name": "sincpt_c",
  "args": {
    "method": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "method",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "fixref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fixref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "dref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "dvec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "dvec",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "spoint": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "spoint",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    },
    "trgepc": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "trgepc",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": false
    },
    "srfvec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "srfvec",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 11,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### size_c
```js
{
  "signature": "SpiceInt size_c ( SpiceCell  * cell )",
  "name": "size_c",
  "args": {
    "cell": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cell",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### spd_c
```js
{
  "signature": "SpiceDouble spd_c ( void )",
  "name": "spd_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### sphcyl_c
```js
{
  "signature": "void sphcyl_c ( SpiceDouble     radius,\n                   SpiceDouble     colat,\n                   SpiceDouble     slon,\n                   SpiceDouble   * r,\n                   SpiceDouble   * lon,\n                   SpiceDouble   * z )",
  "name": "sphcyl_c",
  "args": {
    "radius": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "radius",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "colat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "colat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "slon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "slon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "r": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "lon": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "z": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sphlat_c
```js
{
  "signature": "void sphlat_c ( SpiceDouble     r, \n                   SpiceDouble     colat, \n                   SpiceDouble     lons,\n                   SpiceDouble   * radius,\n                   SpiceDouble   * lon, \n                   SpiceDouble   * lat )",
  "name": "sphlat_c",
  "args": {
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "colat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "colat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lons": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lons",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "radius": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "radius",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "lon": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "lat": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sphrec_c
```js
{
  "signature": "void sphrec_c ( SpiceDouble    r,\n                   SpiceDouble    colat, \n                   SpiceDouble    lon,\n                   SpiceDouble    rectan[3] )",
  "name": "sphrec_c",
  "args": {
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "colat": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "colat",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lon": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lon",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spk14a_c
```js
{
  "signature": "void spk14a_c ( SpiceInt           handle,\n                   SpiceInt           ncsets,\n                   ConstSpiceDouble   coeffs [],\n                   ConstSpiceDouble   epochs []  )",
  "name": "spk14a_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ncsets": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ncsets",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "coeffs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "coeffs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "epochs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epochs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spk14b_c
```js
{
  "signature": "void spk14b_c (  SpiceInt           handle,\n                    ConstSpiceChar   * segid,\n                    SpiceInt           body,\n                    SpiceInt           center,\n                    ConstSpiceChar   * frame,\n                    SpiceDouble        first,\n                    SpiceDouble        last,\n                    SpiceInt           chbdeg  )",
  "name": "spk14b_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "chbdeg": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "chbdeg",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spk14e_c
```js
{
  "signature": "void spk14e_c ( SpiceInt   handle )",
  "name": "spk14e_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkacs_c
```js
{
  "signature": "void spkacs_c ( SpiceInt           targ,\n                   SpiceDouble        et,\n                   ConstSpiceChar   * ref,\n                   ConstSpiceChar   * abcorr,\n                   SpiceInt           obs,\n                   SpiceDouble        starg[6],\n                   SpiceDouble      * lt,\n                   SpiceDouble      * dlt      )",
  "name": "spkacs_c",
  "args": {
    "targ": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "targ",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "obs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "obs",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "starg": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "starg",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 5,
      "isInput": false
    },
    "lt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "dlt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dlt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkapo_c
```js
{
  "signature": "void spkapo_c ( SpiceInt               targ,\n                   SpiceDouble            et,\n                   ConstSpiceChar       * ref,\n                   ConstSpiceDouble       sobs[6],\n                   ConstSpiceChar       * abcorr,\n                   SpiceDouble            ptarg[3],\n                   SpiceDouble          * lt        )",
  "name": "spkapo_c",
  "args": {
    "targ": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "targ",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "sobs": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "sobs",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 3,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "ptarg": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "ptarg",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 5,
      "isInput": false
    },
    "lt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkapp_c
```js
{
  "signature": "void spkapp_c ( SpiceInt             targ,\n                   SpiceDouble          et,\n                   ConstSpiceChar     * ref,\n                   ConstSpiceDouble     sobs   [6],\n                   ConstSpiceChar     * abcorr,\n                   SpiceDouble          starg  [6],\n                   SpiceDouble        * lt         )",
  "name": "spkapp_c",
  "args": {
    "targ": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "targ",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "sobs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "sobs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "starg": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "starg",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "lt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkaps_c
```js
{
  "signature": "void spkaps_c ( SpiceInt           targ,\n                   SpiceDouble        et,\n                   ConstSpiceChar   * ref,\n                   ConstSpiceChar   * abcorr,\n                   ConstSpiceDouble   stobs [6],\n                   ConstSpiceDouble   accobs[6],\n                   SpiceDouble        starg [6],\n                   SpiceDouble      * lt,\n                   SpiceDouble      * dlt      )",
  "name": "spkaps_c",
  "args": {
    "targ": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "targ",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "stobs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "stobs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "accobs": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "accobs",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 5,
      "isInput": true
    },
    "starg": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "starg",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "lt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    },
    "dlt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dlt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkcls_c
```js
{
  "signature": "void spkcls_c ( SpiceInt handle )",
  "name": "spkcls_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkcov_c
```js
{
  "signature": "void spkcov_c ( ConstSpiceChar  * spk,\n                   SpiceInt          idcode,\n                   SpiceCell       * cover   )",
  "name": "spkcov_c",
  "args": {
    "spk": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "spk",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "idcode": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "idcode",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "cover": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cover",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkezp_c
```js
{
  "signature": "void spkezp_c ( SpiceInt            targ,\n                   SpiceDouble         et,\n                   ConstSpiceChar    * ref,\n                   ConstSpiceChar    * abcorr,\n                   SpiceInt            obs,\n                   SpiceDouble         ptarg[3],\n                   SpiceDouble       * lt        )",
  "name": "spkezp_c",
  "args": {
    "targ": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "targ",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "obs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "obs",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "ptarg": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "ptarg",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 5,
      "isInput": false
    },
    "lt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkezr_c
```js
{
  "signature": "void spkezr_c ( ConstSpiceChar     *targ,\n                   SpiceDouble         et,\n                   ConstSpiceChar     *ref,\n                   ConstSpiceChar     *abcorr,\n                   ConstSpiceChar     *obs,\n                   SpiceDouble         starg[6],\n                   SpiceDouble        *lt        )",
  "name": "spkezr_c",
  "args": {
    "targ": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "targ",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "obs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obs",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "starg": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "starg",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 5,
      "isInput": false
    },
    "lt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkez_c
```js
{
  "signature": "void spkez_c ( SpiceInt            targ,\n                  SpiceDouble         et,\n                  ConstSpiceChar     *ref,\n                  ConstSpiceChar     *abcorr,\n                  SpiceInt            obs,\n                  SpiceDouble         starg[6],\n                  SpiceDouble        *lt        )",
  "name": "spkez_c",
  "args": {
    "targ": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "targ",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "obs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "obs",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "starg": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "starg",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 5,
      "isInput": false
    },
    "lt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkgeo_c
```js
{
  "signature": "void spkgeo_c ( SpiceInt          targ, \n                   SpiceDouble       et, \n                   ConstSpiceChar  * ref, \n                   SpiceInt          obs, \n                   SpiceDouble       state[6], \n                   SpiceDouble     * lt       )",
  "name": "spkgeo_c",
  "args": {
    "targ": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "targ",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "obs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "obs",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "state": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "state",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 4,
      "isInput": false
    },
    "lt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkgps_c
```js
{
  "signature": "void spkgps_c ( SpiceInt           targ,\n                   SpiceDouble        et,\n                   ConstSpiceChar   * ref,\n                   SpiceInt           obs,\n                   SpiceDouble        pos[3],\n                   SpiceDouble      * lt     )",
  "name": "spkgps_c",
  "args": {
    "targ": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "targ",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "obs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "obs",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "pos": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "pos",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 4,
      "isInput": false
    },
    "lt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spklef_c
```js
{
  "signature": "void spklef_c ( ConstSpiceChar * filename,\n                   SpiceInt       * handle    )",
  "name": "spklef_c",
  "args": {
    "filename": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "filename",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkltc_c
```js
{
  "signature": "void spkltc_c ( SpiceInt           targ,\n                   SpiceDouble        et,\n                   ConstSpiceChar   * ref,\n                   ConstSpiceChar   * abcorr,\n                   ConstSpiceDouble   stobs[6],\n                   SpiceDouble        starg[6],\n                   SpiceDouble      * lt,\n                   SpiceDouble      * dlt      )",
  "name": "spkltc_c",
  "args": {
    "targ": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "targ",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "stobs": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "stobs",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 4,
      "isInput": true
    },
    "starg": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "starg",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 5,
      "isInput": false
    },
    "lt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "dlt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dlt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkobj_c
```js
{
  "signature": "void spkobj_c ( ConstSpiceChar  * spk,\n                   SpiceCell       * ids )",
  "name": "spkobj_c",
  "args": {
    "spk": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "spk",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ids": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ids",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkopa_c
```js
{
  "signature": "void spkopa_c ( ConstSpiceChar * file,\n                   SpiceInt       * handle )",
  "name": "spkopa_c",
  "args": {
    "file": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "file",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkopn_c
```js
{
  "signature": "void spkopn_c ( ConstSpiceChar * name,\n                   ConstSpiceChar * ifname,\n                   SpiceInt         ncomch,\n                   SpiceInt       * handle  )",
  "name": "spkopn_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ifname": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ifname",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ncomch": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ncomch",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "handle": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkpds_c
```js
{
  "signature": "void spkpds_c ( SpiceInt           body,  \n                   SpiceInt           center,\n                   ConstSpiceChar   * frame,\n                   SpiceInt           type,\n                   SpiceDouble        first,\n                   SpiceDouble        last,\n                   SpiceDouble        descr[5] )",
  "name": "spkpds_c",
  "args": {
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "type": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "type",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "descr": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "descr",
      "type": "SpiceDouble",
      "arrayLength": 5,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkpos_c
```js
{
  "signature": "void spkpos_c ( ConstSpiceChar   * targ,\n                   SpiceDouble        et,\n                   ConstSpiceChar   * ref,\n                   ConstSpiceChar   * abcorr,\n                   ConstSpiceChar   * obs,\n                   SpiceDouble        ptarg[3],\n                   SpiceDouble      * lt        )",
  "name": "spkpos_c",
  "args": {
    "targ": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "targ",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "obs": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obs",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "ptarg": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "ptarg",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 5,
      "isInput": false
    },
    "lt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "lt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkssb_c
```js
{
  "signature": "void spkssb_c ( SpiceInt           targ,\n                   SpiceDouble        et,\n                   ConstSpiceChar   * ref,\n                   SpiceDouble        starg[6] )",
  "name": "spkssb_c",
  "args": {
    "targ": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "targ",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "starg": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "starg",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spksub_c
```js
{
  "signature": "void spksub_c ( SpiceInt            handle,\n                   SpiceDouble         descr[5],\n                   ConstSpiceChar    * ident,\n                   SpiceDouble         begin,\n                   SpiceDouble         end,\n                   SpiceInt            newh    )",
  "name": "spksub_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "descr": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "descr",
      "type": "SpiceDouble",
      "arrayLength": 5,
      "index": 1,
      "isInput": true
    },
    "ident": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ident",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "begin": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "begin",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "end": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "end",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "newh": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "newh",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkuds_c
```js
{
  "signature": "void spkuds_c ( ConstSpiceDouble     descr [5],\n                   SpiceInt           * body,\n                   SpiceInt           * center,\n                   SpiceInt           * frame,\n                   SpiceInt           * type,\n                   SpiceDouble        * first,\n                   SpiceDouble        * last,\n                   SpiceInt           * begin,\n                   SpiceInt           * end       )",
  "name": "spkuds_c",
  "args": {
    "descr": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "descr",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "center": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "type": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "type",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "first": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "last": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "begin": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "begin",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    },
    "end": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "end",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkuef_c
```js
{
  "signature": "void spkuef_c ( SpiceInt handle )",
  "name": "spkuef_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkw02_c
```js
{
  "signature": "void spkw02_c ( SpiceInt                handle,\n                   SpiceInt                body,\n                   SpiceInt                center,\n                   ConstSpiceChar        * frame,\n                   SpiceDouble             first,\n                   SpiceDouble             last,\n                   ConstSpiceChar        * segid,\n                   SpiceDouble             intlen,\n                   SpiceInt                n,\n                   SpiceInt                polydg,\n                   ConstSpiceDouble        cdata [],\n                   SpiceDouble             btime     )",
  "name": "spkw02_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "intlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "intlen",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "polydg": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "polydg",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "cdata": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "cdata",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "btime": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "btime",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkw03_c
```js
{
  "signature": "void spkw03_c ( SpiceInt                handle,\n                   SpiceInt                body,\n                   SpiceInt                center,\n                   ConstSpiceChar        * frame,\n                   SpiceDouble             first,\n                   SpiceDouble             last,\n                   ConstSpiceChar        * segid,\n                   SpiceDouble             intlen,\n                   SpiceInt                n,\n                   SpiceInt                polydg,\n                   ConstSpiceDouble        cdata [],\n                   SpiceDouble             btime     )",
  "name": "spkw03_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "intlen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "intlen",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "polydg": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "polydg",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "cdata": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "cdata",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "btime": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "btime",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkw05_c
```js
{
  "signature": "void spkw05_c ( SpiceInt                handle,\n                   SpiceInt                body,\n                   SpiceInt                center,\n                   ConstSpiceChar        * frame,\n                   SpiceDouble             first,\n                   SpiceDouble             last,\n                   ConstSpiceChar        * segid,\n                   SpiceDouble             gm,\n                   SpiceInt                n,\n                   ConstSpiceDouble        states [][6],\n                   ConstSpiceDouble        epochs []      )",
  "name": "spkw05_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "gm": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "gm",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "states": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "states",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "epochs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epochs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkw08_c
```js
{
  "signature": "void spkw08_c ( SpiceInt            handle,\n                   SpiceInt            body,\n                   SpiceInt            center,\n                   ConstSpiceChar    * frame,\n                   SpiceDouble         first,\n                   SpiceDouble         last,\n                   ConstSpiceChar    * segid,\n                   SpiceInt            degree,\n                   SpiceInt            n,\n                   ConstSpiceDouble    states[][6],\n                   SpiceDouble         epoch1,\n                   SpiceDouble         step           )",
  "name": "spkw08_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "degree": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "degree",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "states": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "states",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "epoch1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epoch1",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkw09_c
```js
{
  "signature": "void spkw09_c ( SpiceInt             handle,\n                   SpiceInt             body,\n                   SpiceInt             center, \n                   ConstSpiceChar     * frame,\n                   SpiceDouble          first,\n                   SpiceDouble          last,\n                   ConstSpiceChar     * segid,\n                   SpiceInt             degree,\n                   SpiceInt             n,\n                   ConstSpiceDouble     states[][6],\n                   ConstSpiceDouble     epochs[]     )",
  "name": "spkw09_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "degree": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "degree",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "states": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "states",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "epochs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epochs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkw10_c
```js
{
  "signature": "void spkw10_c ( SpiceInt           handle,\n                   SpiceInt           body, \n                   SpiceInt           center, \n                   ConstSpiceChar   * frame, \n                   SpiceDouble        first,\n                   SpiceDouble        last,\n                   ConstSpiceChar   * segid, \n                   ConstSpiceDouble   consts [8],\n                   SpiceInt           n,\n                   ConstSpiceDouble   elems  [],\n                   ConstSpiceDouble   epochs []  )",
  "name": "spkw10_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "consts": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "consts",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "elems": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "elems",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "epochs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epochs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkw12_c
```js
{
  "signature": "void spkw12_c ( SpiceInt             handle,\n                   SpiceInt             body,\n                   SpiceInt             center, \n                   ConstSpiceChar     * frame,\n                   SpiceDouble          first,\n                   SpiceDouble          last,\n                   ConstSpiceChar     * segid,\n                   SpiceInt             degree,\n                   SpiceInt             n,\n                   ConstSpiceDouble     states[][6],\n                   SpiceDouble          epoch0,\n                   SpiceDouble          step        )",
  "name": "spkw12_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "degree": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "degree",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "states": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "states",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "epoch0": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epoch0",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "step": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "step",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkw13_c
```js
{
  "signature": "void spkw13_c ( SpiceInt             handle,\n                   SpiceInt             body,\n                   SpiceInt             center, \n                   ConstSpiceChar     * frame,\n                   SpiceDouble          first,\n                   SpiceDouble          last,\n                   ConstSpiceChar     * segid,\n                   SpiceInt             degree,\n                   SpiceInt             n,\n                   ConstSpiceDouble     states[][6],\n                   ConstSpiceDouble     epochs[]     )",
  "name": "spkw13_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "degree": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "degree",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "states": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "states",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "epochs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epochs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkw15_c
```js
{
  "signature": "void spkw15_c ( SpiceInt           handle,\n                   SpiceInt           body, \n                   SpiceInt           center, \n                   ConstSpiceChar   * frame, \n                   SpiceDouble        first,\n                   SpiceDouble        last,\n                   ConstSpiceChar   * segid, \n                   SpiceDouble        epoch,\n                   ConstSpiceDouble   tp     [3],\n                   ConstSpiceDouble   pa     [3],\n                   SpiceDouble        p,\n                   SpiceDouble        ecc,\n                   SpiceDouble        j2flg,\n                   ConstSpiceDouble   pv     [3],\n                   SpiceDouble        gm,\n                   SpiceDouble        j2,\n                   SpiceDouble        radius     )",
  "name": "spkw15_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "epoch": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epoch",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "tp": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "tp",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "pa": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "pa",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "p": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "p",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "ecc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ecc",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    },
    "j2flg": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "j2flg",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 12,
      "isInput": true
    },
    "pv": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "pv",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 13,
      "isInput": true
    },
    "gm": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "gm",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 14,
      "isInput": true
    },
    "j2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "j2",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 15,
      "isInput": true
    },
    "radius": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "radius",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 16,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkw17_c
```js
{
  "signature": "void spkw17_c ( SpiceInt           handle,\n                   SpiceInt           body, \n                   SpiceInt           center, \n                   ConstSpiceChar   * frame, \n                   SpiceDouble        first,\n                   SpiceDouble        last,\n                   ConstSpiceChar   * segid, \n                   SpiceDouble        epoch,\n                   ConstSpiceDouble   eqel   [9],\n                   SpiceDouble        rapol,\n                   SpiceDouble        decpol      )",
  "name": "spkw17_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "epoch": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epoch",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "eqel": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "eqel",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "rapol": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "rapol",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "decpol": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "decpol",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### spkw18_c
```js
{
  "signature": "void spkw18_c ( SpiceInt             handle,\n                   SpiceSPK18Subtype    subtyp,\n                   SpiceInt             body,\n                   SpiceInt             center, \n                   ConstSpiceChar     * frame,\n                   SpiceDouble          first,\n                   SpiceDouble          last,\n                   ConstSpiceChar     * segid,\n                   SpiceInt             degree,\n                   SpiceInt             n,\n                   const void         * packts,\n                   ConstSpiceDouble     epochs[]     )",
  "name": "spkw18_c",
  "args": {
    "handle": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "handle",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "subtyp": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "subtyp",
      "type": "SpiceSPK18Subtype",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "center": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "center",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "frame": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "frame",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "first": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "first",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "last": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "last",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "segid": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "segid",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 7,
      "isInput": true
    },
    "degree": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "degree",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 8,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 9,
      "isInput": true
    },
    "packts": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "packts",
      "type": "void",
      "arrayLength": 0,
      "index": 10,
      "isInput": true
    },
    "epochs": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epochs",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 11,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### srfrec_c
```js
{
  "signature": "void srfrec_c ( SpiceInt      body,\n                   SpiceDouble   longitude,\n                   SpiceDouble   latitude,\n                   SpiceDouble   rectan[3] )",
  "name": "srfrec_c",
  "args": {
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "longitude": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "longitude",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "latitude": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "latitude",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "rectan": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "rectan",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### srfxpt_c
```js
{
  "signature": "void srfxpt_c ( ConstSpiceChar      * method,\n                   ConstSpiceChar      * target,\n                   SpiceDouble           et,\n                   ConstSpiceChar      * abcorr,\n                   ConstSpiceChar      * obsrvr,\n                   ConstSpiceChar      * dref,\n                   ConstSpiceDouble      dvec   [3],\n                   SpiceDouble           spoint [3],\n                   SpiceDouble         * dist,\n                   SpiceDouble         * trgepc,\n                   SpiceDouble           obspos [3],\n                   SpiceBoolean        * found      )",
  "name": "srfxpt_c",
  "args": {
    "method": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "method",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "dref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "dvec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "dvec",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": true
    },
    "spoint": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "spoint",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    },
    "dist": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "dist",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    },
    "trgepc": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "trgepc",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 9,
      "isInput": false
    },
    "obspos": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "obspos",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 10,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 11,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ssize_c
```js
{
  "signature": "void ssize_c (  SpiceInt      size,   \n                   SpiceCell   * cell  )",
  "name": "ssize_c",
  "args": {
    "size": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "size",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "cell": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cell",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### stelab_c
```js
{
  "signature": "void stelab_c ( ConstSpiceDouble   pobj[3],\n                   ConstSpiceDouble   vobs[3],\n                   SpiceDouble        appobj[3] )",
  "name": "stelab_c",
  "args": {
    "pobj": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "pobj",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "vobs": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vobs",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "appobj": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "appobj",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### stpool_c
```js
{
  "signature": "void stpool_c ( ConstSpiceChar    * item,\n                   SpiceInt            nth,\n                   ConstSpiceChar    * contin,\n                   SpiceInt            lenout,\n                   SpiceChar         * string,\n                   SpiceInt          * size,\n                   SpiceBoolean      * found  )",
  "name": "stpool_c",
  "args": {
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "nth": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nth",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "contin": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "contin",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "size": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "size",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### str2et_c
```js
{
  "signature": "void str2et_c ( ConstSpiceChar * str,\n                   SpiceDouble    * et   )",
  "name": "str2et_c",
  "args": {
    "str": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "str",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### subpnt_c
```js
{
  "signature": "void subpnt_c ( ConstSpiceChar       * method,\n                   ConstSpiceChar       * target,\n                   SpiceDouble            et,\n                   ConstSpiceChar       * fixref,\n                   ConstSpiceChar       * abcorr,\n                   ConstSpiceChar       * obsrvr,\n                   SpiceDouble            spoint [3],\n                   SpiceDouble          * trgepc,\n                   SpiceDouble            srfvec [3] )",
  "name": "subpnt_c",
  "args": {
    "method": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "method",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "fixref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fixref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "spoint": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "spoint",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "trgepc": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "trgepc",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    },
    "srfvec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "srfvec",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### subpt_c
```js
{
  "signature": "void subpt_c ( ConstSpiceChar       * method,\n                  ConstSpiceChar       * target,\n                  SpiceDouble            et,\n                  ConstSpiceChar       * abcorr,\n                  ConstSpiceChar       * obsrvr,\n                  SpiceDouble            spoint [3],\n                  SpiceDouble          * alt         )",
  "name": "subpt_c",
  "args": {
    "method": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "method",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "spoint": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "spoint",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "alt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "alt",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### subslr_c
```js
{
  "signature": "void subslr_c ( ConstSpiceChar       * method,\n                   ConstSpiceChar       * target,\n                   SpiceDouble            et,\n                   ConstSpiceChar       * fixref,\n                   ConstSpiceChar       * abcorr,\n                   ConstSpiceChar       * obsrvr,\n                   SpiceDouble            spoint [3],\n                   SpiceDouble          * trgepc,\n                   SpiceDouble            srfvec [3] )",
  "name": "subslr_c",
  "args": {
    "method": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "method",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "fixref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fixref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "spoint": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "spoint",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    },
    "trgepc": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "trgepc",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 7,
      "isInput": false
    },
    "srfvec": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "srfvec",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 8,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### subsol_c
```js
{
  "signature": "void subsol_c ( ConstSpiceChar   * method,\n                   ConstSpiceChar   * target,\n                   SpiceDouble        et,\n                   ConstSpiceChar   * abcorr,\n                   ConstSpiceChar   * obsrvr,\n                   SpiceDouble        spoint[3] )",
  "name": "subsol_c",
  "args": {
    "method": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "method",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "target": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "target",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "abcorr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "abcorr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "obsrvr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "obsrvr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "spoint": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "spoint",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sumad_c
```js
{
  "signature": "SpiceDouble sumad_c ( ConstSpiceDouble   * array,\n                         SpiceInt             n     )",
  "name": "sumad_c",
  "args": {
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### sumai_c
```js
{
  "signature": "SpiceInt sumai_c ( ConstSpiceInt   * array,\n                      SpiceInt          n     )",
  "name": "sumai_c",
  "args": {
    "array": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "array",
      "type": "ConstSpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### surfnm_c
```js
{
  "signature": "void surfnm_c ( SpiceDouble        a, \n                   SpiceDouble        b, \n                   SpiceDouble        c, \n                   ConstSpiceDouble   point[3], \n                   SpiceDouble        normal[3] )",
  "name": "surfnm_c",
  "args": {
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "point": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "point",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": true
    },
    "normal": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "normal",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### surfpt_c
```js
{
  "signature": "void surfpt_c ( ConstSpiceDouble   positn[3], \n                   ConstSpiceDouble   u[3], \n                   SpiceDouble        a, \n                   SpiceDouble        b,\n                   SpiceDouble        c, \n                   SpiceDouble        point[3],  \n                   SpiceBoolean     * found     )",
  "name": "surfpt_c",
  "args": {
    "positn": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "positn",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "u": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "u",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "b": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "c": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "point": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "point",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 5,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### surfpv_c
```js
{
  "signature": "void surfpv_c ( ConstSpiceDouble      stvrtx[6],\n                   ConstSpiceDouble      stdir [6],\n                   SpiceDouble           a,\n                   SpiceDouble           b,\n                   SpiceDouble           c,\n                   SpiceDouble           stx   [6],\n                   SpiceBoolean        * found      )",
  "name": "surfpv_c",
  "args": {
    "stvrtx": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "stvrtx",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 0,
      "isInput": true
    },
    "stdir": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "stdir",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "b": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "c": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "stx": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "stx",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### swpool_c
```js
{
  "signature": "void swpool_c ( ConstSpiceChar    * agent,\n                   SpiceInt            nnames,\n                   SpiceInt            lenvals,\n                   const void        * names   )",
  "name": "swpool_c",
  "args": {
    "agent": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "agent",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "nnames": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nnames",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenvals": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenvals",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "names": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "names",
      "type": "void",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### sxform_c
```js
{
  "signature": "void sxform_c ( ConstSpiceChar  * from, \n                   ConstSpiceChar  * to, \n                   SpiceDouble       et, \n                   SpiceDouble       xform[6][6] )",
  "name": "sxform_c",
  "args": {
    "from": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "from",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "to": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "to",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "xform": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "xform",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### szpool_c
```js
{
  "signature": "void szpool_c ( ConstSpiceChar * name,\n                   SpiceInt       * n,\n                   SpiceBoolean   * found )",
  "name": "szpool_c",
  "args": {
    "name": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "name",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### timdef_c
```js
{
  "signature": "void timdef_c ( ConstSpiceChar * action,\n                   ConstSpiceChar * item,\n                   SpiceInt         lenout,\n                   SpiceChar      * value )",
  "name": "timdef_c",
  "args": {
    "action": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "action",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "value": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "value",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### timout_c
```js
{
  "signature": "void timout_c ( SpiceDouble       et,\n                   ConstSpiceChar  * pictur,\n                   SpiceInt          lenout,\n                   SpiceChar       * output )",
  "name": "timout_c",
  "args": {
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "pictur": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "pictur",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "output": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "output",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### tipbod_c
```js
{
  "signature": "void tipbod_c ( ConstSpiceChar  * ref,\n                   SpiceInt          body,\n                   SpiceDouble       et,\n                   SpiceDouble       tipm[3][3] )",
  "name": "tipbod_c",
  "args": {
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "tipm": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "tipm",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### tisbod_c
```js
{
  "signature": "void tisbod_c ( ConstSpiceChar   * ref,    \n                   SpiceInt           body,\n                   SpiceDouble        et,     \n                   SpiceDouble        tsipm[6][6] )",
  "name": "tisbod_c",
  "args": {
    "ref": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ref",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "body": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "body",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "et": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "tsipm": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "tsipm",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### tkvrsn_c
```js
{
  "signature": "ConstSpiceChar  * tkvrsn_c ( ConstSpiceChar * item )",
  "name": "tkvrsn_c",
  "args": {
    "item": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "item",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "ConstSpiceChar  "
  }
}```
### tparse_c
```js
{
  "signature": "void tparse_c ( ConstSpiceChar  * string,\n                   SpiceInt          lenout,\n                   SpiceDouble     * sp2000,\n                   SpiceChar       * errmsg  )",
  "name": "tparse_c",
  "args": {
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "sp2000": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sp2000",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "errmsg": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "errmsg",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### tpictr_c
```js
{
  "signature": "void tpictr_c ( ConstSpiceChar * sample,\n                   SpiceInt         lenout,\n                   SpiceInt         lenerr,\n                   SpiceChar      * pictur,\n                   SpiceBoolean   * ok,\n                   SpiceChar      * errmsg )",
  "name": "tpictr_c",
  "args": {
    "sample": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sample",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "lenerr": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenerr",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "pictur": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "pictur",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "ok": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ok",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "errmsg": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "errmsg",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### trace_c
```js
{
  "signature": "SpiceDouble trace_c ( ConstSpiceDouble  matrix[3][3] )",
  "name": "trace_c",
  "args": {
    "matrix": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "matrix",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### trcoff_c
```js
{
  "signature": "void trcoff_c ( void )",
  "name": "trcoff_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### tsetyr_c
```js
{
  "signature": "void tsetyr_c ( SpiceInt year )",
  "name": "tsetyr_c",
  "args": {
    "year": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "year",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### twopi_c
```js
{
  "signature": "SpiceDouble twopi_c ( void )",
  "name": "twopi_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### twovec_c
```js
{
  "signature": "void twovec_c ( ConstSpiceDouble    axdef  [3],\n                   SpiceInt            indexa,\n                   ConstSpiceDouble    plndef [3],\n                   SpiceInt            indexp,\n                   SpiceDouble         mout   [3][3] )",
  "name": "twovec_c",
  "args": {
    "axdef": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axdef",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "indexa": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "indexa",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "plndef": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "plndef",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "indexp": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "indexp",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "mout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "mout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### tyear_c
```js
{
  "signature": "SpiceDouble tyear_c ( void )",
  "name": "tyear_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### ucase_c
```js
{
  "signature": "void ucase_c ( SpiceChar   * in,\n                  SpiceInt      lenout, \n                  SpiceChar   * out    )",
  "name": "ucase_c",
  "args": {
    "in": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "in",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "lenout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "lenout",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "out": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "out",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### ucrss_c
```js
{
  "signature": "void ucrss_c ( ConstSpiceDouble   v1[3],\n                  ConstSpiceDouble   v2[3], \n                  SpiceDouble        vout[3] )",
  "name": "ucrss_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### uddc_c
```js
{
  "signature": "void uddc_c ( void            ( * udfunc )",
  "name": "uddc_c",
  "args": {
    "d": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "d",
      "type": "voi",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### uddf_c
```js
{
  "signature": "void uddf_c (  void             ( * udfunc )",
  "name": "uddf_c",
  "args": {
    "d": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "d",
      "type": "voi",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### union_c
```js
{
  "signature": "void union_c (  SpiceCell   * a,\n                   SpiceCell   * b,\n                   SpiceCell   * c  )",
  "name": "union_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### unitim_c
```js
{
  "signature": "SpiceDouble unitim_c ( SpiceDouble        epoch,\n                          ConstSpiceChar   * insys,\n                          ConstSpiceChar   * outsys )",
  "name": "unitim_c",
  "args": {
    "epoch": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "epoch",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "insys": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "insys",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "outsys": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "outsys",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### unload_c
```js
{
  "signature": "void unload_c ( ConstSpiceChar  * file )",
  "name": "unload_c",
  "args": {
    "file": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "file",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### unormg_c
```js
{
  "signature": "void unormg_c ( ConstSpiceDouble  * v1,\n                   SpiceInt            ndim,\n                   SpiceDouble       * vout,\n                   SpiceDouble       * vmag )",
  "name": "unormg_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "vmag": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "vmag",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### unorm_c
```js
{
  "signature": "void unorm_c ( ConstSpiceDouble     v1[3],\n                  SpiceDouble          vout[3],\n                  SpiceDouble        * vmag    )",
  "name": "unorm_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    },
    "vmag": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "vmag",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### utc2et_c
```js
{
  "signature": "void utc2et_c ( ConstSpiceChar  * utcstr,\n                   SpiceDouble     * et      )",
  "name": "utc2et_c",
  "args": {
    "utcstr": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "utcstr",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "et": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "et",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vaddg_c
```js
{
  "signature": "void vaddg_c ( ConstSpiceDouble  * v1,\n                  ConstSpiceDouble  * v2,\n                  SpiceInt            ndim,\n                  SpiceDouble       * vout )",
  "name": "vaddg_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vadd_c
```js
{
  "signature": "void vadd_c ( ConstSpiceDouble   v1[3],\n                 ConstSpiceDouble   v2[3],\n                 SpiceDouble        vout[3] )",
  "name": "vadd_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### valid_c
```js
{
  "signature": "void valid_c (  SpiceInt      size,\n                   SpiceInt      n,\n                   SpiceCell   * set   )",
  "name": "valid_c",
  "args": {
    "size": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "size",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "set": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "set",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vcrss_c
```js
{
  "signature": "void vcrss_c ( ConstSpiceDouble   v1[3],\n                  ConstSpiceDouble   v2[3],\n                  SpiceDouble        vout[3] )",
  "name": "vcrss_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vdistg_c
```js
{
  "signature": "SpiceDouble vdistg_c ( ConstSpiceDouble   * v1,\n                          ConstSpiceDouble   * v2,\n                          SpiceInt             ndim )",
  "name": "vdistg_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vdist_c
```js
{
  "signature": "SpiceDouble vdist_c ( ConstSpiceDouble v1[3],\n                         ConstSpiceDouble v2[3] )",
  "name": "vdist_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vdotg_c
```js
{
  "signature": "SpiceDouble vdotg_c ( ConstSpiceDouble   * v1,\n                         ConstSpiceDouble   * v2,\n                         SpiceInt             ndim )",
  "name": "vdotg_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vdot_c
```js
{
  "signature": "SpiceDouble vdot_c ( ConstSpiceDouble   v1[3], \n                        ConstSpiceDouble   v2[3] )",
  "name": "vdot_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vequg_c
```js
{
  "signature": "void vequg_c ( ConstSpiceDouble  * vin,\n                  SpiceInt            ndim,\n                  SpiceDouble       * vout )",
  "name": "vequg_c",
  "args": {
    "vin": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "vin",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vequ_c
```js
{
  "signature": "void vequ_c ( ConstSpiceDouble   vin[3],\n                 SpiceDouble        vout[3] )",
  "name": "vequ_c",
  "args": {
    "vin": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vin",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vhatg_c
```js
{
  "signature": "void vhatg_c ( ConstSpiceDouble   * v1,\n                  SpiceInt             ndim,\n                  SpiceDouble        * vout )",
  "name": "vhatg_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vhat_c
```js
{
  "signature": "void vhat_c ( ConstSpiceDouble  v1  [3], \n                 SpiceDouble       vout[3] )",
  "name": "vhat_c",
  "args": {
    "v1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vlcom3_c
```js
{
  "signature": "void vlcom3_c ( SpiceDouble        a, \n                   ConstSpiceDouble   v1 [3], \n                   SpiceDouble        b, \n                   ConstSpiceDouble   v2 [3], \n                   SpiceDouble        c, \n                   ConstSpiceDouble   v3 [3], \n                   SpiceDouble        sum[3]  )",
  "name": "vlcom3_c",
  "args": {
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "v1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "b": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "v2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "c": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "v3": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "v3",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    },
    "sum": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "sum",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 6,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vlcomg_c
```js
{
  "signature": "void vlcomg_c ( SpiceInt            n,\n                   SpiceDouble         a,\n                   ConstSpiceDouble *  v1,\n                   SpiceDouble         b,\n                   ConstSpiceDouble *  v2,\n                   SpiceDouble      *  sum )",
  "name": "vlcomg_c",
  "args": {
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "b": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "sum": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "sum",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vlcom_c
```js
{
  "signature": "void vlcom_c ( SpiceDouble        a, \n                  ConstSpiceDouble   v1[3], \n                  SpiceDouble        b, \n                  ConstSpiceDouble   v2[3], \n                  SpiceDouble        sum[3] )",
  "name": "vlcom_c",
  "args": {
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "b": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": true
    },
    "sum": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "sum",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vminug_c
```js
{
  "signature": "void vminug_c ( ConstSpiceDouble  * vin,\n                   SpiceInt            ndim,\n                   SpiceDouble       * vout )",
  "name": "vminug_c",
  "args": {
    "vin": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "vin",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vminus_c
```js
{
  "signature": "void vminus_c ( ConstSpiceDouble v1[3],  SpiceDouble vout[3] )",
  "name": "vminus_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vnormg_c
```js
{
  "signature": "SpiceDouble vnormg_c ( ConstSpiceDouble   * v1,\n                          SpiceInt             ndim )",
  "name": "vnormg_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vnorm_c
```js
{
  "signature": "SpiceDouble vnorm_c ( ConstSpiceDouble v1[3] )",
  "name": "vnorm_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vpack_c
```js
{
  "signature": "void vpack_c ( SpiceDouble   x,\n                  SpiceDouble   y,\n                  SpiceDouble   z,\n                  SpiceDouble   v[3] )",
  "name": "vpack_c",
  "args": {
    "x": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "y": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "y",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "z": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "v": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vperp_c
```js
{
  "signature": "void vperp_c ( ConstSpiceDouble   a[3],\n                  ConstSpiceDouble   b[3],\n                  SpiceDouble        p[3] )",
  "name": "vperp_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "a",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "b",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "p": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "p",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vprjpi_c
```js
{
  "signature": "void vprjpi_c ( ConstSpiceDouble    vin    [3],\n                   ConstSpicePlane   * projpl,\n                   ConstSpicePlane   * invpl,\n                   SpiceDouble         vout   [3],\n                   SpiceBoolean      * found       )",
  "name": "vprjpi_c",
  "args": {
    "vin": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vin",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "projpl": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "projpl",
      "type": "ConstSpicePlane",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "invpl": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "invpl",
      "type": "ConstSpicePlane",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "vout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "found": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "found",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vprjp_c
```js
{
  "signature": "void vprjp_c ( ConstSpiceDouble    vin   [3],\n                  ConstSpicePlane   * plane,\n                  SpiceDouble         vout  [3] )",
  "name": "vprjp_c",
  "args": {
    "vin": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vin",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "plane": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "plane",
      "type": "ConstSpicePlane",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vproj_c
```js
{
  "signature": "void vproj_c ( ConstSpiceDouble   a[3],\n                  ConstSpiceDouble   b[3],\n                  SpiceDouble        p[3] )",
  "name": "vproj_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "a",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "b",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "p": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "p",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vrelg_c
```js
{
  "signature": "SpiceDouble vrelg_c ( ConstSpiceDouble * v1,\n                         ConstSpiceDouble * v2,\n                         SpiceInt           ndim  )",
  "name": "vrelg_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vrel_c
```js
{
  "signature": "SpiceDouble vrel_c ( ConstSpiceDouble v1[3],\n                        ConstSpiceDouble v2[3]  )",
  "name": "vrel_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": false
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vrotv_c
```js
{
  "signature": "void vrotv_c ( ConstSpiceDouble  v     [3],\n                  ConstSpiceDouble  axis  [3],\n                  SpiceDouble       theta,\n                  SpiceDouble       r     [3] )",
  "name": "vrotv_c",
  "args": {
    "v": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "v",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "axis": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axis",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "theta": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "theta",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vsclg_c
```js
{
  "signature": "void vsclg_c ( SpiceDouble          s,\n                  ConstSpiceDouble   * v1,\n                  SpiceInt             ndim,\n                  SpiceDouble        * vout )",
  "name": "vsclg_c",
  "args": {
    "s": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "s",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vscl_c
```js
{
  "signature": "void vscl_c ( SpiceDouble        s,\n                 ConstSpiceDouble   v1[3],\n                 SpiceDouble        vout[3] )",
  "name": "vscl_c",
  "args": {
    "s": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "s",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vsepg_c
```js
{
  "signature": "SpiceDouble vsepg_c ( ConstSpiceDouble * v1,\n                         ConstSpiceDouble * v2,\n                         SpiceInt           ndim )",
  "name": "vsepg_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vsep_c
```js
{
  "signature": "SpiceDouble vsep_c ( ConstSpiceDouble v1[3], ConstSpiceDouble v2[3] )",
  "name": "vsep_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vsubg_c
```js
{
  "signature": "void vsubg_c ( ConstSpiceDouble  * v1,\n                  ConstSpiceDouble  * v2,\n                  SpiceInt            ndim,\n                  SpiceDouble       * vout )",
  "name": "vsubg_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vsub_c
```js
{
  "signature": "void vsub_c ( ConstSpiceDouble   v1[3],\n                 ConstSpiceDouble   v2[3],\n                 SpiceDouble        vout[3] )",
  "name": "vsub_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": true
    },
    "vout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "vout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vtmvg_c
```js
{
  "signature": "SpiceDouble vtmvg_c ( const void          * v1,\n                         const void          * matrix,\n                         const void          * v2,\n                         SpiceInt              nrow,\n                         SpiceInt              ncol    )",
  "name": "vtmvg_c",
  "args": {
    "v1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v1",
      "type": "void",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "matrix": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "matrix",
      "type": "void",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "v2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v2",
      "type": "void",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "nrow": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "nrow",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "ncol": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ncol",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vtmv_c
```js
{
  "signature": "SpiceDouble vtmv_c ( ConstSpiceDouble v1     [3],\n                        ConstSpiceDouble matrix [3][3],\n                        ConstSpiceDouble v2     [3] )",
  "name": "vtmv_c",
  "args": {
    "v1": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "v1",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "matrix": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "matrix",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "v2": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "v2",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceDouble"
  }
}```
### vupack_c
```js
{
  "signature": "void vupack_c ( ConstSpiceDouble     v[3],\n                   SpiceDouble        * x,\n                   SpiceDouble        * y,\n                   SpiceDouble        * z     )",
  "name": "vupack_c",
  "args": {
    "v": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "x": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "x",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "y": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "y",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "z": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "z",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### vzerog_c
```js
{
  "signature": "SpiceBoolean vzerog_c ( ConstSpiceDouble * v, SpiceInt ndim )",
  "name": "vzerog_c",
  "args": {
    "v": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "v",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ndim": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "ndim",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### vzero_c
```js
{
  "signature": "SpiceBoolean vzero_c ( ConstSpiceDouble v[3] )",
  "name": "vzero_c",
  "args": {
    "v": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "v",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### wncard_c
```js
{
  "signature": "SpiceInt wncard_c ( SpiceCell  * window )",
  "name": "wncard_c",
  "args": {
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceInt"
  }
}```
### wncomd_c
```js
{
  "signature": "void wncomd_c ( SpiceDouble    left,\n                   SpiceDouble    right,\n                   SpiceCell    * window,\n                   SpiceCell    * result )",
  "name": "wncomd_c",
  "args": {
    "left": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "left",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "right": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "right",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "result": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "result",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wncond_c
```js
{
  "signature": "void wncond_c ( SpiceDouble     left,\n                   SpiceDouble     right,\n                   SpiceCell     * window )",
  "name": "wncond_c",
  "args": {
    "left": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "left",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "right": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "right",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wndifd_c
```js
{
  "signature": "void wndifd_c (  SpiceCell   * a,\n                    SpiceCell   * b,\n                    SpiceCell   * c  )",
  "name": "wndifd_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wnelmd_c
```js
{
  "signature": "SpiceBoolean wnelmd_c ( SpiceDouble    point,\n                           SpiceCell    * window )",
  "name": "wnelmd_c",
  "args": {
    "point": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "point",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### wnexpd_c
```js
{
  "signature": "void wnexpd_c ( SpiceDouble    left,\n                   SpiceDouble    right,\n                   SpiceCell    * window )",
  "name": "wnexpd_c",
  "args": {
    "left": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "left",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "right": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "right",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wnextd_c
```js
{
  "signature": "void wnextd_c ( SpiceChar     side,\n                   SpiceCell   * window )",
  "name": "wnextd_c",
  "args": {
    "side": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "side",
      "type": "SpiceChar",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wnfetd_c
```js
{
  "signature": "void wnfetd_c ( SpiceCell    * window,\n                   SpiceInt       n,\n                   SpiceDouble  * left,\n                   SpiceDouble  * right   )",
  "name": "wnfetd_c",
  "args": {
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "left": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "left",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "right": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "right",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wnfild_c
```js
{
  "signature": "void wnfild_c ( SpiceDouble     small,\n                   SpiceCell     * window )",
  "name": "wnfild_c",
  "args": {
    "small": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "small",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wnfltd_c
```js
{
  "signature": "void wnfltd_c ( SpiceDouble     small,\n                   SpiceCell    *  window )",
  "name": "wnfltd_c",
  "args": {
    "small": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "small",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wnincd_c
```js
{
  "signature": "SpiceBoolean wnincd_c ( SpiceDouble     left,\n                           SpiceDouble     right,\n                           SpiceCell     * window )",
  "name": "wnincd_c",
  "args": {
    "left": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "left",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "right": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "right",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### wninsd_c
```js
{
  "signature": "void wninsd_c ( SpiceDouble     left,\n                   SpiceDouble     right,\n                   SpiceCell     * window )",
  "name": "wninsd_c",
  "args": {
    "left": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "left",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "right": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "right",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wnintd_c
```js
{
  "signature": "void wnintd_c ( SpiceCell  * a,\n                   SpiceCell  * b,\n                   SpiceCell  * c )",
  "name": "wnintd_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wnreld_c
```js
{
  "signature": "SpiceBoolean wnreld_c ( SpiceCell       * a,\n                           ConstSpiceChar  * op,\n                           SpiceCell       * b   )",
  "name": "wnreld_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "op": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "op",
      "type": "ConstSpiceChar",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "SpiceBoolean"
  }
}```
### wnsumd_c
```js
{
  "signature": "void wnsumd_c ( SpiceCell      * window,\n                   SpiceDouble    * meas,\n                   SpiceDouble    * avg,\n                   SpiceDouble    * stddev,\n                   SpiceInt       * shortest,\n                   SpiceInt       * longest   )",
  "name": "wnsumd_c",
  "args": {
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "meas": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "meas",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "avg": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "avg",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "stddev": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "stddev",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "shortest": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "shortest",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "longest": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "longest",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wnunid_c
```js
{
  "signature": "void wnunid_c ( SpiceCell   * a,\n                   SpiceCell   * b,\n                   SpiceCell   * c )",
  "name": "wnunid_c",
  "args": {
    "a": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "a",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "b": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "b",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "c": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "c",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### wnvald_c
```js
{
  "signature": "void wnvald_c ( SpiceInt       size,\n                   SpiceInt       n,\n                   SpiceCell    * window )",
  "name": "wnvald_c",
  "args": {
    "size": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "size",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "n": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "n",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "window": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "window",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### xf2eul_c
```js
{
  "signature": "void xf2eul_c ( ConstSpiceDouble     xform  [6][6],\n                   SpiceInt             axisa,\n                   SpiceInt             axisb,\n                   SpiceInt             axisc,\n                   SpiceDouble          eulang [6],\n                   SpiceBoolean       * unique         )",
  "name": "xf2eul_c",
  "args": {
    "xform": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "xform",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "axisa": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axisa",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "axisb": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axisb",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "axisc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "axisc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "eulang": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "eulang",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    },
    "unique": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "unique",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 5,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### xf2rav_c
```js
{
  "signature": "void xf2rav_c ( ConstSpiceDouble   xform [6][6],\n                   SpiceDouble        rot   [3][3],\n                   SpiceDouble        av    [3]     )",
  "name": "xf2rav_c",
  "args": {
    "xform": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "xform",
      "type": "ConstSpiceDouble",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "rot": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "rot",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "av": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "av",
      "type": "SpiceDouble",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### xpose6_c
```js
{
  "signature": "void xpose6_c ( ConstSpiceDouble m1[6][6],  SpiceDouble mout[6][6] )",
  "name": "xpose6_c",
  "args": {
    "m1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "m1",
      "type": "ConstSpiceDouble",
      "arrayLength": 6,
      "index": 0,
      "isInput": true
    },
    "mout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "mout",
      "type": "SpiceDouble",
      "arrayLength": 6,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### xpose_c
```js
{
  "signature": "void xpose_c ( ConstSpiceDouble m1[3][3],  SpiceDouble mout[3][3] )",
  "name": "xpose_c",
  "args": {
    "m1": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "m1",
      "type": "ConstSpiceDouble",
      "arrayLength": 3,
      "index": 0,
      "isInput": true
    },
    "mout": {
      "isPointer": true,
      "isFixedArray": true,
      "name": "mout",
      "type": "SpiceDouble",
      "arrayLength": 3,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### zzadbail_c
```js
{
  "signature": "logical zzadbail_c ()",
  "name": "zzadbail_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "logical"
  }
}```
### zzadfunc_c
```js
{
  "signature": "int zzadfunc_c ( doublereal   * et,\n                    doublereal   * value )",
  "name": "zzadfunc_c",
  "args": {
    "et": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "et",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "value": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "value",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "int"
  }
}```
### zzadqdec_c
```js
{
  "signature": "int zzadqdec_c ( U_fp           udfunc,\n                    doublereal   * et,\n                    logical      * xbool )",
  "name": "zzadqdec_c",
  "args": {
    "udfunc": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "udfunc",
      "type": "U_fp",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    },
    "et": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "et",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "xbool": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "xbool",
      "type": "logical",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "int"
  }
}```
### zzadrefn_c
```js
{
  "signature": "int zzadrefn_c ( doublereal  * t1, \n                    doublereal  * t2, \n                    logical     * s1, \n                    logical     * s2, \n                    doublereal  * t   )",
  "name": "zzadrefn_c",
  "args": {
    "t1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "t1",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "t2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "t2",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "s1": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "s1",
      "type": "logical",
      "arrayLength": 0,
      "index": 2,
      "isInput": false
    },
    "s2": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "s2",
      "type": "logical",
      "arrayLength": 0,
      "index": 3,
      "isInput": false
    },
    "t": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "t",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 4,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "int"
  }
}```
### zzadrepf_c
```js
{
  "signature": "int zzadrepf_c ()",
  "name": "zzadrepf_c",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "int"
  }
}```
### zzadrepu_c
```js
{
  "signature": "int zzadrepu_c ( doublereal  * ivbeg, \n                    doublereal  * ivend,\n                    doublereal  * time   )",
  "name": "zzadrepu_c",
  "args": {
    "ivbeg": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ivbeg",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "ivend": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ivend",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "time": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "time",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "int"
  }
}```
### zzadsave_c
```js
{
  "signature": "functions\n\n      zzadsave_c ( Save a function pointer for adapter use )",
  "name": "zzadsave_c",
  "args": {
    "a": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "a",
      "type": "Save",
      "arrayLength": 0,
      "index": 0,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "functions\n\n     "
  }
}```
### zzadstep_c
```js
{
  "signature": "int zzadstep_c ( doublereal  * time,\n                    doublereal  * step  )",
  "name": "zzadstep_c",
  "args": {
    "time": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "time",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "step": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "step",
      "type": "doublereal",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "int"
  }
}```
### zzerror
```js
{
  "signature": "char * zzerror( long cnt )",
  "name": "zzerror",
  "args": {
    "cnt": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "cnt",
      "type": "long",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "char "
  }
}```
### zzerrorinit
```js
{
  "signature": "void zzerrorinit(void)",
  "name": "zzerrorinit",
  "args": {},
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### zzgetcml_c
```js
{
  "signature": "void zzgetcml_c ( SpiceInt         *  argc,\n                     SpiceChar      ***  argv,\n                     SpiceBoolean        init )",
  "name": "zzgetcml_c",
  "args": {
    "argc": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "argc",
      "type": "SpiceInt",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "r": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "r",
      "type": "SpiceCha",
      "arrayLength": 0,
      "index": 1,
      "isInput": false
    },
    "init": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "init",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### zzgfdsps_
```js
{
  "signature": "int zzgfdsps_ ( integer  * nlead,\n                   char     * string,\n                   char     * fmt,\n                   integer  * ntrail,\n                   ftnlen     stringLen,\n                   ftnlen     fmtLen     )",
  "name": "zzgfdsps_",
  "args": {
    "nlead": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "nlead",
      "type": "integer",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "string": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "string",
      "type": "char",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    },
    "fmt": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "fmt",
      "type": "char",
      "arrayLength": 0,
      "index": 2,
      "isInput": true
    },
    "ntrail": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "ntrail",
      "type": "integer",
      "arrayLength": 0,
      "index": 3,
      "isInput": true
    },
    "stringLen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "stringLen",
      "type": "ftnlen",
      "arrayLength": 0,
      "index": 4,
      "isInput": true
    },
    "fmtLen": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "fmtLen",
      "type": "ftnlen",
      "arrayLength": 0,
      "index": 5,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "int"
  }
}```
### zzgfsavh_c
```js
{
  "signature": "void zzgfsavh_c ( SpiceBoolean status )",
  "name": "zzgfsavh_c",
  "args": {
    "status": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "status",
      "type": "SpiceBoolean",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
### zzsynccl_c
```js
{
  "signature": "void zzsynccl_c ( SpiceTransDir     xdir,\n                     SpiceCell       * cell )",
  "name": "zzsynccl_c",
  "args": {
    "xdir": {
      "isPointer": false,
      "isFixedArray": false,
      "name": "xdir",
      "type": "SpiceTransDir",
      "arrayLength": 0,
      "index": 0,
      "isInput": true
    },
    "cell": {
      "isPointer": true,
      "isFixedArray": false,
      "name": "cell",
      "type": "SpiceCell",
      "arrayLength": 0,
      "index": 1,
      "isInput": true
    }
  },
  "returnInfo": {
    "isPointer": false,
    "type": "void"
  }
}```
