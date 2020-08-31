## appndc_c
```c
void appndc_c ( ConstSpiceChar   * item,
                   SpiceCell        * cell  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* itemSpiceCell* cell
```
#### Outputs
```

```
## appndd_c
```c
void appndd_c ( SpiceDouble     item,
                   SpiceCell     * cell )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble itemSpiceCell* cell
```
#### Outputs
```

```
## appndi_c
```c
void appndi_c ( SpiceInt        item,
                   SpiceCell     * cell )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt itemSpiceCell* cell
```
#### Outputs
```

```
## axisar_c
```c
void axisar_c ( ConstSpiceDouble  axis   [3],
                   SpiceDouble       angle,
                   SpiceDouble       r      [3][3]  )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble angle
```
#### Outputs
```
ConstSpiceDouble axisSpiceDouble r
```
## b1900_c
```c
ouble b1900_c ( void )
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## badkpv_c
```c
oolean badkpv_c ( ConstSpiceChar    *caller,
                           ConstSpiceChar    *name,
                           ConstSpiceChar    *comp,
                           SpiceInt           size,
                           SpiceInt           divby,
                           SpiceChar          type   )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceChar* callerConstSpiceChar* nameConstSpiceChar* compSpiceInt sizeSpiceInt divbySpiceChar type
```
#### Outputs
```

```
## bodc2n_c
```c
void bodc2n_c ( SpiceInt        code,
                   SpiceInt        lenout,
                   SpiceChar     * name,
                   SpiceBoolean  * found   )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt codeSpiceInt lenout
```
#### Outputs
```
SpiceChar* nameSpiceBoolean* found
```
## bodc2s_c
```c
void bodc2s_c ( SpiceInt        code,
                   SpiceInt        lenout,
                   SpiceChar     * name )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt codeSpiceInt lenout
```
#### Outputs
```
SpiceChar* name
```
## boddef_c
```c
void boddef_c ( ConstSpiceChar   * name,
                   SpiceInt           code )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* nameSpiceInt code
```
#### Outputs
```

```
## bodfnd_c
```c
oolean bodfnd_c ( SpiceInt           body,
                           ConstSpiceChar   * item )
```
#### Return
```
oolean
```
#### Inputs
```
SpiceInt bodyConstSpiceChar* item
```
#### Outputs
```

```
## bodn2c_c
```c
void bodn2c_c ( ConstSpiceChar  * name,
                   SpiceInt        * code,
                   SpiceBoolean    * found )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* name
```
#### Outputs
```
SpiceInt* codeSpiceBoolean* found
```
## bods2c_c
```c
void bods2c_c ( ConstSpiceChar  * name,
                   SpiceInt        * code,
                   SpiceBoolean    * found )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* name
```
#### Outputs
```
SpiceInt* codeSpiceBoolean* found
```
## bodvcd_c
```c
void bodvcd_c ( SpiceInt           bodyid,
                   ConstSpiceChar   * item,
                   SpiceInt           maxn,
                   SpiceInt         * dim,
                   SpiceDouble      * values )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt bodyidConstSpiceChar* itemSpiceInt maxn
```
#### Outputs
```
SpiceInt* dimSpiceDouble* values
```
## bodvrd_c
```c
void bodvrd_c ( ConstSpiceChar   * bodynm,
                   ConstSpiceChar   * item,
                   SpiceInt           maxn,
                   SpiceInt         * dim,
                   SpiceDouble      * values )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* bodynmConstSpiceChar* itemSpiceInt maxn
```
#### Outputs
```
SpiceInt* dimSpiceDouble* values
```
## brcktd_c
```c
ouble brcktd_c ( SpiceDouble  number, 
                          SpiceDouble  end1,
                          SpiceDouble  end2   )
```
#### Return
```
ouble
```
#### Inputs
```
SpiceDouble numberSpiceDouble end2
```
#### Outputs
```
SpiceDouble end1
```
## brckti_c
```c
nt brckti_c ( SpiceInt  number, 
                       SpiceInt  end1,
                       SpiceInt  end2   )
```
#### Return
```
nt
```
#### Inputs
```
SpiceInt numberSpiceInt end2
```
#### Outputs
```
SpiceInt end1
```
## bschoc_c
```c
nt bschoc_c ( ConstSpiceChar  * value,
                       SpiceInt          ndim,   
                       SpiceInt          lenvals,
                       const void      * array,
                       ConstSpiceInt   * order    )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* valueSpiceInt ndimSpiceInt lenvalsConstSpiceInt* order
```
#### Outputs
```
const void
```
## bschoi_c
```c
nt bschoi_c ( SpiceInt          value,
                       SpiceInt          ndim,
                       ConstSpiceInt   * array,
                       ConstSpiceInt   * order  )
```
#### Return
```
nt
```
#### Inputs
```
SpiceInt valueSpiceInt ndimConstSpiceInt* arrayConstSpiceInt* order
```
#### Outputs
```

```
## bsrchc_c
```c
nt bsrchc_c ( ConstSpiceChar  * value,
                       SpiceInt          ndim,   
                       SpiceInt          lenvals,
                       const void      * array   )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* valueSpiceInt ndimSpiceInt lenvals
```
#### Outputs
```
const void
```
## bsrchd_c
```c
nt bsrchd_c ( SpiceDouble          value,
                       SpiceInt             ndim,
                       ConstSpiceDouble   * array )
```
#### Return
```
nt
```
#### Inputs
```
SpiceDouble valueSpiceInt ndimConstSpiceDouble* array
```
#### Outputs
```

```
## bsrchi_c
```c
nt bsrchi_c ( SpiceInt          value,
                       SpiceInt          ndim,
                       ConstSpiceInt   * array )
```
#### Return
```
nt
```
#### Inputs
```
SpiceInt valueSpiceInt ndimConstSpiceInt* array
```
#### Outputs
```

```
## byebye_
```c
int byebye_ ( char *status,   ftnlen statusLen )
```
#### Return
```
int
```
#### Inputs
```
char* status
```
#### Outputs
```
ftnlen statusLen
```
## card_c
```c
nt card_c ( SpiceCell  * cell )
```
#### Return
```
nt
```
#### Inputs
```
SpiceCell* cell
```
#### Outputs
```

