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
ConstSpiceChar* item
SpiceCell* cell
```
#### Outputs
_no output arguments._
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
SpiceDouble item
SpiceCell* cell
```
#### Outputs
_no output arguments._
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
SpiceInt item
SpiceCell* cell
```
#### Outputs
_no output arguments._
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
ConstSpiceDouble axis
SpiceDouble angle
```
#### Outputs
```
SpiceDouble r
```
## b1900_c
```c
SpiceDouble b1900_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## b1950_c
```c
SpiceDouble b1950_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## badkpv_c
```c
SpiceBoolean badkpv_c ( ConstSpiceChar    *caller,
                           ConstSpiceChar    *name,
                           ConstSpiceChar    *comp,
                           SpiceInt           size,
                           SpiceInt           divby,
                           SpiceChar          type   )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
ConstSpiceChar* caller
ConstSpiceChar* name
ConstSpiceChar* comp
SpiceInt size
SpiceInt divby
SpiceChar type
```
#### Outputs
_no output arguments._
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
SpiceInt code
SpiceInt lenout
```
#### Outputs
```
SpiceChar* name
SpiceBoolean* found
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
SpiceInt code
SpiceInt lenout
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
ConstSpiceChar* name
SpiceInt code
```
#### Outputs
_no output arguments._
## bodfnd_c
```c
SpiceBoolean bodfnd_c ( SpiceInt           body,
                           ConstSpiceChar   * item )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
