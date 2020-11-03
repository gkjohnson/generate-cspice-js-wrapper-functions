### appndc_c
```js
function appndc( item, cell ) {


	// evaluate function
	Module.ccall(
		'appndc_c',
		null,
		[  ],
		[ item, cell ],
	);

	return;

}
```
### appndd_c
```js
function appndd( item, cell ) {


	// evaluate function
	Module.ccall(
		'appndd_c',
		null,
		[ 'number' ],
		[ item, cell ],
	);

	return;

}
```
### appndi_c
```js
function appndi( item, cell ) {


	// evaluate function
	Module.ccall(
		'appndi_c',
		null,
		[ 'number' ],
		[ item, cell ],
	);

	return;

}
```
### axisar_c
```js
function axisar( axis, angle ) {


	// evaluate function
	Module.ccall(
		'axisar_c',
		null,
		[ 'number', 'number' ],
		[ axis, angle, r ],
	);

	return { r };

}
```
### b1900_c
```js
function b1900(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'b1900_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### b1950_c
```js
function b1950(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'b1950_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### bodc2s_c
```js
function bodc2s( code, lenout ) {

	// create output pointers
	const name_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'bodc2s_c',
		null,
		[ 'number', 'number', 'number' ],
		[ code, lenout, name_ptr ],
	);

	// read and free output pointers
	const name = Module.Pointer_stringify( name_ptr );
	Module._free( name_ptr );

	return { name };

}
```
### boddef_c
```js
function boddef( name, code ) {


	// evaluate function
	Module.ccall(
		'boddef_c',
		null,
		[ 'number' ],
		[ name, code ],
	);

	return;

}
```
### bodvar_c
```js
function bodvar( body, item ) {

	// create output pointers
	const dim_ptr = Module._malloc( INT_SIZE );
	const values_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'bodvar_c',
		null,
		[ 'number', 'number', 'number' ],
		[ body, item, dim_ptr, values_ptr ],
	);

	// read and free output pointers
	const dim = Module.getValue( dim_ptr, 'i32' );
	Module._free( dim_ptr );

	const values = Module.getValue( values_ptr, 'double' );
	Module._free( values_ptr );

	return { dim, values };

}
```
### bodvcd_c
```js
function bodvcd( bodyid, item, maxn ) {

	// create output pointers
	const dim_ptr = Module._malloc( INT_SIZE );
	const values_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'bodvcd_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ bodyid, item, maxn, dim_ptr, values_ptr ],
	);

	// read and free output pointers
	const dim = Module.getValue( dim_ptr, 'i32' );
	Module._free( dim_ptr );

	const values = Module.getValue( values_ptr, 'double' );
	Module._free( values_ptr );

	return { dim, values };

}
```
### bodvrd_c
```js
function bodvrd( bodynm, item, maxn ) {

	// create output pointers
	const dim_ptr = Module._malloc( INT_SIZE );
	const values_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'bodvrd_c',
		null,
		[ 'number', 'number', 'number' ],
		[ bodynm, item, maxn, dim_ptr, values_ptr ],
	);

	// read and free output pointers
	const dim = Module.getValue( dim_ptr, 'i32' );
	Module._free( dim_ptr );

	const values = Module.getValue( values_ptr, 'double' );
	Module._free( values_ptr );

	return { dim, values };

}
```
### brcktd_c
```js
function brcktd( number, end1, end2 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'brcktd_c',
		'number',
		[ 'number', 'number', 'number' ],
		[ number, end1, end2 ],
	);

	return returnValue;

}
```
### brckti_c
```js
function brckti( number, end1, end2 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'brckti_c',
		'number',
		[ 'number', 'number', 'number' ],
		[ number, end1, end2 ],
	);

	return returnValue;

}
```
### bschoc_c
```js
function bschoc( value, ndim, lenvals, array, order ) {


	// evaluate function
	const returnValue = Module.ccall(
		'bschoc_c',
		'number',
		[ 'number', 'number' ],
		[ value, ndim, lenvals, array, order ],
	);

	return returnValue;

}
```
### bschoi_c
```js
function bschoi( value, ndim, array, order ) {


	// evaluate function
	const returnValue = Module.ccall(
		'bschoi_c',
		'number',
		[ 'number', 'number' ],
		[ value, ndim, array, order ],
	);

	return returnValue;

}
```
### bsrchc_c
```js
function bsrchc( value, ndim, lenvals, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'bsrchc_c',
		'number',
		[ 'number', 'number' ],
		[ value, ndim, lenvals, array ],
	);

	return returnValue;

}
```
### bsrchd_c
```js
function bsrchd( value, ndim, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'bsrchd_c',
		'number',
		[ 'number', 'number' ],
		[ value, ndim, array ],
	);

	return returnValue;

}
```
### bsrchi_c
```js
function bsrchi( value, ndim, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'bsrchi_c',
		'number',
		[ 'number', 'number' ],
		[ value, ndim, array ],
	);

	return returnValue;

}
```
### card_c
```js
function card( cell ) {


	// evaluate function
	const returnValue = Module.ccall(
		'card_c',
		'number',
		[  ],
		[ cell ],
	);

	return returnValue;

}
```
### chkin_c
```js
function chkin( module ) {


	// evaluate function
	Module.ccall(
		'chkin_c',
		null,
		[  ],
		[ module ],
	);

	return;

}
```
### chkout_c
```js
function chkout( module ) {


	// evaluate function
	Module.ccall(
		'chkout_c',
		null,
		[  ],
		[ module ],
	);

	return;

}
```
### ckcls_c
```js
function ckcls( handle ) {


	// evaluate function
	Module.ccall(
		'ckcls_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### ckcov_c
```js
function ckcov( ck, idcode, needav, level, tol, timsys, cover ) {


	// evaluate function
	Module.ccall(
		'ckcov_c',
		null,
		[ 'number', 'number' ],
		[ ck, idcode, needav, level, tol, timsys, cover ],
	);

	return;

}
```
### cklpf_c
```js
function cklpf( filename ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'cklpf_c',
		null,
		[ 'number' ],
		[ filename, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### ckobj_c
```js
function ckobj( ck, ids ) {


	// evaluate function
	Module.ccall(
		'ckobj_c',
		null,
		[  ],
		[ ck, ids ],
	);

	return;

}
```
### ckopn_c
```js
function ckopn( fname, ifname, ncomch ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'ckopn_c',
		null,
		[ 'number', 'number' ],
		[ fname, ifname, ncomch, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### ckupf_c
```js
function ckupf( handle ) {


	// evaluate function
	Module.ccall(
		'ckupf_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### ckw01_c
```js
function ckw01( handle, begtim, endtim, inst, ref, avflag, segid, nrec, sclkdp, quats, avvs ) {


	// evaluate function
	Module.ccall(
		'ckw01_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ handle, begtim, endtim, inst, ref, avflag, segid, nrec, sclkdp, quats, avvs ],
	);

	return;

}
```
### ckw02_c
```js
function ckw02( handle, begtim, endtim, inst, ref, segid, nrec, start, stop, quats ) {


	// evaluate function
	Module.ccall(
		'ckw02_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ handle, begtim, endtim, inst, ref, segid, nrec, start, stop, quats, avvs, rates ],
	);

	return { avvs, rates };

}
```
### ckw03_c
```js
function ckw03( handle, begtim, endtim, inst, ref, avflag, segid, nrec, sclkdp, quats, avvs, nints, starts ) {


	// evaluate function
	Module.ccall(
		'ckw03_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, begtim, endtim, inst, ref, avflag, segid, nrec, sclkdp, quats, avvs, nints, starts ],
	);

	return;

}
```
### ckw05_c
```js
function ckw05( handle, subtyp, degree, begtim, endtim, inst, ref, avflag, segid, packts, rate, nints, starts ) {


	// evaluate function
	Module.ccall(
		'ckw05_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, subtyp, degree, begtim, endtim, inst, ref, avflag, segid, n, sclkdp, packts, rate, nints, starts ],
	);

	return { n, sclkdp };

}
```
### clight_c
```js
function clight(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'clight_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### clpool_c
```js
function clpool(  ) {


	// evaluate function
	Module.ccall(
		'clpool_c',
		null,
		[  ],
		[  ],
	);

	return;

}
```
### cmprss_c
```js
function cmprss( delim, n, input, lenout ) {

	// create output pointers
	const output_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'cmprss_c',
		null,
		[ 'string', 'number', 'number', 'number' ],
		[ delim, n, input, lenout, output_ptr ],
	);

	// read and free output pointers
	const output = Module.Pointer_stringify( output_ptr );
	Module._free( output_ptr );

	return { output };

}
```
### conics_c
```js
function conics( elts, et ) {

	// create output pointers
	const state_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'conics_c',
		null,
		[ 'number', 'number' ],
		[ elts, et, state_ptr ],
	);

	// read and free output pointers
	const state = Module.getValue( state_ptr, 'double' );
	Module._free( state_ptr );

	return { state };

}
```
### convrt_c
```js
function convrt( x, in, out ) {

	// create output pointers
	const y_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'convrt_c',
		null,
		[ 'number', 'number' ],
		[ x, in, out, y_ptr ],
	);

	// read and free output pointers
	const y = Module.getValue( y_ptr, 'double' );
	Module._free( y_ptr );

	return { y };

}
```
### cposr_c
```js
function cposr( str, chars, start ) {


	// evaluate function
	const returnValue = Module.ccall(
		'cposr_c',
		'number',
		[ 'number' ],
		[ str, chars, start ],
	);

	return returnValue;

}
```
### cpos_c
```js
function cpos( str, chars, start ) {


	// evaluate function
	const returnValue = Module.ccall(
		'cpos_c',
		'number',
		[ 'number' ],
		[ str, chars, start ],
	);

	return returnValue;

}
```
### cyllat_c
```js
function cyllat( r, lonc, z ) {

	// create output pointers
	const radius_ptr = Module._malloc( DOUBLE_SIZE );
	const lon_ptr = Module._malloc( DOUBLE_SIZE );
	const lat_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'cyllat_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ r, lonc, z, radius_ptr, lon_ptr, lat_ptr ],
	);

	// read and free output pointers
	const radius = Module.getValue( radius_ptr, 'double' );
	Module._free( radius_ptr );

	const lon = Module.getValue( lon_ptr, 'double' );
	Module._free( lon_ptr );

	const lat = Module.getValue( lat_ptr, 'double' );
	Module._free( lat_ptr );

	return { radius, lon, lat };

}
```
### cylrec_c
```js
function cylrec( r, lon, z ) {

	// create output pointers
	const rectan_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'cylrec_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ r, lon, z, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { rectan };

}
```
### cylsph_c
```js
function cylsph( r, lonc, z ) {

	// create output pointers
	const radius_ptr = Module._malloc( DOUBLE_SIZE );
	const colat_ptr = Module._malloc( DOUBLE_SIZE );
	const lon_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'cylsph_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ r, lonc, z, radius_ptr, colat_ptr, lon_ptr ],
	);

	// read and free output pointers
	const radius = Module.getValue( radius_ptr, 'double' );
	Module._free( radius_ptr );

	const colat = Module.getValue( colat_ptr, 'double' );
	Module._free( colat_ptr );

	const lon = Module.getValue( lon_ptr, 'double' );
	Module._free( lon_ptr );

	return { radius, colat, lon };

}
```
### dafac_c
```js
function dafac( handle, n, buffer ) {


	// evaluate function
	Module.ccall(
		'dafac_c',
		null,
		[ 'number', 'number', 'number' ],
		[ handle, n, lenvals, buffer ],
	);

	return { lenvals };

}
```
### dafbbs_c
```js
function dafbbs( handle ) {


	// evaluate function
	Module.ccall(
		'dafbbs_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### dafbfs_c
```js
function dafbfs( handle ) {


	// evaluate function
	Module.ccall(
		'dafbfs_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### dafcls_c
```js
function dafcls( handle ) {


	// evaluate function
	Module.ccall(
		'dafcls_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### dafcs_c
```js
function dafcs( handle ) {


	// evaluate function
	Module.ccall(
		'dafcs_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### dafdc_c
```js
function dafdc( handle ) {


	// evaluate function
	Module.ccall(
		'dafdc_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### dafgda_c
```js
function dafgda( handle, begin, end ) {

	// create output pointers
	const data_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'dafgda_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ handle, begin, end, data_ptr ],
	);

	// read and free output pointers
	const data = Module.getValue( data_ptr, 'double' );
	Module._free( data_ptr );

	return { data };

}
```
### dafgn_c
```js
function dafgn( lenout ) {

	// create output pointers
	const name_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'dafgn_c',
		null,
		[ 'number', 'number' ],
		[ lenout, name_ptr ],
	);

	// read and free output pointers
	const name = Module.Pointer_stringify( name_ptr );
	Module._free( name_ptr );

	return { name };

}
```
### dafgs_c
```js
function dafgs(  ) {


	// evaluate function
	Module.ccall(
		'dafgs_c',
		null,
		[ 'number' ],
		[ sum ],
	);

	return { sum };

}
```
### dafopr_c
```js
function dafopr( fname ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'dafopr_c',
		null,
		[ 'number' ],
		[ fname, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### dafopw_c
```js
function dafopw( fname ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'dafopw_c',
		null,
		[ 'number' ],
		[ fname, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### dafps_c
```js
function dafps( nd, ni, dc, ic ) {

	// create output pointers
	const sum_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'dafps_c',
		null,
		[ 'number', 'number', 'number' ],
		[ nd, ni, dc, ic, sum_ptr ],
	);

	// read and free output pointers
	const sum = Module.getValue( sum_ptr, 'double' );
	Module._free( sum_ptr );

	return { sum };

}
```
### dafrda_c
```js
function dafrda( handle, begin, end ) {

	// create output pointers
	const data_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'dafrda_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ handle, begin, end, data_ptr ],
	);

	// read and free output pointers
	const data = Module.getValue( data_ptr, 'double' );
	Module._free( data_ptr );

	return { data };

}
```
### dafrfr_c
```js
function dafrfr( handle, lenout ) {

	// create output pointers
	const nd_ptr = Module._malloc( INT_SIZE );
	const ni_ptr = Module._malloc( INT_SIZE );
	const ifname_ptr = Module._malloc( STR_SIZE );
	const fward_ptr = Module._malloc( INT_SIZE );
	const bward_ptr = Module._malloc( INT_SIZE );
	const free_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'dafrfr_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, lenout, nd_ptr, ni_ptr, ifname_ptr, fward_ptr, bward_ptr, free_ptr ],
	);

	// read and free output pointers
	const nd = Module.getValue( nd_ptr, 'i32' );
	Module._free( nd_ptr );

	const ni = Module.getValue( ni_ptr, 'i32' );
	Module._free( ni_ptr );

	const ifname = Module.Pointer_stringify( ifname_ptr );
	Module._free( ifname_ptr );

	const fward = Module.getValue( fward_ptr, 'i32' );
	Module._free( fward_ptr );

	const bward = Module.getValue( bward_ptr, 'i32' );
	Module._free( bward_ptr );

	const free = Module.getValue( free_ptr, 'i32' );
	Module._free( free_ptr );

	return { nd, ni, ifname, fward, bward, free };

}
```
### dafrs_c
```js
function dafrs( sum ) {


	// evaluate function
	Module.ccall(
		'dafrs_c',
		null,
		[  ],
		[ sum ],
	);

	return;

}
```
### dafus_c
```js
function dafus( sum, nd, ni ) {


	// evaluate function
	Module.ccall(
		'dafus_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ sum, nd, ni, dc, ic ],
	);

	return { dc, ic };

}
```
### dasac_c
```js
function dasac( handle, n, buflen, buffer ) {


	// evaluate function
	Module.ccall(
		'dasac_c',
		null,
		[ 'number', 'number', 'number' ],
		[ handle, n, buflen, buffer ],
	);

	return;

}
```
### dascls_c
```js
function dascls( handle ) {


	// evaluate function
	Module.ccall(
		'dascls_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### dasopr_c
```js
function dasopr( fname ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'dasopr_c',
		null,
		[ 'number' ],
		[ fname, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### dcyldr_c
```js
function dcyldr( x, y, z ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'dcyldr_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ x, y, z, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { jacobi };

}
```
### deltet_c
```js
function deltet( epoch, eptype ) {

	// create output pointers
	const delta_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'deltet_c',
		null,
		[ 'number', 'number' ],
		[ epoch, eptype, delta_ptr ],
	);

	// read and free output pointers
	const delta = Module.getValue( delta_ptr, 'double' );
	Module._free( delta_ptr );

	return { delta };

}
```
### det_c
```js
function det( m1 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'det_c',
		'number',
		[  ],
		[ m1 ],
	);

	return returnValue;

}
```
### dgeodr_c
```js
function dgeodr( x, y, z, re, f ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'dgeodr_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ x, y, z, re, f, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { jacobi };

}
```
### diags2_c
```js
function diags2( symmat ) {


	// evaluate function
	Module.ccall(
		'diags2_c',
		null,
		[ 'number', 'number' ],
		[ symmat, diag, rotate ],
	);

	return { diag, rotate };

}
```
### dlatdr_c
```js
function dlatdr( x, y, z ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'dlatdr_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ x, y, z, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { jacobi };

}
```
### dp2hx_c
```js
function dp2hx( number, lenout ) {

	// create output pointers
	const string_ptr = Module._malloc( STR_SIZE );
	const length_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'dp2hx_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ number, lenout, string_ptr, length_ptr ],
	);

	// read and free output pointers
	const string = Module.Pointer_stringify( string_ptr );
	Module._free( string_ptr );

	const length = Module.getValue( length_ptr, 'i32' );
	Module._free( length_ptr );

	return { string, length };

}
```
### dpgrdr_c
```js
function dpgrdr( body, x, y, z, re, f ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'dpgrdr_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ body, x, y, z, re, f, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { jacobi };

}
```
### dpmax_
```js
function dpmax_(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'dpmax_',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### dpmax_c
```js
function dpmax(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'dpmax_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### dpmin_
```js
function dpmin_(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'dpmin_',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### dpmin_c
```js
function dpmin(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'dpmin_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### dpr_c
```js
function dpr(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'dpr_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### drdcyl_c
```js
function drdcyl( r, lon, z ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'drdcyl_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ r, lon, z, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { jacobi };

}
```
### drdgeo_c
```js
function drdgeo( lon, lat, alt, re, f ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'drdgeo_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ lon, lat, alt, re, f, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { jacobi };

}
```
### drdlat_c
```js
function drdlat( lon, lat ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'drdlat_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ r, lon, lat, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { r, jacobi };

}
```
### drdpgr_c
```js
function drdpgr( body, lon, lat, alt, re, f ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'drdpgr_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ body, lon, lat, alt, re, f, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { jacobi };

}
```
### drdsph_c
```js
function drdsph( r, colat, lon ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'drdsph_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ r, colat, lon, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { jacobi };

}
```
### dsphdr_c
```js
function dsphdr( x, y, z ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'dsphdr_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ x, y, z, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { jacobi };

}
```
### ducrss_c
```js
function ducrss( s1, s2 ) {

	// create output pointers
	const sout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'ducrss_c',
		null,
		[ 'number' ],
		[ s1, s2, sout_ptr ],
	);

	// read and free output pointers
	const sout = Module.getValue( sout_ptr, 'double' );
	Module._free( sout_ptr );

	return { sout };

}
```
### dvcrss_c
```js
function dvcrss( s1, s2 ) {

	// create output pointers
	const sout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'dvcrss_c',
		null,
		[ 'number' ],
		[ s1, s2, sout_ptr ],
	);

	// read and free output pointers
	const sout = Module.getValue( sout_ptr, 'double' );
	Module._free( sout_ptr );

	return { sout };

}
```
### dvdot_c
```js
function dvdot( s1, s2 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'dvdot_c',
		'number',
		[  ],
		[ s1, s2 ],
	);

	return returnValue;

}
```
### dvhat_c
```js
function dvhat( s1 ) {

	// create output pointers
	const sout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'dvhat_c',
		null,
		[ 'number' ],
		[ s1, sout_ptr ],
	);

	// read and free output pointers
	const sout = Module.getValue( sout_ptr, 'double' );
	Module._free( sout_ptr );

	return { sout };

}
```
### dvpool_c
```js
function dvpool( name ) {


	// evaluate function
	Module.ccall(
		'dvpool_c',
		null,
		[  ],
		[ name ],
	);

	return;

}
```
### dvsep_c
```js
function dvsep( s1, s2 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'dvsep_c',
		'number',
		[  ],
		[ s1, s2 ],
	);

	return returnValue;

}
```
### ekacec_c
```js
function ekacec( handle, segno, recno, column, nvals, vallen, cvals, isnull ) {


	// evaluate function
	Module.ccall(
		'ekacec_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ handle, segno, recno, column, nvals, vallen, cvals, isnull ],
	);

	return;

}
```
### ekaced_c
```js
function ekaced( handle, segno, recno, column, nvals, dvals, isnull ) {


	// evaluate function
	Module.ccall(
		'ekaced_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ handle, segno, recno, column, nvals, dvals, isnull ],
	);

	return;

}
```
### ekacei_c
```js
function ekacei( handle, segno, recno, column, nvals, ivals, isnull ) {


	// evaluate function
	Module.ccall(
		'ekacei_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ handle, segno, recno, column, nvals, ivals, isnull ],
	);

	return;

}
```
### ekaclc_c
```js
function ekaclc( handle, segno, column, vallen, cvals, entszs, nlflgs, rcptrs, wkindx ) {


	// evaluate function
	Module.ccall(
		'ekaclc_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ handle, segno, column, vallen, cvals, entszs, nlflgs, rcptrs, wkindx ],
	);

	return;

}
```
### ekacld_c
```js
function ekacld( handle, segno, column, dvals, entszs, nlflgs, rcptrs, wkindx ) {


	// evaluate function
	Module.ccall(
		'ekacld_c',
		null,
		[ 'number', 'number', 'number' ],
		[ handle, segno, column, dvals, entszs, nlflgs, rcptrs, wkindx ],
	);

	return;

}
```
### ekacli_c
```js
function ekacli( handle, segno, column, ivals, entszs, nlflgs, rcptrs, wkindx ) {


	// evaluate function
	Module.ccall(
		'ekacli_c',
		null,
		[ 'number', 'number', 'number' ],
		[ handle, segno, column, ivals, entszs, nlflgs, rcptrs, wkindx ],
	);

	return;

}
```
### ekappr_c
```js
function ekappr( handle, segno ) {

	// create output pointers
	const recno_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'ekappr_c',
		null,
		[ 'number', 'number', 'number' ],
		[ handle, segno, recno_ptr ],
	);

	// read and free output pointers
	const recno = Module.getValue( recno_ptr, 'i32' );
	Module._free( recno_ptr );

	return { recno };

}
```
### ekbseg_c
```js
function ekbseg( handle, tabnam, ncols, cnmlen, cnames, declen, decls ) {

	// create output pointers
	const segno_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'ekbseg_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ handle, tabnam, ncols, cnmlen, cnames, declen, decls, segno_ptr ],
	);

	// read and free output pointers
	const segno = Module.getValue( segno_ptr, 'i32' );
	Module._free( segno_ptr );

	return { segno };

}
```
### ekccnt_c
```js
function ekccnt( table ) {

	// create output pointers
	const ccount_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'ekccnt_c',
		null,
		[ 'number' ],
		[ table, ccount_ptr ],
	);

	// read and free output pointers
	const ccount = Module.getValue( ccount_ptr, 'i32' );
	Module._free( ccount_ptr );

	return { ccount };

}
```
### ekcls_c
```js
function ekcls( handle ) {


	// evaluate function
	Module.ccall(
		'ekcls_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### ekdelr_c
```js
function ekdelr( handle, segno, recno ) {


	// evaluate function
	Module.ccall(
		'ekdelr_c',
		null,
		[ 'number', 'number', 'number' ],
		[ handle, segno, recno ],
	);

	return;

}
```
### ekffld_c
```js
function ekffld( handle, segno, rcptrs ) {


	// evaluate function
	Module.ccall(
		'ekffld_c',
		null,
		[ 'number', 'number', 'number' ],
		[ handle, segno, rcptrs ],
	);

	return;

}
```
### ekifld_c
```js
function ekifld( handle, tabnam, ncols, nrows, cnmlen, cnames, declen, decls ) {

	// create output pointers
	const segno_ptr = Module._malloc( INT_SIZE );
	const rcptrs_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'ekifld_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, tabnam, ncols, nrows, cnmlen, cnames, declen, decls, segno_ptr, rcptrs_ptr ],
	);

	// read and free output pointers
	const segno = Module.getValue( segno_ptr, 'i32' );
	Module._free( segno_ptr );

	const rcptrs = Module.getValue( rcptrs_ptr, 'i32' );
	Module._free( rcptrs_ptr );

	return { segno, rcptrs };

}
```
### ekinsr_c
```js
function ekinsr( handle, segno, recno ) {


	// evaluate function
	Module.ccall(
		'ekinsr_c',
		null,
		[ 'number', 'number', 'number' ],
		[ handle, segno, recno ],
	);

	return;

}
```
### eklef_c
```js
function eklef( fname ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'eklef_c',
		null,
		[ 'number' ],
		[ fname, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### eknelt_c
```js
function eknelt( selidx, row ) {


	// evaluate function
	const returnValue = Module.ccall(
		'eknelt_c',
		'number',
		[ 'number', 'number' ],
		[ selidx, row ],
	);

	return returnValue;

}
```
### eknseg_c
```js
function eknseg( handle ) {


	// evaluate function
	const returnValue = Module.ccall(
		'eknseg_c',
		'number',
		[ 'number' ],
		[ handle ],
	);

	return returnValue;

}
```
### ekntab_c
```js
function ekntab(  ) {

	// create output pointers
	const n_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'ekntab_c',
		null,
		[ 'number' ],
		[ n_ptr ],
	);

	// read and free output pointers
	const n = Module.getValue( n_ptr, 'i32' );
	Module._free( n_ptr );

	return { n };

}
```
### ekopn_c
```js
function ekopn( fname, ifname, ncomch ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'ekopn_c',
		null,
		[ 'number', 'number' ],
		[ fname, ifname, ncomch, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### ekopr_c
```js
function ekopr( fname ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'ekopr_c',
		null,
		[ 'number' ],
		[ fname, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### ekops_c
```js
function ekops(  ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'ekops_c',
		null,
		[ 'number' ],
		[ handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### ekopw_c
```js
function ekopw( fname ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'ekopw_c',
		null,
		[ 'number' ],
		[ fname, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### ektnam_c
```js
function ektnam( n, lenout ) {

	// create output pointers
	const table_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'ektnam_c',
		null,
		[ 'number', 'number', 'number' ],
		[ n, lenout, table_ptr ],
	);

	// read and free output pointers
	const table = Module.Pointer_stringify( table_ptr );
	Module._free( table_ptr );

	return { table };

}
```
### ekucec_c
```js
function ekucec( handle, segno, recno, column, nvals, vallen, cvals, isnull ) {


	// evaluate function
	Module.ccall(
		'ekucec_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ handle, segno, recno, column, nvals, vallen, cvals, isnull ],
	);

	return;

}
```
### ekuced_c
```js
function ekuced( handle, segno, recno, column, nvals, dvals, isnull ) {


	// evaluate function
	Module.ccall(
		'ekuced_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ handle, segno, recno, column, nvals, dvals, isnull ],
	);

	return;

}
```
### ekucei_c
```js
function ekucei( handle, segno, recno, column, nvals, ivals, isnull ) {


	// evaluate function
	Module.ccall(
		'ekucei_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ handle, segno, recno, column, nvals, ivals, isnull ],
	);

	return;

}
```
### ekuef_c
```js
function ekuef( handle ) {


	// evaluate function
	Module.ccall(
		'ekuef_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### el2cgv_c
```js
function el2cgv( ellipse ) {

	// create output pointers
	const center_ptr = Module._malloc( DOUBLE_SIZE );
	const smajor_ptr = Module._malloc( DOUBLE_SIZE );
	const sminor_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'el2cgv_c',
		null,
		[ 'number', 'number', 'number' ],
		[ ellipse, center_ptr, smajor_ptr, sminor_ptr ],
	);

	// read and free output pointers
	const center = Module.getValue( center_ptr, 'double' );
	Module._free( center_ptr );

	const smajor = Module.getValue( smajor_ptr, 'double' );
	Module._free( smajor_ptr );

	const sminor = Module.getValue( sminor_ptr, 'double' );
	Module._free( sminor_ptr );

	return { center, smajor, sminor };

}
```
### erract_c
```js
function erract( op, lenout, action ) {


	// evaluate function
	Module.ccall(
		'erract_c',
		null,
		[ 'number', 'string' ],
		[ op, lenout, action ],
	);

	return;

}
```
### errch_c
```js
function errch( marker, string ) {


	// evaluate function
	Module.ccall(
		'errch_c',
		null,
		[  ],
		[ marker, string ],
	);

	return;

}
```
### errdev_c
```js
function errdev( op ) {

	// create output pointers
	const device_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'errdev_c',
		null,
		[ 'number', 'number' ],
		[ op, lenout, device_ptr ],
	);

	// read and free output pointers
	const device = Module.Pointer_stringify( device_ptr );
	Module._free( device_ptr );

	return { lenout, device };

}
```
### errdp_c
```js
function errdp( marker, number ) {


	// evaluate function
	Module.ccall(
		'errdp_c',
		null,
		[ 'number' ],
		[ marker, number ],
	);

	return;

}
```
### errint_c
```js
function errint( marker, number ) {


	// evaluate function
	Module.ccall(
		'errint_c',
		null,
		[ 'number' ],
		[ marker, number ],
	);

	return;

}
```
### errprt_c
```js
function errprt( op, list ) {


	// evaluate function
	Module.ccall(
		'errprt_c',
		null,
		[ 'number', 'string' ],
		[ op, lenout, list ],
	);

	return { lenout };

}
```
### esrchc_c
```js
function esrchc( value, ndim, lenvals, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'esrchc_c',
		'number',
		[ 'number', 'number' ],
		[ value, ndim, lenvals, array ],
	);

	return returnValue;

}
```
### et2lst_c
```js
function et2lst( body, lon, type, timlen, ampmlen ) {

	// create output pointers
	const hr_ptr = Module._malloc( INT_SIZE );
	const mn_ptr = Module._malloc( INT_SIZE );
	const sc_ptr = Module._malloc( INT_SIZE );
	const time_ptr = Module._malloc( STR_SIZE );
	const ampm_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'et2lst_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ et, body, lon, type, timlen, ampmlen, hr_ptr, mn_ptr, sc_ptr, time_ptr, ampm_ptr ],
	);

	// read and free output pointers
	const hr = Module.getValue( hr_ptr, 'i32' );
	Module._free( hr_ptr );

	const mn = Module.getValue( mn_ptr, 'i32' );
	Module._free( mn_ptr );

	const sc = Module.getValue( sc_ptr, 'i32' );
	Module._free( sc_ptr );

	const time = Module.Pointer_stringify( time_ptr );
	Module._free( time_ptr );

	const ampm = Module.Pointer_stringify( ampm_ptr );
	Module._free( ampm_ptr );

	return { et, hr, mn, sc, time, ampm };

}
```
### et2utc_c
```js
function et2utc( et, format, prec, lenout ) {

	// create output pointers
	const utcstr_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'et2utc_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ et, format, prec, lenout, utcstr_ptr ],
	);

	// read and free output pointers
	const utcstr = Module.Pointer_stringify( utcstr_ptr );
	Module._free( utcstr_ptr );

	return { utcstr };

}
```
### etcal_c
```js
function etcal( et, lenout ) {

	// create output pointers
	const string_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'etcal_c',
		null,
		[ 'number', 'number', 'number' ],
		[ et, lenout, string_ptr ],
	);

	// read and free output pointers
	const string = Module.Pointer_stringify( string_ptr );
	Module._free( string_ptr );

	return { string };

}
```
### eul2m_c
```js
function eul2m( angle3, angle2, angle1, axis3, axis2, axis1 ) {


	// evaluate function
	Module.ccall(
		'eul2m_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ angle3, angle2, angle1, axis3, axis2, axis1, r ],
	);

	return { r };

}
```
### eul2xf_c
```js
function eul2xf( eulang, axisa, axisb, axisc ) {


	// evaluate function
	Module.ccall(
		'eul2xf_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ eulang, axisa, axisb, axisc, xform ],
	);

	return { xform };

}
```
### frame_c
```js
function frame( x ) {

	// create output pointers
	const y_ptr = Module._malloc( DOUBLE_SIZE );
	const z_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'frame_c',
		null,
		[ 'number', 'number', 'number' ],
		[ x, y_ptr, z_ptr ],
	);

	// read and free output pointers
	const y = Module.getValue( y_ptr, 'double' );
	Module._free( y_ptr );

	const z = Module.getValue( z_ptr, 'double' );
	Module._free( z_ptr );

	return { y, z };

}
```
### frmnam_c
```js
function frmnam( frcode, lenout ) {

	// create output pointers
	const frname_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'frmnam_c',
		null,
		[ 'number', 'number', 'number' ],
		[ frcode, lenout, frname_ptr ],
	);

	// read and free output pointers
	const frname = Module.Pointer_stringify( frname_ptr );
	Module._free( frname_ptr );

	return { frname };

}
```
### ftncls_c
```js
function ftncls( unit ) {


	// evaluate function
	Module.ccall(
		'ftncls_c',
		null,
		[ 'number' ],
		[ unit ],
	);

	return;

}
```
### furnsh_c
```js
function furnsh( file ) {


	// evaluate function
	Module.ccall(
		'furnsh_c',
		null,
		[  ],
		[ file ],
	);

	return;

}
```
### georec_c
```js
function georec( lon, lat, alt, re, f ) {

	// create output pointers
	const rectan_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'georec_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ lon, lat, alt, re, f, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { rectan };

}
```
### getcml_c
```js
function getcml(  ) {

	// create output pointers
	const argc_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'getcml_c',
		null,
		[ 'number' ],
		[ argc_ptr, r ],
	);

	// read and free output pointers
	const argc = Module.getValue( argc_ptr, 'i32' );
	Module._free( argc_ptr );

	return { argc, r };

}
```
### getelm_c
```js
function getelm( frstyr, lines ) {

	// create output pointers
	const epoch_ptr = Module._malloc( DOUBLE_SIZE );
	const elems_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'getelm_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ frstyr, lineln, lines, epoch_ptr, elems_ptr ],
	);

	// read and free output pointers
	const epoch = Module.getValue( epoch_ptr, 'double' );
	Module._free( epoch_ptr );

	const elems = Module.getValue( elems_ptr, 'double' );
	Module._free( elems_ptr );

	return { lineln, epoch, elems };

}
```
### getenv_
```js
function getenv_(  ) {


	// evaluate function
	Module.ccall(
		'getenv_',
		null,
		[  ],
		[ e, n ],
	);

	return { e, n };

}
```
### getfat_c
```js
function getfat( file, arclen, typlen ) {

	// create output pointers
	const arch_ptr = Module._malloc( STR_SIZE );
	const type_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'getfat_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ file, arclen, typlen, arch_ptr, type_ptr ],
	);

	// read and free output pointers
	const arch = Module.Pointer_stringify( arch_ptr );
	Module._free( arch_ptr );

	const type = Module.Pointer_stringify( type_ptr );
	Module._free( type_ptr );

	return { arch, type };

}
```
### getfov_c
```js
function getfov( instid, room, shapelen, framelen ) {

	// create output pointers
	const shape_ptr = Module._malloc( STR_SIZE );
	const frame_ptr = Module._malloc( STR_SIZE );
	const n_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'getfov_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ instid, room, shapelen, framelen, shape_ptr, frame_ptr, bsight, n_ptr, bounds ],
	);

	// read and free output pointers
	const shape = Module.Pointer_stringify( shape_ptr );
	Module._free( shape_ptr );

	const frame = Module.Pointer_stringify( frame_ptr );
	Module._free( frame_ptr );

	const n = Module.getValue( n_ptr, 'i32' );
	Module._free( n_ptr );

	return { shape, frame, bsight, n, bounds };

}
```
### gfclrh_c
```js
function gfclrh(  ) {


	// evaluate function
	Module.ccall(
		'gfclrh_c',
		null,
		[  ],
		[  ],
	);

	return;

}
```
### gfevnt_c
```js
function gfevnt(  ) {


	// evaluate function
	Module.ccall(
		'gfevnt_c',
		null,
		[  ],
		[ d ],
	);

	return { d };

}
```
### gffove_c
```js
function gffove( inst, tshape, raydir, target, tframe, abcorr, obsrvr, tol ) {


	// evaluate function
	Module.ccall(
		'gffove_c',
		null,
		[ 'number' ],
		[ inst, tshape, raydir, target, tframe, abcorr, obsrvr, tol, d ],
	);

	return { d };

}
```
### gfinth_c
```js
function gfinth( sigcode ) {


	// evaluate function
	Module.ccall(
		'gfinth_c',
		null,
		[  ],
		[ sigcode ],
	);

	return;

}
```
### gfocce_c
```js
function gfocce( occtyp, front, fshape, fframe, back, bshape, bframe, abcorr, obsrvr, tol ) {


	// evaluate function
	Module.ccall(
		'gfocce_c',
		null,
		[ 'number' ],
		[ occtyp, front, fshape, fframe, back, bshape, bframe, abcorr, obsrvr, tol, d ],
	);

	return { d };

}
```
### gfrefn_c
```js
function gfrefn( t1, t2, s1, s2 ) {

	// create output pointers
	const t_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'gfrefn_c',
		null,
		[ 'number', 'number', 'number' ],
		[ t1, t2, s1, s2, t_ptr ],
	);

	// read and free output pointers
	const t = Module.getValue( t_ptr, 'double' );
	Module._free( t_ptr );

	return { t };

}
```
### gfrepf_c
```js
function gfrepf(  ) {


	// evaluate function
	Module.ccall(
		'gfrepf_c',
		null,
		[  ],
		[  ],
	);

	return;

}
```
### gfrepi_c
```js
function gfrepi( window, begmss, endmss ) {


	// evaluate function
	Module.ccall(
		'gfrepi_c',
		null,
		[  ],
		[ window, begmss, endmss ],
	);

	return;

}
```
### gfrepu_c
```js
function gfrepu( ivbeg, ivend, time ) {


	// evaluate function
	Module.ccall(
		'gfrepu_c',
		null,
		[ 'number', 'number', 'number' ],
		[ ivbeg, ivend, time ],
	);

	return;

}
```
### gfsstp_c
```js
function gfsstp( step ) {


	// evaluate function
	Module.ccall(
		'gfsstp_c',
		null,
		[ 'number' ],
		[ step ],
	);

	return;

}
```
### gfstep_c
```js
function gfstep( time ) {

	// create output pointers
	const step_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'gfstep_c',
		null,
		[ 'number', 'number' ],
		[ time, step_ptr ],
	);

	// read and free output pointers
	const step = Module.getValue( step_ptr, 'double' );
	Module._free( step_ptr );

	return { step };

}
```
### gfuds_c
```js
function gfuds(  ) {


	// evaluate function
	Module.ccall(
		'gfuds_c',
		null,
		[  ],
		[ d ],
	);

	return { d };

}
```
### halfpi_c
```js
function halfpi(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'halfpi_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### ident_c
```js
function ident(  ) {

	// create output pointers
	const matrix_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'ident_c',
		null,
		[ 'number' ],
		[ matrix_ptr ],
	);

	// read and free output pointers
	const matrix = Module.getValue( matrix_ptr, 'double' );
	Module._free( matrix_ptr );

	return { matrix };

}
```
### illum_c
```js
function illum( target, et, abcorr, obsrvr, spoint ) {

	// create output pointers
	const phase_ptr = Module._malloc( DOUBLE_SIZE );
	const solar_ptr = Module._malloc( DOUBLE_SIZE );
	const emissn_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'illum_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ target, et, abcorr, obsrvr, spoint, phase_ptr, solar_ptr, emissn_ptr ],
	);

	// read and free output pointers
	const phase = Module.getValue( phase_ptr, 'double' );
	Module._free( phase_ptr );

	const solar = Module.getValue( solar_ptr, 'double' );
	Module._free( solar_ptr );

	const emissn = Module.getValue( emissn_ptr, 'double' );
	Module._free( emissn_ptr );

	return { phase, solar, emissn };

}
```
### ilumin_c
```js
function ilumin( method, target, et, fixref, abcorr, obsrvr, spoint ) {

	// create output pointers
	const trgepc_ptr = Module._malloc( DOUBLE_SIZE );
	const phase_ptr = Module._malloc( DOUBLE_SIZE );
	const solar_ptr = Module._malloc( DOUBLE_SIZE );
	const emissn_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'ilumin_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ method, target, et, fixref, abcorr, obsrvr, spoint, trgepc_ptr, srfvec, phase_ptr, solar_ptr, emissn_ptr ],
	);

	// read and free output pointers
	const trgepc = Module.getValue( trgepc_ptr, 'double' );
	Module._free( trgepc_ptr );

	const phase = Module.getValue( phase_ptr, 'double' );
	Module._free( phase_ptr );

	const solar = Module.getValue( solar_ptr, 'double' );
	Module._free( solar_ptr );

	const emissn = Module.getValue( emissn_ptr, 'double' );
	Module._free( emissn_ptr );

	return { trgepc, srfvec, phase, solar, emissn };

}
```
### inelpl_c
```js
function inelpl( ellips, plane ) {

	// create output pointers
	const nxpts_ptr = Module._malloc( INT_SIZE );
	const xpt1_ptr = Module._malloc( DOUBLE_SIZE );
	const xpt2_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'inelpl_c',
		null,
		[ 'number', 'number', 'number' ],
		[ ellips, plane, nxpts_ptr, xpt1_ptr, xpt2_ptr ],
	);

	// read and free output pointers
	const nxpts = Module.getValue( nxpts_ptr, 'i32' );
	Module._free( nxpts_ptr );

	const xpt1 = Module.getValue( xpt1_ptr, 'double' );
	Module._free( xpt1_ptr );

	const xpt2 = Module.getValue( xpt2_ptr, 'double' );
	Module._free( xpt2_ptr );

	return { nxpts, xpt1, xpt2 };

}
```
### inrypl_c
```js
function inrypl( vertex, dir, plane ) {

	// create output pointers
	const nxpts_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'inrypl_c',
		null,
		[ 'number', 'number' ],
		[ vertex, dir, plane, nxpts_ptr, xpt ],
	);

	// read and free output pointers
	const nxpts = Module.getValue( nxpts_ptr, 'i32' );
	Module._free( nxpts_ptr );

	return { nxpts, xpt };

}
```
### insrtc_c
```js
function insrtc( item, set ) {


	// evaluate function
	Module.ccall(
		'insrtc_c',
		null,
		[  ],
		[ item, set ],
	);

	return;

}
```
### insrtd_c
```js
function insrtd( item, set ) {


	// evaluate function
	Module.ccall(
		'insrtd_c',
		null,
		[ 'number' ],
		[ item, set ],
	);

	return;

}
```
### insrti_c
```js
function insrti( item, set ) {


	// evaluate function
	Module.ccall(
		'insrti_c',
		null,
		[ 'number' ],
		[ item, set ],
	);

	return;

}
```
### intmax_
```js
function intmax_(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'intmax_',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### intmax_c
```js
function intmax(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'intmax_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### intmin_
```js
function intmin_(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'intmin_',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### intmin_c
```js
function intmin(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'intmin_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### invert_c
```js
function invert( m1 ) {

	// create output pointers
	const mout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'invert_c',
		null,
		[ 'number' ],
		[ m1, mout_ptr ],
	);

	// read and free output pointers
	const mout = Module.getValue( mout_ptr, 'double' );
	Module._free( mout_ptr );

	return { mout };

}
```
### invort_c
```js
function invort( m ) {

	// create output pointers
	const mit_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'invort_c',
		null,
		[ 'number' ],
		[ m, mit_ptr ],
	);

	// read and free output pointers
	const mit = Module.getValue( mit_ptr, 'double' );
	Module._free( mit_ptr );

	return { mit };

}
```
### isrchc_c
```js
function isrchc( value, ndim, lenvals, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'isrchc_c',
		'number',
		[ 'number', 'number' ],
		[ value, ndim, lenvals, array ],
	);

	return returnValue;

}
```
### isrchd_c
```js
function isrchd( value, ndim, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'isrchd_c',
		'number',
		[ 'number', 'number' ],
		[ value, ndim, array ],
	);

	return returnValue;

}
```
### isrchi_c
```js
function isrchi( value, ndim, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'isrchi_c',
		'number',
		[ 'number', 'number' ],
		[ value, ndim, array ],
	);

	return returnValue;

}
```
### j1900_c
```js
function j1900(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'j1900_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### j1950_c
```js
function j1950(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'j1950_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### j2000_c
```js
function j2000(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'j2000_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### j2100_c
```js
function j2100(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'j2100_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### jyear_c
```js
function jyear(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'jyear_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### kclear_c
```js
function kclear(  ) {


	// evaluate function
	Module.ccall(
		'kclear_c',
		null,
		[  ],
		[  ],
	);

	return;

}
```
### ktotal_c
```js
function ktotal( kind ) {

	// create output pointers
	const count_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'ktotal_c',
		null,
		[ 'number' ],
		[ kind, count_ptr ],
	);

	// read and free output pointers
	const count = Module.getValue( count_ptr, 'i32' );
	Module._free( count_ptr );

	return { count };

}
```
### lastnb_c
```js
function lastnb( string ) {


	// evaluate function
	const returnValue = Module.ccall(
		'lastnb_c',
		'number',
		[  ],
		[ string ],
	);

	return returnValue;

}
```
### latcyl_c
```js
function latcyl( radius, lon, lat ) {

	// create output pointers
	const r_ptr = Module._malloc( DOUBLE_SIZE );
	const lonc_ptr = Module._malloc( DOUBLE_SIZE );
	const z_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'latcyl_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ radius, lon, lat, r_ptr, lonc_ptr, z_ptr ],
	);

	// read and free output pointers
	const r = Module.getValue( r_ptr, 'double' );
	Module._free( r_ptr );

	const lonc = Module.getValue( lonc_ptr, 'double' );
	Module._free( lonc_ptr );

	const z = Module.getValue( z_ptr, 'double' );
	Module._free( z_ptr );

	return { r, lonc, z };

}
```
### latrec_c
```js
function latrec( radius, latitude ) {

	// create output pointers
	const rectan_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'latrec_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ radius, longitude, latitude, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { longitude, rectan };

}
```
### latsph_c
```js
function latsph( radius, lon, lat ) {

	// create output pointers
	const rho_ptr = Module._malloc( DOUBLE_SIZE );
	const colat_ptr = Module._malloc( DOUBLE_SIZE );
	const lons_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'latsph_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ radius, lon, lat, rho_ptr, colat_ptr, lons_ptr ],
	);

	// read and free output pointers
	const rho = Module.getValue( rho_ptr, 'double' );
	Module._free( rho_ptr );

	const colat = Module.getValue( colat_ptr, 'double' );
	Module._free( colat_ptr );

	const lons = Module.getValue( lons_ptr, 'double' );
	Module._free( lons_ptr );

	return { rho, colat, lons };

}
```
### lcase_c
```js
function lcase( in, lenout ) {

	// create output pointers
	const out_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'lcase_c',
		null,
		[ 'string', 'number', 'number' ],
		[ in, lenout, out_ptr ],
	);

	// read and free output pointers
	const out = Module.Pointer_stringify( out_ptr );
	Module._free( out_ptr );

	return { out };

}
```
### ldpool_c
```js
function ldpool( filename ) {


	// evaluate function
	Module.ccall(
		'ldpool_c',
		null,
		[  ],
		[ filename ],
	);

	return;

}
```
### lmpool_c
```js
function lmpool( cvals, lenvals, n ) {


	// evaluate function
	Module.ccall(
		'lmpool_c',
		null,
		[ 'number', 'number' ],
		[ cvals, lenvals, n ],
	);

	return;

}
```
### lspcn_c
```js
function lspcn( body, et, abcorr ) {


	// evaluate function
	const returnValue = Module.ccall(
		'lspcn_c',
		'number',
		[ 'number' ],
		[ body, et, abcorr ],
	);

	return returnValue;

}
```
### lstlec_c
```js
function lstlec( string, n, lenvals, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'lstlec_c',
		'number',
		[ 'number', 'number' ],
		[ string, n, lenvals, array ],
	);

	return returnValue;

}
```
### lstled_c
```js
function lstled( x, n, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'lstled_c',
		'number',
		[ 'number', 'number' ],
		[ x, n, array ],
	);

	return returnValue;

}
```
### lstlei_c
```js
function lstlei( x, n, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'lstlei_c',
		'number',
		[ 'number', 'number' ],
		[ x, n, array ],
	);

	return returnValue;

}
```
### lstltc_c
```js
function lstltc( string, n, lenvals, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'lstltc_c',
		'number',
		[ 'number', 'number' ],
		[ string, n, lenvals, array ],
	);

	return returnValue;

}
```
### lstltd_c
```js
function lstltd( x, n, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'lstltd_c',
		'number',
		[ 'number', 'number' ],
		[ x, n, array ],
	);

	return returnValue;

}
```
### lstlti_c
```js
function lstlti( x, n, array ) {


	// evaluate function
	const returnValue = Module.ccall(
		'lstlti_c',
		'number',
		[ 'number', 'number' ],
		[ x, n, array ],
	);

	return returnValue;

}
```
### ltime_c
```js
function ltime( etobs, obs, dir, targ ) {

	// create output pointers
	const ettarg_ptr = Module._malloc( DOUBLE_SIZE );
	const elapsd_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'ltime_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ etobs, obs, dir, targ, ettarg_ptr, elapsd_ptr ],
	);

	// read and free output pointers
	const ettarg = Module.getValue( ettarg_ptr, 'double' );
	Module._free( ettarg_ptr );

	const elapsd = Module.getValue( elapsd_ptr, 'double' );
	Module._free( elapsd_ptr );

	return { ettarg, elapsd };

}
```
### lx4dec_c
```js
function lx4dec( string, first ) {

	// create output pointers
	const last_ptr = Module._malloc( INT_SIZE );
	const nchar_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'lx4dec_c',
		null,
		[ 'number', 'number', 'number' ],
		[ string, first, last_ptr, nchar_ptr ],
	);

	// read and free output pointers
	const last = Module.getValue( last_ptr, 'i32' );
	Module._free( last_ptr );

	const nchar = Module.getValue( nchar_ptr, 'i32' );
	Module._free( nchar_ptr );

	return { last, nchar };

}
```
### lx4num_c
```js
function lx4num( string, first ) {

	// create output pointers
	const last_ptr = Module._malloc( INT_SIZE );
	const nchar_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'lx4num_c',
		null,
		[ 'number', 'number', 'number' ],
		[ string, first, last_ptr, nchar_ptr ],
	);

	// read and free output pointers
	const last = Module.getValue( last_ptr, 'i32' );
	Module._free( last_ptr );

	const nchar = Module.getValue( nchar_ptr, 'i32' );
	Module._free( nchar_ptr );

	return { last, nchar };

}
```
### lx4sgn_c
```js
function lx4sgn( string, first ) {

	// create output pointers
	const last_ptr = Module._malloc( INT_SIZE );
	const nchar_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'lx4sgn_c',
		null,
		[ 'number', 'number', 'number' ],
		[ string, first, last_ptr, nchar_ptr ],
	);

	// read and free output pointers
	const last = Module.getValue( last_ptr, 'i32' );
	Module._free( last_ptr );

	const nchar = Module.getValue( nchar_ptr, 'i32' );
	Module._free( nchar_ptr );

	return { last, nchar };

}
```
### lx4uns_c
```js
function lx4uns( string, first ) {

	// create output pointers
	const last_ptr = Module._malloc( INT_SIZE );
	const nchar_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'lx4uns_c',
		null,
		[ 'number', 'number', 'number' ],
		[ string, first, last_ptr, nchar_ptr ],
	);

	// read and free output pointers
	const last = Module.getValue( last_ptr, 'i32' );
	Module._free( last_ptr );

	const nchar = Module.getValue( nchar_ptr, 'i32' );
	Module._free( nchar_ptr );

	return { last, nchar };

}
```
### lxqstr_c
```js
function lxqstr( string, qchar, first ) {

	// create output pointers
	const last_ptr = Module._malloc( INT_SIZE );
	const nchar_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'lxqstr_c',
		null,
		[ 'string', 'number', 'number', 'number' ],
		[ string, qchar, first, last_ptr, nchar_ptr ],
	);

	// read and free output pointers
	const last = Module.getValue( last_ptr, 'i32' );
	Module._free( last_ptr );

	const nchar = Module.getValue( nchar_ptr, 'i32' );
	Module._free( nchar_ptr );

	return { last, nchar };

}
```
### m2q_c
```js
function m2q( r ) {

	// create output pointers
	const q_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'm2q_c',
		null,
		[ 'number' ],
		[ r, q_ptr ],
	);

	// read and free output pointers
	const q = Module.getValue( q_ptr, 'double' );
	Module._free( q_ptr );

	return { q };

}
```
### mequ_c
```js
function mequ( m1 ) {

	// create output pointers
	const mout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'mequ_c',
		null,
		[ 'number' ],
		[ m1, mout_ptr ],
	);

	// read and free output pointers
	const mout = Module.getValue( mout_ptr, 'double' );
	Module._free( mout_ptr );

	return { mout };

}
```
### mtxm_c
```js
function mtxm( m1, m2 ) {

	// create output pointers
	const mout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'mtxm_c',
		null,
		[ 'number' ],
		[ m1, m2, mout_ptr ],
	);

	// read and free output pointers
	const mout = Module.getValue( mout_ptr, 'double' );
	Module._free( mout_ptr );

	return { mout };

}
```
### mtxv_c
```js
function mtxv( m1, vin ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'mtxv_c',
		null,
		[ 'number' ],
		[ m1, vin, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### mxmt_c
```js
function mxmt( m1, m2 ) {

	// create output pointers
	const mout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'mxmt_c',
		null,
		[ 'number' ],
		[ m1, m2, mout_ptr ],
	);

	// read and free output pointers
	const mout = Module.getValue( mout_ptr, 'double' );
	Module._free( mout_ptr );

	return { mout };

}
```
### mxm_c
```js
function mxm( m1, m2 ) {

	// create output pointers
	const mout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'mxm_c',
		null,
		[ 'number' ],
		[ m1, m2, mout_ptr ],
	);

	// read and free output pointers
	const mout = Module.getValue( mout_ptr, 'double' );
	Module._free( mout_ptr );

	return { mout };

}
```
### mxv_c
```js
function mxv( m1, vin ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'mxv_c',
		null,
		[ 'number' ],
		[ m1, vin, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### namfrm_c
```js
function namfrm( frname ) {

	// create output pointers
	const frcode_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'namfrm_c',
		null,
		[ 'number' ],
		[ frname, frcode_ptr ],
	);

	// read and free output pointers
	const frcode = Module.getValue( frcode_ptr, 'i32' );
	Module._free( frcode_ptr );

	return { frcode };

}
```
### ncposr_c
```js
function ncposr( str, chars, start ) {


	// evaluate function
	const returnValue = Module.ccall(
		'ncposr_c',
		'number',
		[ 'number' ],
		[ str, chars, start ],
	);

	return returnValue;

}
```
### ncpos_c
```js
function ncpos( str, chars, start ) {


	// evaluate function
	const returnValue = Module.ccall(
		'ncpos_c',
		'number',
		[ 'number' ],
		[ str, chars, start ],
	);

	return returnValue;

}
```
### nearpt_c
```js
function nearpt( positn, a, b, c ) {

	// create output pointers
	const npoint_ptr = Module._malloc( DOUBLE_SIZE );
	const alt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'nearpt_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ positn, a, b, c, npoint_ptr, alt_ptr ],
	);

	// read and free output pointers
	const npoint = Module.getValue( npoint_ptr, 'double' );
	Module._free( npoint_ptr );

	const alt = Module.getValue( alt_ptr, 'double' );
	Module._free( alt_ptr );

	return { npoint, alt };

}
```
### npedln_c
```js
function npedln( a, b, c, linept, linedr ) {

	// create output pointers
	const pnear_ptr = Module._malloc( DOUBLE_SIZE );
	const dist_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'npedln_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ a, b, c, linept, linedr, pnear_ptr, dist_ptr ],
	);

	// read and free output pointers
	const pnear = Module.getValue( pnear_ptr, 'double' );
	Module._free( pnear_ptr );

	const dist = Module.getValue( dist_ptr, 'double' );
	Module._free( dist_ptr );

	return { pnear, dist };

}
```
### npelpt_c
```js
function npelpt( point, ellips ) {

	// create output pointers
	const dist_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'npelpt_c',
		null,
		[ 'number', 'number' ],
		[ point, ellips, pnear, dist_ptr ],
	);

	// read and free output pointers
	const dist = Module.getValue( dist_ptr, 'double' );
	Module._free( dist_ptr );

	return { pnear, dist };

}
```
### nplnpt_c
```js
function nplnpt( linpt, lindir, point ) {

	// create output pointers
	const dist_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'nplnpt_c',
		null,
		[ 'number', 'number' ],
		[ linpt, lindir, point, pnear, dist_ptr ],
	);

	// read and free output pointers
	const dist = Module.getValue( dist_ptr, 'double' );
	Module._free( dist_ptr );

	return { pnear, dist };

}
```
### ordc_c
```js
function ordc( item, set ) {


	// evaluate function
	const returnValue = Module.ccall(
		'ordc_c',
		'number',
		[  ],
		[ item, set ],
	);

	return returnValue;

}
```
### ordd_c
```js
function ordd( item, set ) {


	// evaluate function
	const returnValue = Module.ccall(
		'ordd_c',
		'number',
		[ 'number' ],
		[ item, set ],
	);

	return returnValue;

}
```
### orderc_c
```js
function orderc( lenvals, array, ndim ) {

	// create output pointers
	const iorder_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'orderc_c',
		null,
		[ 'number', 'number', 'number' ],
		[ lenvals, array, ndim, iorder_ptr ],
	);

	// read and free output pointers
	const iorder = Module.getValue( iorder_ptr, 'i32' );
	Module._free( iorder_ptr );

	return { iorder };

}
```
### orderd_c
```js
function orderd( array, ndim ) {

	// create output pointers
	const iorder_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'orderd_c',
		null,
		[ 'number', 'number' ],
		[ array, ndim, iorder_ptr ],
	);

	// read and free output pointers
	const iorder = Module.getValue( iorder_ptr, 'i32' );
	Module._free( iorder_ptr );

	return { iorder };

}
```
### orderi_c
```js
function orderi( array, ndim ) {

	// create output pointers
	const iorder_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'orderi_c',
		null,
		[ 'number', 'number' ],
		[ array, ndim, iorder_ptr ],
	);

	// read and free output pointers
	const iorder = Module.getValue( iorder_ptr, 'i32' );
	Module._free( iorder_ptr );

	return { iorder };

}
```
### ordi_c
```js
function ordi( item, set ) {


	// evaluate function
	const returnValue = Module.ccall(
		'ordi_c',
		'number',
		[ 'number' ],
		[ item, set ],
	);

	return returnValue;

}
```
### oscelt_c
```js
function oscelt( state, et, mu ) {

	// create output pointers
	const elts_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'oscelt_c',
		null,
		[ 'number', 'number', 'number' ],
		[ state, et, mu, elts_ptr ],
	);

	// read and free output pointers
	const elts = Module.getValue( elts_ptr, 'double' );
	Module._free( elts_ptr );

	return { elts };

}
```
### pckcov_c
```js
function pckcov( pck, idcode, cover ) {


	// evaluate function
	Module.ccall(
		'pckcov_c',
		null,
		[ 'number' ],
		[ pck, idcode, cover ],
	);

	return;

}
```
### pckfrm_c
```js
function pckfrm( pck, ids ) {


	// evaluate function
	Module.ccall(
		'pckfrm_c',
		null,
		[  ],
		[ pck, ids ],
	);

	return;

}
```
### pcklof_c
```js
function pcklof( filename ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'pcklof_c',
		null,
		[ 'number' ],
		[ filename, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### pckuof_c
```js
function pckuof( handle ) {


	// evaluate function
	Module.ccall(
		'pckuof_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### pcpool_c
```js
function pcpool( name, n, lenvals, cvals ) {


	// evaluate function
	Module.ccall(
		'pcpool_c',
		null,
		[ 'number', 'number' ],
		[ name, n, lenvals, cvals ],
	);

	return;

}
```
### pdpool_c
```js
function pdpool( name, n, dvals ) {


	// evaluate function
	Module.ccall(
		'pdpool_c',
		null,
		[ 'number' ],
		[ name, n, dvals ],
	);

	return;

}
```
### pgrrec_c
```js
function pgrrec( body, lon, lat, alt, re, f ) {

	// create output pointers
	const rectan_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'pgrrec_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ body, lon, lat, alt, re, f, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { rectan };

}
```
### pipool_c
```js
function pipool( name, n, ivals ) {


	// evaluate function
	Module.ccall(
		'pipool_c',
		null,
		[ 'number' ],
		[ name, n, ivals ],
	);

	return;

}
```
### pi_c
```js
function pi(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'pi_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### pl2nvc_c
```js
function pl2nvc( plane ) {

	// create output pointers
	const normal_ptr = Module._malloc( DOUBLE_SIZE );
	const constant_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'pl2nvc_c',
		null,
		[ 'number', 'number' ],
		[ plane, normal_ptr, constant_ptr ],
	);

	// read and free output pointers
	const normal = Module.getValue( normal_ptr, 'double' );
	Module._free( normal_ptr );

	const constant = Module.getValue( constant_ptr, 'double' );
	Module._free( constant_ptr );

	return { normal, constant };

}
```
### pl2nvp_c
```js
function pl2nvp( plane ) {

	// create output pointers
	const normal_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'pl2nvp_c',
		null,
		[ 'number', 'number' ],
		[ plane, normal_ptr, point ],
	);

	// read and free output pointers
	const normal = Module.getValue( normal_ptr, 'double' );
	Module._free( normal_ptr );

	return { normal, point };

}
```
### pl2psv_c
```js
function pl2psv( plane ) {

	// create output pointers
	const point_ptr = Module._malloc( DOUBLE_SIZE );
	const span1_ptr = Module._malloc( DOUBLE_SIZE );
	const span2_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'pl2psv_c',
		null,
		[ 'number', 'number', 'number' ],
		[ plane, point_ptr, span1_ptr, span2_ptr ],
	);

	// read and free output pointers
	const point = Module.getValue( point_ptr, 'double' );
	Module._free( point_ptr );

	const span1 = Module.getValue( span1_ptr, 'double' );
	Module._free( span1_ptr );

	const span2 = Module.getValue( span2_ptr, 'double' );
	Module._free( span2_ptr );

	return { point, span1, span2 };

}
```
### posr_c
```js
function posr( str, substr, start ) {


	// evaluate function
	const returnValue = Module.ccall(
		'posr_c',
		'number',
		[ 'number' ],
		[ str, substr, start ],
	);

	return returnValue;

}
```
### pos_c
```js
function pos( str, substr, start ) {


	// evaluate function
	const returnValue = Module.ccall(
		'pos_c',
		'number',
		[ 'number' ],
		[ str, substr, start ],
	);

	return returnValue;

}
```
### prop2b_c
```js
function prop2b( gm, pvinit, dt ) {

	// create output pointers
	const pvprop_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'prop2b_c',
		null,
		[ 'number', 'number', 'number' ],
		[ gm, pvinit, dt, pvprop_ptr ],
	);

	// read and free output pointers
	const pvprop = Module.getValue( pvprop_ptr, 'double' );
	Module._free( pvprop_ptr );

	return { pvprop };

}
```
### prsdp_c
```js
function prsdp( string ) {

	// create output pointers
	const dpval_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'prsdp_c',
		null,
		[ 'number' ],
		[ string, dpval_ptr ],
	);

	// read and free output pointers
	const dpval = Module.getValue( dpval_ptr, 'double' );
	Module._free( dpval_ptr );

	return { dpval };

}
```
### prsint_c
```js
function prsint( string ) {

	// create output pointers
	const intval_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'prsint_c',
		null,
		[ 'number' ],
		[ string, intval_ptr ],
	);

	// read and free output pointers
	const intval = Module.getValue( intval_ptr, 'i32' );
	Module._free( intval_ptr );

	return { intval };

}
```
### putcml_c
```js
function putcml( argc ) {


	// evaluate function
	Module.ccall(
		'putcml_c',
		null,
		[ 'number' ],
		[ argc, r ],
	);

	return { r };

}
```
### pxform_c
```js
function pxform( from, to, et ) {

	// create output pointers
	const rotate_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'pxform_c',
		null,
		[ 'number', 'number' ],
		[ from, to, et, rotate_ptr ],
	);

	// read and free output pointers
	const rotate = Module.getValue( rotate_ptr, 'double' );
	Module._free( rotate_ptr );

	return { rotate };

}
```
### q2m_c
```js
function q2m( q ) {

	// create output pointers
	const r_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'q2m_c',
		null,
		[ 'number' ],
		[ q, r_ptr ],
	);

	// read and free output pointers
	const r = Module.getValue( r_ptr, 'double' );
	Module._free( r_ptr );

	return { r };

}
```
### qdq2av_c
```js
function qdq2av( q, dq ) {


	// evaluate function
	Module.ccall(
		'qdq2av_c',
		null,
		[ 'number' ],
		[ q, dq, av ],
	);

	return { av };

}
```
### qxq_c
```js
function qxq( q1, q2 ) {


	// evaluate function
	Module.ccall(
		'qxq_c',
		null,
		[ 'number' ],
		[ q1, q2, qout ],
	);

	return { qout };

}
```
### radrec_c
```js
function radrec( range, ra, dec ) {

	// create output pointers
	const rectan_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'radrec_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ range, ra, dec, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { rectan };

}
```
### rav2xf_c
```js
function rav2xf( rot, av ) {


	// evaluate function
	Module.ccall(
		'rav2xf_c',
		null,
		[ 'number' ],
		[ rot, av, xform ],
	);

	return { xform };

}
```
### raxisa_c
```js
function raxisa( matrix ) {

	// create output pointers
	const angle_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'raxisa_c',
		null,
		[ 'number', 'number' ],
		[ matrix, axis, angle_ptr ],
	);

	// read and free output pointers
	const angle = Module.getValue( angle_ptr, 'double' );
	Module._free( angle_ptr );

	return { axis, angle };

}
```
### reccyl_c
```js
function reccyl( rectan ) {

	// create output pointers
	const r_ptr = Module._malloc( DOUBLE_SIZE );
	const lon_ptr = Module._malloc( DOUBLE_SIZE );
	const z_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'reccyl_c',
		null,
		[ 'number', 'number', 'number' ],
		[ rectan, r_ptr, lon_ptr, z_ptr ],
	);

	// read and free output pointers
	const r = Module.getValue( r_ptr, 'double' );
	Module._free( r_ptr );

	const lon = Module.getValue( lon_ptr, 'double' );
	Module._free( lon_ptr );

	const z = Module.getValue( z_ptr, 'double' );
	Module._free( z_ptr );

	return { r, lon, z };

}
```
### recgeo_c
```js
function recgeo( rectan, re, f ) {

	// create output pointers
	const lon_ptr = Module._malloc( DOUBLE_SIZE );
	const lat_ptr = Module._malloc( DOUBLE_SIZE );
	const alt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'recgeo_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ rectan, re, f, lon_ptr, lat_ptr, alt_ptr ],
	);

	// read and free output pointers
	const lon = Module.getValue( lon_ptr, 'double' );
	Module._free( lon_ptr );

	const lat = Module.getValue( lat_ptr, 'double' );
	Module._free( lat_ptr );

	const alt = Module.getValue( alt_ptr, 'double' );
	Module._free( alt_ptr );

	return { lon, lat, alt };

}
```
### reclat_c
```js
function reclat( rectan ) {

	// create output pointers
	const radius_ptr = Module._malloc( DOUBLE_SIZE );
	const longitude_ptr = Module._malloc( DOUBLE_SIZE );
	const latitude_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'reclat_c',
		null,
		[ 'number', 'number', 'number' ],
		[ rectan, radius_ptr, longitude_ptr, latitude_ptr ],
	);

	// read and free output pointers
	const radius = Module.getValue( radius_ptr, 'double' );
	Module._free( radius_ptr );

	const longitude = Module.getValue( longitude_ptr, 'double' );
	Module._free( longitude_ptr );

	const latitude = Module.getValue( latitude_ptr, 'double' );
	Module._free( latitude_ptr );

	return { radius, longitude, latitude };

}
```
### recpgr_c
```js
function recpgr( body, rectan, re, f ) {

	// create output pointers
	const lon_ptr = Module._malloc( DOUBLE_SIZE );
	const lat_ptr = Module._malloc( DOUBLE_SIZE );
	const alt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'recpgr_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ body, rectan, re, f, lon_ptr, lat_ptr, alt_ptr ],
	);

	// read and free output pointers
	const lon = Module.getValue( lon_ptr, 'double' );
	Module._free( lon_ptr );

	const lat = Module.getValue( lat_ptr, 'double' );
	Module._free( lat_ptr );

	const alt = Module.getValue( alt_ptr, 'double' );
	Module._free( alt_ptr );

	return { lon, lat, alt };

}
```
### recrad_c
```js
function recrad( rectan ) {

	// create output pointers
	const range_ptr = Module._malloc( DOUBLE_SIZE );
	const ra_ptr = Module._malloc( DOUBLE_SIZE );
	const dec_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'recrad_c',
		null,
		[ 'number', 'number', 'number' ],
		[ rectan, range_ptr, ra_ptr, dec_ptr ],
	);

	// read and free output pointers
	const range = Module.getValue( range_ptr, 'double' );
	Module._free( range_ptr );

	const ra = Module.getValue( ra_ptr, 'double' );
	Module._free( ra_ptr );

	const dec = Module.getValue( dec_ptr, 'double' );
	Module._free( dec_ptr );

	return { range, ra, dec };

}
```
### recsph_c
```js
function recsph( rectan ) {

	// create output pointers
	const r_ptr = Module._malloc( DOUBLE_SIZE );
	const colat_ptr = Module._malloc( DOUBLE_SIZE );
	const lon_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'recsph_c',
		null,
		[ 'number', 'number', 'number' ],
		[ rectan, r_ptr, colat_ptr, lon_ptr ],
	);

	// read and free output pointers
	const r = Module.getValue( r_ptr, 'double' );
	Module._free( r_ptr );

	const colat = Module.getValue( colat_ptr, 'double' );
	Module._free( colat_ptr );

	const lon = Module.getValue( lon_ptr, 'double' );
	Module._free( lon_ptr );

	return { r, colat, lon };

}
```
### removc_c
```js
function removc( item, set ) {


	// evaluate function
	Module.ccall(
		'removc_c',
		null,
		[  ],
		[ item, set ],
	);

	return;

}
```
### removd_c
```js
function removd( item, set ) {


	// evaluate function
	Module.ccall(
		'removd_c',
		null,
		[ 'number' ],
		[ item, set ],
	);

	return;

}
```
### removi_c
```js
function removi( item, set ) {


	// evaluate function
	Module.ccall(
		'removi_c',
		null,
		[ 'number' ],
		[ item, set ],
	);

	return;

}
```
### reordc_c
```js
function reordc( iorder, ndim, lenvals, array ) {


	// evaluate function
	Module.ccall(
		'reordc_c',
		null,
		[ 'number', 'number' ],
		[ iorder, ndim, lenvals, array ],
	);

	return;

}
```
### reordd_c
```js
function reordd( iorder, ndim, array ) {


	// evaluate function
	Module.ccall(
		'reordd_c',
		null,
		[ 'number', 'number' ],
		[ iorder, ndim, array ],
	);

	return;

}
```
### reordi_c
```js
function reordi( iorder, ndim, array ) {


	// evaluate function
	Module.ccall(
		'reordi_c',
		null,
		[ 'number', 'number' ],
		[ iorder, ndim, array ],
	);

	return;

}
```
### reordl_c
```js
function reordl( iorder, ndim, array ) {


	// evaluate function
	Module.ccall(
		'reordl_c',
		null,
		[ 'number' ],
		[ iorder, ndim, array ],
	);

	return;

}
```
### repmct_c
```js
function repmct( in, marker, value, repcase, lenout ) {

	// create output pointers
	const out_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'repmct_c',
		null,
		[ 'number', 'string', 'number', 'number' ],
		[ in, marker, value, repcase, lenout, out_ptr ],
	);

	// read and free output pointers
	const out = Module.Pointer_stringify( out_ptr );
	Module._free( out_ptr );

	return { out };

}
```
### repmc_c
```js
function repmc( in, marker, value, lenout ) {

	// create output pointers
	const out_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'repmc_c',
		null,
		[ 'number', 'number' ],
		[ in, marker, value, lenout, out_ptr ],
	);

	// read and free output pointers
	const out = Module.Pointer_stringify( out_ptr );
	Module._free( out_ptr );

	return { out };

}
```
### repmd_c
```js
function repmd( in, marker, value, sigdig, lenout ) {

	// create output pointers
	const out_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'repmd_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ in, marker, value, sigdig, lenout, out_ptr ],
	);

	// read and free output pointers
	const out = Module.Pointer_stringify( out_ptr );
	Module._free( out_ptr );

	return { out };

}
```
### repmf_c
```js
function repmf( in, marker, value, sigdig, format, lenout ) {

	// create output pointers
	const out_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'repmf_c',
		null,
		[ 'number', 'number', 'string', 'number', 'number' ],
		[ in, marker, value, sigdig, format, lenout, out_ptr ],
	);

	// read and free output pointers
	const out = Module.Pointer_stringify( out_ptr );
	Module._free( out_ptr );

	return { out };

}
```
### repmi_c
```js
function repmi( in, marker, value, lenout ) {

	// create output pointers
	const out_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'repmi_c',
		null,
		[ 'number', 'number', 'number' ],
		[ in, marker, value, lenout, out_ptr ],
	);

	// read and free output pointers
	const out = Module.Pointer_stringify( out_ptr );
	Module._free( out_ptr );

	return { out };

}
```
### repmot_c
```js
function repmot( in, marker, value, repcase, lenout ) {

	// create output pointers
	const out_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'repmot_c',
		null,
		[ 'number', 'string', 'number', 'number' ],
		[ in, marker, value, repcase, lenout, out_ptr ],
	);

	// read and free output pointers
	const out = Module.Pointer_stringify( out_ptr );
	Module._free( out_ptr );

	return { out };

}
```
### reset_c
```js
function reset(  ) {


	// evaluate function
	Module.ccall(
		'reset_c',
		null,
		[  ],
		[  ],
	);

	return;

}
```
### rotate_c
```js
function rotate( angle, iaxis ) {

	// create output pointers
	const mout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'rotate_c',
		null,
		[ 'number', 'number', 'number' ],
		[ angle, iaxis, mout_ptr ],
	);

	// read and free output pointers
	const mout = Module.getValue( mout_ptr, 'double' );
	Module._free( mout_ptr );

	return { mout };

}
```
### rotmat_c
```js
function rotmat( m1, angle, iaxis ) {

	// create output pointers
	const mout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'rotmat_c',
		null,
		[ 'number', 'number', 'number' ],
		[ m1, angle, iaxis, mout_ptr ],
	);

	// read and free output pointers
	const mout = Module.getValue( mout_ptr, 'double' );
	Module._free( mout_ptr );

	return { mout };

}
```
### rotvec_c
```js
function rotvec( v1, angle, iaxis ) {


	// evaluate function
	Module.ccall(
		'rotvec_c',
		null,
		[ 'number', 'number', 'number' ],
		[ v1, angle, iaxis, vout ],
	);

	return { vout };

}
```
### rpd_c
```js
function rpd(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'rpd_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### rquad_c
```js
function rquad( a, b, c ) {

	// create output pointers
	const root1_ptr = Module._malloc( DOUBLE_SIZE );
	const root2_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'rquad_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ a, b, c, root1_ptr, root2_ptr ],
	);

	// read and free output pointers
	const root1 = Module.getValue( root1_ptr, 'double' );
	Module._free( root1_ptr );

	const root2 = Module.getValue( root2_ptr, 'double' );
	Module._free( root2_ptr );

	return { root1, root2 };

}
```
### saelgv_c
```js
function saelgv( vec1, vec2 ) {

	// create output pointers
	const smajor_ptr = Module._malloc( DOUBLE_SIZE );
	const sminor_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'saelgv_c',
		null,
		[ 'number', 'number' ],
		[ vec1, vec2, smajor_ptr, sminor_ptr ],
	);

	// read and free output pointers
	const smajor = Module.getValue( smajor_ptr, 'double' );
	Module._free( smajor_ptr );

	const sminor = Module.getValue( sminor_ptr, 'double' );
	Module._free( sminor_ptr );

	return { smajor, sminor };

}
```
### scdecd_c
```js
function scdecd( sc, sclkdp, lenout ) {

	// create output pointers
	const sclkch_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'scdecd_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ sc, sclkdp, lenout, sclkch_ptr ],
	);

	// read and free output pointers
	const sclkch = Module.Pointer_stringify( sclkch_ptr );
	Module._free( sclkch_ptr );

	return { sclkch };

}
```
### sce2c_c
```js
function sce2c( sc, et ) {

	// create output pointers
	const sclkdp_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'sce2c_c',
		null,
		[ 'number', 'number', 'number' ],
		[ sc, et, sclkdp_ptr ],
	);

	// read and free output pointers
	const sclkdp = Module.getValue( sclkdp_ptr, 'double' );
	Module._free( sclkdp_ptr );

	return { sclkdp };

}
```
### sce2s_c
```js
function sce2s( sc, et, lenout ) {

	// create output pointers
	const sclkch_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'sce2s_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ sc, et, lenout, sclkch_ptr ],
	);

	// read and free output pointers
	const sclkch = Module.Pointer_stringify( sclkch_ptr );
	Module._free( sclkch_ptr );

	return { sclkch };

}
```
### sce2t_c
```js
function sce2t( sc, et ) {

	// create output pointers
	const sclkdp_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'sce2t_c',
		null,
		[ 'number', 'number', 'number' ],
		[ sc, et, sclkdp_ptr ],
	);

	// read and free output pointers
	const sclkdp = Module.getValue( sclkdp_ptr, 'double' );
	Module._free( sclkdp_ptr );

	return { sclkdp };

}
```
### scencd_c
```js
function scencd( sc, sclkch ) {

	// create output pointers
	const sclkdp_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'scencd_c',
		null,
		[ 'number', 'number' ],
		[ sc, sclkch, sclkdp_ptr ],
	);

	// read and free output pointers
	const sclkdp = Module.getValue( sclkdp_ptr, 'double' );
	Module._free( sclkdp_ptr );

	return { sclkdp };

}
```
### scfmt_c
```js
function scfmt( sc, ticks, lenout ) {

	// create output pointers
	const clkstr_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'scfmt_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ sc, ticks, lenout, clkstr_ptr ],
	);

	// read and free output pointers
	const clkstr = Module.Pointer_stringify( clkstr_ptr );
	Module._free( clkstr_ptr );

	return { clkstr };

}
```
### scpart_c
```js
function scpart( sc ) {

	// create output pointers
	const nparts_ptr = Module._malloc( INT_SIZE );
	const pstart_ptr = Module._malloc( DOUBLE_SIZE );
	const pstop_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'scpart_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ sc, nparts_ptr, pstart_ptr, pstop_ptr ],
	);

	// read and free output pointers
	const nparts = Module.getValue( nparts_ptr, 'i32' );
	Module._free( nparts_ptr );

	const pstart = Module.getValue( pstart_ptr, 'double' );
	Module._free( pstart_ptr );

	const pstop = Module.getValue( pstop_ptr, 'double' );
	Module._free( pstop_ptr );

	return { nparts, pstart, pstop };

}
```
### scs2e_c
```js
function scs2e( sc, sclkch ) {

	// create output pointers
	const et_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'scs2e_c',
		null,
		[ 'number', 'number' ],
		[ sc, sclkch, et_ptr ],
	);

	// read and free output pointers
	const et = Module.getValue( et_ptr, 'double' );
	Module._free( et_ptr );

	return { et };

}
```
### sct2e_c
```js
function sct2e( sc, sclkdp ) {

	// create output pointers
	const et_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'sct2e_c',
		null,
		[ 'number', 'number', 'number' ],
		[ sc, sclkdp, et_ptr ],
	);

	// read and free output pointers
	const et = Module.getValue( et_ptr, 'double' );
	Module._free( et_ptr );

	return { et };

}
```
### sctiks_c
```js
function sctiks( sc, clkstr ) {

	// create output pointers
	const ticks_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'sctiks_c',
		null,
		[ 'number', 'number' ],
		[ sc, clkstr, ticks_ptr ],
	);

	// read and free output pointers
	const ticks = Module.getValue( ticks_ptr, 'double' );
	Module._free( ticks_ptr );

	return { ticks };

}
```
### setmsg_c
```js
function setmsg( message ) {


	// evaluate function
	Module.ccall(
		'setmsg_c',
		null,
		[  ],
		[ message ],
	);

	return;

}
```
### shellc_c
```js
function shellc( ndim, lenvals, array ) {


	// evaluate function
	Module.ccall(
		'shellc_c',
		null,
		[ 'number', 'number' ],
		[ ndim, lenvals, array ],
	);

	return;

}
```
### shelld_c
```js
function shelld( ndim, array ) {


	// evaluate function
	Module.ccall(
		'shelld_c',
		null,
		[ 'number', 'number' ],
		[ ndim, array ],
	);

	return;

}
```
### shelli_c
```js
function shelli( ndim, array ) {


	// evaluate function
	Module.ccall(
		'shelli_c',
		null,
		[ 'number', 'number' ],
		[ ndim, array ],
	);

	return;

}
```
### size_c
```js
function size( cell ) {


	// evaluate function
	const returnValue = Module.ccall(
		'size_c',
		'number',
		[  ],
		[ cell ],
	);

	return returnValue;

}
```
### spd_c
```js
function spd(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'spd_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### sphcyl_c
```js
function sphcyl( radius, colat, slon ) {

	// create output pointers
	const r_ptr = Module._malloc( DOUBLE_SIZE );
	const lon_ptr = Module._malloc( DOUBLE_SIZE );
	const z_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'sphcyl_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ radius, colat, slon, r_ptr, lon_ptr, z_ptr ],
	);

	// read and free output pointers
	const r = Module.getValue( r_ptr, 'double' );
	Module._free( r_ptr );

	const lon = Module.getValue( lon_ptr, 'double' );
	Module._free( lon_ptr );

	const z = Module.getValue( z_ptr, 'double' );
	Module._free( z_ptr );

	return { r, lon, z };

}
```
### sphlat_c
```js
function sphlat( r, colat, lons ) {

	// create output pointers
	const radius_ptr = Module._malloc( DOUBLE_SIZE );
	const lon_ptr = Module._malloc( DOUBLE_SIZE );
	const lat_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'sphlat_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ r, colat, lons, radius_ptr, lon_ptr, lat_ptr ],
	);

	// read and free output pointers
	const radius = Module.getValue( radius_ptr, 'double' );
	Module._free( radius_ptr );

	const lon = Module.getValue( lon_ptr, 'double' );
	Module._free( lon_ptr );

	const lat = Module.getValue( lat_ptr, 'double' );
	Module._free( lat_ptr );

	return { radius, lon, lat };

}
```
### sphrec_c
```js
function sphrec( r, colat, lon ) {

	// create output pointers
	const rectan_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'sphrec_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ r, colat, lon, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { rectan };

}
```
### spk14a_c
```js
function spk14a( handle, ncsets, coeffs, epochs ) {


	// evaluate function
	Module.ccall(
		'spk14a_c',
		null,
		[ 'number', 'number' ],
		[ handle, ncsets, coeffs, epochs ],
	);

	return;

}
```
### spk14b_c
```js
function spk14b( handle, segid, body, center, frame, first, last, chbdeg ) {


	// evaluate function
	Module.ccall(
		'spk14b_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, segid, body, center, frame, first, last, chbdeg ],
	);

	return;

}
```
### spk14e_c
```js
function spk14e( handle ) {


	// evaluate function
	Module.ccall(
		'spk14e_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### spkacs_c
```js
function spkacs( targ, et, ref, abcorr, obs ) {

	// create output pointers
	const starg_ptr = Module._malloc( DOUBLE_SIZE );
	const lt_ptr = Module._malloc( DOUBLE_SIZE );
	const dlt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkacs_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ targ, et, ref, abcorr, obs, starg_ptr, lt_ptr, dlt_ptr ],
	);

	// read and free output pointers
	const starg = Module.getValue( starg_ptr, 'double' );
	Module._free( starg_ptr );

	const lt = Module.getValue( lt_ptr, 'double' );
	Module._free( lt_ptr );

	const dlt = Module.getValue( dlt_ptr, 'double' );
	Module._free( dlt_ptr );

	return { starg, lt, dlt };

}
```
### spkapo_c
```js
function spkapo( targ, et, ref, sobs, abcorr ) {

	// create output pointers
	const ptarg_ptr = Module._malloc( DOUBLE_SIZE );
	const lt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkapo_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ targ, et, ref, sobs, abcorr, ptarg_ptr, lt_ptr ],
	);

	// read and free output pointers
	const ptarg = Module.getValue( ptarg_ptr, 'double' );
	Module._free( ptarg_ptr );

	const lt = Module.getValue( lt_ptr, 'double' );
	Module._free( lt_ptr );

	return { ptarg, lt };

}
```
### spkapp_c
```js
function spkapp( targ, et, ref, sobs, abcorr ) {

	// create output pointers
	const lt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkapp_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ targ, et, ref, sobs, abcorr, starg, lt_ptr ],
	);

	// read and free output pointers
	const lt = Module.getValue( lt_ptr, 'double' );
	Module._free( lt_ptr );

	return { starg, lt };

}
```
### spkaps_c
```js
function spkaps( targ, et, ref, abcorr, stobs, accobs ) {

	// create output pointers
	const lt_ptr = Module._malloc( DOUBLE_SIZE );
	const dlt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkaps_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ targ, et, ref, abcorr, stobs, accobs, starg, lt_ptr, dlt_ptr ],
	);

	// read and free output pointers
	const lt = Module.getValue( lt_ptr, 'double' );
	Module._free( lt_ptr );

	const dlt = Module.getValue( dlt_ptr, 'double' );
	Module._free( dlt_ptr );

	return { starg, lt, dlt };

}
```
### spkcls_c
```js
function spkcls( handle ) {


	// evaluate function
	Module.ccall(
		'spkcls_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### spkcov_c
```js
function spkcov( spk, idcode, cover ) {


	// evaluate function
	Module.ccall(
		'spkcov_c',
		null,
		[ 'number' ],
		[ spk, idcode, cover ],
	);

	return;

}
```
### spkezp_c
```js
function spkezp( targ, et, ref, abcorr, obs ) {

	// create output pointers
	const ptarg_ptr = Module._malloc( DOUBLE_SIZE );
	const lt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkezp_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ targ, et, ref, abcorr, obs, ptarg_ptr, lt_ptr ],
	);

	// read and free output pointers
	const ptarg = Module.getValue( ptarg_ptr, 'double' );
	Module._free( ptarg_ptr );

	const lt = Module.getValue( lt_ptr, 'double' );
	Module._free( lt_ptr );

	return { ptarg, lt };

}
```
### spkezr_c
```js
function spkezr( targ, et, ref, abcorr, obs ) {

	// create output pointers
	const starg_ptr = Module._malloc( DOUBLE_SIZE );
	const lt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkezr_c',
		null,
		[ 'number', 'number', 'number' ],
		[ targ, et, ref, abcorr, obs, starg_ptr, lt_ptr ],
	);

	// read and free output pointers
	const starg = Module.getValue( starg_ptr, 'double' );
	Module._free( starg_ptr );

	const lt = Module.getValue( lt_ptr, 'double' );
	Module._free( lt_ptr );

	return { starg, lt };

}
```
### spkez_c
```js
function spkez( targ, et, ref, abcorr, obs ) {

	// create output pointers
	const starg_ptr = Module._malloc( DOUBLE_SIZE );
	const lt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkez_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ targ, et, ref, abcorr, obs, starg_ptr, lt_ptr ],
	);

	// read and free output pointers
	const starg = Module.getValue( starg_ptr, 'double' );
	Module._free( starg_ptr );

	const lt = Module.getValue( lt_ptr, 'double' );
	Module._free( lt_ptr );

	return { starg, lt };

}
```
### spkgeo_c
```js
function spkgeo( targ, et, ref, obs ) {

	// create output pointers
	const state_ptr = Module._malloc( DOUBLE_SIZE );
	const lt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkgeo_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ targ, et, ref, obs, state_ptr, lt_ptr ],
	);

	// read and free output pointers
	const state = Module.getValue( state_ptr, 'double' );
	Module._free( state_ptr );

	const lt = Module.getValue( lt_ptr, 'double' );
	Module._free( lt_ptr );

	return { state, lt };

}
```
### spkgps_c
```js
function spkgps( targ, et, ref, obs ) {

	// create output pointers
	const pos_ptr = Module._malloc( DOUBLE_SIZE );
	const lt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkgps_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ targ, et, ref, obs, pos_ptr, lt_ptr ],
	);

	// read and free output pointers
	const pos = Module.getValue( pos_ptr, 'double' );
	Module._free( pos_ptr );

	const lt = Module.getValue( lt_ptr, 'double' );
	Module._free( lt_ptr );

	return { pos, lt };

}
```
### spkltc_c
```js
function spkltc( targ, et, ref, abcorr, stobs ) {

	// create output pointers
	const starg_ptr = Module._malloc( DOUBLE_SIZE );
	const lt_ptr = Module._malloc( DOUBLE_SIZE );
	const dlt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkltc_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ targ, et, ref, abcorr, stobs, starg_ptr, lt_ptr, dlt_ptr ],
	);

	// read and free output pointers
	const starg = Module.getValue( starg_ptr, 'double' );
	Module._free( starg_ptr );

	const lt = Module.getValue( lt_ptr, 'double' );
	Module._free( lt_ptr );

	const dlt = Module.getValue( dlt_ptr, 'double' );
	Module._free( dlt_ptr );

	return { starg, lt, dlt };

}
```
### spkobj_c
```js
function spkobj( spk, ids ) {


	// evaluate function
	Module.ccall(
		'spkobj_c',
		null,
		[  ],
		[ spk, ids ],
	);

	return;

}
```
### spkopa_c
```js
function spkopa( file ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'spkopa_c',
		null,
		[ 'number' ],
		[ file, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### spkopn_c
```js
function spkopn( name, ifname, ncomch ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'spkopn_c',
		null,
		[ 'number', 'number' ],
		[ name, ifname, ncomch, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### spkpds_c
```js
function spkpds( body, center, frame, type, first, last ) {

	// create output pointers
	const descr_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkpds_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ body, center, frame, type, first, last, descr_ptr ],
	);

	// read and free output pointers
	const descr = Module.getValue( descr_ptr, 'double' );
	Module._free( descr_ptr );

	return { descr };

}
```
### spkpos_c
```js
function spkpos( targ, et, ref, abcorr, obs ) {

	// create output pointers
	const ptarg_ptr = Module._malloc( DOUBLE_SIZE );
	const lt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkpos_c',
		null,
		[ 'number', 'number', 'number' ],
		[ targ, et, ref, abcorr, obs, ptarg_ptr, lt_ptr ],
	);

	// read and free output pointers
	const ptarg = Module.getValue( ptarg_ptr, 'double' );
	Module._free( ptarg_ptr );

	const lt = Module.getValue( lt_ptr, 'double' );
	Module._free( lt_ptr );

	return { ptarg, lt };

}
```
### spkssb_c
```js
function spkssb( targ, et, ref ) {

	// create output pointers
	const starg_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'spkssb_c',
		null,
		[ 'number', 'number', 'number' ],
		[ targ, et, ref, starg_ptr ],
	);

	// read and free output pointers
	const starg = Module.getValue( starg_ptr, 'double' );
	Module._free( starg_ptr );

	return { starg };

}
```
### spksub_c
```js
function spksub( handle, descr, ident, begin, end, newh ) {


	// evaluate function
	Module.ccall(
		'spksub_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ handle, descr, ident, begin, end, newh ],
	);

	return;

}
```
### spkuds_c
```js
function spkuds( descr ) {

	// create output pointers
	const body_ptr = Module._malloc( INT_SIZE );
	const center_ptr = Module._malloc( INT_SIZE );
	const frame_ptr = Module._malloc( INT_SIZE );
	const type_ptr = Module._malloc( INT_SIZE );
	const first_ptr = Module._malloc( DOUBLE_SIZE );
	const last_ptr = Module._malloc( DOUBLE_SIZE );
	const begin_ptr = Module._malloc( INT_SIZE );
	const end_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'spkuds_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ descr, body_ptr, center_ptr, frame_ptr, type_ptr, first_ptr, last_ptr, begin_ptr, end_ptr ],
	);

	// read and free output pointers
	const body = Module.getValue( body_ptr, 'i32' );
	Module._free( body_ptr );

	const center = Module.getValue( center_ptr, 'i32' );
	Module._free( center_ptr );

	const frame = Module.getValue( frame_ptr, 'i32' );
	Module._free( frame_ptr );

	const type = Module.getValue( type_ptr, 'i32' );
	Module._free( type_ptr );

	const first = Module.getValue( first_ptr, 'double' );
	Module._free( first_ptr );

	const last = Module.getValue( last_ptr, 'double' );
	Module._free( last_ptr );

	const begin = Module.getValue( begin_ptr, 'i32' );
	Module._free( begin_ptr );

	const end = Module.getValue( end_ptr, 'i32' );
	Module._free( end_ptr );

	return { body, center, frame, type, first, last, begin, end };

}
```
### spkuef_c
```js
function spkuef( handle ) {


	// evaluate function
	Module.ccall(
		'spkuef_c',
		null,
		[ 'number' ],
		[ handle ],
	);

	return;

}
```
### spkw02_c
```js
function spkw02( handle, body, center, frame, first, last, segid, intlen, n, polydg, cdata, btime ) {


	// evaluate function
	Module.ccall(
		'spkw02_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, body, center, frame, first, last, segid, intlen, n, polydg, cdata, btime ],
	);

	return;

}
```
### spkw03_c
```js
function spkw03( handle, body, center, frame, first, last, segid, intlen, n, polydg, cdata, btime ) {


	// evaluate function
	Module.ccall(
		'spkw03_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, body, center, frame, first, last, segid, intlen, n, polydg, cdata, btime ],
	);

	return;

}
```
### spkw05_c
```js
function spkw05( handle, body, center, frame, first, last, segid, gm, n, states, epochs ) {


	// evaluate function
	Module.ccall(
		'spkw05_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, body, center, frame, first, last, segid, gm, n, states, epochs ],
	);

	return;

}
```
### spkw08_c
```js
function spkw08( handle, body, center, frame, first, last, segid, degree, n, states, epoch1, step ) {


	// evaluate function
	Module.ccall(
		'spkw08_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, body, center, frame, first, last, segid, degree, n, states, epoch1, step ],
	);

	return;

}
```
### spkw09_c
```js
function spkw09( handle, body, center, frame, first, last, segid, degree, n, states, epochs ) {


	// evaluate function
	Module.ccall(
		'spkw09_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, body, center, frame, first, last, segid, degree, n, states, epochs ],
	);

	return;

}
```
### spkw10_c
```js
function spkw10( handle, body, center, frame, first, last, segid, consts, n, elems, epochs ) {


	// evaluate function
	Module.ccall(
		'spkw10_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, body, center, frame, first, last, segid, consts, n, elems, epochs ],
	);

	return;

}
```
### spkw12_c
```js
function spkw12( handle, body, center, frame, first, last, segid, degree, n, states, epoch0, step ) {


	// evaluate function
	Module.ccall(
		'spkw12_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, body, center, frame, first, last, segid, degree, n, states, epoch0, step ],
	);

	return;

}
```
### spkw13_c
```js
function spkw13( handle, body, center, frame, first, last, segid, degree, n, states, epochs ) {


	// evaluate function
	Module.ccall(
		'spkw13_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, body, center, frame, first, last, segid, degree, n, states, epochs ],
	);

	return;

}
```
### spkw15_c
```js
function spkw15( handle, body, center, frame, first, last, segid, epoch, tp, pa, p, ecc, j2flg, pv, gm, j2, radius ) {


	// evaluate function
	Module.ccall(
		'spkw15_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, body, center, frame, first, last, segid, epoch, tp, pa, p, ecc, j2flg, pv, gm, j2, radius ],
	);

	return;

}
```
### spkw17_c
```js
function spkw17( handle, body, center, frame, first, last, segid, epoch, eqel, rapol ) {


	// evaluate function
	Module.ccall(
		'spkw17_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, body, center, frame, first, last, segid, epoch, eqel, rapol, decpol ],
	);

	return { decpol };

}
```
### spkw18_c
```js
function spkw18( handle, subtyp, body, center, frame, first, last, segid, degree, n, packts, epochs ) {


	// evaluate function
	Module.ccall(
		'spkw18_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ handle, subtyp, body, center, frame, first, last, segid, degree, n, packts, epochs ],
	);

	return;

}
```
### srfrec_c
```js
function srfrec( body, latitude ) {

	// create output pointers
	const rectan_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'srfrec_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ body, longitude, latitude, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { longitude, rectan };

}
```
### ssize_c
```js
function ssize( size, cell ) {


	// evaluate function
	Module.ccall(
		'ssize_c',
		null,
		[ 'number' ],
		[ size, cell ],
	);

	return;

}
```
### stelab_c
```js
function stelab( pobj, vobs ) {

	// create output pointers
	const appobj_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'stelab_c',
		null,
		[ 'number' ],
		[ pobj, vobs, appobj_ptr ],
	);

	// read and free output pointers
	const appobj = Module.getValue( appobj_ptr, 'double' );
	Module._free( appobj_ptr );

	return { appobj };

}
```
### str2et_c
```js
function str2et( str ) {

	// create output pointers
	const et_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'str2et_c',
		null,
		[ 'number' ],
		[ str, et_ptr ],
	);

	// read and free output pointers
	const et = Module.getValue( et_ptr, 'double' );
	Module._free( et_ptr );

	return { et };

}
```
### subpnt_c
```js
function subpnt( method, target, et, fixref, abcorr, obsrvr ) {

	// create output pointers
	const trgepc_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'subpnt_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ method, target, et, fixref, abcorr, obsrvr, spoint, trgepc_ptr, srfvec ],
	);

	// read and free output pointers
	const trgepc = Module.getValue( trgepc_ptr, 'double' );
	Module._free( trgepc_ptr );

	return { spoint, trgepc, srfvec };

}
```
### subpt_c
```js
function subpt( method, target, et, abcorr, obsrvr ) {

	// create output pointers
	const alt_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'subpt_c',
		null,
		[ 'number', 'number', 'number' ],
		[ method, target, et, abcorr, obsrvr, spoint, alt_ptr ],
	);

	// read and free output pointers
	const alt = Module.getValue( alt_ptr, 'double' );
	Module._free( alt_ptr );

	return { spoint, alt };

}
```
### subslr_c
```js
function subslr( method, target, et, fixref, abcorr, obsrvr ) {

	// create output pointers
	const trgepc_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'subslr_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ method, target, et, fixref, abcorr, obsrvr, spoint, trgepc_ptr, srfvec ],
	);

	// read and free output pointers
	const trgepc = Module.getValue( trgepc_ptr, 'double' );
	Module._free( trgepc_ptr );

	return { spoint, trgepc, srfvec };

}
```
### subsol_c
```js
function subsol( method, target, et, abcorr, obsrvr ) {

	// create output pointers
	const spoint_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'subsol_c',
		null,
		[ 'number', 'number' ],
		[ method, target, et, abcorr, obsrvr, spoint_ptr ],
	);

	// read and free output pointers
	const spoint = Module.getValue( spoint_ptr, 'double' );
	Module._free( spoint_ptr );

	return { spoint };

}
```
### sumad_c
```js
function sumad( array, n ) {


	// evaluate function
	const returnValue = Module.ccall(
		'sumad_c',
		'number',
		[ 'number' ],
		[ array, n ],
	);

	return returnValue;

}
```
### sumai_c
```js
function sumai( array, n ) {


	// evaluate function
	const returnValue = Module.ccall(
		'sumai_c',
		'number',
		[ 'number' ],
		[ array, n ],
	);

	return returnValue;

}
```
### surfnm_c
```js
function surfnm( a, b, c, point ) {

	// create output pointers
	const normal_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'surfnm_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ a, b, c, point, normal_ptr ],
	);

	// read and free output pointers
	const normal = Module.getValue( normal_ptr, 'double' );
	Module._free( normal_ptr );

	return { normal };

}
```
### swpool_c
```js
function swpool( agent, nnames, lenvals, names ) {


	// evaluate function
	Module.ccall(
		'swpool_c',
		null,
		[ 'number', 'number' ],
		[ agent, nnames, lenvals, names ],
	);

	return;

}
```
### sxform_c
```js
function sxform( from, to, et ) {

	// create output pointers
	const xform_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'sxform_c',
		null,
		[ 'number', 'number' ],
		[ from, to, et, xform_ptr ],
	);

	// read and free output pointers
	const xform = Module.getValue( xform_ptr, 'double' );
	Module._free( xform_ptr );

	return { xform };

}
```
### timdef_c
```js
function timdef( action, item, lenout, value ) {


	// evaluate function
	Module.ccall(
		'timdef_c',
		null,
		[ 'number', 'string' ],
		[ action, item, lenout, value ],
	);

	return;

}
```
### timout_c
```js
function timout( et, pictur, lenout ) {

	// create output pointers
	const output_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'timout_c',
		null,
		[ 'number', 'number', 'number' ],
		[ et, pictur, lenout, output_ptr ],
	);

	// read and free output pointers
	const output = Module.Pointer_stringify( output_ptr );
	Module._free( output_ptr );

	return { output };

}
```
### tipbod_c
```js
function tipbod( ref, body, et ) {

	// create output pointers
	const tipm_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'tipbod_c',
		null,
		[ 'number', 'number', 'number' ],
		[ ref, body, et, tipm_ptr ],
	);

	// read and free output pointers
	const tipm = Module.getValue( tipm_ptr, 'double' );
	Module._free( tipm_ptr );

	return { tipm };

}
```
### tisbod_c
```js
function tisbod( ref, body, et ) {

	// create output pointers
	const tsipm_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'tisbod_c',
		null,
		[ 'number', 'number', 'number' ],
		[ ref, body, et, tsipm_ptr ],
	);

	// read and free output pointers
	const tsipm = Module.getValue( tsipm_ptr, 'double' );
	Module._free( tsipm_ptr );

	return { tsipm };

}
```
### tparse_c
```js
function tparse( string, lenout ) {

	// create output pointers
	const sp2000_ptr = Module._malloc( DOUBLE_SIZE );
	const errmsg_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'tparse_c',
		null,
		[ 'number', 'number', 'number' ],
		[ string, lenout, sp2000_ptr, errmsg_ptr ],
	);

	// read and free output pointers
	const sp2000 = Module.getValue( sp2000_ptr, 'double' );
	Module._free( sp2000_ptr );

	const errmsg = Module.Pointer_stringify( errmsg_ptr );
	Module._free( errmsg_ptr );

	return { sp2000, errmsg };

}
```
### trcoff_c
```js
function trcoff(  ) {


	// evaluate function
	Module.ccall(
		'trcoff_c',
		null,
		[  ],
		[  ],
	);

	return;

}
```
### tsetyr_c
```js
function tsetyr( year ) {


	// evaluate function
	Module.ccall(
		'tsetyr_c',
		null,
		[ 'number' ],
		[ year ],
	);

	return;

}
```
### twopi_c
```js
function twopi(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'twopi_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### twovec_c
```js
function twovec( axdef, indexa, plndef, indexp ) {


	// evaluate function
	Module.ccall(
		'twovec_c',
		null,
		[ 'number', 'number', 'number' ],
		[ axdef, indexa, plndef, indexp, mout ],
	);

	return { mout };

}
```
### tyear_c
```js
function tyear(  ) {


	// evaluate function
	const returnValue = Module.ccall(
		'tyear_c',
		'number',
		[  ],
		[  ],
	);

	return returnValue;

}
```
### ucase_c
```js
function ucase( in, lenout ) {

	// create output pointers
	const out_ptr = Module._malloc( STR_SIZE );

	// evaluate function
	Module.ccall(
		'ucase_c',
		null,
		[ 'string', 'number', 'number' ],
		[ in, lenout, out_ptr ],
	);

	// read and free output pointers
	const out = Module.Pointer_stringify( out_ptr );
	Module._free( out_ptr );

	return { out };

}
```
### ucrss_c
```js
function ucrss( v1, v2 ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'ucrss_c',
		null,
		[ 'number' ],
		[ v1, v2, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### uddc_c
```js
function uddc(  ) {


	// evaluate function
	Module.ccall(
		'uddc_c',
		null,
		[  ],
		[ d ],
	);

	return { d };

}
```
### uddf_c
```js
function uddf(  ) {


	// evaluate function
	Module.ccall(
		'uddf_c',
		null,
		[  ],
		[ d ],
	);

	return { d };

}
```
### unitim_c
```js
function unitim( epoch, insys, outsys ) {


	// evaluate function
	const returnValue = Module.ccall(
		'unitim_c',
		'number',
		[ 'number' ],
		[ epoch, insys, outsys ],
	);

	return returnValue;

}
```
### unload_c
```js
function unload( file ) {


	// evaluate function
	Module.ccall(
		'unload_c',
		null,
		[  ],
		[ file ],
	);

	return;

}
```
### unormg_c
```js
function unormg( v1, ndim ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );
	const vmag_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'unormg_c',
		null,
		[ 'number', 'number', 'number' ],
		[ v1, ndim, vout_ptr, vmag_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	const vmag = Module.getValue( vmag_ptr, 'double' );
	Module._free( vmag_ptr );

	return { vout, vmag };

}
```
### unorm_c
```js
function unorm( v1 ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );
	const vmag_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'unorm_c',
		null,
		[ 'number', 'number' ],
		[ v1, vout_ptr, vmag_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	const vmag = Module.getValue( vmag_ptr, 'double' );
	Module._free( vmag_ptr );

	return { vout, vmag };

}
```
### utc2et_c
```js
function utc2et( utcstr ) {

	// create output pointers
	const et_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'utc2et_c',
		null,
		[ 'number' ],
		[ utcstr, et_ptr ],
	);

	// read and free output pointers
	const et = Module.getValue( et_ptr, 'double' );
	Module._free( et_ptr );

	return { et };

}
```
### vaddg_c
```js
function vaddg( v1, v2, ndim ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vaddg_c',
		null,
		[ 'number', 'number' ],
		[ v1, v2, ndim, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vadd_c
```js
function vadd( v1, v2 ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vadd_c',
		null,
		[ 'number' ],
		[ v1, v2, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### valid_c
```js
function valid( size, n, set ) {


	// evaluate function
	Module.ccall(
		'valid_c',
		null,
		[ 'number', 'number' ],
		[ size, n, set ],
	);

	return;

}
```
### vcrss_c
```js
function vcrss( v1, v2 ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vcrss_c',
		null,
		[ 'number' ],
		[ v1, v2, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vdistg_c
```js
function vdistg( v1, v2, ndim ) {


	// evaluate function
	const returnValue = Module.ccall(
		'vdistg_c',
		'number',
		[ 'number' ],
		[ v1, v2, ndim ],
	);

	return returnValue;

}
```
### vdist_c
```js
function vdist( v1, v2 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'vdist_c',
		'number',
		[  ],
		[ v1, v2 ],
	);

	return returnValue;

}
```
### vdotg_c
```js
function vdotg( v1, v2 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'vdotg_c',
		'number',
		[ 'number' ],
		[ v1, v2, ndim ],
	);

	return { ndim, returnValue };

}
```
### vdot_c
```js
function vdot( v1, v2 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'vdot_c',
		'number',
		[  ],
		[ v1, v2 ],
	);

	return returnValue;

}
```
### vequg_c
```js
function vequg( vin, ndim ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vequg_c',
		null,
		[ 'number', 'number' ],
		[ vin, ndim, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vequ_c
```js
function vequ( vin ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vequ_c',
		null,
		[ 'number' ],
		[ vin, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vhatg_c
```js
function vhatg( v1, ndim ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vhatg_c',
		null,
		[ 'number', 'number' ],
		[ v1, ndim, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vhat_c
```js
function vhat( v1 ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vhat_c',
		null,
		[ 'number' ],
		[ v1, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vlcom3_c
```js
function vlcom3( a, v1, b, v2, c, v3 ) {

	// create output pointers
	const sum_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vlcom3_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ a, v1, b, v2, c, v3, sum_ptr ],
	);

	// read and free output pointers
	const sum = Module.getValue( sum_ptr, 'double' );
	Module._free( sum_ptr );

	return { sum };

}
```
### vlcom_c
```js
function vlcom( a, v1, b, v2 ) {

	// create output pointers
	const sum_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vlcom_c',
		null,
		[ 'number', 'number', 'number' ],
		[ a, v1, b, v2, sum_ptr ],
	);

	// read and free output pointers
	const sum = Module.getValue( sum_ptr, 'double' );
	Module._free( sum_ptr );

	return { sum };

}
```
### vminug_c
```js
function vminug( vin, ndim ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vminug_c',
		null,
		[ 'number', 'number' ],
		[ vin, ndim, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vminus_c
```js
function vminus( v1 ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vminus_c',
		null,
		[ 'number' ],
		[ v1, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vnormg_c
```js
function vnormg( v1 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'vnormg_c',
		'number',
		[ 'number' ],
		[ v1, ndim ],
	);

	return { ndim, returnValue };

}
```
### vnorm_c
```js
function vnorm( v1 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'vnorm_c',
		'number',
		[  ],
		[ v1 ],
	);

	return returnValue;

}
```
### vpack_c
```js
function vpack( x, y, z ) {

	// create output pointers
	const v_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vpack_c',
		null,
		[ 'number', 'number', 'number', 'number' ],
		[ x, y, z, v_ptr ],
	);

	// read and free output pointers
	const v = Module.getValue( v_ptr, 'double' );
	Module._free( v_ptr );

	return { v };

}
```
### vperp_c
```js
function vperp( a, b ) {

	// create output pointers
	const p_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vperp_c',
		null,
		[ 'number' ],
		[ a, b, p_ptr ],
	);

	// read and free output pointers
	const p = Module.getValue( p_ptr, 'double' );
	Module._free( p_ptr );

	return { p };

}
```
### vprjp_c
```js
function vprjp( vin, plane ) {


	// evaluate function
	Module.ccall(
		'vprjp_c',
		null,
		[ 'number' ],
		[ vin, plane, vout ],
	);

	return { vout };

}
```
### vproj_c
```js
function vproj( a, b ) {

	// create output pointers
	const p_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vproj_c',
		null,
		[ 'number' ],
		[ a, b, p_ptr ],
	);

	// read and free output pointers
	const p = Module.getValue( p_ptr, 'double' );
	Module._free( p_ptr );

	return { p };

}
```
### vrotv_c
```js
function vrotv( v, axis, theta ) {


	// evaluate function
	Module.ccall(
		'vrotv_c',
		null,
		[ 'number', 'number' ],
		[ v, axis, theta, r ],
	);

	return { r };

}
```
### vsclg_c
```js
function vsclg( s, v1, ndim ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vsclg_c',
		null,
		[ 'number', 'number', 'number' ],
		[ s, v1, ndim, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vscl_c
```js
function vscl( s, v1 ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vscl_c',
		null,
		[ 'number', 'number' ],
		[ s, v1, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vsepg_c
```js
function vsepg( v1, v2, ndim ) {


	// evaluate function
	const returnValue = Module.ccall(
		'vsepg_c',
		'number',
		[ 'number' ],
		[ v1, v2, ndim ],
	);

	return returnValue;

}
```
### vsep_c
```js
function vsep( v1, v2 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'vsep_c',
		'number',
		[  ],
		[ v1, v2 ],
	);

	return returnValue;

}
```
### vsubg_c
```js
function vsubg( v1, v2, ndim ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vsubg_c',
		null,
		[ 'number', 'number' ],
		[ v1, v2, ndim, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vsub_c
```js
function vsub( v1, v2 ) {

	// create output pointers
	const vout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vsub_c',
		null,
		[ 'number' ],
		[ v1, v2, vout_ptr ],
	);

	// read and free output pointers
	const vout = Module.getValue( vout_ptr, 'double' );
	Module._free( vout_ptr );

	return { vout };

}
```
### vtmvg_c
```js
function vtmvg( v1, matrix, v2, nrow, ncol ) {


	// evaluate function
	const returnValue = Module.ccall(
		'vtmvg_c',
		'number',
		[ 'number', 'number' ],
		[ v1, matrix, v2, nrow, ncol ],
	);

	return returnValue;

}
```
### vtmv_c
```js
function vtmv( v1, matrix, v2 ) {


	// evaluate function
	const returnValue = Module.ccall(
		'vtmv_c',
		'number',
		[  ],
		[ v1, matrix, v2 ],
	);

	return returnValue;

}
```
### vupack_c
```js
function vupack( v ) {

	// create output pointers
	const x_ptr = Module._malloc( DOUBLE_SIZE );
	const y_ptr = Module._malloc( DOUBLE_SIZE );
	const z_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'vupack_c',
		null,
		[ 'number', 'number', 'number' ],
		[ v, x_ptr, y_ptr, z_ptr ],
	);

	// read and free output pointers
	const x = Module.getValue( x_ptr, 'double' );
	Module._free( x_ptr );

	const y = Module.getValue( y_ptr, 'double' );
	Module._free( y_ptr );

	const z = Module.getValue( z_ptr, 'double' );
	Module._free( z_ptr );

	return { x, y, z };

}
```
### wncard_c
```js
function wncard( window ) {


	// evaluate function
	const returnValue = Module.ccall(
		'wncard_c',
		'number',
		[  ],
		[ window ],
	);

	return returnValue;

}
```
### wncond_c
```js
function wncond( left, right, window ) {


	// evaluate function
	Module.ccall(
		'wncond_c',
		null,
		[ 'number', 'number' ],
		[ left, right, window ],
	);

	return;

}
```
### wnexpd_c
```js
function wnexpd( left, right, window ) {


	// evaluate function
	Module.ccall(
		'wnexpd_c',
		null,
		[ 'number', 'number' ],
		[ left, right, window ],
	);

	return;

}
```
### wnextd_c
```js
function wnextd( side, window ) {


	// evaluate function
	Module.ccall(
		'wnextd_c',
		null,
		[ 'string' ],
		[ side, window ],
	);

	return;

}
```
### wnfetd_c
```js
function wnfetd( window, n ) {

	// create output pointers
	const left_ptr = Module._malloc( DOUBLE_SIZE );
	const right_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'wnfetd_c',
		null,
		[ 'number', 'number', 'number' ],
		[ window, n, left_ptr, right_ptr ],
	);

	// read and free output pointers
	const left = Module.getValue( left_ptr, 'double' );
	Module._free( left_ptr );

	const right = Module.getValue( right_ptr, 'double' );
	Module._free( right_ptr );

	return { left, right };

}
```
### wnfild_c
```js
function wnfild( small, window ) {


	// evaluate function
	Module.ccall(
		'wnfild_c',
		null,
		[ 'number' ],
		[ small, window ],
	);

	return;

}
```
### wnfltd_c
```js
function wnfltd( small, window ) {


	// evaluate function
	Module.ccall(
		'wnfltd_c',
		null,
		[ 'number' ],
		[ small, window ],
	);

	return;

}
```
### wninsd_c
```js
function wninsd( left, right, window ) {


	// evaluate function
	Module.ccall(
		'wninsd_c',
		null,
		[ 'number', 'number' ],
		[ left, right, window ],
	);

	return;

}
```
### wnsumd_c
```js
function wnsumd( window ) {

	// create output pointers
	const meas_ptr = Module._malloc( DOUBLE_SIZE );
	const avg_ptr = Module._malloc( DOUBLE_SIZE );
	const stddev_ptr = Module._malloc( DOUBLE_SIZE );
	const shortest_ptr = Module._malloc( INT_SIZE );
	const longest_ptr = Module._malloc( INT_SIZE );

	// evaluate function
	Module.ccall(
		'wnsumd_c',
		null,
		[ 'number', 'number', 'number', 'number', 'number' ],
		[ window, meas_ptr, avg_ptr, stddev_ptr, shortest_ptr, longest_ptr ],
	);

	// read and free output pointers
	const meas = Module.getValue( meas_ptr, 'double' );
	Module._free( meas_ptr );

	const avg = Module.getValue( avg_ptr, 'double' );
	Module._free( avg_ptr );

	const stddev = Module.getValue( stddev_ptr, 'double' );
	Module._free( stddev_ptr );

	const shortest = Module.getValue( shortest_ptr, 'i32' );
	Module._free( shortest_ptr );

	const longest = Module.getValue( longest_ptr, 'i32' );
	Module._free( longest_ptr );

	return { meas, avg, stddev, shortest, longest };

}
```
### wnvald_c
```js
function wnvald( size, n, window ) {


	// evaluate function
	Module.ccall(
		'wnvald_c',
		null,
		[ 'number', 'number' ],
		[ size, n, window ],
	);

	return;

}
```
### xf2rav_c
```js
function xf2rav( xform ) {


	// evaluate function
	Module.ccall(
		'xf2rav_c',
		null,
		[ 'number', 'number' ],
		[ xform, rot, av ],
	);

	return { rot, av };

}
```
### xpose6_c
```js
function xpose6( m1 ) {

	// create output pointers
	const mout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'xpose6_c',
		null,
		[ 'number' ],
		[ m1, mout_ptr ],
	);

	// read and free output pointers
	const mout = Module.getValue( mout_ptr, 'double' );
	Module._free( mout_ptr );

	return { mout };

}
```
### xpose_c
```js
function xpose( m1 ) {

	// create output pointers
	const mout_ptr = Module._malloc( DOUBLE_SIZE );

	// evaluate function
	Module.ccall(
		'xpose_c',
		null,
		[ 'number' ],
		[ m1, mout_ptr ],
	);

	// read and free output pointers
	const mout = Module.getValue( mout_ptr, 'double' );
	Module._free( mout_ptr );

	return { mout };

}
```
### zzerrorinit
```js
function zzerrorinit(  ) {


	// evaluate function
	Module.ccall(
		'zzerrorinit',
		null,
		[  ],
		[  ],
	);

	return;

}
```
### zzgetcml_c
```js
function zzgetcml( argc, init ) {


	// evaluate function
	Module.ccall(
		'zzgetcml_c',
		null,
		[ 'number' ],
		[ argc, r, init ],
	);

	return { r };

}
```
### zzgfsavh_c
```js
function zzgfsavh( status ) {


	// evaluate function
	Module.ccall(
		'zzgfsavh_c',
		null,
		[  ],
		[ status ],
	);

	return;

}
```
### zzsynccl_c
```js
function zzsynccl( xdir, cell ) {


	// evaluate function
	Module.ccall(
		'zzsynccl_c',
		null,
		[  ],
		[ xdir, cell ],
	);

	return;

}
```