```
## cgv2el_c
```c
void cgv2el_c ( ConstSpiceDouble    center[3],
                   ConstSpiceDouble    vec1  [3],
                   ConstSpiceDouble    vec2  [3],
                   SpiceEllipse      * ellipse   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble vec2
```
#### Outputs
```
ConstSpiceDouble* center[3]ConstSpiceDouble vec1SpiceEllipse* ellipse
```
## chkin_c
```c
void chkin_c ( ConstSpiceChar * module )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* module
```
#### Outputs
```

```
## chkout_c
```c
void chkout_c ( ConstSpiceChar  * module )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* module
```
#### Outputs
```

```
## cidfrm_c
```c
void cidfrm_c ( SpiceInt        cent,
                   SpiceInt        lenout,
                   SpiceInt      * frcode,
                   SpiceChar     * frname,
                   SpiceBoolean  * found  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt centSpiceInt lenout
```
#### Outputs
```
SpiceInt* frcodeSpiceChar* frnameSpiceBoolean* found
```
## ckcov_c
```c
void ckcov_c ( ConstSpiceChar    * ck,
                  SpiceInt            idcode,
                  SpiceBoolean        needav,
                  ConstSpiceChar    * level,
                  SpiceDouble         tol,
                  ConstSpiceChar    * timsys,
                  SpiceCell         * cover   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* ckSpiceInt idcodeSpiceBoolean needavConstSpiceChar* levelSpiceDouble tolConstSpiceChar* timsysSpiceCell* cover
```
#### Outputs
```

```
## cklpf_c
```c
void cklpf_c ( ConstSpiceChar * filename,
                  SpiceInt       * handle    )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* filename
```
#### Outputs
```
SpiceInt* handle
```
## ckobj_c
```c
void ckobj_c ( ConstSpiceChar  * ck,
                  SpiceCell       * ids )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* ckSpiceCell* ids
```
#### Outputs
```

```
## ckupf_c
```c
void ckupf_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## ckw02_c
```c
void ckw02_c ( SpiceInt            handle, 
                  SpiceDouble         begtim,
                  SpiceDouble         endtim,
                  SpiceInt            inst,
                  ConstSpiceChar    * ref,
                  ConstSpiceChar    * segid, 
                  SpiceInt            nrec,
                  ConstSpiceDouble    start  [],
                  ConstSpiceDouble    stop   [],
                  ConstSpiceDouble    quats  [][4],
                  ConstSpiceDouble    avvs   [][3],
                  ConstSpiceDouble    rates  []    )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceDouble begtimSpiceDouble endtimSpiceInt instConstSpiceChar* refConstSpiceChar* segidSpiceInt nrecConstSpiceDouble startConstSpiceDouble stopConstSpiceDouble quats
```
#### Outputs
```
ConstSpiceDouble avvsConstSpiceDouble rates
```
## ckw05_c
```c
void ckw05_c ( SpiceInt            handle,
                  SpiceCK05Subtype    subtyp,
                  SpiceInt            degree,
                  SpiceDouble         begtim,
                  SpiceDouble         endtim,
                  SpiceInt            inst,
                  ConstSpiceChar    * ref,
                  SpiceBoolean        avflag,
                  ConstSpiceChar    * segid, 
                  SpiceInt            n,
                  ConstSpiceDouble    sclkdp [],
                  const void        * packts,
                  SpiceDouble         rate,
                  SpiceInt            nints,
                  ConstSpiceDouble    starts []    )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceCK05Subtype subtypSpiceInt degreeSpiceDouble begtimSpiceDouble endtimSpiceInt instConstSpiceChar* refSpiceBoolean avflagConstSpiceChar* segidSpiceDouble rateSpiceInt nintsConstSpiceDouble starts
```
#### Outputs
```
SpiceInt nConstSpiceDouble sclkdpconst void
```
## clpool_c
```c
void clpool_c ( void )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```

```
## cmprss_c
```c
void cmprss_c ( SpiceChar          delim,
                   SpiceInt           n,
                   ConstSpiceChar   * input,
                   SpiceInt           lenout,
                   SpiceChar        * output  )
```
#### Return
```
void
```
#### Inputs
```
SpiceChar delimSpiceInt nConstSpiceChar* inputSpiceInt lenout
```
#### Outputs
```
SpiceChar* output
```
## cnmfrm_c
```c
void cnmfrm_c ( ConstSpiceChar   * cname,
                   SpiceInt           lenout,
                   SpiceInt         * frcode,
                   SpiceChar        * frname,
                   SpiceBoolean     * found   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* cnameSpiceInt lenout
```
#### Outputs
```
SpiceInt* frcodeSpiceChar* frnameSpiceBoolean* found
```
## conics_c
```c
void conics_c ( ConstSpiceDouble  elts[8],
                   SpiceDouble       et,
                   SpiceDouble       state[6] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* elts[8]SpiceDouble et
```
#### Outputs
```
SpiceDouble* state[6]
```
## convrt_c
```c
void convrt_c ( SpiceDouble       x,
                   ConstSpiceChar  * in,
                   ConstSpiceChar  * out,
                   SpiceDouble     * y    )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble xConstSpiceChar* inConstSpiceChar* out
```
#### Outputs
```
SpiceDouble* y
```
## copy_c
```c
void copy_c (  SpiceCell   * cell,
                  SpiceCell   * copy  )
```
#### Return
```
void
```
#### Inputs
```
SpiceCell* cell
```
#### Outputs
```
SpiceCell* copy
```
## cposr_c
```c
nt cposr_c ( ConstSpiceChar    * str,
                      ConstSpiceChar    * chars,
                      SpiceInt            start  )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* strConstSpiceChar* charsSpiceInt start
```
#### Outputs
```

```
## cpos_c
```c
nt cpos_c ( ConstSpiceChar    * str,
                     ConstSpiceChar    * chars,
                     SpiceInt            start  )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* strConstSpiceChar* charsSpiceInt start
```
#### Outputs
```

```
## cvpool_c
```c
void cvpool_c ( ConstSpiceChar  * agent,
                   SpiceBoolean    * update )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* agent
```
#### Outputs
```
SpiceBoolean* update
```
## cyllat_c
```c
void cyllat_c ( SpiceDouble    r,
                   SpiceDouble    lonc,
                   SpiceDouble    z,
                   SpiceDouble *  radius,
                   SpiceDouble *  lon,
                   SpiceDouble *  lat )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble rSpiceDouble loncSpiceDouble z
```
#### Outputs
```
SpiceDouble* radiusSpiceDouble* lonSpiceDouble* lat
```
## cylrec_c
```c
void cylrec_c ( SpiceDouble r,
                   SpiceDouble lon,
                   SpiceDouble z,
                   SpiceDouble rectan[3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble rSpiceDouble lonSpiceDouble z
```
#### Outputs
```
SpiceDouble* rectan[3]
```
## cylsph_c
```c
void cylsph_c ( SpiceDouble    r,
                   SpiceDouble    lonc,
                   SpiceDouble    z,
                   SpiceDouble *  radius,
                   SpiceDouble *  colat,
                   SpiceDouble *  lon )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble rSpiceDouble loncSpiceDouble z
```
#### Outputs
```
SpiceDouble* radiusSpiceDouble* colatSpiceDouble* lon
```
## dafac_c
```c
void dafac_c ( SpiceInt      handle,
                  SpiceInt      n,
                  SpiceInt      lenvals,
                  const void  * buffer  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt n
```
#### Outputs
```
SpiceInt lenvalsconst void
```
## dafbbs_c
```c
void dafbbs_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## dafbfs_c
```c
void dafbfs_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## dafcls_c
```c
void dafcls_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## dafcs_c
```c
void dafcs_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## dafdc_c
```c
void dafdc_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## dafec_c
```c
void dafec_c ( SpiceInt          handle,
                  SpiceInt          bufsiz,
                  SpiceInt          lenout,
                  SpiceInt        * n,
                  void            * buffer,
                  SpiceBoolean    * done    )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bufsizSpiceInt lenout
```
#### Outputs
```
SpiceInt* nvoid* bufferSpiceBoolean* done
```
## daffna_c
```c
void daffna_c ( SpiceBoolean  * found )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
SpiceBoolean* found
```
## daffpa_c
```c
void daffpa_c ( SpiceBoolean  * found )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
SpiceBoolean* found
```
## dafgda_c
```c
void dafgda_c ( SpiceInt       handle, 
                   SpiceInt       begin,
                   SpiceInt       end,
                   SpiceDouble  * data )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt beginSpiceInt end
```
#### Outputs
```
SpiceDouble* data
```
## dafgn_c
```c
void dafgn_c ( SpiceInt     lenout,
                  SpiceChar  * name   )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt lenout
```
#### Outputs
```
SpiceChar* name
```
## dafgsr_c
```c
void dafgsr_c  ( SpiceInt        handle,
                    SpiceInt        recno,
                    SpiceInt        begin,
                    SpiceInt        end,
                    SpiceDouble   * data,
                    SpiceBoolean  * found  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt recnoSpiceInt beginSpiceInt end
```
#### Outputs
```
SpiceDouble* dataSpiceBoolean* found
```
## dafgs_c
```c
void dafgs_c ( SpiceDouble sum[] )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
SpiceDouble sum
```
## dafopr_c
```c
void dafopr_c ( ConstSpiceChar    * fname,
                   SpiceInt          * handle  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fname
```
#### Outputs
```
SpiceInt* handle
```
## dafopw_c
```c
void dafopw_c ( ConstSpiceChar  * fname,
                   SpiceInt        * handle )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fname
```
#### Outputs
```
SpiceInt* handle
```
## dafps_c
```c
void dafps_c ( SpiceInt             nd,
                  SpiceInt             ni,
                  ConstSpiceDouble   * dc,
                  ConstSpiceInt      * ic,
                  SpiceDouble        * sum )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt ndSpiceInt niConstSpiceDouble* dcConstSpiceInt* ic
```
#### Outputs
```
SpiceDouble* sum
```
## dafrda_c
```c
void dafrda_c ( SpiceInt       handle, 
                   SpiceInt       begin,
                   SpiceInt       end,
                   SpiceDouble  * data )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt beginSpiceInt end
```
#### Outputs
```
SpiceDouble* data
```
## dafrfr_c
```c
void dafrfr_c ( SpiceInt     handle,
                   SpiceInt     lenout,
                   SpiceInt   * nd,
                   SpiceInt   * ni,
                   SpiceChar  * ifname,
                   SpiceInt   * fward,
                   SpiceInt   * bward,
                   SpiceInt   * free    )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt lenout
```
#### Outputs
```
SpiceInt* ndSpiceInt* niSpiceChar* ifnameSpiceInt* fwardSpiceInt* bwardSpiceInt* free
```
## dafrs_c
```c
void dafrs_c ( ConstSpiceDouble  * sum )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* sum
```
#### Outputs
```

```
## dafus_c
```c
void dafus_c ( ConstSpiceDouble   sum [],
                  SpiceInt           nd,
                  SpiceInt           ni,
                  SpiceDouble        dc  [],
                  SpiceInt           ic  []  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble sumSpiceInt ndSpiceInt ni
```
#### Outputs
```
SpiceDouble dcSpiceInt ic
```
## dasac_c
```c
void dasac_c ( SpiceInt       handle,
                  SpiceInt       n,
                  SpiceInt       buflen,
                  const void   * buffer  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt nSpiceInt buflen
```
#### Outputs
```
const void
```
## dascls_c
```c
void dascls_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## dasec_c
```c
void dasec_c ( SpiceInt         handle,
                  SpiceInt         bufsiz,
                  SpiceInt         buflen,
                  SpiceInt       * n,
                  void           * buffer,
                  SpiceBoolean   * done   )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bufsizSpiceInt buflen
```
#### Outputs
```
SpiceInt* nvoid* bufferSpiceBoolean* done
```
## dasopr_c
```c
void dasopr_c ( ConstSpiceChar  * fname,
                   SpiceInt        * handle )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fname
```
#### Outputs
```
SpiceInt* handle
```
## dcyldr_c
```c
void dcyldr_c ( SpiceDouble    x,
                   SpiceDouble    y,
                   SpiceDouble    z,
                   SpiceDouble    jacobi[3][3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble z
```
#### Outputs
```
SpiceDouble xSpiceDouble ySpiceDouble* jacobi[3]
```
## deltet_c
```c
void deltet_c ( SpiceDouble      epoch,
                   ConstSpiceChar * eptype,
                   SpiceDouble    * delta )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble epochConstSpiceChar* eptype
```
#### Outputs
```
SpiceDouble* delta
```
## det_c
```c
ouble det_c ( ConstSpiceDouble m1[3][3] )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceDouble* m1[3]
```
#### Outputs
```

```
## dgeodr_c
```c
void dgeodr_c ( SpiceDouble   x,
                   SpiceDouble   y,
                   SpiceDouble   z,
                   SpiceDouble   re,
                   SpiceDouble   f,
                   SpiceDouble   jacobi[3][3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble zSpiceDouble reSpiceDouble f
```
#### Outputs
```
SpiceDouble xSpiceDouble ySpiceDouble* jacobi[3]
```
## diags2_c
```c
void diags2_c ( ConstSpiceDouble    symmat [2][2],
                   SpiceDouble         diag   [2][2],
                   SpiceDouble         rotate [2][2]  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble symmat
```
#### Outputs
```
SpiceDouble diagSpiceDouble rotate
```
## diff_c
```c
void diff_c (  SpiceCell   * a,
                  SpiceCell   * b,
                  SpiceCell   * c  )
```
#### Return
```
void
```
#### Inputs
```
SpiceCell* aSpiceCell* b
```
#### Outputs
```
SpiceCell* c
```
## dlatdr_c
```c
void dlatdr_c ( SpiceDouble   x,
                   SpiceDouble   y,
                   SpiceDouble   z,
                   SpiceDouble   jacobi[3][3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble z
```
#### Outputs
```
SpiceDouble xSpiceDouble ySpiceDouble* jacobi[3]
```
## dp2hx_c
```c
void dp2hx_c ( SpiceDouble   number,
                  SpiceInt      lenout,
                  SpiceChar   * string,
                  SpiceInt    * length
                 )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble numberSpiceInt lenout
```
#### Outputs
```
SpiceChar* stringSpiceInt* length
```
## dpgrdr_c
```c
void dpgrdr_c ( ConstSpiceChar  * body,
                   SpiceDouble       x,
                   SpiceDouble       y,
                   SpiceDouble       z,
                   SpiceDouble       re,
                   SpiceDouble       f,
                   SpiceDouble       jacobi[3][3]  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* bodySpiceDouble zSpiceDouble reSpiceDouble f
```
#### Outputs
```
SpiceDouble xSpiceDouble ySpiceDouble* jacobi[3]
```
## dpmax_
```c
ouble dpmax_ ()
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## dpmax_c
```c
ouble dpmax_c ()
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## dpmin_
```c
ouble dpmin_ ()
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## dpmin_c
```c
ouble dpmin_c ()
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## drdcyl_c
```c
void drdcyl_c ( SpiceDouble    r,
                   SpiceDouble    lon,
                   SpiceDouble    z,
                   SpiceDouble    jacobi[3][3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble rSpiceDouble lonSpiceDouble z
```
#### Outputs
```
SpiceDouble* jacobi[3]
```
## drdgeo_c
```c
void drdgeo_c ( SpiceDouble    lon,
                   SpiceDouble    lat,
                   SpiceDouble    alt,
                   SpiceDouble    re,
                   SpiceDouble    f,
                   SpiceDouble    jacobi[3][3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble lonSpiceDouble latSpiceDouble altSpiceDouble reSpiceDouble f
```
#### Outputs
```
SpiceDouble* jacobi[3]
```
## drdlat_c
```c
void drdlat_c ( SpiceDouble   r,
                   SpiceDouble   lon,
                   SpiceDouble   lat,
                   SpiceDouble   jacobi[3][3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble lonSpiceDouble lat
```
#### Outputs
```
SpiceDouble rSpiceDouble* jacobi[3]
```
## drdpgr_c
```c
void drdpgr_c ( ConstSpiceChar  * body,
                   SpiceDouble       lon,
                   SpiceDouble       lat,
                   SpiceDouble       alt,
                   SpiceDouble       re,
                   SpiceDouble       f,
                   SpiceDouble       jacobi[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* bodySpiceDouble lonSpiceDouble latSpiceDouble altSpiceDouble reSpiceDouble f
```
#### Outputs
```
SpiceDouble* jacobi[3]
```
## drdsph_c
```c
void drdsph_c ( SpiceDouble    r,
                   SpiceDouble    colat,
                   SpiceDouble    lon,
                   SpiceDouble    jacobi[3][3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble rSpiceDouble colatSpiceDouble lon
```
#### Outputs
```
SpiceDouble* jacobi[3]
```
## dsphdr_c
```c
void dsphdr_c ( SpiceDouble   x,
                   SpiceDouble   y,
                   SpiceDouble   z,
                   SpiceDouble   jacobi[3][3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble z
```
#### Outputs
```
SpiceDouble xSpiceDouble ySpiceDouble* jacobi[3]
```
## dtpool_c
```c
void dtpool_c ( ConstSpiceChar   * name,
                   SpiceBoolean     * found,
                   SpiceInt         * n,
                   SpiceChar          type [1] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* name
```
#### Outputs
```
SpiceBoolean* foundSpiceInt* nSpiceChar type
```
## ducrss_c
```c
void ducrss_c ( ConstSpiceDouble s1  [6],
                   ConstSpiceDouble s2  [6],
                   SpiceDouble      sout[6] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble s1ConstSpiceDouble s2
```
#### Outputs
```
SpiceDouble* sout[6]
```
## dvcrss_c
```c
void dvcrss_c ( ConstSpiceDouble s1  [6],
                   ConstSpiceDouble s2  [6],
                   SpiceDouble      sout[6] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble s1ConstSpiceDouble s2
```
#### Outputs
```
SpiceDouble* sout[6]
```
## dvdot_c
```c
ouble dvdot_c ( ConstSpiceDouble s1[6],
                         ConstSpiceDouble s2[6] )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceDouble* s1[6]ConstSpiceDouble* s2[6]
```
#### Outputs
```

```
## dvhat_c
```c
void dvhat_c ( ConstSpiceDouble s1  [6],
                  SpiceDouble      sout[6] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble s1
```
#### Outputs
```
SpiceDouble* sout[6]
```
## dvnorm_c
```c
ouble       dvnorm_c ( ConstSpiceDouble state[6] )
```
#### Return
```
ouble      
```
#### Inputs
```
ConstSpiceDouble* state[6]
```
#### Outputs
```

```
## dvpool_c
```c
void dvpool_c ( ConstSpiceChar  * name )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* name
```
#### Outputs
```

```
## dvsep_c
```c
ouble dvsep_c (ConstSpiceDouble s1[6], ConstSpiceDouble s2[6] )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceDouble* s1[6]ConstSpiceDouble* s2[6]
```
#### Outputs
```

```
## edlimb_c
```c
void edlimb_c ( SpiceDouble           a,
                   SpiceDouble           b,
                   SpiceDouble           c,
                   ConstSpiceDouble      viewpt[3],
                   SpiceEllipse        * limb      )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble cConstSpiceDouble* viewpt[3]
```
#### Outputs
```
SpiceDouble aSpiceDouble bSpiceEllipse* limb
```
## ekacec_c
```c
void ekacec_c  ( SpiceInt          handle,
                    SpiceInt          segno,
                    SpiceInt          recno,
                    ConstSpiceChar  * column,
                    SpiceInt          nvals,
                    SpiceInt          vallen,
                    const void      * cvals,
                    SpiceBoolean      isnull )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt recnoConstSpiceChar* columnSpiceInt nvalsSpiceInt vallenSpiceBoolean isnull
```
#### Outputs
```
const void
```
## ekaced_c
```c
void ekaced_c  ( SpiceInt            handle,
                    SpiceInt            segno,
                    SpiceInt            recno,
                    ConstSpiceChar    * column,
                    SpiceInt            nvals,
                    ConstSpiceDouble  * dvals,
                    SpiceBoolean        isnull )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt recnoConstSpiceChar* columnConstSpiceDouble* dvalsSpiceBoolean isnull
```
#### Outputs
```
SpiceInt nvals
```
## ekacei_c
```c
void ekacei_c  ( SpiceInt          handle,
                    SpiceInt          segno,
                    SpiceInt          recno,
                    ConstSpiceChar  * column,
                    SpiceInt          nvals,
                    ConstSpiceInt   * ivals,
                    SpiceBoolean      isnull )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt recnoConstSpiceChar* columnConstSpiceInt* ivalsSpiceBoolean isnull
```
#### Outputs
```
SpiceInt nvals
```
## ekaclc_c
```c
void ekaclc_c ( SpiceInt                handle,
                   SpiceInt                segno,
                   ConstSpiceChar        * column,
                   SpiceInt                vallen,
                   const void            * cvals,
                   ConstSpiceInt         * entszs,
                   ConstSpiceBoolean     * nlflgs,
                   ConstSpiceInt         * rcptrs,
                   SpiceInt              * wkindx  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoConstSpiceChar* columnSpiceInt vallenConstSpiceInt* entszsConstSpiceBoolean* nlflgsConstSpiceInt* rcptrsSpiceInt* wkindx
```
#### Outputs
```
const void
```
## ekacld_c
```c
void ekacld_c ( SpiceInt                handle,
                   SpiceInt                segno,
                   ConstSpiceChar        * column,
                   ConstSpiceDouble      * dvals,
                   ConstSpiceInt         * entszs,
                   ConstSpiceBoolean     * nlflgs,
                   ConstSpiceInt         * rcptrs,
                   SpiceInt              * wkindx  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoConstSpiceChar* columnConstSpiceDouble* dvalsConstSpiceInt* entszsConstSpiceBoolean* nlflgsConstSpiceInt* rcptrsSpiceInt* wkindx
```
#### Outputs
```

```
## ekacli_c
```c
void ekacli_c ( SpiceInt                handle,
                   SpiceInt                segno,
                   ConstSpiceChar        * column,
                   ConstSpiceInt         * ivals,
                   ConstSpiceInt         * entszs,
                   ConstSpiceBoolean     * nlflgs,
                   ConstSpiceInt         * rcptrs,
                   SpiceInt              * wkindx  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoConstSpiceChar* columnConstSpiceInt* ivalsConstSpiceInt* entszsConstSpiceBoolean* nlflgsConstSpiceInt* rcptrsSpiceInt* wkindx
```
#### Outputs
```

```
## ekappr_c
```c
void ekappr_c ( SpiceInt     handle,
                   SpiceInt     segno,
                   SpiceInt   * recno  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segno
```
#### Outputs
```
SpiceInt* recno
```
## ekbseg_c
```c
void ekbseg_c ( SpiceInt           handle,
                   ConstSpiceChar   * tabnam,
                   SpiceInt           ncols,
                   SpiceInt           cnmlen,
                   const void       * cnames,
                   SpiceInt           declen,
                   const void       * decls,
                   SpiceInt         * segno  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleConstSpiceChar* tabnamSpiceInt ncolsSpiceInt cnmlenSpiceInt declen
```
#### Outputs
```
const voidSpiceInt* segno
```
## ekccnt_c
```c
void ekccnt_c ( ConstSpiceChar  * table,
                   SpiceInt        * ccount )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* table
```
#### Outputs
```
SpiceInt* ccount
```
## ekcii_c
```c
void ekcii_c ( ConstSpiceChar   * table,
                  SpiceInt           cindex,
                  SpiceInt           lenout,
                  SpiceChar        * column,
                  SpiceEKAttDsc    * attdsc  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* tableSpiceInt cindexSpiceInt lenout
```
#### Outputs
```
SpiceChar* columnSpiceEKAttDsc* attdsc
```
## ekcls_c
```c
void ekcls_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## ekdelr_c
```c
void ekdelr_c ( SpiceInt   handle,
                   SpiceInt   segno,
                   SpiceInt   recno )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt recno
```
#### Outputs
```

```
## ekffld_c
```c
void ekffld_c ( SpiceInt     handle,
                   SpiceInt     segno,
                   SpiceInt   * rcptrs )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt* rcptrs
```
#### Outputs
```

```
## ekfind_c
```c
void ekfind_c ( ConstSpiceChar    * query,
                   SpiceInt            lenout, 
                   SpiceInt          * nmrows,
                   SpiceBoolean      * error,
                   SpiceChar         * errmsg )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* querySpiceInt lenout
```
#### Outputs
```
SpiceInt* nmrowsSpiceBoolean* errorSpiceChar* errmsg
```
## ekgc_c
```c
void ekgc_c ( SpiceInt          selidx,
                 SpiceInt          row,
                 SpiceInt          elment,
                 SpiceInt          lenout,
                 SpiceChar       * cdata,
                 SpiceBoolean    * null,
                 SpiceBoolean    * found  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt selidxSpiceInt rowSpiceInt elmentSpiceInt lenout
```
#### Outputs
```
SpiceChar* cdataSpiceBoolean* nullSpiceBoolean* found
```
## ekgd_c
```c
void ekgd_c ( SpiceInt          selidx,
                 SpiceInt          row,
                 SpiceInt          elment,
                 SpiceDouble     * ddata,
                 SpiceBoolean    * null,
                 SpiceBoolean    * found  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt selidxSpiceInt rowSpiceInt elment
```
#### Outputs
```
SpiceDouble* ddataSpiceBoolean* nullSpiceBoolean* found
```
## ekgi_c
```c
void ekgi_c ( SpiceInt          selidx,
                 SpiceInt          row,
                 SpiceInt          elment,
                 SpiceInt        * idata,
                 SpiceBoolean    * null,
                 SpiceBoolean    * found  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt selidxSpiceInt rowSpiceInt elment
```
#### Outputs
```
SpiceInt* idataSpiceBoolean* nullSpiceBoolean* found
```
## ekifld_c
```c
void ekifld_c ( SpiceInt           handle,
                   ConstSpiceChar   * tabnam,
                   SpiceInt           ncols,
                   SpiceInt           nrows,
                   SpiceInt           cnmlen,
                   const void       * cnames,
                   SpiceInt           declen,
                   const void       * decls,
                   SpiceInt         * segno,
                   SpiceInt         * rcptrs )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleConstSpiceChar* tabnamSpiceInt ncolsSpiceInt nrowsSpiceInt cnmlenSpiceInt declen
```
#### Outputs
```
const voidSpiceInt* segnoSpiceInt* rcptrs
```
## ekinsr_c
```c
void ekinsr_c ( SpiceInt  handle,
                   SpiceInt  segno,
                   SpiceInt  recno )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt recno
```
#### Outputs
```

```
## eklef_c
```c
void eklef_c ( ConstSpiceChar  * fname,
                  SpiceInt        * handle )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fname
```
#### Outputs
```
SpiceInt* handle
```
## eknelt_c
```c
nt eknelt_c ( SpiceInt  selidx,
                       SpiceInt  row     )
```
#### Return
```
nt
```
#### Inputs
```
SpiceInt selidxSpiceInt row
```
#### Outputs
```

```
## eknseg_c
```c
nt eknseg_c ( SpiceInt handle )
```
#### Return
```
nt
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## ekntab_c
```c
void ekntab_c ( SpiceInt   * n )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
SpiceInt* n
```
## ekopn_c
```c
void ekopn_c ( ConstSpiceChar    * fname,
                  ConstSpiceChar    * ifname,
                  SpiceInt            ncomch,
                  SpiceInt          * handle )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fnameConstSpiceChar* ifnameSpiceInt ncomch
```
#### Outputs
```
SpiceInt* handle
```
## ekopr_c
```c
void ekopr_c ( ConstSpiceChar  * fname,
                  SpiceInt        * handle )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fname
```
#### Outputs
```
SpiceInt* handle
```
## ekops_c
```c
void ekops_c ( SpiceInt   * handle )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
SpiceInt* handle
```
## ekopw_c
```c
void ekopw_c ( ConstSpiceChar  * fname,
                  SpiceInt        * handle )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fname
```
#### Outputs
```
SpiceInt* handle
```
## ekpsel_c
```c
void ekpsel_c ( ConstSpiceChar        * query,
                   SpiceInt                msglen,
                   SpiceInt                tablen,
                   SpiceInt                collen,
                   SpiceInt              * n,
                   SpiceInt              * xbegs,
                   SpiceInt              * xends,
                   SpiceEKDataType       * xtypes,
                   SpiceEKExprClass      * xclass,
                   void                  * tabs,
                   void                  * cols,
                   SpiceBoolean          * error,
                   SpiceChar             * errmsg                     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* querySpiceInt msglenSpiceInt tablenSpiceInt collen
```
#### Outputs
```
SpiceInt* nSpiceInt* xbegsSpiceInt* xendsSpiceEKDataType* xtypesSpiceEKExprClass* xclassvoid* tabsvoid* colsSpiceBoolean* errorSpiceChar* errmsg
```
## ekrcec_c
```c
void ekrcec_c ( SpiceInt           handle,
                   SpiceInt           segno,
                   SpiceInt           recno,
                   ConstSpiceChar   * column,
                   SpiceInt           lenout,
                   SpiceInt         * nvals,
                   void             * cvals,
                   SpiceBoolean     * isnull )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt recnoConstSpiceChar* columnSpiceInt lenout
```
#### Outputs
```
SpiceInt* nvalsvoid* cvalsSpiceBoolean* isnull
```
## ekrced_c
```c
void ekrced_c ( SpiceInt           handle,
                   SpiceInt           segno,
                   SpiceInt           recno,
                   ConstSpiceChar   * column,
                   SpiceInt         * nvals,
                   SpiceDouble      * dvals,
                   SpiceBoolean     * isnull )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt recnoConstSpiceChar* column
```
#### Outputs
```
SpiceInt* nvalsSpiceDouble* dvalsSpiceBoolean* isnull
```
## ekrcei_c
```c
void ekrcei_c ( SpiceInt           handle,
                   SpiceInt           segno,
                   SpiceInt           recno,
                   ConstSpiceChar   * column,
                   SpiceInt         * nvals,
                   SpiceInt         * ivals,
                   SpiceBoolean     * isnull )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt recnoConstSpiceChar* column
```
#### Outputs
```
SpiceInt* nvalsSpiceInt* ivalsSpiceBoolean* isnull
```
## ekssum_c
```c
void ekssum_c ( SpiceInt           handle,
                   SpiceInt           segno,
                   SpiceEKSegSum    * segsum )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segno
```
#### Outputs
```
SpiceEKSegSum* segsum
```
## ektnam_c
```c
void ektnam_c ( SpiceInt     n,
                   SpiceInt     lenout,
                   SpiceChar  * table  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt nSpiceInt lenout
```
#### Outputs
```
SpiceChar* table
```
## ekucec_c
```c
void ekucec_c  ( SpiceInt          handle,
                    SpiceInt          segno,
                    SpiceInt          recno,
                    ConstSpiceChar  * column,
                    SpiceInt          nvals,
                    SpiceInt          vallen,
                    const void      * cvals,
                    SpiceBoolean      isnull )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt recnoConstSpiceChar* columnSpiceInt nvalsSpiceInt vallenSpiceBoolean isnull
```
#### Outputs
```
const void
```
## ekuced_c
```c
void ekuced_c  ( SpiceInt             handle,
                    SpiceInt             segno,
                    SpiceInt             recno,
                    ConstSpiceChar     * column,
                    SpiceInt             nvals,
                    ConstSpiceDouble   * dvals,
                    SpiceBoolean         isnull )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt recnoConstSpiceChar* columnConstSpiceDouble* dvalsSpiceBoolean isnull
```
#### Outputs
```
SpiceInt nvals
```
## ekucei_c
```c
void ekucei_c  ( SpiceInt          handle,
                    SpiceInt          segno,
                    SpiceInt          recno,
                    ConstSpiceChar  * column,
                    SpiceInt          nvals,
                    ConstSpiceInt   * ivals,
                    SpiceBoolean      isnull )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt segnoSpiceInt recnoConstSpiceChar* columnConstSpiceInt* ivalsSpiceBoolean isnull
```
#### Outputs
```
SpiceInt nvals
```
## ekuef_c
```c
void ekuef_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## el2cgv_c
```c
void el2cgv_c ( ConstSpiceEllipse   * ellipse,
                   SpiceDouble           center[3],
                   SpiceDouble           smajor[3],
                   SpiceDouble           sminor[3]  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceEllipse* ellipse
```
#### Outputs
```
SpiceDouble* center[3]SpiceDouble* smajor[3]SpiceDouble* sminor[3]
```
## elemc_c
```c
oolean elemc_c ( ConstSpiceChar  * item,
                          SpiceCell       * set   )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceChar* itemSpiceCell* set
```
#### Outputs
```

```
## elemd_c
```c
oolean elemd_c ( SpiceDouble     item,
                          SpiceCell     * set   )
```
#### Return
```
oolean
```
#### Inputs
```
SpiceDouble itemSpiceCell* set
```
#### Outputs
```

```
## elemi_c
```c
oolean elemi_c ( SpiceInt        item,
                          SpiceCell     * set   )
```
#### Return
```
oolean
```
#### Inputs
```
SpiceInt itemSpiceCell* set
```
#### Outputs
```

```
## eqstr_c
```c
oolean eqstr_c ( ConstSpiceChar * a,  ConstSpiceChar * b )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceChar* aConstSpiceChar* b
```
#### Outputs
```

```
## erract_c
```c
void erract_c ( ConstSpiceChar * op,
                   SpiceInt         lenout,
                   SpiceChar      * action )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* opSpiceInt lenoutSpiceChar* action
```
#### Outputs
```

```
## errch_c
```c
void errch_c ( ConstSpiceChar * marker,
                  ConstSpiceChar * string )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* markerConstSpiceChar* string
```
#### Outputs
```

```
## errdev_c
```c
void errdev_c ( ConstSpiceChar * op,
                   SpiceInt         lenout,
                   SpiceChar      * device )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* op
```
#### Outputs
```
SpiceInt lenoutSpiceChar* device
```
## errdp_c
```c
void errdp_c ( ConstSpiceChar  * marker,
                  SpiceDouble       number  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* markerSpiceDouble number
```
#### Outputs
```

```
## errint_c
```c
void errint_c ( ConstSpiceChar  * marker,
                   SpiceInt          number  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* markerSpiceInt number
```
#### Outputs
```

```
## errprt_c
```c
void errprt_c ( ConstSpiceChar * op,
                   SpiceInt         lenout,
                   SpiceChar      * list  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* opSpiceChar* list
```
#### Outputs
```
SpiceInt lenout
```
## esrchc_c
```c
nt esrchc_c ( ConstSpiceChar  * value,
                       SpiceInt          ndim,
                       SpiceInt          lenvals,
                       const void      * array    )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* valueSpiceInt ndimSpiceInt lenvals
```
#### Outputs
```
const void
```
## et2lst_c
```c
void et2lst_c ( SpiceDouble        et,
                   SpiceInt           body,
                   SpiceDouble        lon,
                   ConstSpiceChar   * type,
                   SpiceInt           timlen,
                   SpiceInt           ampmlen,
                   SpiceInt         * hr,
                   SpiceInt         * mn,
                   SpiceInt         * sc,
                   SpiceChar        * time,
                   SpiceChar        * ampm )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt bodySpiceDouble lonConstSpiceChar* typeSpiceInt timlenSpiceInt ampmlen
```
#### Outputs
```
SpiceDouble etSpiceInt* hrSpiceInt* mnSpiceInt* scSpiceChar* timeSpiceChar* ampm
```
## et2utc_c
```c
void et2utc_c (  SpiceDouble       et,
                    ConstSpiceChar  * format,
                    SpiceInt          prec,
                    SpiceInt          lenout,
                    SpiceChar       * utcstr   )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble etConstSpiceChar* formatSpiceInt precSpiceInt lenout
```
#### Outputs
```
SpiceChar* utcstr
```
## etcal_c
```c
void etcal_c ( SpiceDouble   et,
                  SpiceInt      lenout,
                  SpiceChar   * string )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble etSpiceInt lenout
```
#### Outputs
```
SpiceChar* string
```
## eul2m_c
```c
void eul2m_c ( SpiceDouble  angle3,
                  SpiceDouble  angle2,
                  SpiceDouble  angle1,
                  SpiceInt     axis3,
                  SpiceInt     axis2,
                  SpiceInt     axis1,
                  SpiceDouble  r [3][3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble angle3SpiceDouble angle2SpiceDouble angle1SpiceInt axis3SpiceInt axis2SpiceInt axis1
```
#### Outputs
```
SpiceDouble r
```
## eul2xf_c
```c
void eul2xf_c ( ConstSpiceDouble    eulang[6],
                   SpiceInt            axisa,
                   SpiceInt            axisb,
                   SpiceInt            axisc,
                   SpiceDouble         xform [6][6] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* eulang[6]SpiceInt axisaSpiceInt axisbSpiceInt axisc
```
#### Outputs
```
SpiceDouble xform
```
## exists_c
```c
oolean exists_c ( ConstSpiceChar  * fname )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceChar* fname
```
#### Outputs
```

```
## expool_c
```c
void expool_c ( ConstSpiceChar  * name,
                   SpiceBoolean    * found )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* name
```
#### Outputs
```
SpiceBoolean* found
```
## failed_c
```c
oolean failed_c ()
```
#### Return
```
oolean
```
#### Inputs
```

```
#### Outputs
```

```
## frame_c
```c
void frame_c ( SpiceDouble x[3],
                  SpiceDouble y[3],
                  SpiceDouble z[3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble* x[3]
```
#### Outputs
```
SpiceDouble* y[3]SpiceDouble* z[3]
```
## frinfo_c
```c
void frinfo_c ( SpiceInt       frcode,
                   SpiceInt      *cent,
                   SpiceInt      *frclss,
                   SpiceInt      *clssid,
                   SpiceBoolean  *found   )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt frcode
```
#### Outputs
```
SpiceInt* centSpiceInt* frclssSpiceInt* clssidSpiceBoolean* found
```
## frmnam_c
```c
void frmnam_c ( SpiceInt      frcode,
                   SpiceInt      lenout,
                   SpiceChar *   frname  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt frcodeSpiceInt lenout
```
#### Outputs
```
SpiceChar* frname
```
## furnsh_c
```c
void furnsh_c ( ConstSpiceChar  * file )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* file
```
#### Outputs
```

```
## gcpool_c
```c
void gcpool_c ( ConstSpiceChar * name,
                   SpiceInt         start,
                   SpiceInt         room,
                   SpiceInt         lenout,
                   SpiceInt       * n,
                   void           * cvals,
                   SpiceBoolean   * found )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* nameSpiceInt startSpiceInt roomSpiceInt lenout
```
#### Outputs
```
SpiceInt* nvoid* cvalsSpiceBoolean* found
```
## gdpool_c
```c
void gdpool_c ( ConstSpiceChar * name,
                   SpiceInt         start,
                   SpiceInt         room,
                   SpiceInt       * n,
                   SpiceDouble    * values,
                   SpiceBoolean   * found )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* nameSpiceInt startSpiceInt room
```
#### Outputs
```
SpiceInt* nSpiceDouble* valuesSpiceBoolean* found
```
## georec_c
```c
void georec_c ( SpiceDouble lon,
                   SpiceDouble lat,
                   SpiceDouble alt,
                   SpiceDouble re,
                   SpiceDouble f,
                   SpiceDouble rectan[3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble lonSpiceDouble latSpiceDouble altSpiceDouble reSpiceDouble f
```
#### Outputs
```
SpiceDouble* rectan[3]
```
## getcml_c
```c
void getcml_c ( SpiceInt     * argc,
                   SpiceChar  *** argv )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
SpiceInt* argcSpiceCha r
```
## getelm_c
```c
void getelm_c ( SpiceInt         frstyr,
                   SpiceInt         lineln,
                   const void     * lines,
                   SpiceDouble    * epoch,
                   SpiceDouble    * elems   )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt frstyr
```
#### Outputs
```
SpiceInt linelnconst voidSpiceDouble* epochSpiceDouble* elems
```
## getenv_
```c
void getenv_(fname, value, flen, vlen)
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
valu evle n
```
## getfat_c
```c
void getfat_c ( ConstSpiceChar   * file,
                   SpiceInt           arclen,
                   SpiceInt           typlen,
                   SpiceChar        * arch,
                   SpiceChar        * type   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fileSpiceInt arclenSpiceInt typlen
```
#### Outputs
```
SpiceChar* archSpiceChar* type
```
## getfov_c
```c
void getfov_c ( SpiceInt        instid,
                   SpiceInt        room,
                   SpiceInt        shapelen,
                   SpiceInt        framelen,
                   SpiceChar     * shape,
                   SpiceChar     * frame,
                   SpiceDouble     bsight [3],
                   SpiceInt      * n,
                   SpiceDouble     bounds [][3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt instidSpiceInt roomSpiceInt shapelenSpiceInt framelen
```
#### Outputs
```
SpiceChar* shapeSpiceChar* frameSpiceDouble bsightSpiceInt* nSpiceDouble bounds
```
## getmsg_c
```c
void getmsg_c ( ConstSpiceChar  * option,
                   SpiceInt          lenout,
                   SpiceChar       * msg     )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
ConstSpiceChar* optionSpiceInt lenoutSpiceChar* msg
```
## gfbail_c
```c
oolean gfbail_c ()
```
#### Return
```
oolean
```
#### Inputs
```

```
#### Outputs
```

```
## gfclrh_c
```c
void gfclrh_c ( void )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```

```
## gfdist_c
```c
void gfdist_c ( ConstSpiceChar     * target,
                   ConstSpiceChar     * abcorr,
                   ConstSpiceChar     * obsrvr,
                   ConstSpiceChar     * relate,
                   SpiceDouble          refval,
                   SpiceDouble          adjust,
                   SpiceDouble          step,
                   SpiceInt             nintvls,
                   SpiceCell          * cnfine,
                   SpiceCell          * result     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* targetConstSpiceChar* abcorrConstSpiceChar* obsrvrConstSpiceChar* relateSpiceDouble adjustSpiceDouble stepSpiceInt nintvlsSpiceCell* cnfine
```
#### Outputs
```
SpiceDouble refvalSpiceCell* result
```
## gffove_c
```c
void gffove_c ( ConstSpiceChar     * inst,
                   ConstSpiceChar     * tshape,
                   ConstSpiceDouble     raydir [3],
                   ConstSpiceChar     * target,
                   ConstSpiceChar     * tframe,
                   ConstSpiceChar     * abcorr,
                   ConstSpiceChar     * obsrvr,
                   SpiceDouble          tol,
                   void             ( * udstep )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* instConstSpiceChar* tshapeConstSpiceDouble raydirConstSpiceChar* targetConstSpiceChar* tframeConstSpiceChar* abcorrConstSpiceChar* obsrvrSpiceDouble tol
```
#### Outputs
```
voi d
```
## gfinth_c
```c
void gfinth_c ( int sigcode )
```
#### Return
```
void
```
#### Inputs
```
int sigcode
```
#### Outputs
```

```
## gfocce_c
```c
void gfocce_c ( ConstSpiceChar     * occtyp,
                   ConstSpiceChar     * front,
                   ConstSpiceChar     * fshape,
                   ConstSpiceChar     * fframe,
                   ConstSpiceChar     * back,
                   ConstSpiceChar     * bshape,
                   ConstSpiceChar     * bframe,
                   ConstSpiceChar     * abcorr,
                   ConstSpiceChar     * obsrvr,
                   SpiceDouble          tol,

                   void             ( * udstep )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* occtypConstSpiceChar* frontConstSpiceChar* fshapeConstSpiceChar* fframeConstSpiceChar* backConstSpiceChar* bshapeConstSpiceChar* bframeConstSpiceChar* abcorrConstSpiceChar* obsrvrSpiceDouble tol
```
#### Outputs
```
voi d
```
## gfoclt_c
```c
void gfoclt_c ( ConstSpiceChar   * occtyp,
                   ConstSpiceChar   * front,
                   ConstSpiceChar   * fshape,
                   ConstSpiceChar   * fframe,
                   ConstSpiceChar   * back,
                   ConstSpiceChar   * bshape,
                   ConstSpiceChar   * bframe,
                   ConstSpiceChar   * abcorr,
                   ConstSpiceChar   * obsrvr,
                   SpiceDouble        step,
                   SpiceCell        * cnfine,
                   SpiceCell        * result )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* occtypConstSpiceChar* frontConstSpiceChar* fshapeConstSpiceChar* fframeConstSpiceChar* backConstSpiceChar* bshapeConstSpiceChar* bframeConstSpiceChar* abcorrConstSpiceChar* obsrvrSpiceDouble stepSpiceCell* cnfine
```
#### Outputs
```
SpiceCell* result
```
## gfposc_c
```c
void gfposc_c ( ConstSpiceChar     * target,
                   ConstSpiceChar     * frame,
                   ConstSpiceChar     * abcorr,
                   ConstSpiceChar     * obsrvr,
                   ConstSpiceChar     * crdsys,
                   ConstSpiceChar     * coord,
                   ConstSpiceChar     * relate,
                   SpiceDouble          refval,
                   SpiceDouble          adjust,
                   SpiceDouble          step,
                   SpiceInt             nintvls,
                   SpiceCell          * cnfine,
                   SpiceCell          * result  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* targetConstSpiceChar* frameConstSpiceChar* abcorrConstSpiceChar* obsrvrConstSpiceChar* crdsysConstSpiceChar* coordConstSpiceChar* relateSpiceDouble refvalSpiceDouble adjustSpiceDouble stepSpiceInt nintvlsSpiceCell* cnfine
```
#### Outputs
```
SpiceCell* result
```
## gfrefn_c
```c
void gfrefn_c ( SpiceDouble     t1,
                   SpiceDouble     t2,
                   SpiceBoolean    s1,
                   SpiceBoolean    s2,
                   SpiceDouble   * t  )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble t1SpiceDouble t2SpiceBoolean s1SpiceBoolean s2
```
#### Outputs
```
SpiceDouble* t
```
## gfrepf_c
```c
void gfrepf_c ( void )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```

```
## gfrepi_c
```c
void gfrepi_c ( SpiceCell        * window,
                   ConstSpiceChar   * begmss,
                   ConstSpiceChar   * endmss  )
```
#### Return
```
void
```
#### Inputs
```
SpiceCell* windowConstSpiceChar* begmssConstSpiceChar* endmss
```
#### Outputs
```

```
## gfrepu_c
```c
void gfrepu_c ( SpiceDouble ivbeg,
                   SpiceDouble ivend,
                   SpiceDouble time  )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble ivendSpiceDouble time
```
#### Outputs
```
SpiceDouble ivbeg
```
## gfrfov_c
```c
void gfrfov_c ( ConstSpiceChar     * inst,
                   ConstSpiceDouble     raydir [3],
                   ConstSpiceChar     * rframe,
                   ConstSpiceChar     * abcorr,
                   ConstSpiceChar     * obsrvr,
                   SpiceDouble          step,
                   SpiceCell          * cnfine,
                   SpiceCell          * result  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* instConstSpiceDouble raydirConstSpiceChar* rframeConstSpiceChar* abcorrConstSpiceChar* obsrvrSpiceDouble stepSpiceCell* cnfine
```
#### Outputs
```
SpiceCell* result
```
## gfrr_c
```c
void gfrr_c ( ConstSpiceChar     * target,
                 ConstSpiceChar     * abcorr,
                 ConstSpiceChar     * obsrvr,
                 ConstSpiceChar     * relate,
                 SpiceDouble          refval,
                 SpiceDouble          adjust,
                 SpiceDouble          step,
                 SpiceInt             nintvls,
                 SpiceCell          * cnfine,
                 SpiceCell          * result  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* targetConstSpiceChar* abcorrConstSpiceChar* obsrvrConstSpiceChar* relateSpiceDouble refvalSpiceDouble adjustSpiceDouble stepSpiceInt nintvlsSpiceCell* cnfine
```
#### Outputs
```
SpiceCell* result
```
## gfsep_c
```c
void gfsep_c (  ConstSpiceChar     * targ1,
                   ConstSpiceChar     * shape1,
                   ConstSpiceChar     * frame1,
                   ConstSpiceChar     * targ2,
                   ConstSpiceChar     * shape2,
                   ConstSpiceChar     * frame2,
                   ConstSpiceChar     * abcorr,
                   ConstSpiceChar     * obsrvr,
                   ConstSpiceChar     * relate,
                   SpiceDouble          refval,
                   SpiceDouble          adjust,
                   SpiceDouble          step,
                   SpiceInt             nintvls,
                   SpiceCell          * cnfine,
                   SpiceCell          * result  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* targ1ConstSpiceChar* shape1ConstSpiceChar* frame1ConstSpiceChar* targ2ConstSpiceChar* shape2ConstSpiceChar* frame2ConstSpiceChar* abcorrConstSpiceChar* obsrvrConstSpiceChar* relateSpiceDouble refvalSpiceDouble adjustSpiceDouble stepSpiceInt nintvlsSpiceCell* cnfine
```
#### Outputs
```
SpiceCell* result
```
## gfsntc_c
```c
void gfsntc_c ( ConstSpiceChar     * target,
                   ConstSpiceChar     * fixref,
                   ConstSpiceChar     * method,
                   ConstSpiceChar     * abcorr,
                   ConstSpiceChar     * obsrvr,
                   ConstSpiceChar     * dref, 
                   ConstSpiceDouble     dvec   [3],
                   ConstSpiceChar     * crdsys,
                   ConstSpiceChar     * coord,
                   ConstSpiceChar     * relate,
                   SpiceDouble          refval,
                   SpiceDouble          adjust,
                   SpiceDouble          step,
                   SpiceInt             nintvls,
                   SpiceCell          * cnfine,
                   SpiceCell          * result  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* targetConstSpiceChar* fixrefConstSpiceChar* methodConstSpiceChar* abcorrConstSpiceChar* obsrvrConstSpiceChar* drefConstSpiceDouble dvecConstSpiceChar* crdsysConstSpiceChar* coordConstSpiceChar* relateSpiceDouble refvalSpiceDouble adjustSpiceDouble stepSpiceInt nintvlsSpiceCell* cnfine
```
#### Outputs
```
SpiceCell* result
```
## gfsstp_c
```c
void gfsstp_c ( SpiceDouble  step )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble step
```
#### Outputs
```

```
## gfstep_c
```c
void gfstep_c ( SpiceDouble    time,
                   SpiceDouble  * step )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble time
```
#### Outputs
```
SpiceDouble* step
```
## gfsubc_c
```c
void gfsubc_c ( ConstSpiceChar     * target,
                   ConstSpiceChar     * fixref,
                   ConstSpiceChar     * method,
                   ConstSpiceChar     * abcorr,
                   ConstSpiceChar     * obsrvr,
                   ConstSpiceChar     * crdsys,
                   ConstSpiceChar     * coord,
                   ConstSpiceChar     * relate,
                   SpiceDouble          refval,
                   SpiceDouble          adjust,
                   SpiceDouble          step,
                   SpiceInt             nintvls,
                   SpiceCell          * cnfine,
                   SpiceCell          * result  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* targetConstSpiceChar* fixrefConstSpiceChar* methodConstSpiceChar* abcorrConstSpiceChar* obsrvrConstSpiceChar* crdsysConstSpiceChar* coordConstSpiceChar* relateSpiceDouble refvalSpiceDouble adjustSpiceDouble stepSpiceInt nintvlsSpiceCell* cnfine
```
#### Outputs
```
SpiceCell* result
```
## gftfov_c
```c
void gftfov_c ( ConstSpiceChar     * inst,
                   ConstSpiceChar     * target,
                   ConstSpiceChar     * tshape,
                   ConstSpiceChar     * tframe,
                   ConstSpiceChar     * abcorr,
                   ConstSpiceChar     * obsrvr,
                   SpiceDouble          step,
                   SpiceCell          * cnfine,
                   SpiceCell          * result  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* instConstSpiceChar* targetConstSpiceChar* tshapeConstSpiceChar* tframeConstSpiceChar* abcorrConstSpiceChar* obsrvrSpiceDouble stepSpiceCell* cnfine
```
#### Outputs
```
SpiceCell* result
```
## gfuds_c
```c
void gfuds_c (  void             ( * udfunc )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
voi d
```
## gipool_c
```c
void gipool_c ( ConstSpiceChar * name,
                   SpiceInt         start,
                   SpiceInt         room,
                   SpiceInt       * n,
                   SpiceInt       * ivals,
                   SpiceBoolean   * found )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* nameSpiceInt startSpiceInt room
```
#### Outputs
```
SpiceInt* nSpiceInt* ivalsSpiceBoolean* found
```
## gnpool_c
```c
void gnpool_c ( ConstSpiceChar    * name,
                   SpiceInt            start,
                   SpiceInt            room,
                   SpiceInt            lenout,
                   SpiceInt          * n,
                   void              * kvars,
                   SpiceBoolean      * found  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* nameSpiceInt startSpiceInt roomSpiceInt lenout
```
#### Outputs
```
SpiceInt* nvoid* kvarsSpiceBoolean* found
```
## halfpi_c
```c
ouble halfpi_c ( void )
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## hx2dp_c
```c
void hx2dp_c ( ConstSpiceChar  * string,
                  SpiceInt          lenout,
                  SpiceDouble     * number,
                  SpiceBoolean    * error,
                  SpiceChar       * errmsg  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* stringSpiceInt lenout
```
#### Outputs
```
SpiceDouble* numberSpiceBoolean* errorSpiceChar* errmsg
```
## ident_c
```c
void ident_c ( SpiceDouble    matrix[3][3] )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
SpiceDouble* matrix[3]
```
## illum_c
```c
void illum_c  ( ConstSpiceChar          * target,
                   SpiceDouble               et,
                   ConstSpiceChar          * abcorr, 
                   ConstSpiceChar          * obsrvr, 
                   ConstSpiceDouble          spoint [3],
                   SpiceDouble             * phase,
                   SpiceDouble             * solar,
                   SpiceDouble             * emissn     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* targetSpiceDouble etConstSpiceChar* abcorrConstSpiceChar* obsrvrConstSpiceDouble spoint
```
#### Outputs
```
SpiceDouble* phaseSpiceDouble* solarSpiceDouble* emissn
```
## ilumin_c
```c
void ilumin_c ( ConstSpiceChar          * method,
                   ConstSpiceChar          * target,
                   SpiceDouble               et,
                   ConstSpiceChar          * fixref, 
                   ConstSpiceChar          * abcorr, 
                   ConstSpiceChar          * obsrvr, 
                   ConstSpiceDouble          spoint [3],
                   SpiceDouble             * trgepc,
                   SpiceDouble               srfvec [3],
                   SpiceDouble             * phase,
                   SpiceDouble             * solar,
                   SpiceDouble             * emissn     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* methodConstSpiceChar* targetSpiceDouble etConstSpiceChar* fixrefConstSpiceChar* abcorrConstSpiceChar* obsrvrConstSpiceDouble spoint
```
#### Outputs
```
SpiceDouble* trgepcSpiceDouble srfvecSpiceDouble* phaseSpiceDouble* solarSpiceDouble* emissn
```
## inedpl_c
```c
void inedpl_c ( SpiceDouble           a,
                   SpiceDouble           b,
                   SpiceDouble           c,
                   ConstSpicePlane     * plane,
                   SpiceEllipse        * ellipse,
                   SpiceBoolean        * found    )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble cConstSpicePlane* plane
```
#### Outputs
```
SpiceDouble aSpiceDouble bSpiceEllipse* ellipseSpiceBoolean* found
```
## inelpl_c
```c
void inelpl_c ( ConstSpiceEllipse  * ellips,
                   ConstSpicePlane    * plane,
                   SpiceInt           * nxpts,
                   SpiceDouble          xpt1[3],
                   SpiceDouble          xpt2[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceEllipse* ellipsConstSpicePlane* plane
```
#### Outputs
```
SpiceInt* nxptsSpiceDouble* xpt1[3]SpiceDouble* xpt2[3]
```
## inrypl_c
```c
void inrypl_c ( ConstSpiceDouble     vertex [3],
                   ConstSpiceDouble     dir    [3],
                   ConstSpicePlane    * plane,
                   SpiceInt           * nxpts,
                   SpiceDouble          xpt    [3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble dirConstSpicePlane* plane
```
#### Outputs
```
ConstSpiceDouble vertexSpiceInt* nxptsSpiceDouble xpt
```
## insrtc_c
```c
void insrtc_c ( ConstSpiceChar  * item,
                   SpiceCell       * set   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* itemSpiceCell* set
```
#### Outputs
```

```
## insrtd_c
```c
void insrtd_c ( SpiceDouble     item,
                   SpiceCell     * set  )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble itemSpiceCell* set
```
#### Outputs
```

```
## insrti_c
```c
void insrti_c ( SpiceInt        item,
                   SpiceCell     * set  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt itemSpiceCell* set
```
#### Outputs
```

```
## inter_c
```c
void inter_c (  SpiceCell   * a,
                   SpiceCell   * b,
                   SpiceCell   * c  )
```
#### Return
```
void
```
#### Inputs
```
SpiceCell* aSpiceCell* b
```
#### Outputs
```
SpiceCell* c
```
## intmax_
```c
nt intmax_ ()
```
#### Return
```
nt
```
#### Inputs
```

```
#### Outputs
```

```
## intmax_c
```c
nt intmax_c ()
```
#### Return
```
nt
```
#### Inputs
```

```
#### Outputs
```

```
## intmin_
```c
nt intmin_ ()
```
#### Return
```
nt
```
#### Inputs
```

```
#### Outputs
```

```
## intmin_c
```c
nt intmin_c ()
```
#### Return
```
nt
```
#### Inputs
```

```
#### Outputs
```

```
## invert_c
```c
void invert_c ( ConstSpiceDouble  m1  [3][3],
                   SpiceDouble       mout[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble m1
```
#### Outputs
```
SpiceDouble* mout[3]
```
## invort_c
```c
void invort_c ( ConstSpiceDouble   m  [3][3],
                   SpiceDouble        mit[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble m
```
#### Outputs
```
SpiceDouble* mit[3]
```
## isordv_c
```c
oolean isordv_c ( ConstSpiceInt  * array,
                           SpiceInt         n      )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceInt* arraySpiceInt n
```
#### Outputs
```

```
## isrchc_c
```c
nt isrchc_c ( ConstSpiceChar  * value,
                       SpiceInt          ndim,   
                       SpiceInt          lenvals,
                       const void      * array   )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* valueSpiceInt ndimSpiceInt lenvals
```
#### Outputs
```
const void
```
## isrchd_c
```c
nt isrchd_c ( SpiceDouble         value,
                       SpiceInt            ndim,
                       ConstSpiceDouble  * array  )
```
#### Return
```
nt
```
#### Inputs
```
SpiceDouble valueSpiceInt ndimConstSpiceDouble* array
```
#### Outputs
```

```
## isrchi_c
```c
nt isrchi_c ( SpiceInt         value,
                       SpiceInt         ndim,
                       ConstSpiceInt  * array  )
```
#### Return
```
nt
```
#### Inputs
```
SpiceInt valueSpiceInt ndimConstSpiceInt* array
```
#### Outputs
```

```
## isrot_c
```c
oolean isrot_c ( ConstSpiceDouble    m   [3][3],
                          SpiceDouble         ntol,
                          SpiceDouble         dtol       )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceDouble mSpiceDouble ntolSpiceDouble dtol
```
#### Outputs
```

```
## iswhsp_c
```c
oolean iswhsp_c ( ConstSpiceChar * string )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceChar* string
```
#### Outputs
```

```
## j1900_c
```c
ouble j1900_c ( void )
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## j1950_c
```c
ouble j1950_c ( void )
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## jyear_c
```c
ouble jyear_c ( void )
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## kclear_c
```c
void kclear_c ( void )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```

```
## kdata_c
```c
void kdata_c ( SpiceInt          which,
                  ConstSpiceChar  * kind,
                  SpiceInt          fillen,
                  SpiceInt          typlen,
                  SpiceInt          srclen,
                  SpiceChar       * file,
                  SpiceChar       * filtyp,
                  SpiceChar       * source,
                  SpiceInt        * handle,
                  SpiceBoolean    * found  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt whichConstSpiceChar* kindSpiceInt fillenSpiceInt typlenSpiceInt srclen
```
#### Outputs
```
SpiceChar* fileSpiceChar* filtypSpiceChar* sourceSpiceInt* handleSpiceBoolean* found
```
## kinfo_c
```c
void kinfo_c ( ConstSpiceChar  * file,
                  SpiceInt          typlen,
                  SpiceInt          srclen,
                  SpiceChar       * filtyp,
                  SpiceChar       * source,
                  SpiceInt        * handle,
                  SpiceBoolean    * found  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fileSpiceInt typlenSpiceInt srclen
```
#### Outputs
```
SpiceChar* filtypSpiceChar* sourceSpiceInt* handleSpiceBoolean* found
```
## ktotal_c
```c
void ktotal_c ( ConstSpiceChar   * kind,
                   SpiceInt         * count )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* kind
```
#### Outputs
```
SpiceInt* count
```
## kxtrct_c
```c
void kxtrct_c ( ConstSpiceChar       * keywd,
                   SpiceInt               termlen,
                   const void           * terms,
                   SpiceInt               nterms,
                   SpiceInt               stringlen,
                   SpiceInt               substrlen,
                   SpiceChar            * string,
                   SpiceBoolean         * found,
                   SpiceChar            * substr     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* keywdSpiceInt termlenSpiceInt ntermsSpiceInt stringlenSpiceInt substrlenSpiceChar* string
```
#### Outputs
```
const voidSpiceBoolean* foundSpiceChar* substr
```
## lastnb_c
```c
nt lastnb_c ( ConstSpiceChar * string )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* string
```
#### Outputs
```

```
## latcyl_c
```c
void latcyl_c ( SpiceDouble    radius,
                   SpiceDouble    lon,
                   SpiceDouble    lat,
                   SpiceDouble *  r,
                   SpiceDouble *  lonc,
                   SpiceDouble *  z )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble radiusSpiceDouble lonSpiceDouble lat
```
#### Outputs
```
SpiceDouble* rSpiceDouble* loncSpiceDouble* z
```
## latsph_c
```c
void latsph_c ( SpiceDouble    radius,
                   SpiceDouble    lon,
                   SpiceDouble    lat,
                   SpiceDouble *  rho,
                   SpiceDouble *  colat,
                   SpiceDouble *  lons )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble radiusSpiceDouble lonSpiceDouble lat
```
#### Outputs
```
SpiceDouble* rhoSpiceDouble* colatSpiceDouble* lons
```
## ldpool_c
```c
void ldpool_c ( ConstSpiceChar * filename )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* filename
```
#### Outputs
```

```
## lmpool_c
```c
void lmpool_c ( const void  * cvals,
                   SpiceInt      lenvals,
                   SpiceInt      n       )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt lenvalsSpiceInt n
```
#### Outputs
```
const void
```
## lparse_c
```c
void lparse_c ( ConstSpiceChar   * list,
                   ConstSpiceChar   * delim,
                   SpiceInt           nmax,
                   SpiceInt           lenout,
                   SpiceInt         * n,
                   void             * items   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* listConstSpiceChar* delimSpiceInt nmaxSpiceInt lenout
```
#### Outputs
```
SpiceInt* nvoid* items
```
## lparsm_c
```c
void lparsm_c ( ConstSpiceChar   * list,
                   ConstSpiceChar   * delims,
                   SpiceInt           nmax,
                   SpiceInt           lenout,
                   SpiceInt         * n,
                   void             * items   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* listConstSpiceChar* delimsSpiceInt nmaxSpiceInt lenout
```
#### Outputs
```
SpiceInt* nvoid* items
```
## lparss_c
```c
void lparss_c ( ConstSpiceChar   * list,
                   ConstSpiceChar   * delims,
                   SpiceCell        * set     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* listConstSpiceChar* delims
```
#### Outputs
```
SpiceCell* set
```
## lspcn_c
```c
ouble lspcn_c ( ConstSpiceChar   * body,
                         SpiceDouble        et,
                         ConstSpiceChar   * abcorr )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceChar* bodySpiceDouble etConstSpiceChar* abcorr
```
#### Outputs
```

```
## lstlec_c
```c
nt lstlec_c ( ConstSpiceChar  * string,
                       SpiceInt          n,   
                       SpiceInt          lenvals,
                       const void      * array   )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* stringSpiceInt nSpiceInt lenvals
```
#### Outputs
```
const void
```
## lstled_c
```c
nt lstled_c ( SpiceDouble         x,
                       SpiceInt            n,
                       ConstSpiceDouble  * array )
```
#### Return
```
nt
```
#### Inputs
```
SpiceDouble xSpiceInt nConstSpiceDouble* array
```
#### Outputs
```

```
## lstlei_c
```c
nt lstlei_c ( SpiceInt            x,
                       SpiceInt            n,
                       ConstSpiceInt     * array )
```
#### Return
```
nt
```
#### Inputs
```
SpiceInt xSpiceInt nConstSpiceInt* array
```
#### Outputs
```

```
## lstltc_c
```c
nt lstltc_c ( ConstSpiceChar  * string,
                       SpiceInt          n,   
                       SpiceInt          lenvals,
                       const void      * array   )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* stringSpiceInt nSpiceInt lenvals
```
#### Outputs
```
const void
```
## lstltd_c
```c
nt lstltd_c ( SpiceDouble         x,
                       SpiceInt            n,
                       ConstSpiceDouble  * array )
```
#### Return
```
nt
```
#### Inputs
```
SpiceDouble xSpiceInt nConstSpiceDouble* array
```
#### Outputs
```

```
## lstlti_c
```c
nt lstlti_c ( SpiceInt          x,
                       SpiceInt          n,
                       ConstSpiceInt   * array )
```
#### Return
```
nt
```
#### Inputs
```
SpiceInt xSpiceInt nConstSpiceInt* array
```
#### Outputs
```

```
## ltime_c
```c
void ltime_c ( SpiceDouble        etobs,
                  SpiceInt           obs,
                  ConstSpiceChar   * dir,
                  SpiceInt           targ,
                  SpiceDouble      * ettarg,
                  SpiceDouble      * elapsd  )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble etobsSpiceInt obsConstSpiceChar* dirSpiceInt targ
```
#### Outputs
```
SpiceDouble* ettargSpiceDouble* elapsd
```
## lx4dec_c
```c
void lx4dec_c ( ConstSpiceChar   * string,
                   SpiceInt           first,
                   SpiceInt         * last,
                   SpiceInt         * nchar  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* stringSpiceInt first
```
#### Outputs
```
SpiceInt* lastSpiceInt* nchar
```
## lx4num_c
```c
void lx4num_c ( ConstSpiceChar   * string,
                   SpiceInt           first,
                   SpiceInt         * last,
                   SpiceInt         * nchar  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* stringSpiceInt first
```
#### Outputs
```
SpiceInt* lastSpiceInt* nchar
```
## lx4sgn_c
```c
void lx4sgn_c ( ConstSpiceChar   * string,
                   SpiceInt           first,
                   SpiceInt         * last,
                   SpiceInt         * nchar  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* stringSpiceInt first
```
#### Outputs
```
SpiceInt* lastSpiceInt* nchar
```
## lx4uns_c
```c
void lx4uns_c ( ConstSpiceChar   * string,
                   SpiceInt           first,
                   SpiceInt         * last,
                   SpiceInt         * nchar  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* stringSpiceInt first
```
#### Outputs
```
SpiceInt* lastSpiceInt* nchar
```
## lxqstr_c
```c
void lxqstr_c ( ConstSpiceChar    * string,
                   SpiceChar           qchar,
                   SpiceInt            first,
                   SpiceInt          * last,
                   SpiceInt          * nchar  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* stringSpiceChar qcharSpiceInt first
```
#### Outputs
```
SpiceInt* lastSpiceInt* nchar
```
## m2eul_c
```c
void  m2eul_c ( ConstSpiceDouble    r[3][3],
                   SpiceInt            axis3,
                   SpiceInt            axis2,
                   SpiceInt            axis1,
                   SpiceDouble       * angle3,
                   SpiceDouble       * angle2,
                   SpiceDouble       * angle1  )
```
#### Return
```
void 
```
#### Inputs
```
ConstSpiceDouble* r[3]SpiceInt axis3SpiceInt axis2SpiceInt axis1
```
#### Outputs
```
SpiceDouble* angle3SpiceDouble* angle2SpiceDouble* angle1
```
## m2q_c
```c
void m2q_c (  ConstSpiceDouble  r[3][3],
                 SpiceDouble       q[4]     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* r[3]
```
#### Outputs
```
SpiceDouble* q[4]
```
## matchi_c
```c
oolean matchi_c ( ConstSpiceChar      * string,
                           ConstSpiceChar      * templ,
                           SpiceChar             wstr,
                           SpiceChar             wchr   )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceChar* stringConstSpiceChar* templSpiceChar wstrSpiceChar wchr
```
#### Outputs
```

```
## matchw_c
```c
oolean matchw_c ( ConstSpiceChar      * string,
                           ConstSpiceChar      * templ,
                           SpiceChar             wstr,
                           SpiceChar             wchr   )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceChar* stringConstSpiceChar* templSpiceChar wstrSpiceChar wchr
```
#### Outputs
```

```
## mequg_c
```c
void mequg_c ( const void   * m1,
                  SpiceInt       nr,
                  SpiceInt       nc,
                  void         * mout )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt nrSpiceInt nc
```
#### Outputs
```
const voidvoid* mout
```
## mequ_c
```c
void mequ_c ( ConstSpiceDouble  m1  [3][3],
                 SpiceDouble       mout[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble m1
```
#### Outputs
```
SpiceDouble* mout[3]
```
## moved_
```c
int moved_ ( doublereal   * arrfrm,
                integer      * ndim,
                doublereal   * arrto  )
```
#### Return
```
int
```
#### Inputs
```
doublereal* arrfrminteger* ndim
```
#### Outputs
```
doublereal* arrto
```
## mtxm_c
```c
void mtxm_c ( ConstSpiceDouble    m1  [3][3],
                 ConstSpiceDouble    m2  [3][3],
                 SpiceDouble         mout[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble m1ConstSpiceDouble m2
```
#### Outputs
```
SpiceDouble* mout[3]
```
## mxmt_c
```c
void mxmt_c ( ConstSpiceDouble    m1  [3][3],
                 ConstSpiceDouble    m2  [3][3],
                 SpiceDouble         mout[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble m1ConstSpiceDouble m2
```
#### Outputs
```
SpiceDouble* mout[3]
```
## mxm_c
```c
void mxm_c ( ConstSpiceDouble   m1  [3][3],
                ConstSpiceDouble   m2  [3][3],
                SpiceDouble        mout[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble m1ConstSpiceDouble m2
```
#### Outputs
```
SpiceDouble* mout[3]
```
## mxvg_c
```c
void mxvg_c ( const void   * m1,
                 const void   * v2,
                 SpiceInt       nrow1,
                 SpiceInt       nc1r2,
                 void         * vout   )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt nrow1SpiceInt nc1r2
```
#### Outputs
```
const voidvoid* vout
```
## mxv_c
```c
void mxv_c ( ConstSpiceDouble    m1  [3][3],
                ConstSpiceDouble    vin [3],
                SpiceDouble         vout[3]    )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble m1ConstSpiceDouble vin
```
#### Outputs
```
SpiceDouble* vout[3]
```
## namfrm_c
```c
void namfrm_c ( ConstSpiceChar   * frname,
                   SpiceInt         * frcode  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* frname
```
#### Outputs
```
SpiceInt* frcode
```
## ncposr_c
```c
nt ncposr_c ( ConstSpiceChar    * str,
                       ConstSpiceChar    * chars,
                       SpiceInt            start  )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* strConstSpiceChar* charsSpiceInt start
```
#### Outputs
```

```
## ncpos_c
```c
nt ncpos_c ( ConstSpiceChar    * str,
                      ConstSpiceChar    * chars,
                      SpiceInt            start  )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* strConstSpiceChar* charsSpiceInt start
```
#### Outputs
```

```
## nearpt_c
```c
void nearpt_c ( ConstSpiceDouble    positn[3],
                   SpiceDouble         a,
                   SpiceDouble         b,
                   SpiceDouble         c,
                   SpiceDouble         npoint[3],
                   SpiceDouble       * alt        )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* positn[3]SpiceDouble aSpiceDouble bSpiceDouble c
```
#### Outputs
```
SpiceDouble* npoint[3]SpiceDouble* alt
```
## npedln_c
```c
void npedln_c ( SpiceDouble         a,
                   SpiceDouble         b,
                   SpiceDouble         c,
                   ConstSpiceDouble    linept[3],
                   ConstSpiceDouble    linedr[3],
                   SpiceDouble         pnear[3],
                   SpiceDouble       * dist      )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble cConstSpiceDouble* linept[3]ConstSpiceDouble* linedr[3]
```
#### Outputs
```
SpiceDouble aSpiceDouble bSpiceDouble* pnear[3]SpiceDouble* dist
```
## npelpt_c
```c
void npelpt_c ( ConstSpiceDouble      point  [3],
                   ConstSpiceEllipse   * ellips,
                   SpiceDouble           pnear  [3],
                   SpiceDouble         * dist       )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble pointConstSpiceEllipse* ellips
```
#### Outputs
```
SpiceDouble pnearSpiceDouble* dist
```
## nplnpt_c
```c
void nplnpt_c ( ConstSpiceDouble    linpt  [3],
                   ConstSpiceDouble    lindir [3],
                   ConstSpiceDouble    point  [3],
                   SpiceDouble         pnear  [3],
                   SpiceDouble       * dist       )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble linptConstSpiceDouble lindirConstSpiceDouble point
```
#### Outputs
```
SpiceDouble pnearSpiceDouble* dist
```
## nvc2pl_c
```c
void nvc2pl_c ( ConstSpiceDouble     normal[3],
                   SpiceDouble          constant,
                   SpicePlane        *  plane     )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble constant
```
#### Outputs
```
ConstSpiceDouble* normal[3]SpicePlane* plane
```
## nvp2pl_c
```c
void nvp2pl_c ( ConstSpiceDouble    normal[3],
                   ConstSpiceDouble    point [3],
                   SpicePlane        * plane     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble point
```
#### Outputs
```
ConstSpiceDouble* normal[3]SpicePlane* plane
```
## ordc_c
```c
nt ordc_c ( ConstSpiceChar  * item,
                     SpiceCell       * set   )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* itemSpiceCell* set
```
#### Outputs
```

```
## ordd_c
```c
nt ordd_c ( SpiceDouble     item,
                     SpiceCell     * set  )
```
#### Return
```
nt
```
#### Inputs
```
SpiceDouble itemSpiceCell* set
```
#### Outputs
```

```
## orderc_c
```c
void orderc_c ( SpiceInt      lenvals,
                   const void  * array,
                   SpiceInt      ndim,
                   SpiceInt    * iorder  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt lenvalsSpiceInt ndim
```
#### Outputs
```
const voidSpiceInt* iorder
```
## orderd_c
```c
void orderd_c ( ConstSpiceDouble  * array,
                   SpiceInt            ndim,
                   SpiceInt          * iorder )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* arraySpiceInt ndim
```
#### Outputs
```
SpiceInt* iorder
```
## orderi_c
```c
void orderi_c ( ConstSpiceInt  * array,
                   SpiceInt         ndim,
                   SpiceInt       * iorder )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceInt* arraySpiceInt ndim
```
#### Outputs
```
SpiceInt* iorder
```
## ordi_c
```c
nt ordi_c ( SpiceInt        item,
                     SpiceCell     * set   )
```
#### Return
```
nt
```
#### Inputs
```
SpiceInt itemSpiceCell* set
```
#### Outputs
```

```
## oscelt_c
```c
void oscelt_c ( ConstSpiceDouble   state[6],
                   SpiceDouble        et,
                   SpiceDouble        mu,
                   SpiceDouble        elts[8]   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* state[6]SpiceDouble etSpiceDouble mu
```
#### Outputs
```
SpiceDouble* elts[8]
```
## pckcov_c
```c
void pckcov_c ( ConstSpiceChar   * pck,
                   SpiceInt           idcode,
                   SpiceCell        * cover   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* pckSpiceInt idcodeSpiceCell* cover
```
#### Outputs
```

```
## pckfrm_c
```c
void pckfrm_c ( ConstSpiceChar  * pck,
                   SpiceCell       * ids  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* pckSpiceCell* ids
```
#### Outputs
```

```
## pcklof_c
```c
void pcklof_c ( ConstSpiceChar * filename,
                   SpiceInt       * handle    )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* filename
```
#### Outputs
```
SpiceInt* handle
```
## pckuof_c
```c
void pckuof_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## pcpool_c
```c
void pcpool_c ( ConstSpiceChar  * name,
                   SpiceInt          n,
                   SpiceInt          lenvals,
                   const void      * cvals    )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* nameSpiceInt nSpiceInt lenvals
```
#### Outputs
```
const void
```
## pdpool_c
```c
void pdpool_c ( ConstSpiceChar      * name,
                   SpiceInt              n,
                   ConstSpiceDouble    * dvals )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* nameSpiceInt nConstSpiceDouble* dvals
```
#### Outputs
```

```
## pgrrec_c
```c
void pgrrec_c ( ConstSpiceChar  * body,
                   SpiceDouble       lon,
                   SpiceDouble       lat,
                   SpiceDouble       alt,
                   SpiceDouble       re,
                   SpiceDouble       f,
                   SpiceDouble       rectan[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* bodySpiceDouble lonSpiceDouble latSpiceDouble altSpiceDouble reSpiceDouble f
```
#### Outputs
```
SpiceDouble* rectan[3]
```
## pipool_c
```c
void pipool_c ( ConstSpiceChar  * name,
                   SpiceInt          n,
                   ConstSpiceInt   * ivals )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* nameSpiceInt nConstSpiceInt* ivals
```
#### Outputs
```

```
## pi_c
```c
ouble pi_c ( void )
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## pjelpl_c
```c
void pjelpl_c ( ConstSpiceEllipse  * elin,
                   ConstSpicePlane    * plane,
                   SpiceEllipse       * elout  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpicePlane* plane
```
#### Outputs
```
ConstSpiceEllipse* elinSpiceEllipse* elout
```
## pl2nvc_c
```c
void pl2nvc_c ( ConstSpicePlane   * plane,
                   SpiceDouble         normal[3],
                   SpiceDouble       * constant  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpicePlane* plane
```
#### Outputs
```
SpiceDouble* normal[3]SpiceDouble* constant
```
## pl2nvp_c
```c
void pl2nvp_c ( ConstSpicePlane   * plane,
                   SpiceDouble         normal[3],
                   SpiceDouble         point [3]  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpicePlane* plane
```
#### Outputs
```
SpiceDouble* normal[3]SpiceDouble point
```
## pl2psv_c
```c
void pl2psv_c ( ConstSpicePlane  * plane,
                   SpiceDouble        point[3],
                   SpiceDouble        span1[3],
                   SpiceDouble        span2[3]  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpicePlane* plane
```
#### Outputs
```
SpiceDouble* point[3]SpiceDouble* span1[3]SpiceDouble* span2[3]
```
## posr_c
```c
nt posr_c ( ConstSpiceChar    * str,
                     ConstSpiceChar    * substr,
                     SpiceInt            start  )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* strConstSpiceChar* substrSpiceInt start
```
#### Outputs
```

```
## pos_c
```c
nt pos_c ( ConstSpiceChar     * str,
                     ConstSpiceChar    * substr,
                     SpiceInt            start  )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceChar* strConstSpiceChar* substrSpiceInt start
```
#### Outputs
```

```
## prompt_c
```c
har * prompt_c ( ConstSpiceChar * prmptStr,
                          SpiceInt         lenout,
                          SpiceChar      * buffer )
```
#### Return
```
har 
```
#### Inputs
```
ConstSpiceChar* prmptStrSpiceInt lenout
```
#### Outputs
```
SpiceChar* buffer
```
## prop2b_c
```c
void prop2b_c ( SpiceDouble         gm,
                   ConstSpiceDouble    pvinit[6],
                   SpiceDouble         dt,
                   SpiceDouble         pvprop[6] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble gmConstSpiceDouble* pvinit[6]SpiceDouble dt
```
#### Outputs
```
SpiceDouble* pvprop[6]
```
## prsdp_c
```c
void prsdp_c ( ConstSpiceChar     * string,
                  SpiceDouble        * dpval  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* string
```
#### Outputs
```
SpiceDouble* dpval
```
## prsint_c
```c
void prsint_c ( ConstSpiceChar  * string, 
                   SpiceInt        * intval )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* string
```
#### Outputs
```
SpiceInt* intval
```
## psv2pl_c
```c
void psv2pl_c ( ConstSpiceDouble    point[3],
                   ConstSpiceDouble    span1[3],
                   ConstSpiceDouble    span2[3],
                   SpicePlane        * plane    )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* point[3]ConstSpiceDouble* span2[3]
```
#### Outputs
```
ConstSpiceDouble* span1[3]SpicePlane* plane
```
## putcml_c
```c
void putcml_c ( SpiceInt      argc,
                   SpiceChar  ** argv )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt argc
```
#### Outputs
```
SpiceCha r
```
## pxform_c
```c
void pxform_c ( ConstSpiceChar   * from,
                   ConstSpiceChar   * to,
                   SpiceDouble        et,
                   SpiceDouble        rotate[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fromConstSpiceChar* toSpiceDouble et
```
#### Outputs
```
SpiceDouble* rotate[3]
```
## qdq2av_c
```c
void qdq2av_c ( ConstSpiceDouble    q  [4],
                   ConstSpiceDouble    dq [4],
                   SpiceDouble         av [3]  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble qConstSpiceDouble dq
```
#### Outputs
```
SpiceDouble av
```
## qxq_c
```c
void qxq_c ( ConstSpiceDouble    q1   [4],
                ConstSpiceDouble    q2   [4],
                SpiceDouble         qout [4]  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble q1ConstSpiceDouble q2
```
#### Outputs
```
SpiceDouble qout
```
## radrec_c
```c
void radrec_c ( SpiceDouble range, 
                   SpiceDouble ra, 
                   SpiceDouble dec, 
                   SpiceDouble rectan[3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble rangeSpiceDouble raSpiceDouble dec
```
#### Outputs
```
SpiceDouble* rectan[3]
```
## rav2xf_c
```c
void rav2xf_c ( ConstSpiceDouble    rot   [3][3],
                   ConstSpiceDouble    av    [3],
                   SpiceDouble         xform [6][6]  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble rotConstSpiceDouble av
```
#### Outputs
```
SpiceDouble xform
```
## raxisa_c
```c
void raxisa_c ( ConstSpiceDouble     matrix[3][3],
                   SpiceDouble          axis  [3],
                   SpiceDouble        * angle       )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* matrix[3]
```
#### Outputs
```
SpiceDouble axisSpiceDouble* angle
```
## rdtext_c
```c
void rdtext_c ( ConstSpiceChar * file,
                   SpiceInt         lenout,
                   SpiceChar      * line,
                   SpiceBoolean   * eof    )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fileSpiceInt lenout
```
#### Outputs
```
SpiceChar* lineSpiceBoolean* eof
```
## reccyl_c
```c
void reccyl_c ( ConstSpiceDouble     rectan[3], 
                   SpiceDouble        * r, 
                   SpiceDouble        * lon, 
                   SpiceDouble        * z         )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* rectan[3]
```
#### Outputs
```
SpiceDouble* rSpiceDouble* lonSpiceDouble* z
```
## recpgr_c
```c
void recpgr_c ( ConstSpiceChar   * body,
                   SpiceDouble        rectan[3],
                   SpiceDouble        re,
                   SpiceDouble        f,
                   SpiceDouble      * lon,
                   SpiceDouble      * lat,
                   SpiceDouble      * alt       )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* bodySpiceDouble* rectan[3]SpiceDouble reSpiceDouble f
```
#### Outputs
```
SpiceDouble* lonSpiceDouble* latSpiceDouble* alt
```
## recrad_c
```c
void recrad_c ( ConstSpiceDouble    rectan[3],
                   SpiceDouble       * range,
                   SpiceDouble       * ra,
                   SpiceDouble       * dec      )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* rectan[3]
```
#### Outputs
```
SpiceDouble* rangeSpiceDouble* raSpiceDouble* dec
```
## removc_c
```c
void removc_c ( ConstSpiceChar  * item,
                   SpiceCell       * set   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* itemSpiceCell* set
```
#### Outputs
```

```
## removd_c
```c
void removd_c ( SpiceDouble     item,
                   SpiceCell     * set  )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble itemSpiceCell* set
```
#### Outputs
```

```
## removi_c
```c
void removi_c ( SpiceInt        item,
                   SpiceCell     * set  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt itemSpiceCell* set
```
#### Outputs
```

```
## reordc_c
```c
void reordc_c ( ConstSpiceInt  * iorder,
                   SpiceInt         ndim,
                   SpiceInt         lenvals,
                   void           * array    )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceInt* iorderSpiceInt ndimSpiceInt lenvalsvoid* array
```
#### Outputs
```

```
## reordd_c
```c
void reordd_c ( ConstSpiceInt      * iorder,
                   SpiceInt             ndim,
                   SpiceDouble        * array  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceInt* iorderSpiceInt ndimSpiceDouble* array
```
#### Outputs
```

```
## reordi_c
```c
void reordi_c ( ConstSpiceInt   * iorder,
                   SpiceInt          ndim,      
                   SpiceInt        * array )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceInt* iorderSpiceInt ndimSpiceInt* array
```
#### Outputs
```

```
## reordl_c
```c
void reordl_c ( ConstSpiceInt   * iorder,
                   SpiceInt          ndim,      
                   SpiceBoolean    * array )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceInt* iorderSpiceInt ndimSpiceBoolean* array
```
#### Outputs
```

```
## repmct_c
```c
void repmct_c ( ConstSpiceChar   * in,
                   ConstSpiceChar   * marker,
                   SpiceInt           value,
                   SpiceChar          repcase,
                   SpiceInt           lenout,
                   SpiceChar        * out      )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* inConstSpiceChar* markerSpiceInt valueSpiceChar repcaseSpiceInt lenout
```
#### Outputs
```
SpiceChar* out
```
## repmc_c
```c
void repmc_c ( ConstSpiceChar    * in,
                  ConstSpiceChar    * marker,
                  ConstSpiceChar    * value,
                  SpiceInt            lenout,
                  SpiceChar         * out    )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* inConstSpiceChar* markerConstSpiceChar* valueSpiceInt lenout
```
#### Outputs
```
SpiceChar* out
```
## repmd_c
```c
void repmd_c ( ConstSpiceChar     * in,
                  ConstSpiceChar     * marker,
                  SpiceDouble          value,
                  SpiceInt             sigdig,
                  SpiceInt             lenout,
                  SpiceChar          * out     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* inConstSpiceChar* markerSpiceDouble valueSpiceInt sigdigSpiceInt lenout
```
#### Outputs
```
SpiceChar* out
```
## repmf_c
```c
void repmf_c ( ConstSpiceChar     * in,
                  ConstSpiceChar     * marker,
                  SpiceDouble          value,
                  SpiceInt             sigdig,
                  SpiceChar            format,
                  SpiceInt             lenout,
                  SpiceChar          * out )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* inConstSpiceChar* markerSpiceDouble valueSpiceInt sigdigSpiceChar formatSpiceInt lenout
```
#### Outputs
```
SpiceChar* out
```
## repmi_c
```c
void repmi_c ( ConstSpiceChar     * in,
                  ConstSpiceChar     * marker,
                  SpiceInt             value,
                  SpiceInt             lenout,
                  SpiceChar          * out     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* inConstSpiceChar* markerSpiceInt valueSpiceInt lenout
```
#### Outputs
```
SpiceChar* out
```
## repmot_c
```c
void repmot_c ( ConstSpiceChar   * in,
                   ConstSpiceChar   * marker,
                   SpiceInt           value,
                   SpiceChar          repcase,
                   SpiceInt           lenout,
                   SpiceChar        * out      )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* inConstSpiceChar* markerSpiceInt valueSpiceChar repcaseSpiceInt lenout
```
#### Outputs
```
SpiceChar* out
```
## reset_c
```c
void reset_c ( void )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```

```
## return_c
```c
oolean return_c ( void )
```
#### Return
```
oolean
```
#### Inputs
```

```
#### Outputs
```

```
## rquad_c
```c
void rquad_c ( SpiceDouble  a,
                  SpiceDouble  b,
                  SpiceDouble  c,
                  SpiceDouble  root1[2],
                  SpiceDouble  root2[2] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble c
```
#### Outputs
```
SpiceDouble aSpiceDouble bSpiceDouble* root1[2]SpiceDouble* root2[2]
```
## saelgv_c
```c
void saelgv_c ( ConstSpiceDouble   vec1  [3],
                   ConstSpiceDouble   vec2  [3],
                   SpiceDouble        smajor[3],
                   SpiceDouble        sminor[3]  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble vec2
```
#### Outputs
```
ConstSpiceDouble vec1SpiceDouble* smajor[3]SpiceDouble* sminor[3]
```
## scard_c
```c
void scard_c (  SpiceInt      card,   
                   SpiceCell   * cell  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt card
```
#### Outputs
```
SpiceCell* cell
```
## sce2c_c
```c
void sce2c_c ( SpiceInt       sc,
                  SpiceDouble    et,
                  SpiceDouble  * sclkdp )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt scSpiceDouble et
```
#### Outputs
```
SpiceDouble* sclkdp
```
## scfmt_c
```c
void scfmt_c ( SpiceInt      sc, 
                  SpiceDouble   ticks, 
                  SpiceInt      lenout,
                  SpiceChar   * clkstr  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt scSpiceDouble ticksSpiceInt lenout
```
#### Outputs
```
SpiceChar* clkstr
```
## sdiff_c
```c
void sdiff_c (  SpiceCell   * a,
                   SpiceCell   * b,
                   SpiceCell   * c  )
```
#### Return
```
void
```
#### Inputs
```
SpiceCell* aSpiceCell* b
```
#### Outputs
```
SpiceCell* c
```
## setmsg_c
```c
void setmsg_c ( ConstSpiceChar * message )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* message
```
#### Outputs
```

```
## set_c
```c
oolean set_c (  SpiceCell        * a,
                         ConstSpiceChar   * op,
                         SpiceCell        * b   )
```
#### Return
```
oolean
```
#### Inputs
```
SpiceCell* aConstSpiceChar* opSpiceCell* b
```
#### Outputs
```

```
## shellc_c
```c
void shellc_c ( SpiceInt     ndim,
                   SpiceInt     lenvals,
                   void       * array   )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt ndimSpiceInt lenvalsvoid* array
```
#### Outputs
```

```
## shelld_c
```c
void shelld_c ( SpiceInt       ndim,
                   SpiceDouble  * array )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt ndimSpiceDouble* array
```
#### Outputs
```

```
## shelli_c
```c
void shelli_c ( SpiceInt     ndim,
                   SpiceInt   * array )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt ndimSpiceInt* array
```
#### Outputs
```

```
## sigerr_c
```c
void sigerr_c ( ConstSpiceChar * message )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
ConstSpiceChar* message
```
## sincpt_c
```c
void sincpt_c ( ConstSpiceChar      * method,
                   ConstSpiceChar      * target,
                   SpiceDouble           et,
                   ConstSpiceChar      * fixref,
                   ConstSpiceChar      * abcorr,
                   ConstSpiceChar      * obsrvr,
                   ConstSpiceChar      * dref,
                   ConstSpiceDouble      dvec   [3],
                   SpiceDouble           spoint [3],
                   SpiceDouble         * trgepc,
                   SpiceDouble           srfvec [3],
                   SpiceBoolean        * found       )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* methodConstSpiceChar* targetSpiceDouble etConstSpiceChar* fixrefConstSpiceChar* abcorrConstSpiceChar* obsrvrConstSpiceChar* drefConstSpiceDouble dvec
```
#### Outputs
```
SpiceDouble spointSpiceDouble* trgepcSpiceDouble srfvecSpiceBoolean* found
```
## size_c
```c
nt size_c ( SpiceCell  * cell )
```
#### Return
```
nt
```
#### Inputs
```
SpiceCell* cell
```
#### Outputs
```

```
## sphcyl_c
```c
void sphcyl_c ( SpiceDouble     radius,
                   SpiceDouble     colat,
                   SpiceDouble     slon,
                   SpiceDouble   * r,
                   SpiceDouble   * lon,
                   SpiceDouble   * z )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble radiusSpiceDouble colatSpiceDouble slon
```
#### Outputs
```
SpiceDouble* rSpiceDouble* lonSpiceDouble* z
```
## sphlat_c
```c
void sphlat_c ( SpiceDouble     r, 
                   SpiceDouble     colat, 
                   SpiceDouble     lons,
                   SpiceDouble   * radius,
                   SpiceDouble   * lon, 
                   SpiceDouble   * lat )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble rSpiceDouble colatSpiceDouble lons
```
#### Outputs
```
SpiceDouble* radiusSpiceDouble* lonSpiceDouble* lat
```
## sphrec_c
```c
void sphrec_c ( SpiceDouble    r,
                   SpiceDouble    colat, 
                   SpiceDouble    lon,
                   SpiceDouble    rectan[3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble rSpiceDouble colatSpiceDouble lon
```
#### Outputs
```
SpiceDouble* rectan[3]
```
## spk14a_c
```c
void spk14a_c ( SpiceInt           handle,
                   SpiceInt           ncsets,
                   ConstSpiceDouble   coeffs [],
                   ConstSpiceDouble   epochs []  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt ncsetsConstSpiceDouble coeffsConstSpiceDouble epochs
```
#### Outputs
```

```
## spk14b_c
```c
void spk14b_c (  SpiceInt           handle,
                    ConstSpiceChar   * segid,
                    SpiceInt           body,
                    SpiceInt           center,
                    ConstSpiceChar   * frame,
                    SpiceDouble        first,
                    SpiceDouble        last,
                    SpiceInt           chbdeg  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleConstSpiceChar* segidSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble firstSpiceDouble lastSpiceInt chbdeg
```
#### Outputs
```

```
## spk14e_c
```c
void spk14e_c ( SpiceInt   handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## spkacs_c
```c
void spkacs_c ( SpiceInt           targ,
                   SpiceDouble        et,
                   ConstSpiceChar   * ref,
                   ConstSpiceChar   * abcorr,
                   SpiceInt           obs,
                   SpiceDouble        starg[6],
                   SpiceDouble      * lt,
                   SpiceDouble      * dlt      )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt targSpiceDouble etConstSpiceChar* refConstSpiceChar* abcorrSpiceInt obs
```
#### Outputs
```
SpiceDouble* starg[6]SpiceDouble* ltSpiceDouble* dlt
```
## spkapo_c
```c
void spkapo_c ( SpiceInt               targ,
                   SpiceDouble            et,
                   ConstSpiceChar       * ref,
                   ConstSpiceDouble       sobs[6],
                   ConstSpiceChar       * abcorr,
                   SpiceDouble            ptarg[3],
                   SpiceDouble          * lt        )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt targSpiceDouble etConstSpiceChar* refConstSpiceDouble* sobs[6]ConstSpiceChar* abcorr
```
#### Outputs
```
SpiceDouble* ptarg[3]SpiceDouble* lt
```
## spkapp_c
```c
void spkapp_c ( SpiceInt             targ,
                   SpiceDouble          et,
                   ConstSpiceChar     * ref,
                   ConstSpiceDouble     sobs   [6],
                   ConstSpiceChar     * abcorr,
                   SpiceDouble          starg  [6],
                   SpiceDouble        * lt         )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt targSpiceDouble etConstSpiceChar* refConstSpiceDouble sobsConstSpiceChar* abcorr
```
#### Outputs
```
SpiceDouble stargSpiceDouble* lt
```
## spkaps_c
```c
void spkaps_c ( SpiceInt           targ,
                   SpiceDouble        et,
                   ConstSpiceChar   * ref,
                   ConstSpiceChar   * abcorr,
                   ConstSpiceDouble   stobs [6],
                   ConstSpiceDouble   accobs[6],
                   SpiceDouble        starg [6],
                   SpiceDouble      * lt,
                   SpiceDouble      * dlt      )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt targSpiceDouble etConstSpiceChar* refConstSpiceChar* abcorrConstSpiceDouble stobsConstSpiceDouble* accobs[6]
```
#### Outputs
```
SpiceDouble stargSpiceDouble* ltSpiceDouble* dlt
```
## spkcls_c
```c
void spkcls_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## spkcov_c
```c
void spkcov_c ( ConstSpiceChar  * spk,
                   SpiceInt          idcode,
                   SpiceCell       * cover   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* spkSpiceInt idcodeSpiceCell* cover
```
#### Outputs
```

```
## spkezp_c
```c
void spkezp_c ( SpiceInt            targ,
                   SpiceDouble         et,
                   ConstSpiceChar    * ref,
                   ConstSpiceChar    * abcorr,
                   SpiceInt            obs,
                   SpiceDouble         ptarg[3],
                   SpiceDouble       * lt        )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt targSpiceDouble etConstSpiceChar* refConstSpiceChar* abcorrSpiceInt obs
```
#### Outputs
```
SpiceDouble* ptarg[3]SpiceDouble* lt
```
## spkezr_c
```c
void spkezr_c ( ConstSpiceChar     *targ,
                   SpiceDouble         et,
                   ConstSpiceChar     *ref,
                   ConstSpiceChar     *abcorr,
                   ConstSpiceChar     *obs,
                   SpiceDouble         starg[6],
                   SpiceDouble        *lt        )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* targSpiceDouble etConstSpiceChar* refConstSpiceChar* abcorrConstSpiceChar* obs
```
#### Outputs
```
SpiceDouble* starg[6]SpiceDouble* lt
```
## spkez_c
```c
void spkez_c ( SpiceInt            targ,
                  SpiceDouble         et,
                  ConstSpiceChar     *ref,
                  ConstSpiceChar     *abcorr,
                  SpiceInt            obs,
                  SpiceDouble         starg[6],
                  SpiceDouble        *lt        )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt targSpiceDouble etConstSpiceChar* refConstSpiceChar* abcorrSpiceInt obs
```
#### Outputs
```
SpiceDouble* starg[6]SpiceDouble* lt
```
## spkgeo_c
```c
void spkgeo_c ( SpiceInt          targ, 
                   SpiceDouble       et, 
                   ConstSpiceChar  * ref, 
                   SpiceInt          obs, 
                   SpiceDouble       state[6], 
                   SpiceDouble     * lt       )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt targSpiceDouble etConstSpiceChar* refSpiceInt obs
```
#### Outputs
```
SpiceDouble* state[6]SpiceDouble* lt
```
## spkgps_c
```c
void spkgps_c ( SpiceInt           targ,
                   SpiceDouble        et,
                   ConstSpiceChar   * ref,
                   SpiceInt           obs,
                   SpiceDouble        pos[3],
                   SpiceDouble      * lt     )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt targSpiceDouble etConstSpiceChar* refSpiceInt obs
```
#### Outputs
```
SpiceDouble* pos[3]SpiceDouble* lt
```
## spkltc_c
```c
void spkltc_c ( SpiceInt           targ,
                   SpiceDouble        et,
                   ConstSpiceChar   * ref,
                   ConstSpiceChar   * abcorr,
                   ConstSpiceDouble   stobs[6],
                   SpiceDouble        starg[6],
                   SpiceDouble      * lt,
                   SpiceDouble      * dlt      )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt targSpiceDouble etConstSpiceChar* refConstSpiceChar* abcorrConstSpiceDouble* stobs[6]
```
#### Outputs
```
SpiceDouble* starg[6]SpiceDouble* ltSpiceDouble* dlt
```
## spkobj_c
```c
void spkobj_c ( ConstSpiceChar  * spk,
                   SpiceCell       * ids )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* spkSpiceCell* ids
```
#### Outputs
```

```
## spkopa_c
```c
void spkopa_c ( ConstSpiceChar * file,
                   SpiceInt       * handle )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* file
```
#### Outputs
```
SpiceInt* handle
```
## spkopn_c
```c
void spkopn_c ( ConstSpiceChar * name,
                   ConstSpiceChar * ifname,
                   SpiceInt         ncomch,
                   SpiceInt       * handle  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* nameConstSpiceChar* ifnameSpiceInt ncomch
```
#### Outputs
```
SpiceInt* handle
```
## spkpds_c
```c
void spkpds_c ( SpiceInt           body,  
                   SpiceInt           center,
                   ConstSpiceChar   * frame,
                   SpiceInt           type,
                   SpiceDouble        first,
                   SpiceDouble        last,
                   SpiceDouble        descr[5] )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceInt typeSpiceDouble firstSpiceDouble last
```
#### Outputs
```
SpiceDouble* descr[5]
```
## spkpos_c
```c
void spkpos_c ( ConstSpiceChar   * targ,
                   SpiceDouble        et,
                   ConstSpiceChar   * ref,
                   ConstSpiceChar   * abcorr,
                   ConstSpiceChar   * obs,
                   SpiceDouble        ptarg[3],
                   SpiceDouble      * lt        )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* targSpiceDouble etConstSpiceChar* refConstSpiceChar* abcorrConstSpiceChar* obs
```
#### Outputs
```
SpiceDouble* ptarg[3]SpiceDouble* lt
```
## spkssb_c
```c
void spkssb_c ( SpiceInt           targ,
                   SpiceDouble        et,
                   ConstSpiceChar   * ref,
                   SpiceDouble        starg[6] )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt targSpiceDouble etConstSpiceChar* ref
```
#### Outputs
```
SpiceDouble* starg[6]
```
## spksub_c
```c
void spksub_c ( SpiceInt            handle,
                   SpiceDouble         descr[5],
                   ConstSpiceChar    * ident,
                   SpiceDouble         begin,
                   SpiceDouble         end,
                   SpiceInt            newh    )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* identSpiceDouble endSpiceInt newh
```
#### Outputs
```
SpiceInt handleSpiceDouble* descr[5]SpiceDouble begin
```
## spkuds_c
```c
void spkuds_c ( ConstSpiceDouble     descr [5],
                   SpiceInt           * body,
                   SpiceInt           * center,
                   SpiceInt           * frame,
                   SpiceInt           * type,
                   SpiceDouble        * first,
                   SpiceDouble        * last,
                   SpiceInt           * begin,
                   SpiceInt           * end       )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble descr
```
#### Outputs
```
SpiceInt* bodySpiceInt* centerSpiceInt* frameSpiceInt* typeSpiceDouble* firstSpiceDouble* lastSpiceInt* beginSpiceInt* end
```
## spkuef_c
```c
void spkuef_c ( SpiceInt handle )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
```

```
## spkw02_c
```c
void spkw02_c ( SpiceInt                handle,
                   SpiceInt                body,
                   SpiceInt                center,
                   ConstSpiceChar        * frame,
                   SpiceDouble             first,
                   SpiceDouble             last,
                   ConstSpiceChar        * segid,
                   SpiceDouble             intlen,
                   SpiceInt                n,
                   SpiceInt                polydg,
                   ConstSpiceDouble        cdata [],
                   SpiceDouble             btime     )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble lastConstSpiceChar* segidSpiceDouble intlenSpiceInt nSpiceInt polydgConstSpiceDouble cdataSpiceDouble btime
```
#### Outputs
```
SpiceDouble first
```
## spkw03_c
```c
void spkw03_c ( SpiceInt                handle,
                   SpiceInt                body,
                   SpiceInt                center,
                   ConstSpiceChar        * frame,
                   SpiceDouble             first,
                   SpiceDouble             last,
                   ConstSpiceChar        * segid,
                   SpiceDouble             intlen,
                   SpiceInt                n,
                   SpiceInt                polydg,
                   ConstSpiceDouble        cdata [],
                   SpiceDouble             btime     )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble lastConstSpiceChar* segidSpiceDouble intlenSpiceInt nSpiceInt polydgConstSpiceDouble cdataSpiceDouble btime
```
#### Outputs
```
SpiceDouble first
```
## spkw05_c
```c
void spkw05_c ( SpiceInt                handle,
                   SpiceInt                body,
                   SpiceInt                center,
                   ConstSpiceChar        * frame,
                   SpiceDouble             first,
                   SpiceDouble             last,
                   ConstSpiceChar        * segid,
                   SpiceDouble             gm,
                   SpiceInt                n,
                   ConstSpiceDouble        states [][6],
                   ConstSpiceDouble        epochs []      )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble firstSpiceDouble lastConstSpiceChar* segidSpiceDouble gmSpiceInt nConstSpiceDouble statesConstSpiceDouble epochs
```
#### Outputs
```

```
## spkw08_c
```c
void spkw08_c ( SpiceInt            handle,
                   SpiceInt            body,
                   SpiceInt            center,
                   ConstSpiceChar    * frame,
                   SpiceDouble         first,
                   SpiceDouble         last,
                   ConstSpiceChar    * segid,
                   SpiceInt            degree,
                   SpiceInt            n,
                   ConstSpiceDouble    states[][6],
                   SpiceDouble         epoch1,
                   SpiceDouble         step           )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble lastConstSpiceChar* segidSpiceInt degreeSpiceInt nConstSpiceDouble statesSpiceDouble epoch1SpiceDouble step
```
#### Outputs
```
SpiceDouble first
```
## spkw09_c
```c
void spkw09_c ( SpiceInt             handle,
                   SpiceInt             body,
                   SpiceInt             center, 
                   ConstSpiceChar     * frame,
                   SpiceDouble          first,
                   SpiceDouble          last,
                   ConstSpiceChar     * segid,
                   SpiceInt             degree,
                   SpiceInt             n,
                   ConstSpiceDouble     states[][6],
                   ConstSpiceDouble     epochs[]     )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble lastConstSpiceChar* segidSpiceInt degreeSpiceInt nConstSpiceDouble statesConstSpiceDouble epochs
```
#### Outputs
```
SpiceDouble first
```
## spkw10_c
```c
void spkw10_c ( SpiceInt           handle,
                   SpiceInt           body, 
                   SpiceInt           center, 
                   ConstSpiceChar   * frame, 
                   SpiceDouble        first,
                   SpiceDouble        last,
                   ConstSpiceChar   * segid, 
                   ConstSpiceDouble   consts [8],
                   SpiceInt           n,
                   ConstSpiceDouble   elems  [],
                   ConstSpiceDouble   epochs []  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble firstSpiceDouble lastConstSpiceChar* segidConstSpiceDouble constsSpiceInt nConstSpiceDouble elemsConstSpiceDouble epochs
```
#### Outputs
```

```
## spkw12_c
```c
void spkw12_c ( SpiceInt             handle,
                   SpiceInt             body,
                   SpiceInt             center, 
                   ConstSpiceChar     * frame,
                   SpiceDouble          first,
                   SpiceDouble          last,
                   ConstSpiceChar     * segid,
                   SpiceInt             degree,
                   SpiceInt             n,
                   ConstSpiceDouble     states[][6],
                   SpiceDouble          epoch0,
                   SpiceDouble          step        )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble lastConstSpiceChar* segidSpiceInt degreeSpiceInt nConstSpiceDouble statesSpiceDouble epoch0SpiceDouble step
```
#### Outputs
```
SpiceDouble first
```
## spkw13_c
```c
void spkw13_c ( SpiceInt             handle,
                   SpiceInt             body,
                   SpiceInt             center, 
                   ConstSpiceChar     * frame,
                   SpiceDouble          first,
                   SpiceDouble          last,
                   ConstSpiceChar     * segid,
                   SpiceInt             degree,
                   SpiceInt             n,
                   ConstSpiceDouble     states[][6],
                   ConstSpiceDouble     epochs[]     )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble lastConstSpiceChar* segidSpiceInt degreeSpiceInt nConstSpiceDouble statesConstSpiceDouble epochs
```
#### Outputs
```
SpiceDouble first
```
## spkw15_c
```c
void spkw15_c ( SpiceInt           handle,
                   SpiceInt           body, 
                   SpiceInt           center, 
                   ConstSpiceChar   * frame, 
                   SpiceDouble        first,
                   SpiceDouble        last,
                   ConstSpiceChar   * segid, 
                   SpiceDouble        epoch,
                   ConstSpiceDouble   tp     [3],
                   ConstSpiceDouble   pa     [3],
                   SpiceDouble        p,
                   SpiceDouble        ecc,
                   SpiceDouble        j2flg,
                   ConstSpiceDouble   pv     [3],
                   SpiceDouble        gm,
                   SpiceDouble        j2,
                   SpiceDouble        radius     )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble firstSpiceDouble lastConstSpiceChar* segidSpiceDouble epochConstSpiceDouble tpConstSpiceDouble paSpiceDouble pSpiceDouble eccSpiceDouble j2flgConstSpiceDouble pvSpiceDouble gmSpiceDouble j2SpiceDouble radius
```
#### Outputs
```

```
## spkw17_c
```c
void spkw17_c ( SpiceInt           handle,
                   SpiceInt           body, 
                   SpiceInt           center, 
                   ConstSpiceChar   * frame, 
                   SpiceDouble        first,
                   SpiceDouble        last,
                   ConstSpiceChar   * segid, 
                   SpiceDouble        epoch,
                   ConstSpiceDouble   eqel   [9],
                   SpiceDouble        rapol,
                   SpiceDouble        decpol      )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble firstSpiceDouble lastConstSpiceChar* segidSpiceDouble epochConstSpiceDouble eqelSpiceDouble rapol
```
#### Outputs
```
SpiceDouble decpol
```
## spkw18_c
```c
void spkw18_c ( SpiceInt             handle,
                   SpiceSPK18Subtype    subtyp,
                   SpiceInt             body,
                   SpiceInt             center, 
                   ConstSpiceChar     * frame,
                   SpiceDouble          first,
                   SpiceDouble          last,
                   ConstSpiceChar     * segid,
                   SpiceInt             degree,
                   SpiceInt             n,
                   const void         * packts,
                   ConstSpiceDouble     epochs[]     )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handleSpiceSPK18Subtype subtypSpiceInt bodySpiceInt centerConstSpiceChar* frameSpiceDouble lastConstSpiceChar* segidSpiceInt degreeSpiceInt nConstSpiceDouble epochs
```
#### Outputs
```
SpiceDouble firstconst void
```
## srfrec_c
```c
void srfrec_c ( SpiceInt      body,
                   SpiceDouble   longitude,
                   SpiceDouble   latitude,
                   SpiceDouble   rectan[3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt bodySpiceDouble latitude
```
#### Outputs
```
SpiceDouble longitudeSpiceDouble* rectan[3]
```
## srfxpt_c
```c
void srfxpt_c ( ConstSpiceChar      * method,
                   ConstSpiceChar      * target,
                   SpiceDouble           et,
                   ConstSpiceChar      * abcorr,
                   ConstSpiceChar      * obsrvr,
                   ConstSpiceChar      * dref,
                   ConstSpiceDouble      dvec   [3],
                   SpiceDouble           spoint [3],
                   SpiceDouble         * dist,
                   SpiceDouble         * trgepc,
                   SpiceDouble           obspos [3],
                   SpiceBoolean        * found      )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* methodConstSpiceChar* targetSpiceDouble etConstSpiceChar* abcorrConstSpiceChar* obsrvrConstSpiceChar* drefConstSpiceDouble dvec
```
#### Outputs
```
SpiceDouble spointSpiceDouble* distSpiceDouble* trgepcSpiceDouble obsposSpiceBoolean* found
```
## ssize_c
```c
void ssize_c (  SpiceInt      size,   
                   SpiceCell   * cell  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt sizeSpiceCell* cell
```
#### Outputs
```

```
## stelab_c
```c
void stelab_c ( ConstSpiceDouble   pobj[3],
                   ConstSpiceDouble   vobs[3],
                   SpiceDouble        appobj[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* pobj[3]ConstSpiceDouble* vobs[3]
```
#### Outputs
```
SpiceDouble* appobj[3]
```
## stpool_c
```c
void stpool_c ( ConstSpiceChar    * item,
                   SpiceInt            nth,
                   ConstSpiceChar    * contin,
                   SpiceInt            lenout,
                   SpiceChar         * string,
                   SpiceInt          * size,
                   SpiceBoolean      * found  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* itemSpiceInt nthConstSpiceChar* continSpiceInt lenout
```
#### Outputs
```
SpiceChar* stringSpiceInt* sizeSpiceBoolean* found
```
## str2et_c
```c
void str2et_c ( ConstSpiceChar * str,
                   SpiceDouble    * et   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* str
```
#### Outputs
```
SpiceDouble* et
```
## subpnt_c
```c
void subpnt_c ( ConstSpiceChar       * method,
                   ConstSpiceChar       * target,
                   SpiceDouble            et,
                   ConstSpiceChar       * fixref,
                   ConstSpiceChar       * abcorr,
                   ConstSpiceChar       * obsrvr,
                   SpiceDouble            spoint [3],
                   SpiceDouble          * trgepc,
                   SpiceDouble            srfvec [3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* methodConstSpiceChar* targetSpiceDouble etConstSpiceChar* fixrefConstSpiceChar* abcorrConstSpiceChar* obsrvr
```
#### Outputs
```
SpiceDouble spointSpiceDouble* trgepcSpiceDouble srfvec
```
## subpt_c
```c
void subpt_c ( ConstSpiceChar       * method,
                  ConstSpiceChar       * target,
                  SpiceDouble            et,
                  ConstSpiceChar       * abcorr,
                  ConstSpiceChar       * obsrvr,
                  SpiceDouble            spoint [3],
                  SpiceDouble          * alt         )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* methodConstSpiceChar* targetSpiceDouble etConstSpiceChar* abcorrConstSpiceChar* obsrvr
```
#### Outputs
```
SpiceDouble spointSpiceDouble* alt
```
## subslr_c
```c
void subslr_c ( ConstSpiceChar       * method,
                   ConstSpiceChar       * target,
                   SpiceDouble            et,
                   ConstSpiceChar       * fixref,
                   ConstSpiceChar       * abcorr,
                   ConstSpiceChar       * obsrvr,
                   SpiceDouble            spoint [3],
                   SpiceDouble          * trgepc,
                   SpiceDouble            srfvec [3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* methodConstSpiceChar* targetSpiceDouble etConstSpiceChar* fixrefConstSpiceChar* abcorrConstSpiceChar* obsrvr
```
#### Outputs
```
SpiceDouble spointSpiceDouble* trgepcSpiceDouble srfvec
```
## subsol_c
```c
void subsol_c ( ConstSpiceChar   * method,
                   ConstSpiceChar   * target,
                   SpiceDouble        et,
                   ConstSpiceChar   * abcorr,
                   ConstSpiceChar   * obsrvr,
                   SpiceDouble        spoint[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* methodConstSpiceChar* targetSpiceDouble etConstSpiceChar* abcorrConstSpiceChar* obsrvr
```
#### Outputs
```
SpiceDouble* spoint[3]
```
## sumad_c
```c
ouble sumad_c ( ConstSpiceDouble   * array,
                         SpiceInt             n     )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceDouble* arraySpiceInt n
```
#### Outputs
```

```
## sumai_c
```c
nt sumai_c ( ConstSpiceInt   * array,
                      SpiceInt          n     )
```
#### Return
```
nt
```
#### Inputs
```
ConstSpiceInt* arraySpiceInt n
```
#### Outputs
```

```
## surfpt_c
```c
void surfpt_c ( ConstSpiceDouble   positn[3], 
                   ConstSpiceDouble   u[3], 
                   SpiceDouble        a, 
                   SpiceDouble        b,
                   SpiceDouble        c, 
                   SpiceDouble        point[3],  
                   SpiceBoolean     * found     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* positn[3]ConstSpiceDouble* u[3]SpiceDouble aSpiceDouble bSpiceDouble c
```
#### Outputs
```
SpiceDouble* point[3]SpiceBoolean* found
```
## surfpv_c
```c
void surfpv_c ( ConstSpiceDouble      stvrtx[6],
                   ConstSpiceDouble      stdir [6],
                   SpiceDouble           a,
                   SpiceDouble           b,
                   SpiceDouble           c,
                   SpiceDouble           stx   [6],
                   SpiceBoolean        * found      )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* stvrtx[6]ConstSpiceDouble stdirSpiceDouble c
```
#### Outputs
```
SpiceDouble aSpiceDouble bSpiceDouble stxSpiceBoolean* found
```
## swpool_c
```c
void swpool_c ( ConstSpiceChar    * agent,
                   SpiceInt            nnames,
                   SpiceInt            lenvals,
                   const void        * names   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* agentSpiceInt nnamesSpiceInt lenvals
```
#### Outputs
```
const void
```
## szpool_c
```c
void szpool_c ( ConstSpiceChar * name,
                   SpiceInt       * n,
                   SpiceBoolean   * found )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* name
```
#### Outputs
```
SpiceInt* nSpiceBoolean* found
```
## s_rnge
```c
integer s_rnge(char *varn, ftnint offset, char *procn, ftnint line)
```
#### Return
```
integer
```
#### Inputs
```

```
#### Outputs
```
char* varnftnint offsetchar* procnftnint line
```
## timdef_c
```c
void timdef_c ( ConstSpiceChar * action,
                   ConstSpiceChar * item,
                   SpiceInt         lenout,
                   SpiceChar      * value )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* actionConstSpiceChar* itemSpiceInt lenoutSpiceChar* value
```
#### Outputs
```

```
## timout_c
```c
void timout_c ( SpiceDouble       et,
                   ConstSpiceChar  * pictur,
                   SpiceInt          lenout,
                   SpiceChar       * output )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble etConstSpiceChar* picturSpiceInt lenout
```
#### Outputs
```
SpiceChar* output
```
## tipbod_c
```c
void tipbod_c ( ConstSpiceChar  * ref,
                   SpiceInt          body,
                   SpiceDouble       et,
                   SpiceDouble       tipm[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* refSpiceInt bodySpiceDouble et
```
#### Outputs
```
SpiceDouble* tipm[3]
```
## tkvrsn_c
```c
har  * tkvrsn_c ( ConstSpiceChar * item )
```
#### Return
```
har  
```
#### Inputs
```
ConstSpiceChar* item
```
#### Outputs
```

```
## tparse_c
```c
void tparse_c ( ConstSpiceChar  * string,
                   SpiceInt          lenout,
                   SpiceDouble     * sp2000,
                   SpiceChar       * errmsg  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* stringSpiceInt lenout
```
#### Outputs
```
SpiceDouble* sp2000SpiceChar* errmsg
```
## tpictr_c
```c
void tpictr_c ( ConstSpiceChar * sample,
                   SpiceInt         lenout,
                   SpiceInt         lenerr,
                   SpiceChar      * pictur,
                   SpiceBoolean   * ok,
                   SpiceChar      * errmsg )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* sampleSpiceInt lenoutSpiceInt lenerr
```
#### Outputs
```
SpiceChar* picturSpiceBoolean* okSpiceChar* errmsg
```
## trace_c
```c
ouble trace_c ( ConstSpiceDouble  matrix[3][3] )
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```
ConstSpiceDouble* matrix[3]
```
## tsetyr_c
```c
void tsetyr_c ( SpiceInt year )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt year
```
#### Outputs
```

```
## twopi_c
```c
ouble twopi_c ( void )
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## twovec_c
```c
void twovec_c ( ConstSpiceDouble    axdef  [3],
                   SpiceInt            indexa,
                   ConstSpiceDouble    plndef [3],
                   SpiceInt            indexp,
                   SpiceDouble         mout   [3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble axdefSpiceInt indexaConstSpiceDouble plndefSpiceInt indexp
```
#### Outputs
```
SpiceDouble mout
```
## tyear_c
```c
ouble tyear_c ( void )
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```

```
## ucrss_c
```c
void ucrss_c ( ConstSpiceDouble   v1[3],
                  ConstSpiceDouble   v2[3], 
                  SpiceDouble        vout[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* v1[3]ConstSpiceDouble* v2[3]
```
#### Outputs
```
SpiceDouble* vout[3]
```
## uddc_c
```c
void uddc_c ( void            ( * udfunc )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
voi d
```
## uddf_c
```c
void uddf_c (  void             ( * udfunc )
```
#### Return
```
void
```
#### Inputs
```

```
#### Outputs
```
voi d
```
## union_c
```c
void union_c (  SpiceCell   * a,
                   SpiceCell   * b,
                   SpiceCell   * c  )
```
#### Return
```
void
```
#### Inputs
```
SpiceCell* aSpiceCell* b
```
#### Outputs
```
SpiceCell* c
```
## unitim_c
```c
ouble unitim_c ( SpiceDouble        epoch,
                          ConstSpiceChar   * insys,
                          ConstSpiceChar   * outsys )
```
#### Return
```
ouble
```
#### Inputs
```
SpiceDouble epochConstSpiceChar* insysConstSpiceChar* outsys
```
#### Outputs
```

```
## unload_c
```c
void unload_c ( ConstSpiceChar  * file )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* file
```
#### Outputs
```

```
## unormg_c
```c
void unormg_c ( ConstSpiceDouble  * v1,
                   SpiceInt            ndim,
                   SpiceDouble       * vout,
                   SpiceDouble       * vmag )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* v1SpiceInt ndim
```
#### Outputs
```
SpiceDouble* voutSpiceDouble* vmag
```
## unorm_c
```c
void unorm_c ( ConstSpiceDouble     v1[3],
                  SpiceDouble          vout[3],
                  SpiceDouble        * vmag    )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* v1[3]
```
#### Outputs
```
SpiceDouble* vout[3]SpiceDouble* vmag
```
## utc2et_c
```c
void utc2et_c ( ConstSpiceChar  * utcstr,
                   SpiceDouble     * et      )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* utcstr
```
#### Outputs
```
SpiceDouble* et
```
## vaddg_c
```c
void vaddg_c ( ConstSpiceDouble  * v1,
                  ConstSpiceDouble  * v2,
                  SpiceInt            ndim,
                  SpiceDouble       * vout )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* v1ConstSpiceDouble* v2SpiceInt ndim
```
#### Outputs
```
SpiceDouble* vout
```
## vadd_c
```c
void vadd_c ( ConstSpiceDouble   v1[3],
                 ConstSpiceDouble   v2[3],
                 SpiceDouble        vout[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* v1[3]ConstSpiceDouble* v2[3]
```
#### Outputs
```
SpiceDouble* vout[3]
```
## valid_c
```c
void valid_c (  SpiceInt      size,
                   SpiceInt      n,
                   SpiceCell   * set   )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt sizeSpiceInt nSpiceCell* set
```
#### Outputs
```

```
## vcrss_c
```c
void vcrss_c ( ConstSpiceDouble   v1[3],
                  ConstSpiceDouble   v2[3],
                  SpiceDouble        vout[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* v1[3]ConstSpiceDouble* v2[3]
```
#### Outputs
```
SpiceDouble* vout[3]
```
## vdistg_c
```c
ouble vdistg_c ( ConstSpiceDouble   * v1,
                          ConstSpiceDouble   * v2,
                          SpiceInt             ndim )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceDouble* v1ConstSpiceDouble* v2SpiceInt ndim
```
#### Outputs
```

```
## vdist_c
```c
ouble vdist_c ( ConstSpiceDouble v1[3],
                         ConstSpiceDouble v2[3] )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceDouble* v1[3]ConstSpiceDouble* v2[3]
```
#### Outputs
```

```
## vdotg_c
```c
ouble vdotg_c ( ConstSpiceDouble   * v1,
                         ConstSpiceDouble   * v2,
                         SpiceInt             ndim )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceDouble* v1ConstSpiceDouble* v2
```
#### Outputs
```
SpiceInt ndim
```
## vequg_c
```c
void vequg_c ( ConstSpiceDouble  * vin,
                  SpiceInt            ndim,
                  SpiceDouble       * vout )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* vinSpiceInt ndim
```
#### Outputs
```
SpiceDouble* vout
```
## vequ_c
```c
void vequ_c ( ConstSpiceDouble   vin[3],
                 SpiceDouble        vout[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* vin[3]
```
#### Outputs
```
SpiceDouble* vout[3]
```
## vhatg_c
```c
void vhatg_c ( ConstSpiceDouble   * v1,
                  SpiceInt             ndim,
                  SpiceDouble        * vout )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* v1SpiceInt ndim
```
#### Outputs
```
SpiceDouble* vout
```
## vlcom3_c
```c
void vlcom3_c ( SpiceDouble        a, 
                   ConstSpiceDouble   v1 [3], 
                   SpiceDouble        b, 
                   ConstSpiceDouble   v2 [3], 
                   SpiceDouble        c, 
                   ConstSpiceDouble   v3 [3], 
                   SpiceDouble        sum[3]  )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble aConstSpiceDouble v1SpiceDouble bConstSpiceDouble v2SpiceDouble cConstSpiceDouble v3
```
#### Outputs
```
SpiceDouble* sum[3]
```
## vlcomg_c
```c
void vlcomg_c ( SpiceInt            n,
                   SpiceDouble         a,
                   ConstSpiceDouble *  v1,
                   SpiceDouble         b,
                   ConstSpiceDouble *  v2,
                   SpiceDouble      *  sum )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt nSpiceDouble aSpiceDouble b
```
#### Outputs
```
ConstSpiceDouble* v1ConstSpiceDouble* v2SpiceDouble* sum
```
## vminug_c
```c
void vminug_c ( ConstSpiceDouble  * vin,
                   SpiceInt            ndim,
                   SpiceDouble       * vout )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* vinSpiceInt ndim
```
#### Outputs
```
SpiceDouble* vout
```
## vminus_c
```c
void vminus_c ( ConstSpiceDouble v1[3],  SpiceDouble vout[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* v1[3]
```
#### Outputs
```
SpiceDouble* vout[3]
```
## vnormg_c
```c
ouble vnormg_c ( ConstSpiceDouble   * v1,
                          SpiceInt             ndim )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceDouble* v1
```
#### Outputs
```
SpiceInt ndim
```
## vpack_c
```c
void vpack_c ( SpiceDouble   x,
                  SpiceDouble   y,
                  SpiceDouble   z,
                  SpiceDouble   v[3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble z
```
#### Outputs
```
SpiceDouble xSpiceDouble ySpiceDouble* v[3]
```
## vperp_c
```c
void vperp_c ( ConstSpiceDouble   a[3],
                  ConstSpiceDouble   b[3],
                  SpiceDouble        p[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* a[3]ConstSpiceDouble* b[3]
```
#### Outputs
```
SpiceDouble* p[3]
```
## vprjpi_c
```c
void vprjpi_c ( ConstSpiceDouble    vin    [3],
                   ConstSpicePlane   * projpl,
                   ConstSpicePlane   * invpl,
                   SpiceDouble         vout   [3],
                   SpiceBoolean      * found       )
```
#### Return
```
void
```
#### Inputs
```
ConstSpicePlane* invpl
```
#### Outputs
```
ConstSpiceDouble vinConstSpicePlane* projplSpiceDouble voutSpiceBoolean* found
```
## vprjp_c
```c
void vprjp_c ( ConstSpiceDouble    vin   [3],
                  ConstSpicePlane   * plane,
                  SpiceDouble         vout  [3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble vinConstSpicePlane* plane
```
#### Outputs
```
SpiceDouble vout
```
## vproj_c
```c
void vproj_c ( ConstSpiceDouble   a[3],
                  ConstSpiceDouble   b[3],
                  SpiceDouble        p[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* a[3]ConstSpiceDouble* b[3]
```
#### Outputs
```
SpiceDouble* p[3]
```
## vrelg_c
```c
ouble vrelg_c ( ConstSpiceDouble * v1,
                         ConstSpiceDouble * v2,
                         SpiceInt           ndim  )
```
#### Return
```
ouble
```
#### Inputs
```
SpiceInt ndim
```
#### Outputs
```
ConstSpiceDouble* v1ConstSpiceDouble* v2
```
## vrel_c
```c
ouble vrel_c ( ConstSpiceDouble v1[3],
                        ConstSpiceDouble v2[3]  )
```
#### Return
```
ouble
```
#### Inputs
```

```
#### Outputs
```
ConstSpiceDouble* v1[3]ConstSpiceDouble* v2[3]
```
## vrotv_c
```c
void vrotv_c ( ConstSpiceDouble  v     [3],
                  ConstSpiceDouble  axis  [3],
                  SpiceDouble       theta,
                  SpiceDouble       r     [3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble vConstSpiceDouble axisSpiceDouble theta
```
#### Outputs
```
SpiceDouble r
```
## vsclg_c
```c
void vsclg_c ( SpiceDouble          s,
                  ConstSpiceDouble   * v1,
                  SpiceInt             ndim,
                  SpiceDouble        * vout )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble sConstSpiceDouble* v1SpiceInt ndim
```
#### Outputs
```
SpiceDouble* vout
```
## vsepg_c
```c
ouble vsepg_c ( ConstSpiceDouble * v1,
                         ConstSpiceDouble * v2,
                         SpiceInt           ndim )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceDouble* v1ConstSpiceDouble* v2SpiceInt ndim
```
#### Outputs
```

```
## vsep_c
```c
ouble vsep_c ( ConstSpiceDouble v1[3], ConstSpiceDouble v2[3] )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceDouble* v1[3]ConstSpiceDouble* v2[3]
```
#### Outputs
```

```
## vsubg_c
```c
void vsubg_c ( ConstSpiceDouble  * v1,
                  ConstSpiceDouble  * v2,
                  SpiceInt            ndim,
                  SpiceDouble       * vout )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* v1ConstSpiceDouble* v2SpiceInt ndim
```
#### Outputs
```
SpiceDouble* vout
```
## vsub_c
```c
void vsub_c ( ConstSpiceDouble   v1[3],
                 ConstSpiceDouble   v2[3],
                 SpiceDouble        vout[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* v1[3]ConstSpiceDouble* v2[3]
```
#### Outputs
```
SpiceDouble* vout[3]
```
## vtmvg_c
```c
ouble vtmvg_c ( const void          * v1,
                         const void          * matrix,
                         const void          * v2,
                         SpiceInt              nrow,
                         SpiceInt              ncol    )
```
#### Return
```
ouble
```
#### Inputs
```
SpiceInt nrowSpiceInt ncol
```
#### Outputs
```
const void
```
## vtmv_c
```c
ouble vtmv_c ( ConstSpiceDouble v1     [3],
                        ConstSpiceDouble matrix [3][3],
                        ConstSpiceDouble v2     [3] )
```
#### Return
```
ouble
```
#### Inputs
```
ConstSpiceDouble v1ConstSpiceDouble matrixConstSpiceDouble v2
```
#### Outputs
```

```
## vupack_c
```c
void vupack_c ( ConstSpiceDouble     v[3],
                   SpiceDouble        * x,
                   SpiceDouble        * y,
                   SpiceDouble        * z     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* v[3]
```
#### Outputs
```
SpiceDouble* xSpiceDouble* ySpiceDouble* z
```
## vzerog_c
```c
oolean vzerog_c ( ConstSpiceDouble * v, SpiceInt ndim )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceDouble* vSpiceInt ndim
```
#### Outputs
```

```
## vzero_c
```c
oolean vzero_c ( ConstSpiceDouble v[3] )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceDouble* v[3]
```
#### Outputs
```

```
## wncard_c
```c
nt wncard_c ( SpiceCell  * window )
```
#### Return
```
nt
```
#### Inputs
```
SpiceCell* window
```
#### Outputs
```

```
## wncomd_c
```c
void wncomd_c ( SpiceDouble    left,
                   SpiceDouble    right,
                   SpiceCell    * window,
                   SpiceCell    * result )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble rightSpiceCell* window
```
#### Outputs
```
SpiceDouble leftSpiceCell* result
```
## wncond_c
```c
void wncond_c ( SpiceDouble     left,
                   SpiceDouble     right,
                   SpiceCell     * window )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble leftSpiceDouble rightSpiceCell* window
```
#### Outputs
```

```
## wndifd_c
```c
void wndifd_c (  SpiceCell   * a,
                    SpiceCell   * b,
                    SpiceCell   * c  )
```
#### Return
```
void
```
#### Inputs
```
SpiceCell* b
```
#### Outputs
```
SpiceCell* aSpiceCell* c
```
## wnelmd_c
```c
oolean wnelmd_c ( SpiceDouble    point,
                           SpiceCell    * window )
```
#### Return
```
oolean
```
#### Inputs
```
SpiceDouble pointSpiceCell* window
```
#### Outputs
```

```
## wnexpd_c
```c
void wnexpd_c ( SpiceDouble    left,
                   SpiceDouble    right,
                   SpiceCell    * window )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble leftSpiceDouble rightSpiceCell* window
```
#### Outputs
```

```
## wnextd_c
```c
void wnextd_c ( SpiceChar     side,
                   SpiceCell   * window )
```
#### Return
```
void
```
#### Inputs
```
SpiceChar sideSpiceCell* window
```
#### Outputs
```

```
## wnfetd_c
```c
void wnfetd_c ( SpiceCell    * window,
                   SpiceInt       n,
                   SpiceDouble  * left,
                   SpiceDouble  * right   )
```
#### Return
```
void
```
#### Inputs
```
SpiceCell* windowSpiceInt n
```
#### Outputs
```
SpiceDouble* leftSpiceDouble* right
```
## wnfild_c
```c
void wnfild_c ( SpiceDouble     small,
                   SpiceCell     * window )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble smallSpiceCell* window
```
#### Outputs
```

```
## wnfltd_c
```c
void wnfltd_c ( SpiceDouble     small,
                   SpiceCell    *  window )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble smallSpiceCell* window
```
#### Outputs
```

```
## wnincd_c
```c
oolean wnincd_c ( SpiceDouble     left,
                           SpiceDouble     right,
                           SpiceCell     * window )
```
#### Return
```
oolean
```
#### Inputs
```
SpiceDouble rightSpiceCell* window
```
#### Outputs
```
SpiceDouble left
```
## wninsd_c
```c
void wninsd_c ( SpiceDouble     left,
                   SpiceDouble     right,
                   SpiceCell     * window )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble rightSpiceCell* window
```
#### Outputs
```
SpiceDouble left
```
## wnintd_c
```c
void wnintd_c ( SpiceCell  * a,
                   SpiceCell  * b,
                   SpiceCell  * c )
```
#### Return
```
void
```
#### Inputs
```
SpiceCell* b
```
#### Outputs
```
SpiceCell* aSpiceCell* c
```
## wnreld_c
```c
oolean wnreld_c ( SpiceCell       * a,
                           ConstSpiceChar  * op,
                           SpiceCell       * b   )
```
#### Return
```
oolean
```
#### Inputs
```
ConstSpiceChar* opSpiceCell* b
```
#### Outputs
```
SpiceCell* a
```
## wnsumd_c
```c
void wnsumd_c ( SpiceCell      * window,
                   SpiceDouble    * meas,
                   SpiceDouble    * avg,
                   SpiceDouble    * stddev,
                   SpiceInt       * shortest,
                   SpiceInt       * longest   )
```
#### Return
```
void
```
#### Inputs
```
SpiceCell* window
```
#### Outputs
```
SpiceDouble* measSpiceDouble* avgSpiceDouble* stddevSpiceInt* shortestSpiceInt* longest
```
## wnunid_c
```c
void wnunid_c ( SpiceCell   * a,
                   SpiceCell   * b,
                   SpiceCell   * c )
```
#### Return
```
void
```
#### Inputs
```
SpiceCell* b
```
#### Outputs
```
SpiceCell* aSpiceCell* c
```
## wnvald_c
```c
void wnvald_c ( SpiceInt       size,
                   SpiceInt       n,
                   SpiceCell    * window )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt sizeSpiceInt nSpiceCell* window
```
#### Outputs
```

```
## xf2eul_c
```c
void xf2eul_c ( ConstSpiceDouble     xform  [6][6],
                   SpiceInt             axisa,
                   SpiceInt             axisb,
                   SpiceInt             axisc,
                   SpiceDouble          eulang [6],
                   SpiceBoolean       * unique         )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble xformSpiceInt axisaSpiceInt axisbSpiceInt axisc
```
#### Outputs
```
SpiceDouble eulangSpiceBoolean* unique
```
## xf2rav_c
```c
void xf2rav_c ( ConstSpiceDouble   xform [6][6],
                   SpiceDouble        rot   [3][3],
                   SpiceDouble        av    [3]     )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble xform
```
#### Outputs
```
SpiceDouble rotSpiceDouble av
```
## zzadbail_c
```c
logical zzadbail_c ()
```
#### Return
```
logical
```
#### Inputs
```

```
#### Outputs
```

```
## zzadfunc_c
```c
int zzadfunc_c ( doublereal   * et,
                    doublereal   * value )
```
#### Return
```
int
```
#### Inputs
```
doublereal* et
```
#### Outputs
```
doublereal* value
```
## zzadqdec_c
```c
int zzadqdec_c ( U_fp           udfunc,
                    doublereal   * et,
                    logical      * xbool )
```
#### Return
```
int
```
#### Inputs
```
doublereal* et
```
#### Outputs
```
U_fp udfunclogical* xbool
```
## zzadrefn_c
```c
int zzadrefn_c ( doublereal  * t1, 
                    doublereal  * t2, 
                    logical     * s1, 
                    logical     * s2, 
                    doublereal  * t   )
```
#### Return
```
int
```
#### Inputs
```
doublereal* t1doublereal* t2
```
#### Outputs
```
logical* s1logical* s2doublereal* t
```
## zzadrepf_c
```c
int zzadrepf_c ()
```
#### Return
```
int
```
#### Inputs
```

```
#### Outputs
```

```
## zzadrepu_c
```c
int zzadrepu_c ( doublereal  * ivbeg, 
                    doublereal  * ivend,
                    doublereal  * time   )
```
#### Return
```
int
```
#### Inputs
```
doublereal* ivenddoublereal* time
```
#### Outputs
```
doublereal* ivbeg
```
## zzadsave_c
```c
functions

      zzadsave_c ( Save a function pointer for adapter use )
```
#### Return
```
functions

     
```
#### Inputs
```

```
#### Outputs
```
Save a
```
## zzadstep_c
```c
int zzadstep_c ( doublereal  * time,
                    doublereal  * step  )
```
#### Return
```
int
```
#### Inputs
```
doublereal* time
```
#### Outputs
```
doublereal* step
```
## zzerror
```c
char * zzerror( long cnt )
```
#### Return
```
char 
```
#### Inputs
```
long cnt
```
#### Outputs
```

```
## zzgetcml_c
```c
void zzgetcml_c ( SpiceInt         *  argc,
                     SpiceChar      ***  argv,
                     SpiceBoolean        init )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt* argcSpiceBoolean init
```
#### Outputs
```
SpiceCha r
```
## zzgfdsps_
```c
int zzgfdsps_ ( integer  * nlead,
                   char     * string,
                   char     * fmt,
                   integer  * ntrail,
                   ftnlen     stringLen,
                   ftnlen     fmtLen     )
```
#### Return
```
int
```
#### Inputs
```
integer* nleadchar* stringchar* fmtinteger* ntrailftnlen stringLenftnlen fmtLen
```
#### Outputs
```

```
## zzgfsavh_c
```c
void zzgfsavh_c ( SpiceBoolean status )
```
#### Return
```
void
```
#### Inputs
```
SpiceBoolean status
```
#### Outputs
```

```
## zzsynccl_c
```c
void zzsynccl_c ( SpiceTransDir     xdir,
                     SpiceCell       * cell )
```
#### Return
```
void
```
#### Inputs
```
SpiceTransDir xdirSpiceCell* cell
```
#### Outputs
```

```