SpiceInt body
ConstSpiceChar* item
```
#### Outputs
_no output arguments._
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
SpiceInt* code
SpiceBoolean* found
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
SpiceInt* code
SpiceBoolean* found
```
## bodvar_c
```c
void bodvar_c ( SpiceInt           body,
                   ConstSpiceChar   * item,
                   SpiceInt         * dim,
                   SpiceDouble      * values )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt body
ConstSpiceChar* item
```
#### Outputs
```
SpiceInt* dim
SpiceDouble* values
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
SpiceInt bodyid
ConstSpiceChar* item
SpiceInt maxn
```
#### Outputs
```
SpiceInt* dim
SpiceDouble* values
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
ConstSpiceChar* bodynm
ConstSpiceChar* item
SpiceInt maxn
```
#### Outputs
```
SpiceInt* dim
SpiceDouble* values
```
## brcktd_c
```c
SpiceDouble brcktd_c ( SpiceDouble  number, 
                          SpiceDouble  end1,
                          SpiceDouble  end2   )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
SpiceDouble number
SpiceDouble end1
SpiceDouble end2
```
#### Outputs
_no output arguments._
## brckti_c
```c
SpiceInt brckti_c ( SpiceInt  number, 
                       SpiceInt  end1,
                       SpiceInt  end2   )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceInt number
SpiceInt end1
SpiceInt end2
```
#### Outputs
_no output arguments._
## bschoc_c
```c
SpiceInt bschoc_c ( ConstSpiceChar  * value,
                       SpiceInt          ndim,   
                       SpiceInt          lenvals,
                       const void      * array,
                       ConstSpiceInt   * order    )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* value
SpiceInt ndim
SpiceInt lenvals
void* array
ConstSpiceInt* order
```
#### Outputs
_no output arguments._
## bschoi_c
```c
SpiceInt bschoi_c ( SpiceInt          value,
                       SpiceInt          ndim,
                       ConstSpiceInt   * array,
                       ConstSpiceInt   * order  )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceInt value
SpiceInt ndim
ConstSpiceInt* array
ConstSpiceInt* order
```
#### Outputs
_no output arguments._
## bsrchc_c
```c
SpiceInt bsrchc_c ( ConstSpiceChar  * value,
                       SpiceInt          ndim,   
                       SpiceInt          lenvals,
                       const void      * array   )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* value
SpiceInt ndim
SpiceInt lenvals
void* array
```
#### Outputs
_no output arguments._
## bsrchd_c
```c
SpiceInt bsrchd_c ( SpiceDouble          value,
                       SpiceInt             ndim,
                       ConstSpiceDouble   * array )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceDouble value
SpiceInt ndim
ConstSpiceDouble* array
```
#### Outputs
_no output arguments._
## bsrchi_c
```c
SpiceInt bsrchi_c ( SpiceInt          value,
                       SpiceInt          ndim,
                       ConstSpiceInt   * array )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceInt value
SpiceInt ndim
ConstSpiceInt* array
```
#### Outputs
_no output arguments._
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
SpiceInt card_c ( SpiceCell  * cell )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceCell* cell
```
#### Outputs
_no output arguments._
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
ConstSpiceDouble* center[3]
ConstSpiceDouble vec1
ConstSpiceDouble vec2
```
#### Outputs
```
SpiceEllipse* ellipse
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
_no output arguments._
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
_no output arguments._
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
SpiceInt cent
SpiceInt lenout
```
#### Outputs
```
SpiceInt* frcode
SpiceChar* frname
SpiceBoolean* found
```
## ckcls_c
```c
void ckcls_c ( SpiceInt handle )
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
_no output arguments._
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
ConstSpiceChar* ck
SpiceInt idcode
SpiceBoolean needav
ConstSpiceChar* level
SpiceDouble tol
ConstSpiceChar* timsys
SpiceCell* cover
```
#### Outputs
_no output arguments._
## ckgpav_c
```c
void ckgpav_c ( SpiceInt            inst, 
                   SpiceDouble         sclkdp, 
                   SpiceDouble         tol, 
                   ConstSpiceChar    * ref, 
                   SpiceDouble         cmat[3][3], 
                   SpiceDouble         av[3],
                   SpiceDouble       * clkout,  
                   SpiceBoolean      * found      )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt inst
SpiceDouble sclkdp
SpiceDouble tol
ConstSpiceChar* ref
```
#### Outputs
```
SpiceDouble* cmat[3]
SpiceDouble* av[3]
SpiceDouble* clkout
SpiceBoolean* found
```
## ckgp_c
```c
void ckgp_c ( SpiceInt            inst, 
                 SpiceDouble         sclkdp, 
                 SpiceDouble         tol, 
                 ConstSpiceChar    * ref, 
                 SpiceDouble         cmat[3][3], 
                 SpiceDouble       * clkout,  
                 SpiceBoolean      * found      )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt inst
SpiceDouble sclkdp
SpiceDouble tol
ConstSpiceChar* ref
```
#### Outputs
```
SpiceDouble* cmat[3]
SpiceDouble* clkout
SpiceBoolean* found
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
ConstSpiceChar* ck
SpiceCell* ids
```
#### Outputs
_no output arguments._
## ckopn_c
```c
void ckopn_c (  ConstSpiceChar   * fname, 
                   ConstSpiceChar   * ifname, 
                   SpiceInt           ncomch, 
                   SpiceInt         * handle  )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* fname
ConstSpiceChar* ifname
SpiceInt ncomch
```
#### Outputs
```
SpiceInt* handle
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
_no output arguments._
## ckw01_c
```c
void ckw01_c ( SpiceInt            handle, 
                  SpiceDouble         begtim,
                  SpiceDouble         endtim,
                  SpiceInt            inst,
                  ConstSpiceChar    * ref,
                  SpiceBoolean        avflag,
                  ConstSpiceChar    * segid, 
                  SpiceInt            nrec,
                  ConstSpiceDouble    sclkdp [],
                  ConstSpiceDouble    quats  [][4],
                  ConstSpiceDouble    avvs   [][3]  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
SpiceDouble begtim
SpiceDouble endtim
SpiceInt inst
ConstSpiceChar* ref
SpiceBoolean avflag
ConstSpiceChar* segid
SpiceInt nrec
ConstSpiceDouble sclkdp
ConstSpiceDouble quats
ConstSpiceDouble avvs
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceDouble begtim
SpiceDouble endtim
SpiceInt inst
ConstSpiceChar* ref
ConstSpiceChar* segid
SpiceInt nrec
ConstSpiceDouble start
ConstSpiceDouble stop
ConstSpiceDouble quats
```
#### Outputs
```
ConstSpiceDouble avvs
ConstSpiceDouble rates
```
## ckw03_c
```c
void ckw03_c ( SpiceInt            handle, 
                  SpiceDouble         begtim,
                  SpiceDouble         endtim,
                  SpiceInt            inst,
                  ConstSpiceChar    * ref,
                  SpiceBoolean        avflag,
                  ConstSpiceChar    * segid, 
                  SpiceInt            nrec,
                  ConstSpiceDouble    sclkdp [],
                  ConstSpiceDouble    quats  [][4],
                  ConstSpiceDouble    avvs   [][3],
                  SpiceInt            nints,
                  ConstSpiceDouble    starts []    )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt handle
SpiceDouble begtim
SpiceDouble endtim
SpiceInt inst
ConstSpiceChar* ref
SpiceBoolean avflag
ConstSpiceChar* segid
SpiceInt nrec
ConstSpiceDouble sclkdp
ConstSpiceDouble quats
ConstSpiceDouble avvs
SpiceInt nints
ConstSpiceDouble starts
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceCK05Subtype subtyp
SpiceInt degree
SpiceDouble begtim
SpiceDouble endtim
SpiceInt inst
ConstSpiceChar* ref
SpiceBoolean avflag
ConstSpiceChar* segid
void* packts
SpiceDouble rate
SpiceInt nints
ConstSpiceDouble starts
```
#### Outputs
```
SpiceInt n
ConstSpiceDouble sclkdp
```
## clight_c
```c
SpiceDouble clight_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## clpool_c
```c
void clpool_c ( void )
```
#### Return
```
void
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
SpiceChar delim
SpiceInt n
ConstSpiceChar* input
SpiceInt lenout
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
ConstSpiceChar* cname
SpiceInt lenout
```
#### Outputs
```
SpiceInt* frcode
SpiceChar* frname
SpiceBoolean* found
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
ConstSpiceDouble* elts[8]
SpiceDouble et
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
SpiceDouble x
ConstSpiceChar* in
ConstSpiceChar* out
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
SpiceInt cposr_c ( ConstSpiceChar    * str,
                      ConstSpiceChar    * chars,
                      SpiceInt            start  )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* str
ConstSpiceChar* chars
SpiceInt start
```
#### Outputs
_no output arguments._
## cpos_c
```c
SpiceInt cpos_c ( ConstSpiceChar    * str,
                     ConstSpiceChar    * chars,
                     SpiceInt            start  )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* str
ConstSpiceChar* chars
SpiceInt start
```
#### Outputs
_no output arguments._
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
SpiceDouble r
SpiceDouble lonc
SpiceDouble z
```
#### Outputs
```
SpiceDouble* radius
SpiceDouble* lon
SpiceDouble* lat
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
SpiceDouble r
SpiceDouble lon
SpiceDouble z
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
SpiceDouble r
SpiceDouble lonc
SpiceDouble z
```
#### Outputs
```
SpiceDouble* radius
SpiceDouble* colat
SpiceDouble* lon
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
SpiceInt handle
SpiceInt n
void* buffer
```
#### Outputs
```
SpiceInt lenvals
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
_no output arguments._
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
_no output arguments._
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
_no output arguments._
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
_no output arguments._
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
_no output arguments._
## daffna_c
```c
void daffna_c ( SpiceBoolean  * found )
```
#### Return
```
void
```
#### Inputs
_no input arguments._
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
_no input arguments._
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
SpiceInt handle
SpiceInt begin
SpiceInt end
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
SpiceInt handle
SpiceInt recno
SpiceInt begin
SpiceInt end
```
#### Outputs
```
SpiceDouble* data
SpiceBoolean* found
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
_no input arguments._
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
SpiceInt nd
SpiceInt ni
ConstSpiceDouble* dc
ConstSpiceInt* ic
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
SpiceInt handle
SpiceInt begin
SpiceInt end
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
SpiceInt handle
SpiceInt lenout
```
#### Outputs
```
SpiceInt* nd
SpiceInt* ni
SpiceChar* ifname
SpiceInt* fward
SpiceInt* bward
SpiceInt* free
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
_no output arguments._
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
ConstSpiceDouble sum
SpiceInt nd
SpiceInt ni
```
#### Outputs
```
SpiceDouble dc
SpiceInt ic
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
SpiceInt handle
SpiceInt n
SpiceInt buflen
void* buffer
```
#### Outputs
_no output arguments._
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
_no output arguments._
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
SpiceDouble x
SpiceDouble y
SpiceDouble z
```
#### Outputs
```
SpiceDouble* jacobi[3]
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
SpiceDouble epoch
ConstSpiceChar* eptype
```
#### Outputs
```
SpiceDouble* delta
```
## det_c
```c
SpiceDouble det_c ( ConstSpiceDouble m1[3][3] )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* m1[3]
```
#### Outputs
_no output arguments._
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
SpiceDouble x
SpiceDouble y
SpiceDouble z
SpiceDouble re
SpiceDouble f
```
#### Outputs
```
SpiceDouble* jacobi[3]
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
SpiceDouble diag
SpiceDouble rotate
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
SpiceCell* a
SpiceCell* b
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
SpiceDouble x
SpiceDouble y
SpiceDouble z
```
#### Outputs
```
SpiceDouble* jacobi[3]
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
SpiceDouble number
SpiceInt lenout
```
#### Outputs
```
SpiceChar* string
SpiceInt* length
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
ConstSpiceChar* body
SpiceDouble x
SpiceDouble y
SpiceDouble z
SpiceDouble re
SpiceDouble f
```
#### Outputs
```
SpiceDouble* jacobi[3]
```
## dpmax_
```c
SpiceDouble dpmax_ ()
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## dpmax_c
```c
SpiceDouble dpmax_c ()
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## dpmin_
```c
SpiceDouble dpmin_ ()
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## dpmin_c
```c
SpiceDouble dpmin_c ()
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## dpr_c
```c
SpiceDouble dpr_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
SpiceDouble r
SpiceDouble lon
SpiceDouble z
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
SpiceDouble lon
SpiceDouble lat
SpiceDouble alt
SpiceDouble re
SpiceDouble f
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
SpiceDouble lon
SpiceDouble lat
```
#### Outputs
```
SpiceDouble r
SpiceDouble* jacobi[3]
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
ConstSpiceChar* body
SpiceDouble lon
SpiceDouble lat
SpiceDouble alt
SpiceDouble re
SpiceDouble f
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
SpiceDouble r
SpiceDouble colat
SpiceDouble lon
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
SpiceDouble x
SpiceDouble y
SpiceDouble z
```
#### Outputs
```
SpiceDouble* jacobi[3]
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
SpiceBoolean* found
SpiceInt* n
SpiceChar type
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
ConstSpiceDouble s1
ConstSpiceDouble s2
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
ConstSpiceDouble s1
ConstSpiceDouble s2
```
#### Outputs
```
SpiceDouble* sout[6]
```
## dvdot_c
```c
SpiceDouble dvdot_c ( ConstSpiceDouble s1[6],
                         ConstSpiceDouble s2[6] )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* s1[6]
ConstSpiceDouble* s2[6]
```
#### Outputs
_no output arguments._
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
SpiceDouble       dvnorm_c ( ConstSpiceDouble state[6] )
```
#### Return
```
SpiceDouble      
```
#### Inputs
```
ConstSpiceDouble* state[6]
```
#### Outputs
_no output arguments._
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
_no output arguments._
## dvsep_c
```c
SpiceDouble dvsep_c (ConstSpiceDouble s1[6], ConstSpiceDouble s2[6] )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* s1[6]
ConstSpiceDouble* s2[6]
```
#### Outputs
_no output arguments._
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
SpiceDouble a
SpiceDouble b
SpiceDouble c
ConstSpiceDouble* viewpt[3]
```
#### Outputs
```
SpiceEllipse* limb
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
SpiceInt handle
SpiceInt segno
SpiceInt recno
ConstSpiceChar* column
SpiceInt nvals
SpiceInt vallen
void* cvals
SpiceBoolean isnull
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt segno
SpiceInt recno
ConstSpiceChar* column
SpiceInt nvals
ConstSpiceDouble* dvals
SpiceBoolean isnull
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt segno
SpiceInt recno
ConstSpiceChar* column
SpiceInt nvals
ConstSpiceInt* ivals
SpiceBoolean isnull
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt segno
ConstSpiceChar* column
SpiceInt vallen
void* cvals
ConstSpiceInt* entszs
ConstSpiceBoolean* nlflgs
ConstSpiceInt* rcptrs
SpiceInt* wkindx
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt segno
ConstSpiceChar* column
ConstSpiceDouble* dvals
ConstSpiceInt* entszs
ConstSpiceBoolean* nlflgs
ConstSpiceInt* rcptrs
SpiceInt* wkindx
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt segno
ConstSpiceChar* column
ConstSpiceInt* ivals
ConstSpiceInt* entszs
ConstSpiceBoolean* nlflgs
ConstSpiceInt* rcptrs
SpiceInt* wkindx
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt segno
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
SpiceInt handle
ConstSpiceChar* tabnam
SpiceInt ncols
SpiceInt cnmlen
void* cnames
SpiceInt declen
void* decls
```
#### Outputs
```
SpiceInt* segno
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
ConstSpiceChar* table
SpiceInt cindex
SpiceInt lenout
```
#### Outputs
```
SpiceChar* column
SpiceEKAttDsc* attdsc
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
_no output arguments._
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
SpiceInt handle
SpiceInt segno
SpiceInt recno
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt segno
SpiceInt* rcptrs
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* query
SpiceInt lenout
```
#### Outputs
```
SpiceInt* nmrows
SpiceBoolean* error
SpiceChar* errmsg
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
SpiceInt selidx
SpiceInt row
SpiceInt elment
SpiceInt lenout
```
#### Outputs
```
SpiceChar* cdata
SpiceBoolean* null
SpiceBoolean* found
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
SpiceInt selidx
SpiceInt row
SpiceInt elment
```
#### Outputs
```
SpiceDouble* ddata
SpiceBoolean* null
SpiceBoolean* found
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
SpiceInt selidx
SpiceInt row
SpiceInt elment
```
#### Outputs
```
SpiceInt* idata
SpiceBoolean* null
SpiceBoolean* found
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
SpiceInt handle
ConstSpiceChar* tabnam
SpiceInt ncols
SpiceInt nrows
SpiceInt cnmlen
void* cnames
SpiceInt declen
void* decls
```
#### Outputs
```
SpiceInt* segno
SpiceInt* rcptrs
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
SpiceInt handle
SpiceInt segno
SpiceInt recno
```
#### Outputs
_no output arguments._
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
SpiceInt eknelt_c ( SpiceInt  selidx,
                       SpiceInt  row     )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceInt selidx
SpiceInt row
```
#### Outputs
_no output arguments._
## eknseg_c
```c
SpiceInt eknseg_c ( SpiceInt handle )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceInt handle
```
#### Outputs
_no output arguments._
## ekntab_c
```c
void ekntab_c ( SpiceInt   * n )
```
#### Return
```
void
```
#### Inputs
_no input arguments._
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
ConstSpiceChar* fname
ConstSpiceChar* ifname
SpiceInt ncomch
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
_no input arguments._
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
SpiceInt handle
SpiceInt segno
SpiceInt recno
ConstSpiceChar* column
```
#### Outputs
```
SpiceInt* nvals
SpiceDouble* dvals
SpiceBoolean* isnull
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
SpiceInt handle
SpiceInt segno
SpiceInt recno
ConstSpiceChar* column
```
#### Outputs
```
SpiceInt* nvals
SpiceInt* ivals
SpiceBoolean* isnull
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
SpiceInt handle
SpiceInt segno
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
SpiceInt n
SpiceInt lenout
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
SpiceInt handle
SpiceInt segno
SpiceInt recno
ConstSpiceChar* column
SpiceInt nvals
SpiceInt vallen
void* cvals
SpiceBoolean isnull
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt segno
SpiceInt recno
ConstSpiceChar* column
SpiceInt nvals
ConstSpiceDouble* dvals
SpiceBoolean isnull
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt segno
SpiceInt recno
ConstSpiceChar* column
SpiceInt nvals
ConstSpiceInt* ivals
SpiceBoolean isnull
```
#### Outputs
_no output arguments._
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
_no output arguments._
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
SpiceDouble* center[3]
SpiceDouble* smajor[3]
SpiceDouble* sminor[3]
```
## elemc_c
```c
SpiceBoolean elemc_c ( ConstSpiceChar  * item,
                          SpiceCell       * set   )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
ConstSpiceChar* item
SpiceCell* set
```
#### Outputs
_no output arguments._
## elemd_c
```c
SpiceBoolean elemd_c ( SpiceDouble     item,
                          SpiceCell     * set   )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
SpiceDouble item
SpiceCell* set
```
#### Outputs
_no output arguments._
## elemi_c
```c
SpiceBoolean elemi_c ( SpiceInt        item,
                          SpiceCell     * set   )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
SpiceInt item
SpiceCell* set
```
#### Outputs
_no output arguments._
## eqstr_c
```c
SpiceBoolean eqstr_c ( ConstSpiceChar * a,  ConstSpiceChar * b )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
ConstSpiceChar* a
ConstSpiceChar* b
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* op
SpiceInt lenout
SpiceChar* action
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* marker
ConstSpiceChar* string
```
#### Outputs
_no output arguments._
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
SpiceInt lenout
SpiceChar* device
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
ConstSpiceChar* marker
SpiceDouble number
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* marker
SpiceInt number
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* op
SpiceChar* list
```
#### Outputs
```
SpiceInt lenout
```
## esrchc_c
```c
SpiceInt esrchc_c ( ConstSpiceChar  * value,
                       SpiceInt          ndim,
                       SpiceInt          lenvals,
                       const void      * array    )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* value
SpiceInt ndim
SpiceInt lenvals
void* array
```
#### Outputs
_no output arguments._
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
SpiceInt body
SpiceDouble lon
ConstSpiceChar* type
SpiceInt timlen
SpiceInt ampmlen
```
#### Outputs
```
SpiceDouble et
SpiceInt* hr
SpiceInt* mn
SpiceInt* sc
SpiceChar* time
SpiceChar* ampm
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
SpiceDouble et
ConstSpiceChar* format
SpiceInt prec
SpiceInt lenout
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
SpiceDouble et
SpiceInt lenout
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
SpiceDouble angle3
SpiceDouble angle2
SpiceDouble angle1
SpiceInt axis3
SpiceInt axis2
SpiceInt axis1
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
ConstSpiceDouble* eulang[6]
SpiceInt axisa
SpiceInt axisb
SpiceInt axisc
```
#### Outputs
```
SpiceDouble xform
```
## exists_c
```c
SpiceBoolean exists_c ( ConstSpiceChar  * fname )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
ConstSpiceChar* fname
```
#### Outputs
_no output arguments._
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
SpiceBoolean failed_c ()
```
#### Return
```
SpiceBoolean
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
SpiceDouble* y[3]
SpiceDouble* z[3]
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
SpiceInt* cent
SpiceInt* frclss
SpiceInt* clssid
SpiceBoolean* found
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
SpiceInt frcode
SpiceInt lenout
```
#### Outputs
```
SpiceChar* frname
```
## ftncls_c
```c
void ftncls_c ( SpiceInt unit )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt unit
```
#### Outputs
_no output arguments._
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
_no output arguments._
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
ConstSpiceChar* name
SpiceInt start
SpiceInt room
```
#### Outputs
```
SpiceInt* n
SpiceDouble* values
SpiceBoolean* found
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
SpiceDouble lon
SpiceDouble lat
SpiceDouble alt
SpiceDouble re
SpiceDouble f
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
_no input arguments._
#### Outputs
```
SpiceInt* argc
SpiceCha r
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
void* lines
```
#### Outputs
```
SpiceInt lineln
SpiceDouble* epoch
SpiceDouble* elems
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
_no input arguments._
#### Outputs
```
valu e
vle n
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
ConstSpiceChar* file
SpiceInt arclen
SpiceInt typlen
```
#### Outputs
```
SpiceChar* arch
SpiceChar* type
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
SpiceInt instid
SpiceInt room
SpiceInt shapelen
SpiceInt framelen
```
#### Outputs
```
SpiceChar* shape
SpiceChar* frame
SpiceDouble bsight
SpiceInt* n
SpiceDouble bounds
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
_no input arguments._
#### Outputs
```
ConstSpiceChar* option
SpiceInt lenout
SpiceChar* msg
```
## gfbail_c
```c
SpiceBoolean gfbail_c ()
```
#### Return
```
SpiceBoolean
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## gfclrh_c
```c
void gfclrh_c ( void )
```
#### Return
```
void
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
ConstSpiceChar* target
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
ConstSpiceChar* relate
SpiceDouble adjust
SpiceDouble step
SpiceInt nintvls
SpiceCell* cnfine
```
#### Outputs
```
SpiceDouble refval
SpiceCell* result
```
## gfevnt_c
```c
void gfevnt_c ( void             ( * udstep )
```
#### Return
```
void
```
#### Inputs
_no input arguments._
#### Outputs
```
voi d
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
ConstSpiceChar* inst
ConstSpiceChar* tshape
ConstSpiceDouble raydir
ConstSpiceChar* target
ConstSpiceChar* tframe
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
SpiceDouble tol
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
_no output arguments._
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
ConstSpiceChar* occtyp
ConstSpiceChar* front
ConstSpiceChar* fshape
ConstSpiceChar* fframe
ConstSpiceChar* back
ConstSpiceChar* bshape
ConstSpiceChar* bframe
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
SpiceDouble tol
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
ConstSpiceChar* occtyp
ConstSpiceChar* front
ConstSpiceChar* fshape
ConstSpiceChar* fframe
ConstSpiceChar* back
ConstSpiceChar* bshape
ConstSpiceChar* bframe
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
SpiceDouble step
SpiceCell* cnfine
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
ConstSpiceChar* target
ConstSpiceChar* frame
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
ConstSpiceChar* crdsys
ConstSpiceChar* coord
ConstSpiceChar* relate
SpiceDouble refval
SpiceDouble adjust
SpiceDouble step
SpiceInt nintvls
SpiceCell* cnfine
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
SpiceDouble t1
SpiceDouble t2
SpiceBoolean s1
SpiceBoolean s2
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
_no input arguments._
#### Outputs
_no output arguments._
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
SpiceCell* window
ConstSpiceChar* begmss
ConstSpiceChar* endmss
```
#### Outputs
_no output arguments._
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
SpiceDouble ivbeg
SpiceDouble ivend
SpiceDouble time
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* inst
ConstSpiceDouble raydir
ConstSpiceChar* rframe
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
SpiceDouble step
SpiceCell* cnfine
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
ConstSpiceChar* target
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
ConstSpiceChar* relate
SpiceDouble refval
SpiceDouble adjust
SpiceDouble step
SpiceInt nintvls
SpiceCell* cnfine
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
ConstSpiceChar* targ1
ConstSpiceChar* shape1
ConstSpiceChar* frame1
ConstSpiceChar* targ2
ConstSpiceChar* shape2
ConstSpiceChar* frame2
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
ConstSpiceChar* relate
SpiceDouble refval
SpiceDouble adjust
SpiceDouble step
SpiceInt nintvls
SpiceCell* cnfine
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
ConstSpiceChar* target
ConstSpiceChar* fixref
ConstSpiceChar* method
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
ConstSpiceChar* dref
ConstSpiceDouble dvec
ConstSpiceChar* crdsys
ConstSpiceChar* coord
ConstSpiceChar* relate
SpiceDouble refval
SpiceDouble adjust
SpiceDouble step
SpiceInt nintvls
SpiceCell* cnfine
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
_no output arguments._
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
ConstSpiceChar* target
ConstSpiceChar* fixref
ConstSpiceChar* method
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
ConstSpiceChar* crdsys
ConstSpiceChar* coord
ConstSpiceChar* relate
SpiceDouble refval
SpiceDouble adjust
SpiceDouble step
SpiceInt nintvls
SpiceCell* cnfine
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
ConstSpiceChar* inst
ConstSpiceChar* target
ConstSpiceChar* tshape
ConstSpiceChar* tframe
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
SpiceDouble step
SpiceCell* cnfine
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
_no input arguments._
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
ConstSpiceChar* name
SpiceInt start
SpiceInt room
```
#### Outputs
```
SpiceInt* n
SpiceInt* ivals
SpiceBoolean* found
```
## halfpi_c
```c
SpiceDouble halfpi_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
ConstSpiceChar* string
SpiceInt lenout
```
#### Outputs
```
SpiceDouble* number
SpiceBoolean* error
SpiceChar* errmsg
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
_no input arguments._
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
ConstSpiceChar* target
SpiceDouble et
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
ConstSpiceDouble spoint
```
#### Outputs
```
SpiceDouble* phase
SpiceDouble* solar
SpiceDouble* emissn
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
ConstSpiceChar* method
ConstSpiceChar* target
SpiceDouble et
ConstSpiceChar* fixref
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
ConstSpiceDouble spoint
```
#### Outputs
```
SpiceDouble* trgepc
SpiceDouble srfvec
SpiceDouble* phase
SpiceDouble* solar
SpiceDouble* emissn
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
SpiceDouble a
SpiceDouble b
SpiceDouble c
ConstSpicePlane* plane
```
#### Outputs
```
SpiceEllipse* ellipse
SpiceBoolean* found
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
ConstSpiceEllipse* ellips
ConstSpicePlane* plane
```
#### Outputs
```
SpiceInt* nxpts
SpiceDouble* xpt1[3]
SpiceDouble* xpt2[3]
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
ConstSpiceDouble vertex
ConstSpiceDouble dir
ConstSpicePlane* plane
```
#### Outputs
```
SpiceInt* nxpts
SpiceDouble xpt
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
ConstSpiceChar* item
SpiceCell* set
```
#### Outputs
_no output arguments._
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
SpiceDouble item
SpiceCell* set
```
#### Outputs
_no output arguments._
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
SpiceInt item
SpiceCell* set
```
#### Outputs
_no output arguments._
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
SpiceCell* a
SpiceCell* b
```
#### Outputs
```
SpiceCell* c
```
## intmax_
```c
SpiceInt intmax_ ()
```
#### Return
```
SpiceInt
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## intmax_c
```c
SpiceInt intmax_c ()
```
#### Return
```
SpiceInt
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## intmin_
```c
SpiceInt intmin_ ()
```
#### Return
```
SpiceInt
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## intmin_c
```c
SpiceInt intmin_c ()
```
#### Return
```
SpiceInt
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
SpiceBoolean isordv_c ( ConstSpiceInt  * array,
                           SpiceInt         n      )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
ConstSpiceInt* array
SpiceInt n
```
#### Outputs
_no output arguments._
## isrchc_c
```c
SpiceInt isrchc_c ( ConstSpiceChar  * value,
                       SpiceInt          ndim,   
                       SpiceInt          lenvals,
                       const void      * array   )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* value
SpiceInt ndim
SpiceInt lenvals
void* array
```
#### Outputs
_no output arguments._
## isrchd_c
```c
SpiceInt isrchd_c ( SpiceDouble         value,
                       SpiceInt            ndim,
                       ConstSpiceDouble  * array  )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceDouble value
SpiceInt ndim
ConstSpiceDouble* array
```
#### Outputs
_no output arguments._
## isrchi_c
```c
SpiceInt isrchi_c ( SpiceInt         value,
                       SpiceInt         ndim,
                       ConstSpiceInt  * array  )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceInt value
SpiceInt ndim
ConstSpiceInt* array
```
#### Outputs
_no output arguments._
## isrot_c
```c
SpiceBoolean isrot_c ( ConstSpiceDouble    m   [3][3],
                          SpiceDouble         ntol,
                          SpiceDouble         dtol       )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
ConstSpiceDouble m
SpiceDouble ntol
SpiceDouble dtol
```
#### Outputs
_no output arguments._
## iswhsp_c
```c
SpiceBoolean iswhsp_c ( ConstSpiceChar * string )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
ConstSpiceChar* string
```
#### Outputs
_no output arguments._
## j1900_c
```c
SpiceDouble j1900_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## j1950_c
```c
SpiceDouble j1950_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## j2000_c
```c
SpiceDouble j2000_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## j2100_c
```c
SpiceDouble j2100_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## jyear_c
```c
SpiceDouble jyear_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## kclear_c
```c
void kclear_c ( void )
```
#### Return
```
void
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
SpiceInt which
ConstSpiceChar* kind
SpiceInt fillen
SpiceInt typlen
SpiceInt srclen
```
#### Outputs
```
SpiceChar* file
SpiceChar* filtyp
SpiceChar* source
SpiceInt* handle
SpiceBoolean* found
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
ConstSpiceChar* file
SpiceInt typlen
SpiceInt srclen
```
#### Outputs
```
SpiceChar* filtyp
SpiceChar* source
SpiceInt* handle
SpiceBoolean* found
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
ConstSpiceChar* keywd
SpiceInt termlen
void* terms
SpiceInt nterms
SpiceInt stringlen
SpiceInt substrlen
SpiceChar* string
```
#### Outputs
```
SpiceBoolean* found
SpiceChar* substr
```
## lastnb_c
```c
SpiceInt lastnb_c ( ConstSpiceChar * string )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* string
```
#### Outputs
_no output arguments._
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
SpiceDouble radius
SpiceDouble lon
SpiceDouble lat
```
#### Outputs
```
SpiceDouble* r
SpiceDouble* lonc
SpiceDouble* z
```
## latrec_c
```c
void latrec_c ( SpiceDouble    radius,
                   SpiceDouble    longitude,
                   SpiceDouble    latitude,
                   SpiceDouble    rectan[3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble radius
SpiceDouble latitude
```
#### Outputs
```
SpiceDouble longitude
SpiceDouble* rectan[3]
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
SpiceDouble radius
SpiceDouble lon
SpiceDouble lat
```
#### Outputs
```
SpiceDouble* rho
SpiceDouble* colat
SpiceDouble* lons
```
## lcase_c
```c
void lcase_c ( SpiceChar       * in,
                  SpiceInt          lenout, 
                  SpiceChar       * out    )
```
#### Return
```
void
```
#### Inputs
```
SpiceChar* in
SpiceInt lenout
```
#### Outputs
```
SpiceChar* out
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
_no output arguments._
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
void* cvals
SpiceInt lenvals
SpiceInt n
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* list
ConstSpiceChar* delims
```
#### Outputs
```
SpiceCell* set
```
## lspcn_c
```c
SpiceDouble lspcn_c ( ConstSpiceChar   * body,
                         SpiceDouble        et,
                         ConstSpiceChar   * abcorr )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceChar* body
SpiceDouble et
ConstSpiceChar* abcorr
```
#### Outputs
_no output arguments._
## lstlec_c
```c
SpiceInt lstlec_c ( ConstSpiceChar  * string,
                       SpiceInt          n,   
                       SpiceInt          lenvals,
                       const void      * array   )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* string
SpiceInt n
SpiceInt lenvals
void* array
```
#### Outputs
_no output arguments._
## lstled_c
```c
SpiceInt lstled_c ( SpiceDouble         x,
                       SpiceInt            n,
                       ConstSpiceDouble  * array )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceDouble x
SpiceInt n
ConstSpiceDouble* array
```
#### Outputs
_no output arguments._
## lstlei_c
```c
SpiceInt lstlei_c ( SpiceInt            x,
                       SpiceInt            n,
                       ConstSpiceInt     * array )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceInt x
SpiceInt n
ConstSpiceInt* array
```
#### Outputs
_no output arguments._
## lstltc_c
```c
SpiceInt lstltc_c ( ConstSpiceChar  * string,
                       SpiceInt          n,   
                       SpiceInt          lenvals,
                       const void      * array   )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* string
SpiceInt n
SpiceInt lenvals
void* array
```
#### Outputs
_no output arguments._
## lstltd_c
```c
SpiceInt lstltd_c ( SpiceDouble         x,
                       SpiceInt            n,
                       ConstSpiceDouble  * array )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceDouble x
SpiceInt n
ConstSpiceDouble* array
```
#### Outputs
_no output arguments._
## lstlti_c
```c
SpiceInt lstlti_c ( SpiceInt          x,
                       SpiceInt          n,
                       ConstSpiceInt   * array )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceInt x
SpiceInt n
ConstSpiceInt* array
```
#### Outputs
_no output arguments._
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
SpiceDouble etobs
SpiceInt obs
ConstSpiceChar* dir
SpiceInt targ
```
#### Outputs
```
SpiceDouble* ettarg
SpiceDouble* elapsd
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
ConstSpiceChar* string
SpiceInt first
```
#### Outputs
```
SpiceInt* last
SpiceInt* nchar
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
ConstSpiceChar* string
SpiceInt first
```
#### Outputs
```
SpiceInt* last
SpiceInt* nchar
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
ConstSpiceChar* string
SpiceInt first
```
#### Outputs
```
SpiceInt* last
SpiceInt* nchar
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
ConstSpiceChar* string
SpiceInt first
```
#### Outputs
```
SpiceInt* last
SpiceInt* nchar
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
ConstSpiceChar* string
SpiceChar qchar
SpiceInt first
```
#### Outputs
```
SpiceInt* last
SpiceInt* nchar
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
ConstSpiceDouble* r[3]
SpiceInt axis3
SpiceInt axis2
SpiceInt axis1
```
#### Outputs
```
SpiceDouble* angle3
SpiceDouble* angle2
SpiceDouble* angle1
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
SpiceBoolean matchi_c ( ConstSpiceChar      * string,
                           ConstSpiceChar      * templ,
                           SpiceChar             wstr,
                           SpiceChar             wchr   )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
ConstSpiceChar* string
ConstSpiceChar* templ
SpiceChar wstr
SpiceChar wchr
```
#### Outputs
_no output arguments._
## matchw_c
```c
SpiceBoolean matchw_c ( ConstSpiceChar      * string,
                           ConstSpiceChar      * templ,
                           SpiceChar             wstr,
                           SpiceChar             wchr   )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
ConstSpiceChar* string
ConstSpiceChar* templ
SpiceChar wstr
SpiceChar wchr
```
#### Outputs
_no output arguments._
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
doublereal* arrfrm
integer* ndim
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
ConstSpiceDouble m1
ConstSpiceDouble m2
```
#### Outputs
```
SpiceDouble* mout[3]
```
## mtxv_c
```c
void mtxv_c ( ConstSpiceDouble     m1  [3][3],
                 ConstSpiceDouble     vin [3],
                 SpiceDouble          vout[3]   )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble m1
ConstSpiceDouble vin
```
#### Outputs
```
SpiceDouble* vout[3]
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
ConstSpiceDouble m1
ConstSpiceDouble m2
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
ConstSpiceDouble m1
ConstSpiceDouble m2
```
#### Outputs
```
SpiceDouble* mout[3]
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
ConstSpiceDouble m1
ConstSpiceDouble vin
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
SpiceInt ncposr_c ( ConstSpiceChar    * str,
                       ConstSpiceChar    * chars,
                       SpiceInt            start  )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* str
ConstSpiceChar* chars
SpiceInt start
```
#### Outputs
_no output arguments._
## ncpos_c
```c
SpiceInt ncpos_c ( ConstSpiceChar    * str,
                      ConstSpiceChar    * chars,
                      SpiceInt            start  )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* str
ConstSpiceChar* chars
SpiceInt start
```
#### Outputs
_no output arguments._
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
ConstSpiceDouble* positn[3]
SpiceDouble a
SpiceDouble b
SpiceDouble c
```
#### Outputs
```
SpiceDouble* npoint[3]
SpiceDouble* alt
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
SpiceDouble a
SpiceDouble b
SpiceDouble c
ConstSpiceDouble* linept[3]
ConstSpiceDouble* linedr[3]
```
#### Outputs
```
SpiceDouble* pnear[3]
SpiceDouble* dist
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
ConstSpiceDouble point
ConstSpiceEllipse* ellips
```
#### Outputs
```
SpiceDouble pnear
SpiceDouble* dist
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
ConstSpiceDouble linpt
ConstSpiceDouble lindir
ConstSpiceDouble point
```
#### Outputs
```
SpiceDouble pnear
SpiceDouble* dist
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
ConstSpiceDouble* normal[3]
SpiceDouble constant
```
#### Outputs
```
SpicePlane* plane
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
ConstSpiceDouble* normal[3]
ConstSpiceDouble point
```
#### Outputs
```
SpicePlane* plane
```
## ordc_c
```c
SpiceInt ordc_c ( ConstSpiceChar  * item,
                     SpiceCell       * set   )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* item
SpiceCell* set
```
#### Outputs
_no output arguments._
## ordd_c
```c
SpiceInt ordd_c ( SpiceDouble     item,
                     SpiceCell     * set  )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceDouble item
SpiceCell* set
```
#### Outputs
_no output arguments._
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
SpiceInt lenvals
void* array
SpiceInt ndim
```
#### Outputs
```
SpiceInt* iorder
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
ConstSpiceDouble* array
SpiceInt ndim
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
ConstSpiceInt* array
SpiceInt ndim
```
#### Outputs
```
SpiceInt* iorder
```
## ordi_c
```c
SpiceInt ordi_c ( SpiceInt        item,
                     SpiceCell     * set   )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceInt item
SpiceCell* set
```
#### Outputs
_no output arguments._
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
ConstSpiceDouble* state[6]
SpiceDouble et
SpiceDouble mu
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
ConstSpiceChar* pck
SpiceInt idcode
SpiceCell* cover
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* pck
SpiceCell* ids
```
#### Outputs
_no output arguments._
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
_no output arguments._
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
ConstSpiceChar* name
SpiceInt n
SpiceInt lenvals
void* cvals
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* name
SpiceInt n
ConstSpiceDouble* dvals
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* body
SpiceDouble lon
SpiceDouble lat
SpiceDouble alt
SpiceDouble re
SpiceDouble f
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
ConstSpiceChar* name
SpiceInt n
ConstSpiceInt* ivals
```
#### Outputs
_no output arguments._
## pi_c
```c
SpiceDouble pi_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
ConstSpiceEllipse* elin
ConstSpicePlane* plane
```
#### Outputs
```
SpiceEllipse* elout
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
SpiceDouble* normal[3]
SpiceDouble* constant
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
SpiceDouble* normal[3]
SpiceDouble point
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
SpiceDouble* point[3]
SpiceDouble* span1[3]
SpiceDouble* span2[3]
```
## posr_c
```c
SpiceInt posr_c ( ConstSpiceChar    * str,
                     ConstSpiceChar    * substr,
                     SpiceInt            start  )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* str
ConstSpiceChar* substr
SpiceInt start
```
#### Outputs
_no output arguments._
## pos_c
```c
SpiceInt pos_c ( ConstSpiceChar     * str,
                     ConstSpiceChar    * substr,
                     SpiceInt            start  )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceChar* str
ConstSpiceChar* substr
SpiceInt start
```
#### Outputs
_no output arguments._
## prompt_c
```c
SpiceChar * prompt_c ( ConstSpiceChar * prmptStr,
                          SpiceInt         lenout,
                          SpiceChar      * buffer )
```
#### Return
```
SpiceChar *
```
#### Inputs
```
ConstSpiceChar* prmptStr
SpiceInt lenout
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
SpiceDouble gm
ConstSpiceDouble* pvinit[6]
SpiceDouble dt
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
ConstSpiceDouble* point[3]
ConstSpiceDouble* span1[3]
ConstSpiceDouble* span2[3]
```
#### Outputs
```
SpicePlane* plane
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
ConstSpiceChar* from
ConstSpiceChar* to
SpiceDouble et
```
#### Outputs
```
SpiceDouble* rotate[3]
```
## q2m_c
```c
void q2m_c ( ConstSpiceDouble  q[4], 
                SpiceDouble       r[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* q[4]
```
#### Outputs
```
SpiceDouble* r[3]
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
ConstSpiceDouble q
ConstSpiceDouble dq
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
ConstSpiceDouble q1
ConstSpiceDouble q2
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
SpiceDouble range
SpiceDouble ra
SpiceDouble dec
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
ConstSpiceDouble rot
ConstSpiceDouble av
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
SpiceDouble axis
SpiceDouble* angle
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
ConstSpiceChar* file
SpiceInt lenout
```
#### Outputs
```
SpiceChar* line
SpiceBoolean* eof
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
SpiceDouble* r
SpiceDouble* lon
SpiceDouble* z
```
## recgeo_c
```c
void recgeo_c ( ConstSpiceDouble     rectan[3], 
                   SpiceDouble          re, 
                   SpiceDouble          f, 
                   SpiceDouble        * lon,
                   SpiceDouble        * lat,
                   SpiceDouble        * alt        )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* rectan[3]
SpiceDouble re
SpiceDouble f
```
#### Outputs
```
SpiceDouble* lon
SpiceDouble* lat
SpiceDouble* alt
```
## reclat_c
```c
void reclat_c ( ConstSpiceDouble    rectan[3],
                   SpiceDouble       * radius,
                   SpiceDouble       * longitude,
                   SpiceDouble       * latitude  )
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
SpiceDouble* radius
SpiceDouble* longitude
SpiceDouble* latitude
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
ConstSpiceChar* body
SpiceDouble* rectan[3]
SpiceDouble re
SpiceDouble f
```
#### Outputs
```
SpiceDouble* lon
SpiceDouble* lat
SpiceDouble* alt
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
SpiceDouble* range
SpiceDouble* ra
SpiceDouble* dec
```
## recsph_c
```c
void recsph_c ( ConstSpiceDouble     rectan[3], 
                   SpiceDouble        * r, 
                   SpiceDouble        * colat,
                   SpiceDouble        * lon      )
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
SpiceDouble* r
SpiceDouble* colat
SpiceDouble* lon
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
ConstSpiceChar* item
SpiceCell* set
```
#### Outputs
_no output arguments._
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
SpiceDouble item
SpiceCell* set
```
#### Outputs
_no output arguments._
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
SpiceInt item
SpiceCell* set
```
#### Outputs
_no output arguments._
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
ConstSpiceInt* iorder
SpiceInt ndim
SpiceInt lenvals
void* array
```
#### Outputs
_no output arguments._
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
ConstSpiceInt* iorder
SpiceInt ndim
SpiceDouble* array
```
#### Outputs
_no output arguments._
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
ConstSpiceInt* iorder
SpiceInt ndim
SpiceInt* array
```
#### Outputs
_no output arguments._
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
ConstSpiceInt* iorder
SpiceInt ndim
SpiceBoolean* array
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* in
ConstSpiceChar* marker
SpiceInt value
SpiceChar repcase
SpiceInt lenout
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
ConstSpiceChar* in
ConstSpiceChar* marker
ConstSpiceChar* value
SpiceInt lenout
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
ConstSpiceChar* in
ConstSpiceChar* marker
SpiceDouble value
SpiceInt sigdig
SpiceInt lenout
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
ConstSpiceChar* in
ConstSpiceChar* marker
SpiceDouble value
SpiceInt sigdig
SpiceChar format
SpiceInt lenout
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
ConstSpiceChar* in
ConstSpiceChar* marker
SpiceInt value
SpiceInt lenout
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
ConstSpiceChar* in
ConstSpiceChar* marker
SpiceInt value
SpiceChar repcase
SpiceInt lenout
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
_no input arguments._
#### Outputs
_no output arguments._
## return_c
```c
SpiceBoolean return_c ( void )
```
#### Return
```
SpiceBoolean
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## rotate_c
```c
void rotate_c ( SpiceDouble     angle, 
                   SpiceInt        iaxis, 
                   SpiceDouble     mout[3][3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble angle
SpiceInt iaxis
```
#### Outputs
```
SpiceDouble* mout[3]
```
## rotmat_c
```c
void rotmat_c ( ConstSpiceDouble   m1[3][3], 
                   SpiceDouble        angle, 
                   SpiceInt           iaxis, 
                   SpiceDouble        mout[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* m1[3]
SpiceDouble angle
SpiceInt iaxis
```
#### Outputs
```
SpiceDouble* mout[3]
```
## rotvec_c
```c
void rotvec_c ( ConstSpiceDouble  v1    [3],
                   SpiceDouble       angle, 
                   SpiceInt          iaxis, 
                   SpiceDouble       vout  [3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble v1
SpiceDouble angle
SpiceInt iaxis
```
#### Outputs
```
SpiceDouble vout
```
## rpd_c
```c
SpiceDouble rpd_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
SpiceDouble a
SpiceDouble b
SpiceDouble c
```
#### Outputs
```
SpiceDouble* root1[2]
SpiceDouble* root2[2]
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
ConstSpiceDouble vec1
ConstSpiceDouble vec2
```
#### Outputs
```
SpiceDouble* smajor[3]
SpiceDouble* sminor[3]
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
## scdecd_c
```c
void scdecd_c ( SpiceInt       sc, 
                   SpiceDouble    sclkdp, 
                   SpiceInt       lenout,
                   SpiceChar    * sclkch  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt sc
SpiceDouble sclkdp
SpiceInt lenout
```
#### Outputs
```
SpiceChar* sclkch
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
SpiceInt sc
SpiceDouble et
```
#### Outputs
```
SpiceDouble* sclkdp
```
## sce2s_c
```c
void sce2s_c ( SpiceInt        sc, 
                  SpiceDouble     et, 
                  SpiceInt        lenout,
                  SpiceChar     * sclkch  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt sc
SpiceDouble et
SpiceInt lenout
```
#### Outputs
```
SpiceChar* sclkch
```
## sce2t_c
```c
void sce2t_c ( SpiceInt       sc, 
                  SpiceDouble    et, 
                  SpiceDouble  * sclkdp )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt sc
SpiceDouble et
```
#### Outputs
```
SpiceDouble* sclkdp
```
## scencd_c
```c
void scencd_c ( SpiceInt           sc, 
                   ConstSpiceChar   * sclkch, 
                   SpiceDouble      * sclkdp )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt sc
ConstSpiceChar* sclkch
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
SpiceInt sc
SpiceDouble ticks
SpiceInt lenout
```
#### Outputs
```
SpiceChar* clkstr
```
## scpart_c
```c
void scpart_c ( SpiceInt        sc, 
                   SpiceInt      * nparts, 
                   SpiceDouble   * pstart, 
                   SpiceDouble   * pstop  )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt sc
```
#### Outputs
```
SpiceInt* nparts
SpiceDouble* pstart
SpiceDouble* pstop
```
## scs2e_c
```c
void scs2e_c ( SpiceInt          sc, 
                  ConstSpiceChar  * sclkch, 
                  SpiceDouble     * et      )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt sc
ConstSpiceChar* sclkch
```
#### Outputs
```
SpiceDouble* et
```
## sct2e_c
```c
void sct2e_c ( SpiceInt       sc, 
                  SpiceDouble    sclkdp, 
                  SpiceDouble  * et     )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt sc
SpiceDouble sclkdp
```
#### Outputs
```
SpiceDouble* et
```
## sctiks_c
```c
void sctiks_c ( SpiceInt           sc, 
                   ConstSpiceChar   * clkstr, 
                   SpiceDouble      * ticks   )
```
#### Return
```
void
```
#### Inputs
```
SpiceInt sc
ConstSpiceChar* clkstr
```
#### Outputs
```
SpiceDouble* ticks
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
SpiceCell* a
SpiceCell* b
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
_no output arguments._
## set_c
```c
SpiceBoolean set_c (  SpiceCell        * a,
                         ConstSpiceChar   * op,
                         SpiceCell        * b   )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
SpiceCell* a
ConstSpiceChar* op
SpiceCell* b
```
#### Outputs
_no output arguments._
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
SpiceInt ndim
SpiceInt lenvals
void* array
```
#### Outputs
_no output arguments._
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
SpiceInt ndim
SpiceDouble* array
```
#### Outputs
_no output arguments._
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
SpiceInt ndim
SpiceInt* array
```
#### Outputs
_no output arguments._
## sigerr_c
```c
void sigerr_c ( ConstSpiceChar * message )
```
#### Return
```
void
```
#### Inputs
_no input arguments._
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
ConstSpiceChar* method
ConstSpiceChar* target
SpiceDouble et
ConstSpiceChar* fixref
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
ConstSpiceChar* dref
ConstSpiceDouble dvec
```
#### Outputs
```
SpiceDouble spoint
SpiceDouble* trgepc
SpiceDouble srfvec
SpiceBoolean* found
```
## size_c
```c
SpiceInt size_c ( SpiceCell  * cell )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceCell* cell
```
#### Outputs
_no output arguments._
## spd_c
```c
SpiceDouble spd_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
SpiceDouble radius
SpiceDouble colat
SpiceDouble slon
```
#### Outputs
```
SpiceDouble* r
SpiceDouble* lon
SpiceDouble* z
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
SpiceDouble r
SpiceDouble colat
SpiceDouble lons
```
#### Outputs
```
SpiceDouble* radius
SpiceDouble* lon
SpiceDouble* lat
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
SpiceDouble r
SpiceDouble colat
SpiceDouble lon
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
SpiceInt handle
SpiceInt ncsets
ConstSpiceDouble coeffs
ConstSpiceDouble epochs
```
#### Outputs
_no output arguments._
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
SpiceInt handle
ConstSpiceChar* segid
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
SpiceInt chbdeg
```
#### Outputs
_no output arguments._
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
_no output arguments._
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
SpiceInt targ
SpiceDouble et
ConstSpiceChar* ref
ConstSpiceChar* abcorr
SpiceInt obs
```
#### Outputs
```
SpiceDouble* starg[6]
SpiceDouble* lt
SpiceDouble* dlt
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
SpiceInt targ
SpiceDouble et
ConstSpiceChar* ref
ConstSpiceDouble* sobs[6]
ConstSpiceChar* abcorr
```
#### Outputs
```
SpiceDouble* ptarg[3]
SpiceDouble* lt
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
SpiceInt targ
SpiceDouble et
ConstSpiceChar* ref
ConstSpiceDouble sobs
ConstSpiceChar* abcorr
```
#### Outputs
```
SpiceDouble starg
SpiceDouble* lt
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
SpiceInt targ
SpiceDouble et
ConstSpiceChar* ref
ConstSpiceChar* abcorr
ConstSpiceDouble stobs
ConstSpiceDouble* accobs[6]
```
#### Outputs
```
SpiceDouble starg
SpiceDouble* lt
SpiceDouble* dlt
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
_no output arguments._
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
ConstSpiceChar* spk
SpiceInt idcode
SpiceCell* cover
```
#### Outputs
_no output arguments._
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
SpiceInt targ
SpiceDouble et
ConstSpiceChar* ref
ConstSpiceChar* abcorr
SpiceInt obs
```
#### Outputs
```
SpiceDouble* ptarg[3]
SpiceDouble* lt
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
ConstSpiceChar* targ
SpiceDouble et
ConstSpiceChar* ref
ConstSpiceChar* abcorr
ConstSpiceChar* obs
```
#### Outputs
```
SpiceDouble* starg[6]
SpiceDouble* lt
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
SpiceInt targ
SpiceDouble et
ConstSpiceChar* ref
ConstSpiceChar* abcorr
SpiceInt obs
```
#### Outputs
```
SpiceDouble* starg[6]
SpiceDouble* lt
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
SpiceInt targ
SpiceDouble et
ConstSpiceChar* ref
SpiceInt obs
```
#### Outputs
```
SpiceDouble* state[6]
SpiceDouble* lt
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
SpiceInt targ
SpiceDouble et
ConstSpiceChar* ref
SpiceInt obs
```
#### Outputs
```
SpiceDouble* pos[3]
SpiceDouble* lt
```
## spklef_c
```c
void spklef_c ( ConstSpiceChar * filename,
                   SpiceInt       * handle    )
```
#### Return
```
void
```
#### Inputs
_no input arguments._
#### Outputs
```
ConstSpiceChar* filename
SpiceInt* handle
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
SpiceInt targ
SpiceDouble et
ConstSpiceChar* ref
ConstSpiceChar* abcorr
ConstSpiceDouble* stobs[6]
```
#### Outputs
```
SpiceDouble* starg[6]
SpiceDouble* lt
SpiceDouble* dlt
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
ConstSpiceChar* spk
SpiceCell* ids
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* name
ConstSpiceChar* ifname
SpiceInt ncomch
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
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceInt type
SpiceDouble first
SpiceDouble last
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
ConstSpiceChar* targ
SpiceDouble et
ConstSpiceChar* ref
ConstSpiceChar* abcorr
ConstSpiceChar* obs
```
#### Outputs
```
SpiceDouble* ptarg[3]
SpiceDouble* lt
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
SpiceInt targ
SpiceDouble et
ConstSpiceChar* ref
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
SpiceInt handle
SpiceDouble* descr[5]
ConstSpiceChar* ident
SpiceDouble begin
SpiceDouble end
SpiceInt newh
```
#### Outputs
_no output arguments._
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
SpiceInt* body
SpiceInt* center
SpiceInt* frame
SpiceInt* type
SpiceDouble* first
SpiceDouble* last
SpiceInt* begin
SpiceInt* end
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
_no output arguments._
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
SpiceInt handle
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
ConstSpiceChar* segid
SpiceDouble intlen
SpiceInt n
SpiceInt polydg
ConstSpiceDouble cdata
SpiceDouble btime
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
ConstSpiceChar* segid
SpiceDouble intlen
SpiceInt n
SpiceInt polydg
ConstSpiceDouble cdata
SpiceDouble btime
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
ConstSpiceChar* segid
SpiceDouble gm
SpiceInt n
ConstSpiceDouble states
ConstSpiceDouble epochs
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
ConstSpiceChar* segid
SpiceInt degree
SpiceInt n
ConstSpiceDouble states
SpiceDouble epoch1
SpiceDouble step
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
ConstSpiceChar* segid
SpiceInt degree
SpiceInt n
ConstSpiceDouble states
ConstSpiceDouble epochs
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
ConstSpiceChar* segid
ConstSpiceDouble consts
SpiceInt n
ConstSpiceDouble elems
ConstSpiceDouble epochs
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
ConstSpiceChar* segid
SpiceInt degree
SpiceInt n
ConstSpiceDouble states
SpiceDouble epoch0
SpiceDouble step
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
ConstSpiceChar* segid
SpiceInt degree
SpiceInt n
ConstSpiceDouble states
ConstSpiceDouble epochs
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
ConstSpiceChar* segid
SpiceDouble epoch
ConstSpiceDouble tp
ConstSpiceDouble pa
SpiceDouble p
SpiceDouble ecc
SpiceDouble j2flg
ConstSpiceDouble pv
SpiceDouble gm
SpiceDouble j2
SpiceDouble radius
```
#### Outputs
_no output arguments._
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
SpiceInt handle
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
ConstSpiceChar* segid
SpiceDouble epoch
ConstSpiceDouble eqel
SpiceDouble rapol
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
SpiceInt handle
SpiceSPK18Subtype subtyp
SpiceInt body
SpiceInt center
ConstSpiceChar* frame
SpiceDouble first
SpiceDouble last
ConstSpiceChar* segid
SpiceInt degree
SpiceInt n
void* packts
ConstSpiceDouble epochs
```
#### Outputs
_no output arguments._
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
SpiceInt body
SpiceDouble latitude
```
#### Outputs
```
SpiceDouble longitude
SpiceDouble* rectan[3]
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
ConstSpiceChar* method
ConstSpiceChar* target
SpiceDouble et
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
ConstSpiceChar* dref
ConstSpiceDouble dvec
```
#### Outputs
```
SpiceDouble spoint
SpiceDouble* dist
SpiceDouble* trgepc
SpiceDouble obspos
SpiceBoolean* found
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
SpiceInt size
SpiceCell* cell
```
#### Outputs
_no output arguments._
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
ConstSpiceDouble* pobj[3]
ConstSpiceDouble* vobs[3]
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
ConstSpiceChar* item
SpiceInt nth
ConstSpiceChar* contin
SpiceInt lenout
```
#### Outputs
```
SpiceChar* string
SpiceInt* size
SpiceBoolean* found
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
ConstSpiceChar* method
ConstSpiceChar* target
SpiceDouble et
ConstSpiceChar* fixref
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
```
#### Outputs
```
SpiceDouble spoint
SpiceDouble* trgepc
SpiceDouble srfvec
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
ConstSpiceChar* method
ConstSpiceChar* target
SpiceDouble et
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
```
#### Outputs
```
SpiceDouble spoint
SpiceDouble* alt
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
ConstSpiceChar* method
ConstSpiceChar* target
SpiceDouble et
ConstSpiceChar* fixref
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
```
#### Outputs
```
SpiceDouble spoint
SpiceDouble* trgepc
SpiceDouble srfvec
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
ConstSpiceChar* method
ConstSpiceChar* target
SpiceDouble et
ConstSpiceChar* abcorr
ConstSpiceChar* obsrvr
```
#### Outputs
```
SpiceDouble* spoint[3]
```
## sumad_c
```c
SpiceDouble sumad_c ( ConstSpiceDouble   * array,
                         SpiceInt             n     )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* array
SpiceInt n
```
#### Outputs
_no output arguments._
## sumai_c
```c
SpiceInt sumai_c ( ConstSpiceInt   * array,
                      SpiceInt          n     )
```
#### Return
```
SpiceInt
```
#### Inputs
```
ConstSpiceInt* array
SpiceInt n
```
#### Outputs
_no output arguments._
## surfnm_c
```c
void surfnm_c ( SpiceDouble        a, 
                   SpiceDouble        b, 
                   SpiceDouble        c, 
                   ConstSpiceDouble   point[3], 
                   SpiceDouble        normal[3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble a
SpiceDouble b
SpiceDouble c
ConstSpiceDouble* point[3]
```
#### Outputs
```
SpiceDouble* normal[3]
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
ConstSpiceDouble* positn[3]
ConstSpiceDouble* u[3]
SpiceDouble a
SpiceDouble b
SpiceDouble c
```
#### Outputs
```
SpiceDouble* point[3]
SpiceBoolean* found
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
ConstSpiceDouble* stvrtx[6]
ConstSpiceDouble stdir
SpiceDouble a
SpiceDouble b
SpiceDouble c
```
#### Outputs
```
SpiceDouble stx
SpiceBoolean* found
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
ConstSpiceChar* agent
SpiceInt nnames
SpiceInt lenvals
void* names
```
#### Outputs
_no output arguments._
## sxform_c
```c
void sxform_c ( ConstSpiceChar  * from, 
                   ConstSpiceChar  * to, 
                   SpiceDouble       et, 
                   SpiceDouble       xform[6][6] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* from
ConstSpiceChar* to
SpiceDouble et
```
#### Outputs
```
SpiceDouble* xform[6]
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
SpiceInt* n
SpiceBoolean* found
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
ConstSpiceChar* action
ConstSpiceChar* item
SpiceInt lenout
SpiceChar* value
```
#### Outputs
_no output arguments._
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
SpiceDouble et
ConstSpiceChar* pictur
SpiceInt lenout
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
ConstSpiceChar* ref
SpiceInt body
SpiceDouble et
```
#### Outputs
```
SpiceDouble* tipm[3]
```
## tisbod_c
```c
void tisbod_c ( ConstSpiceChar   * ref,    
                   SpiceInt           body,
                   SpiceDouble        et,     
                   SpiceDouble        tsipm[6][6] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceChar* ref
SpiceInt body
SpiceDouble et
```
#### Outputs
```
SpiceDouble* tsipm[6]
```
## tkvrsn_c
```c
ConstSpiceChar  * tkvrsn_c ( ConstSpiceChar * item )
```
#### Return
```
ConstSpiceChar  *
```
#### Inputs
```
ConstSpiceChar* item
```
#### Outputs
_no output arguments._
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
ConstSpiceChar* string
SpiceInt lenout
```
#### Outputs
```
SpiceDouble* sp2000
SpiceChar* errmsg
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
ConstSpiceChar* sample
SpiceInt lenout
SpiceInt lenerr
```
#### Outputs
```
SpiceChar* pictur
SpiceBoolean* ok
SpiceChar* errmsg
```
## trace_c
```c
SpiceDouble trace_c ( ConstSpiceDouble  matrix[3][3] )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
```
ConstSpiceDouble* matrix[3]
```
## trcoff_c
```c
void trcoff_c ( void )
```
#### Return
```
void
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
_no output arguments._
## twopi_c
```c
SpiceDouble twopi_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
ConstSpiceDouble axdef
SpiceInt indexa
ConstSpiceDouble plndef
SpiceInt indexp
```
#### Outputs
```
SpiceDouble mout
```
## tyear_c
```c
SpiceDouble tyear_c ( void )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
## ucase_c
```c
void ucase_c ( SpiceChar   * in,
                  SpiceInt      lenout, 
                  SpiceChar   * out    )
```
#### Return
```
void
```
#### Inputs
```
SpiceChar* in
SpiceInt lenout
```
#### Outputs
```
SpiceChar* out
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
ConstSpiceDouble* v1[3]
ConstSpiceDouble* v2[3]
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
_no input arguments._
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
_no input arguments._
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
SpiceCell* a
SpiceCell* b
```
#### Outputs
```
SpiceCell* c
```
## unitim_c
```c
SpiceDouble unitim_c ( SpiceDouble        epoch,
                          ConstSpiceChar   * insys,
                          ConstSpiceChar   * outsys )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
SpiceDouble epoch
ConstSpiceChar* insys
ConstSpiceChar* outsys
```
#### Outputs
_no output arguments._
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
_no output arguments._
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
ConstSpiceDouble* v1
SpiceInt ndim
```
#### Outputs
```
SpiceDouble* vout
SpiceDouble* vmag
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
SpiceDouble* vout[3]
SpiceDouble* vmag
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
ConstSpiceDouble* v1
ConstSpiceDouble* v2
SpiceInt ndim
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
ConstSpiceDouble* v1[3]
ConstSpiceDouble* v2[3]
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
SpiceInt size
SpiceInt n
SpiceCell* set
```
#### Outputs
_no output arguments._
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
ConstSpiceDouble* v1[3]
ConstSpiceDouble* v2[3]
```
#### Outputs
```
SpiceDouble* vout[3]
```
## vdistg_c
```c
SpiceDouble vdistg_c ( ConstSpiceDouble   * v1,
                          ConstSpiceDouble   * v2,
                          SpiceInt             ndim )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* v1
ConstSpiceDouble* v2
SpiceInt ndim
```
#### Outputs
_no output arguments._
## vdist_c
```c
SpiceDouble vdist_c ( ConstSpiceDouble v1[3],
                         ConstSpiceDouble v2[3] )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* v1[3]
ConstSpiceDouble* v2[3]
```
#### Outputs
_no output arguments._
## vdotg_c
```c
SpiceDouble vdotg_c ( ConstSpiceDouble   * v1,
                         ConstSpiceDouble   * v2,
                         SpiceInt             ndim )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* v1
ConstSpiceDouble* v2
```
#### Outputs
```
SpiceInt ndim
```
## vdot_c
```c
SpiceDouble vdot_c ( ConstSpiceDouble   v1[3], 
                        ConstSpiceDouble   v2[3] )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* v1[3]
ConstSpiceDouble* v2[3]
```
#### Outputs
_no output arguments._
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
ConstSpiceDouble* vin
SpiceInt ndim
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
ConstSpiceDouble* v1
SpiceInt ndim
```
#### Outputs
```
SpiceDouble* vout
```
## vhat_c
```c
void vhat_c ( ConstSpiceDouble  v1  [3], 
                 SpiceDouble       vout[3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble v1
```
#### Outputs
```
SpiceDouble* vout[3]
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
SpiceDouble a
ConstSpiceDouble v1
SpiceDouble b
ConstSpiceDouble v2
SpiceDouble c
ConstSpiceDouble v3
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
SpiceInt n
SpiceDouble a
SpiceDouble b
```
#### Outputs
```
ConstSpiceDouble* v1
ConstSpiceDouble* v2
SpiceDouble* sum
```
## vlcom_c
```c
void vlcom_c ( SpiceDouble        a, 
                  ConstSpiceDouble   v1[3], 
                  SpiceDouble        b, 
                  ConstSpiceDouble   v2[3], 
                  SpiceDouble        sum[3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble a
ConstSpiceDouble* v1[3]
SpiceDouble b
ConstSpiceDouble* v2[3]
```
#### Outputs
```
SpiceDouble* sum[3]
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
ConstSpiceDouble* vin
SpiceInt ndim
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
SpiceDouble vnormg_c ( ConstSpiceDouble   * v1,
                          SpiceInt             ndim )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* v1
```
#### Outputs
```
SpiceInt ndim
```
## vnorm_c
```c
SpiceDouble vnorm_c ( ConstSpiceDouble v1[3] )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* v1[3]
```
#### Outputs
_no output arguments._
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
SpiceDouble x
SpiceDouble y
SpiceDouble z
```
#### Outputs
```
SpiceDouble* v[3]
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
ConstSpiceDouble* a[3]
ConstSpiceDouble* b[3]
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
ConstSpiceDouble vin
ConstSpicePlane* projpl
ConstSpicePlane* invpl
```
#### Outputs
```
SpiceDouble vout
SpiceBoolean* found
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
ConstSpiceDouble vin
ConstSpicePlane* plane
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
ConstSpiceDouble* a[3]
ConstSpiceDouble* b[3]
```
#### Outputs
```
SpiceDouble* p[3]
```
## vrelg_c
```c
SpiceDouble vrelg_c ( ConstSpiceDouble * v1,
                         ConstSpiceDouble * v2,
                         SpiceInt           ndim  )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
SpiceInt ndim
```
#### Outputs
```
ConstSpiceDouble* v1
ConstSpiceDouble* v2
```
## vrel_c
```c
SpiceDouble vrel_c ( ConstSpiceDouble v1[3],
                        ConstSpiceDouble v2[3]  )
```
#### Return
```
SpiceDouble
```
#### Inputs
_no input arguments._
#### Outputs
```
ConstSpiceDouble* v1[3]
ConstSpiceDouble* v2[3]
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
ConstSpiceDouble v
ConstSpiceDouble axis
SpiceDouble theta
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
SpiceDouble s
ConstSpiceDouble* v1
SpiceInt ndim
```
#### Outputs
```
SpiceDouble* vout
```
## vscl_c
```c
void vscl_c ( SpiceDouble        s,
                 ConstSpiceDouble   v1[3],
                 SpiceDouble        vout[3] )
```
#### Return
```
void
```
#### Inputs
```
SpiceDouble s
ConstSpiceDouble* v1[3]
```
#### Outputs
```
SpiceDouble* vout[3]
```
## vsepg_c
```c
SpiceDouble vsepg_c ( ConstSpiceDouble * v1,
                         ConstSpiceDouble * v2,
                         SpiceInt           ndim )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* v1
ConstSpiceDouble* v2
SpiceInt ndim
```
#### Outputs
_no output arguments._
## vsep_c
```c
SpiceDouble vsep_c ( ConstSpiceDouble v1[3], ConstSpiceDouble v2[3] )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble* v1[3]
ConstSpiceDouble* v2[3]
```
#### Outputs
_no output arguments._
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
ConstSpiceDouble* v1
ConstSpiceDouble* v2
SpiceInt ndim
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
ConstSpiceDouble* v1[3]
ConstSpiceDouble* v2[3]
```
#### Outputs
```
SpiceDouble* vout[3]
```
## vtmvg_c
```c
SpiceDouble vtmvg_c ( const void          * v1,
                         const void          * matrix,
                         const void          * v2,
                         SpiceInt              nrow,
                         SpiceInt              ncol    )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
void* v1
void* matrix
void* v2
SpiceInt nrow
SpiceInt ncol
```
#### Outputs
_no output arguments._
## vtmv_c
```c
SpiceDouble vtmv_c ( ConstSpiceDouble v1     [3],
                        ConstSpiceDouble matrix [3][3],
                        ConstSpiceDouble v2     [3] )
```
#### Return
```
SpiceDouble
```
#### Inputs
```
ConstSpiceDouble v1
ConstSpiceDouble matrix
ConstSpiceDouble v2
```
#### Outputs
_no output arguments._
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
SpiceDouble* x
SpiceDouble* y
SpiceDouble* z
```
## vzerog_c
```c
SpiceBoolean vzerog_c ( ConstSpiceDouble * v, SpiceInt ndim )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
ConstSpiceDouble* v
SpiceInt ndim
```
#### Outputs
_no output arguments._
## vzero_c
```c
SpiceBoolean vzero_c ( ConstSpiceDouble v[3] )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
ConstSpiceDouble* v[3]
```
#### Outputs
_no output arguments._
## wncard_c
```c
SpiceInt wncard_c ( SpiceCell  * window )
```
#### Return
```
SpiceInt
```
#### Inputs
```
SpiceCell* window
```
#### Outputs
_no output arguments._
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
SpiceDouble left
SpiceDouble right
SpiceCell* window
```
#### Outputs
```
SpiceCell* result
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
SpiceDouble left
SpiceDouble right
SpiceCell* window
```
#### Outputs
_no output arguments._
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
SpiceCell* a
SpiceCell* b
```
#### Outputs
```
SpiceCell* c
```
## wnelmd_c
```c
SpiceBoolean wnelmd_c ( SpiceDouble    point,
                           SpiceCell    * window )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
SpiceDouble point
SpiceCell* window
```
#### Outputs
_no output arguments._
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
SpiceDouble left
SpiceDouble right
SpiceCell* window
```
#### Outputs
_no output arguments._
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
SpiceChar side
SpiceCell* window
```
#### Outputs
_no output arguments._
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
SpiceCell* window
SpiceInt n
```
#### Outputs
```
SpiceDouble* left
SpiceDouble* right
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
SpiceDouble small
SpiceCell* window
```
#### Outputs
_no output arguments._
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
SpiceDouble small
SpiceCell* window
```
#### Outputs
_no output arguments._
## wnincd_c
```c
SpiceBoolean wnincd_c ( SpiceDouble     left,
                           SpiceDouble     right,
                           SpiceCell     * window )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
SpiceDouble left
SpiceDouble right
SpiceCell* window
```
#### Outputs
_no output arguments._
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
SpiceDouble left
SpiceDouble right
SpiceCell* window
```
#### Outputs
_no output arguments._
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
SpiceCell* a
SpiceCell* b
```
#### Outputs
```
SpiceCell* c
```
## wnreld_c
```c
SpiceBoolean wnreld_c ( SpiceCell       * a,
                           ConstSpiceChar  * op,
                           SpiceCell       * b   )
```
#### Return
```
SpiceBoolean
```
#### Inputs
```
SpiceCell* a
ConstSpiceChar* op
SpiceCell* b
```
#### Outputs
_no output arguments._
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
SpiceDouble* meas
SpiceDouble* avg
SpiceDouble* stddev
SpiceInt* shortest
SpiceInt* longest
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
SpiceCell* a
SpiceCell* b
```
#### Outputs
```
SpiceCell* c
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
SpiceInt size
SpiceInt n
SpiceCell* window
```
#### Outputs
_no output arguments._
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
ConstSpiceDouble xform
SpiceInt axisa
SpiceInt axisb
SpiceInt axisc
```
#### Outputs
```
SpiceDouble eulang
SpiceBoolean* unique
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
SpiceDouble rot
SpiceDouble av
```
## xpose6_c
```c
void xpose6_c ( ConstSpiceDouble m1[6][6],  SpiceDouble mout[6][6] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* m1[6]
```
#### Outputs
```
SpiceDouble* mout[6]
```
## xpose_c
```c
void xpose_c ( ConstSpiceDouble m1[3][3],  SpiceDouble mout[3][3] )
```
#### Return
```
void
```
#### Inputs
```
ConstSpiceDouble* m1[3]
```
#### Outputs
```
SpiceDouble* mout[3]
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
_no input arguments._
#### Outputs
_no output arguments._
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
U_fp udfunc
logical* xbool
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
doublereal* t1
doublereal* t2
```
#### Outputs
```
logical* s1
logical* s2
doublereal* t
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
_no input arguments._
#### Outputs
_no output arguments._
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
doublereal* ivbeg
doublereal* ivend
doublereal* time
```
#### Outputs
_no output arguments._
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
_no input arguments._
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
char *
```
#### Inputs
```
long cnt
```
#### Outputs
_no output arguments._
## zzerrorinit
```c
void zzerrorinit(void)
```
#### Return
```
void
```
#### Inputs
_no input arguments._
#### Outputs
_no output arguments._
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
SpiceInt* argc
SpiceBoolean init
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
integer* nlead
char* string
char* fmt
integer* ntrail
ftnlen stringLen
ftnlen fmtLen
```
#### Outputs
_no output arguments._
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
_no output arguments._
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
SpiceTransDir xdir
SpiceCell* cell
```
#### Outputs
_no output arguments._
