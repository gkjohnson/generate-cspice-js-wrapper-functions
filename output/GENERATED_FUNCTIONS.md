### b1900_c
```js
function b1900(  ) {

	const returnValue = Module.ccall(
		'b1900_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### b1950_c
```js
function b1950(  ) {

	const returnValue = Module.ccall(
		'b1950_c',
		'number',
		/*  */
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

	Module.ccall(
		'bodc2s_c',
		null,
		/* SpiceInt code, SpiceInt lenout, SpiceChar name */
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

	Module.ccall(
		'boddef_c',
		null,
		/* ConstSpiceChar name, SpiceInt code */
		[ 'string', 'number' ],
		[ name, code ],
	);


}
```
### bodvar_c
```js
function bodvar( body, item ) {

	// create output pointers
	const dim_ptr = Module._malloc( INT_SIZE );
	const values_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'bodvar_c',
		null,
		/* SpiceInt body, ConstSpiceChar item, SpiceInt dim, SpiceDouble values */
		[ 'number', 'string', 'number', 'number' ],
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

	Module.ccall(
		'bodvcd_c',
		null,
		/* SpiceInt bodyid, ConstSpiceChar item, SpiceInt maxn, SpiceInt dim, SpiceDouble values */
		[ 'number', 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'bodvrd_c',
		null,
		/* ConstSpiceChar bodynm, ConstSpiceChar item, SpiceInt maxn, SpiceInt dim, SpiceDouble values */
		[ 'string', 'string', 'number', 'number', 'number' ],
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

	const returnValue = Module.ccall(
		'brcktd_c',
		'number',
		/* SpiceDouble number, SpiceDouble end1, SpiceDouble end2 */
		[ 'number', 'number', 'number' ],
		[ number, end1, end2 ],
	);

	return returnValue;

}
```
### brckti_c
```js
function brckti( number, end1, end2 ) {

	const returnValue = Module.ccall(
		'brckti_c',
		'number',
		/* SpiceInt number, SpiceInt end1, SpiceInt end2 */
		[ 'number', 'number', 'number' ],
		[ number, end1, end2 ],
	);

	return returnValue;

}
```
### chkin_c
```js
function chkin( module ) {

	Module.ccall(
		'chkin_c',
		null,
		/* ConstSpiceChar module */
		[ 'string' ],
		[ module ],
	);


}
```
### chkout_c
```js
function chkout( module ) {

	Module.ccall(
		'chkout_c',
		null,
		/* ConstSpiceChar module */
		[ 'string' ],
		[ module ],
	);


}
```
### ckcls_c
```js
function ckcls( handle ) {

	Module.ccall(
		'ckcls_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### cklpf_c
```js
function cklpf( filename ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	Module.ccall(
		'cklpf_c',
		null,
		/* ConstSpiceChar filename, SpiceInt handle */
		[ 'string', 'number' ],
		[ filename, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### ckopn_c
```js
function ckopn( fname, ifname, ncomch ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	Module.ccall(
		'ckopn_c',
		null,
		/* ConstSpiceChar fname, ConstSpiceChar ifname, SpiceInt ncomch, SpiceInt handle */
		[ 'string', 'string', 'number', 'number' ],
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

	Module.ccall(
		'ckupf_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### clight_c
```js
function clight(  ) {

	const returnValue = Module.ccall(
		'clight_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### clpool_c
```js
function clpool(  ) {

	Module.ccall(
		'clpool_c',
		null,
		/*  */
		[  ],
		[  ],
	);


}
```
### cmprss_c
```js
function cmprss( delim, n, input, lenout ) {

	// create output pointers
	const output_ptr = Module._malloc( STR_SIZE );

	Module.ccall(
		'cmprss_c',
		null,
		/* SpiceChar delim, SpiceInt n, ConstSpiceChar input, SpiceInt lenout, SpiceChar output */
		[ 'string', 'number', 'string', 'number', 'number' ],
		[ delim, n, input, lenout, output_ptr ],
	);

	// read and free output pointers
	const output = Module.Pointer_stringify( output_ptr );
	Module._free( output_ptr );

	return { output };

}
```
### convrt_c
```js
function convrt( x, in, out ) {

	// create output pointers
	const y_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'convrt_c',
		null,
		/* SpiceDouble x, ConstSpiceChar in, ConstSpiceChar out, SpiceDouble y */
		[ 'number', 'string', 'string', 'number' ],
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

	const returnValue = Module.ccall(
		'cposr_c',
		'number',
		/* ConstSpiceChar str, ConstSpiceChar chars, SpiceInt start */
		[ 'string', 'string', 'number' ],
		[ str, chars, start ],
	);

	return returnValue;

}
```
### cpos_c
```js
function cpos( str, chars, start ) {

	const returnValue = Module.ccall(
		'cpos_c',
		'number',
		/* ConstSpiceChar str, ConstSpiceChar chars, SpiceInt start */
		[ 'string', 'string', 'number' ],
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

	Module.ccall(
		'cyllat_c',
		null,
		/* SpiceDouble r, SpiceDouble lonc, SpiceDouble z, SpiceDouble radius, SpiceDouble lon, SpiceDouble lat */
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

	Module.ccall(
		'cylrec_c',
		null,
		/* SpiceDouble r, SpiceDouble lon, SpiceDouble z, SpiceDouble rectan */
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

	Module.ccall(
		'cylsph_c',
		null,
		/* SpiceDouble r, SpiceDouble lonc, SpiceDouble z, SpiceDouble radius, SpiceDouble colat, SpiceDouble lon */
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
### dafbbs_c
```js
function dafbbs( handle ) {

	Module.ccall(
		'dafbbs_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### dafbfs_c
```js
function dafbfs( handle ) {

	Module.ccall(
		'dafbfs_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### dafcls_c
```js
function dafcls( handle ) {

	Module.ccall(
		'dafcls_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### dafcs_c
```js
function dafcs( handle ) {

	Module.ccall(
		'dafcs_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### dafdc_c
```js
function dafdc( handle ) {

	Module.ccall(
		'dafdc_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### dafgda_c
```js
function dafgda( handle, begin, end ) {

	// create output pointers
	const data_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'dafgda_c',
		null,
		/* SpiceInt handle, SpiceInt begin, SpiceInt end, SpiceDouble data */
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

	Module.ccall(
		'dafgn_c',
		null,
		/* SpiceInt lenout, SpiceChar name */
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

	Module.ccall(
		'dafgs_c',
		null,
		/* SpiceDouble sum */
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

	Module.ccall(
		'dafopr_c',
		null,
		/* ConstSpiceChar fname, SpiceInt handle */
		[ 'string', 'number' ],
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

	Module.ccall(
		'dafopw_c',
		null,
		/* ConstSpiceChar fname, SpiceInt handle */
		[ 'string', 'number' ],
		[ fname, handle_ptr ],
	);

	// read and free output pointers
	const handle = Module.getValue( handle_ptr, 'i32' );
	Module._free( handle_ptr );

	return { handle };

}
```
### dafrda_c
```js
function dafrda( handle, begin, end ) {

	// create output pointers
	const data_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'dafrda_c',
		null,
		/* SpiceInt handle, SpiceInt begin, SpiceInt end, SpiceDouble data */
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

	Module.ccall(
		'dafrfr_c',
		null,
		/* SpiceInt handle, SpiceInt lenout, SpiceInt nd, SpiceInt ni, SpiceChar ifname, SpiceInt fward, SpiceInt bward, SpiceInt free */
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
### dascls_c
```js
function dascls( handle ) {

	Module.ccall(
		'dascls_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### dasopr_c
```js
function dasopr( fname ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	Module.ccall(
		'dasopr_c',
		null,
		/* ConstSpiceChar fname, SpiceInt handle */
		[ 'string', 'number' ],
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

	Module.ccall(
		'dcyldr_c',
		null,
		/* SpiceDouble x, SpiceDouble y, SpiceDouble z, SpiceDouble jacobi */
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

	Module.ccall(
		'deltet_c',
		null,
		/* SpiceDouble epoch, ConstSpiceChar eptype, SpiceDouble delta */
		[ 'number', 'string', 'number' ],
		[ epoch, eptype, delta_ptr ],
	);

	// read and free output pointers
	const delta = Module.getValue( delta_ptr, 'double' );
	Module._free( delta_ptr );

	return { delta };

}
```
### dgeodr_c
```js
function dgeodr( x, y, z, re, f ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'dgeodr_c',
		null,
		/* SpiceDouble x, SpiceDouble y, SpiceDouble z, SpiceDouble re, SpiceDouble f, SpiceDouble jacobi */
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ x, y, z, re, f, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { jacobi };

}
```
### dlatdr_c
```js
function dlatdr( x, y, z ) {

	// create output pointers
	const jacobi_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'dlatdr_c',
		null,
		/* SpiceDouble x, SpiceDouble y, SpiceDouble z, SpiceDouble jacobi */
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

	Module.ccall(
		'dp2hx_c',
		null,
		/* SpiceDouble number, SpiceInt lenout, SpiceChar string, SpiceInt length */
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

	Module.ccall(
		'dpgrdr_c',
		null,
		/* ConstSpiceChar body, SpiceDouble x, SpiceDouble y, SpiceDouble z, SpiceDouble re, SpiceDouble f, SpiceDouble jacobi */
		[ 'string', 'number', 'number', 'number', 'number', 'number', 'number' ],
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

	const returnValue = Module.ccall(
		'dpmax_',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### dpmax_c
```js
function dpmax(  ) {

	const returnValue = Module.ccall(
		'dpmax_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### dpmin_
```js
function dpmin_(  ) {

	const returnValue = Module.ccall(
		'dpmin_',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### dpmin_c
```js
function dpmin(  ) {

	const returnValue = Module.ccall(
		'dpmin_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### dpr_c
```js
function dpr(  ) {

	const returnValue = Module.ccall(
		'dpr_c',
		'number',
		/*  */
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

	Module.ccall(
		'drdcyl_c',
		null,
		/* SpiceDouble r, SpiceDouble lon, SpiceDouble z, SpiceDouble jacobi */
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

	Module.ccall(
		'drdgeo_c',
		null,
		/* SpiceDouble lon, SpiceDouble lat, SpiceDouble alt, SpiceDouble re, SpiceDouble f, SpiceDouble jacobi */
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

	Module.ccall(
		'drdlat_c',
		null,
		/* SpiceDouble r, SpiceDouble lon, SpiceDouble lat, SpiceDouble jacobi */
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

	Module.ccall(
		'drdpgr_c',
		null,
		/* ConstSpiceChar body, SpiceDouble lon, SpiceDouble lat, SpiceDouble alt, SpiceDouble re, SpiceDouble f, SpiceDouble jacobi */
		[ 'string', 'number', 'number', 'number', 'number', 'number', 'number' ],
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

	Module.ccall(
		'drdsph_c',
		null,
		/* SpiceDouble r, SpiceDouble colat, SpiceDouble lon, SpiceDouble jacobi */
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

	Module.ccall(
		'dsphdr_c',
		null,
		/* SpiceDouble x, SpiceDouble y, SpiceDouble z, SpiceDouble jacobi */
		[ 'number', 'number', 'number', 'number' ],
		[ x, y, z, jacobi_ptr ],
	);

	// read and free output pointers
	const jacobi = Module.getValue( jacobi_ptr, 'double' );
	Module._free( jacobi_ptr );

	return { jacobi };

}
```
### dvpool_c
```js
function dvpool( name ) {

	Module.ccall(
		'dvpool_c',
		null,
		/* ConstSpiceChar name */
		[ 'string' ],
		[ name ],
	);


}
```
### ekappr_c
```js
function ekappr( handle, segno ) {

	// create output pointers
	const recno_ptr = Module._malloc( INT_SIZE );

	Module.ccall(
		'ekappr_c',
		null,
		/* SpiceInt handle, SpiceInt segno, SpiceInt recno */
		[ 'number', 'number', 'number' ],
		[ handle, segno, recno_ptr ],
	);

	// read and free output pointers
	const recno = Module.getValue( recno_ptr, 'i32' );
	Module._free( recno_ptr );

	return { recno };

}
```
### ekccnt_c
```js
function ekccnt( table ) {

	// create output pointers
	const ccount_ptr = Module._malloc( INT_SIZE );

	Module.ccall(
		'ekccnt_c',
		null,
		/* ConstSpiceChar table, SpiceInt ccount */
		[ 'string', 'number' ],
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

	Module.ccall(
		'ekcls_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### ekdelr_c
```js
function ekdelr( handle, segno, recno ) {

	Module.ccall(
		'ekdelr_c',
		null,
		/* SpiceInt handle, SpiceInt segno, SpiceInt recno */
		[ 'number', 'number', 'number' ],
		[ handle, segno, recno ],
	);


}
```
### ekffld_c
```js
function ekffld( handle, segno, rcptrs ) {

	Module.ccall(
		'ekffld_c',
		null,
		/* SpiceInt handle, SpiceInt segno, SpiceInt rcptrs */
		[ 'number', 'number', 'number' ],
		[ handle, segno, rcptrs ],
	);


}
```
### ekinsr_c
```js
function ekinsr( handle, segno, recno ) {

	Module.ccall(
		'ekinsr_c',
		null,
		/* SpiceInt handle, SpiceInt segno, SpiceInt recno */
		[ 'number', 'number', 'number' ],
		[ handle, segno, recno ],
	);


}
```
### eklef_c
```js
function eklef( fname ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	Module.ccall(
		'eklef_c',
		null,
		/* ConstSpiceChar fname, SpiceInt handle */
		[ 'string', 'number' ],
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

	const returnValue = Module.ccall(
		'eknelt_c',
		'number',
		/* SpiceInt selidx, SpiceInt row */
		[ 'number', 'number' ],
		[ selidx, row ],
	);

	return returnValue;

}
```
### eknseg_c
```js
function eknseg( handle ) {

	const returnValue = Module.ccall(
		'eknseg_c',
		'number',
		/* SpiceInt handle */
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

	Module.ccall(
		'ekntab_c',
		null,
		/* SpiceInt n */
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

	Module.ccall(
		'ekopn_c',
		null,
		/* ConstSpiceChar fname, ConstSpiceChar ifname, SpiceInt ncomch, SpiceInt handle */
		[ 'string', 'string', 'number', 'number' ],
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

	Module.ccall(
		'ekopr_c',
		null,
		/* ConstSpiceChar fname, SpiceInt handle */
		[ 'string', 'number' ],
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

	Module.ccall(
		'ekops_c',
		null,
		/* SpiceInt handle */
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

	Module.ccall(
		'ekopw_c',
		null,
		/* ConstSpiceChar fname, SpiceInt handle */
		[ 'string', 'number' ],
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

	Module.ccall(
		'ektnam_c',
		null,
		/* SpiceInt n, SpiceInt lenout, SpiceChar table */
		[ 'number', 'number', 'number' ],
		[ n, lenout, table_ptr ],
	);

	// read and free output pointers
	const table = Module.Pointer_stringify( table_ptr );
	Module._free( table_ptr );

	return { table };

}
```
### ekuef_c
```js
function ekuef( handle ) {

	Module.ccall(
		'ekuef_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### erract_c
```js
function erract( op, lenout, action ) {

	Module.ccall(
		'erract_c',
		null,
		/* ConstSpiceChar op, SpiceInt lenout, SpiceChar action */
		[ 'string', 'number', 'string' ],
		[ op, lenout, action ],
	);


}
```
### errch_c
```js
function errch( marker, string ) {

	Module.ccall(
		'errch_c',
		null,
		/* ConstSpiceChar marker, ConstSpiceChar string */
		[ 'string', 'string' ],
		[ marker, string ],
	);


}
```
### errdev_c
```js
function errdev( op ) {

	// create output pointers
	const device_ptr = Module._malloc( STR_SIZE );

	Module.ccall(
		'errdev_c',
		null,
		/* ConstSpiceChar op, SpiceInt lenout, SpiceChar device */
		[ 'string', 'number', 'number' ],
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

	Module.ccall(
		'errdp_c',
		null,
		/* ConstSpiceChar marker, SpiceDouble number */
		[ 'string', 'number' ],
		[ marker, number ],
	);


}
```
### errint_c
```js
function errint( marker, number ) {

	Module.ccall(
		'errint_c',
		null,
		/* ConstSpiceChar marker, SpiceInt number */
		[ 'string', 'number' ],
		[ marker, number ],
	);


}
```
### errprt_c
```js
function errprt( op, list ) {

	Module.ccall(
		'errprt_c',
		null,
		/* ConstSpiceChar op, SpiceInt lenout, SpiceChar list */
		[ 'string', 'number', 'string' ],
		[ op, lenout, list ],
	);

	return { lenout };

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

	Module.ccall(
		'et2lst_c',
		null,
		/* SpiceDouble et, SpiceInt body, SpiceDouble lon, ConstSpiceChar type, SpiceInt timlen, SpiceInt ampmlen, SpiceInt hr, SpiceInt mn, SpiceInt sc, SpiceChar time, SpiceChar ampm */
		[ 'number', 'number', 'number', 'string', 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
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

	Module.ccall(
		'et2utc_c',
		null,
		/* SpiceDouble et, ConstSpiceChar format, SpiceInt prec, SpiceInt lenout, SpiceChar utcstr */
		[ 'number', 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'etcal_c',
		null,
		/* SpiceDouble et, SpiceInt lenout, SpiceChar string */
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

	Module.ccall(
		'eul2m_c',
		null,
		/* SpiceDouble angle3, SpiceDouble angle2, SpiceDouble angle1, SpiceInt axis3, SpiceInt axis2, SpiceInt axis1, SpiceDouble r */
		[ 'number', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ angle3, angle2, angle1, axis3, axis2, axis1, r ],
	);

	return { r };

}
```
### frame_c
```js
function frame( x ) {

	// create output pointers
	const y_ptr = Module._malloc( DOUBLE_SIZE );
	const z_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'frame_c',
		null,
		/* SpiceDouble x, SpiceDouble y, SpiceDouble z */
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

	Module.ccall(
		'frmnam_c',
		null,
		/* SpiceInt frcode, SpiceInt lenout, SpiceChar frname */
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

	Module.ccall(
		'ftncls_c',
		null,
		/* SpiceInt unit */
		[ 'number' ],
		[ unit ],
	);


}
```
### furnsh_c
```js
function furnsh( file ) {

	Module.ccall(
		'furnsh_c',
		null,
		/* ConstSpiceChar file */
		[ 'string' ],
		[ file ],
	);


}
```
### georec_c
```js
function georec( lon, lat, alt, re, f ) {

	// create output pointers
	const rectan_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'georec_c',
		null,
		/* SpiceDouble lon, SpiceDouble lat, SpiceDouble alt, SpiceDouble re, SpiceDouble f, SpiceDouble rectan */
		[ 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ lon, lat, alt, re, f, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { rectan };

}
```
### getfat_c
```js
function getfat( file, arclen, typlen ) {

	// create output pointers
	const arch_ptr = Module._malloc( STR_SIZE );
	const type_ptr = Module._malloc( STR_SIZE );

	Module.ccall(
		'getfat_c',
		null,
		/* ConstSpiceChar file, SpiceInt arclen, SpiceInt typlen, SpiceChar arch, SpiceChar type */
		[ 'string', 'number', 'number', 'number', 'number' ],
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

	Module.ccall(
		'getfov_c',
		null,
		/* SpiceInt instid, SpiceInt room, SpiceInt shapelen, SpiceInt framelen, SpiceChar shape, SpiceChar frame, SpiceDouble bsight, SpiceInt n, SpiceDouble bounds */
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

	Module.ccall(
		'gfclrh_c',
		null,
		/*  */
		[  ],
		[  ],
	);


}
```
### gfrepf_c
```js
function gfrepf(  ) {

	Module.ccall(
		'gfrepf_c',
		null,
		/*  */
		[  ],
		[  ],
	);


}
```
### gfrepu_c
```js
function gfrepu( ivbeg, ivend, time ) {

	Module.ccall(
		'gfrepu_c',
		null,
		/* SpiceDouble ivbeg, SpiceDouble ivend, SpiceDouble time */
		[ 'number', 'number', 'number' ],
		[ ivbeg, ivend, time ],
	);


}
```
### gfsstp_c
```js
function gfsstp( step ) {

	Module.ccall(
		'gfsstp_c',
		null,
		/* SpiceDouble step */
		[ 'number' ],
		[ step ],
	);


}
```
### gfstep_c
```js
function gfstep( time ) {

	// create output pointers
	const step_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'gfstep_c',
		null,
		/* SpiceDouble time, SpiceDouble step */
		[ 'number', 'number' ],
		[ time, step_ptr ],
	);

	// read and free output pointers
	const step = Module.getValue( step_ptr, 'double' );
	Module._free( step_ptr );

	return { step };

}
```
### halfpi_c
```js
function halfpi(  ) {

	const returnValue = Module.ccall(
		'halfpi_c',
		'number',
		/*  */
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

	Module.ccall(
		'ident_c',
		null,
		/* SpiceDouble matrix */
		[ 'number' ],
		[ matrix_ptr ],
	);

	// read and free output pointers
	const matrix = Module.getValue( matrix_ptr, 'double' );
	Module._free( matrix_ptr );

	return { matrix };

}
```
### intmax_
```js
function intmax_(  ) {

	const returnValue = Module.ccall(
		'intmax_',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### intmax_c
```js
function intmax(  ) {

	const returnValue = Module.ccall(
		'intmax_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### intmin_
```js
function intmin_(  ) {

	const returnValue = Module.ccall(
		'intmin_',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### intmin_c
```js
function intmin(  ) {

	const returnValue = Module.ccall(
		'intmin_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### j1900_c
```js
function j1900(  ) {

	const returnValue = Module.ccall(
		'j1900_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### j1950_c
```js
function j1950(  ) {

	const returnValue = Module.ccall(
		'j1950_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### j2000_c
```js
function j2000(  ) {

	const returnValue = Module.ccall(
		'j2000_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### j2100_c
```js
function j2100(  ) {

	const returnValue = Module.ccall(
		'j2100_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### jyear_c
```js
function jyear(  ) {

	const returnValue = Module.ccall(
		'jyear_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### kclear_c
```js
function kclear(  ) {

	Module.ccall(
		'kclear_c',
		null,
		/*  */
		[  ],
		[  ],
	);


}
```
### ktotal_c
```js
function ktotal( kind ) {

	// create output pointers
	const count_ptr = Module._malloc( INT_SIZE );

	Module.ccall(
		'ktotal_c',
		null,
		/* ConstSpiceChar kind, SpiceInt count */
		[ 'string', 'number' ],
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

	const returnValue = Module.ccall(
		'lastnb_c',
		'number',
		/* ConstSpiceChar string */
		[ 'string' ],
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

	Module.ccall(
		'latcyl_c',
		null,
		/* SpiceDouble radius, SpiceDouble lon, SpiceDouble lat, SpiceDouble r, SpiceDouble lonc, SpiceDouble z */
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

	Module.ccall(
		'latrec_c',
		null,
		/* SpiceDouble radius, SpiceDouble longitude, SpiceDouble latitude, SpiceDouble rectan */
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

	Module.ccall(
		'latsph_c',
		null,
		/* SpiceDouble radius, SpiceDouble lon, SpiceDouble lat, SpiceDouble rho, SpiceDouble colat, SpiceDouble lons */
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

	Module.ccall(
		'lcase_c',
		null,
		/* SpiceChar in, SpiceInt lenout, SpiceChar out */
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

	Module.ccall(
		'ldpool_c',
		null,
		/* ConstSpiceChar filename */
		[ 'string' ],
		[ filename ],
	);


}
```
### lspcn_c
```js
function lspcn( body, et, abcorr ) {

	const returnValue = Module.ccall(
		'lspcn_c',
		'number',
		/* ConstSpiceChar body, SpiceDouble et, ConstSpiceChar abcorr */
		[ 'string', 'number', 'string' ],
		[ body, et, abcorr ],
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

	Module.ccall(
		'ltime_c',
		null,
		/* SpiceDouble etobs, SpiceInt obs, ConstSpiceChar dir, SpiceInt targ, SpiceDouble ettarg, SpiceDouble elapsd */
		[ 'number', 'number', 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'lx4dec_c',
		null,
		/* ConstSpiceChar string, SpiceInt first, SpiceInt last, SpiceInt nchar */
		[ 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'lx4num_c',
		null,
		/* ConstSpiceChar string, SpiceInt first, SpiceInt last, SpiceInt nchar */
		[ 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'lx4sgn_c',
		null,
		/* ConstSpiceChar string, SpiceInt first, SpiceInt last, SpiceInt nchar */
		[ 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'lx4uns_c',
		null,
		/* ConstSpiceChar string, SpiceInt first, SpiceInt last, SpiceInt nchar */
		[ 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'lxqstr_c',
		null,
		/* ConstSpiceChar string, SpiceChar qchar, SpiceInt first, SpiceInt last, SpiceInt nchar */
		[ 'string', 'string', 'number', 'number', 'number' ],
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
### namfrm_c
```js
function namfrm( frname ) {

	// create output pointers
	const frcode_ptr = Module._malloc( INT_SIZE );

	Module.ccall(
		'namfrm_c',
		null,
		/* ConstSpiceChar frname, SpiceInt frcode */
		[ 'string', 'number' ],
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

	const returnValue = Module.ccall(
		'ncposr_c',
		'number',
		/* ConstSpiceChar str, ConstSpiceChar chars, SpiceInt start */
		[ 'string', 'string', 'number' ],
		[ str, chars, start ],
	);

	return returnValue;

}
```
### ncpos_c
```js
function ncpos( str, chars, start ) {

	const returnValue = Module.ccall(
		'ncpos_c',
		'number',
		/* ConstSpiceChar str, ConstSpiceChar chars, SpiceInt start */
		[ 'string', 'string', 'number' ],
		[ str, chars, start ],
	);

	return returnValue;

}
```
### pcklof_c
```js
function pcklof( filename ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	Module.ccall(
		'pcklof_c',
		null,
		/* ConstSpiceChar filename, SpiceInt handle */
		[ 'string', 'number' ],
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

	Module.ccall(
		'pckuof_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### pgrrec_c
```js
function pgrrec( body, lon, lat, alt, re, f ) {

	// create output pointers
	const rectan_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'pgrrec_c',
		null,
		/* ConstSpiceChar body, SpiceDouble lon, SpiceDouble lat, SpiceDouble alt, SpiceDouble re, SpiceDouble f, SpiceDouble rectan */
		[ 'string', 'number', 'number', 'number', 'number', 'number', 'number' ],
		[ body, lon, lat, alt, re, f, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { rectan };

}
```
### pi_c
```js
function pi(  ) {

	const returnValue = Module.ccall(
		'pi_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### posr_c
```js
function posr( str, substr, start ) {

	const returnValue = Module.ccall(
		'posr_c',
		'number',
		/* ConstSpiceChar str, ConstSpiceChar substr, SpiceInt start */
		[ 'string', 'string', 'number' ],
		[ str, substr, start ],
	);

	return returnValue;

}
```
### pos_c
```js
function pos( str, substr, start ) {

	const returnValue = Module.ccall(
		'pos_c',
		'number',
		/* ConstSpiceChar str, ConstSpiceChar substr, SpiceInt start */
		[ 'string', 'string', 'number' ],
		[ str, substr, start ],
	);

	return returnValue;

}
```
### prsdp_c
```js
function prsdp( string ) {

	// create output pointers
	const dpval_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'prsdp_c',
		null,
		/* ConstSpiceChar string, SpiceDouble dpval */
		[ 'string', 'number' ],
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

	Module.ccall(
		'prsint_c',
		null,
		/* ConstSpiceChar string, SpiceInt intval */
		[ 'string', 'number' ],
		[ string, intval_ptr ],
	);

	// read and free output pointers
	const intval = Module.getValue( intval_ptr, 'i32' );
	Module._free( intval_ptr );

	return { intval };

}
```
### pxform_c
```js
function pxform( from, to, et ) {

	// create output pointers
	const rotate_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'pxform_c',
		null,
		/* ConstSpiceChar from, ConstSpiceChar to, SpiceDouble et, SpiceDouble rotate */
		[ 'string', 'string', 'number', 'number' ],
		[ from, to, et, rotate_ptr ],
	);

	// read and free output pointers
	const rotate = Module.getValue( rotate_ptr, 'double' );
	Module._free( rotate_ptr );

	return { rotate };

}
```
### radrec_c
```js
function radrec( range, ra, dec ) {

	// create output pointers
	const rectan_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'radrec_c',
		null,
		/* SpiceDouble range, SpiceDouble ra, SpiceDouble dec, SpiceDouble rectan */
		[ 'number', 'number', 'number', 'number' ],
		[ range, ra, dec, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { rectan };

}
```
### recpgr_c
```js
function recpgr( body, rectan, re, f ) {

	// create output pointers
	const lon_ptr = Module._malloc( DOUBLE_SIZE );
	const lat_ptr = Module._malloc( DOUBLE_SIZE );
	const alt_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'recpgr_c',
		null,
		/* ConstSpiceChar body, SpiceDouble rectan, SpiceDouble re, SpiceDouble f, SpiceDouble lon, SpiceDouble lat, SpiceDouble alt */
		[ 'string', 'number', 'number', 'number', 'number', 'number', 'number' ],
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
### repmct_c
```js
function repmct( in, marker, value, repcase, lenout ) {

	// create output pointers
	const out_ptr = Module._malloc( STR_SIZE );

	Module.ccall(
		'repmct_c',
		null,
		/* ConstSpiceChar in, ConstSpiceChar marker, SpiceInt value, SpiceChar repcase, SpiceInt lenout, SpiceChar out */
		[ 'string', 'string', 'number', 'string', 'number', 'number' ],
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

	Module.ccall(
		'repmc_c',
		null,
		/* ConstSpiceChar in, ConstSpiceChar marker, ConstSpiceChar value, SpiceInt lenout, SpiceChar out */
		[ 'string', 'string', 'string', 'number', 'number' ],
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

	Module.ccall(
		'repmd_c',
		null,
		/* ConstSpiceChar in, ConstSpiceChar marker, SpiceDouble value, SpiceInt sigdig, SpiceInt lenout, SpiceChar out */
		[ 'string', 'string', 'number', 'number', 'number', 'number' ],
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

	Module.ccall(
		'repmf_c',
		null,
		/* ConstSpiceChar in, ConstSpiceChar marker, SpiceDouble value, SpiceInt sigdig, SpiceChar format, SpiceInt lenout, SpiceChar out */
		[ 'string', 'string', 'number', 'number', 'string', 'number', 'number' ],
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

	Module.ccall(
		'repmi_c',
		null,
		/* ConstSpiceChar in, ConstSpiceChar marker, SpiceInt value, SpiceInt lenout, SpiceChar out */
		[ 'string', 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'repmot_c',
		null,
		/* ConstSpiceChar in, ConstSpiceChar marker, SpiceInt value, SpiceChar repcase, SpiceInt lenout, SpiceChar out */
		[ 'string', 'string', 'number', 'string', 'number', 'number' ],
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

	Module.ccall(
		'reset_c',
		null,
		/*  */
		[  ],
		[  ],
	);


}
```
### rotate_c
```js
function rotate( angle, iaxis ) {

	// create output pointers
	const mout_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'rotate_c',
		null,
		/* SpiceDouble angle, SpiceInt iaxis, SpiceDouble mout */
		[ 'number', 'number', 'number' ],
		[ angle, iaxis, mout_ptr ],
	);

	// read and free output pointers
	const mout = Module.getValue( mout_ptr, 'double' );
	Module._free( mout_ptr );

	return { mout };

}
```
### rpd_c
```js
function rpd(  ) {

	const returnValue = Module.ccall(
		'rpd_c',
		'number',
		/*  */
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

	Module.ccall(
		'rquad_c',
		null,
		/* SpiceDouble a, SpiceDouble b, SpiceDouble c, SpiceDouble root1, SpiceDouble root2 */
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
### scdecd_c
```js
function scdecd( sc, sclkdp, lenout ) {

	// create output pointers
	const sclkch_ptr = Module._malloc( STR_SIZE );

	Module.ccall(
		'scdecd_c',
		null,
		/* SpiceInt sc, SpiceDouble sclkdp, SpiceInt lenout, SpiceChar sclkch */
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

	Module.ccall(
		'sce2c_c',
		null,
		/* SpiceInt sc, SpiceDouble et, SpiceDouble sclkdp */
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

	Module.ccall(
		'sce2s_c',
		null,
		/* SpiceInt sc, SpiceDouble et, SpiceInt lenout, SpiceChar sclkch */
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

	Module.ccall(
		'sce2t_c',
		null,
		/* SpiceInt sc, SpiceDouble et, SpiceDouble sclkdp */
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

	Module.ccall(
		'scencd_c',
		null,
		/* SpiceInt sc, ConstSpiceChar sclkch, SpiceDouble sclkdp */
		[ 'number', 'string', 'number' ],
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

	Module.ccall(
		'scfmt_c',
		null,
		/* SpiceInt sc, SpiceDouble ticks, SpiceInt lenout, SpiceChar clkstr */
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

	Module.ccall(
		'scpart_c',
		null,
		/* SpiceInt sc, SpiceInt nparts, SpiceDouble pstart, SpiceDouble pstop */
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

	Module.ccall(
		'scs2e_c',
		null,
		/* SpiceInt sc, ConstSpiceChar sclkch, SpiceDouble et */
		[ 'number', 'string', 'number' ],
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

	Module.ccall(
		'sct2e_c',
		null,
		/* SpiceInt sc, SpiceDouble sclkdp, SpiceDouble et */
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

	Module.ccall(
		'sctiks_c',
		null,
		/* SpiceInt sc, ConstSpiceChar clkstr, SpiceDouble ticks */
		[ 'number', 'string', 'number' ],
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

	Module.ccall(
		'setmsg_c',
		null,
		/* ConstSpiceChar message */
		[ 'string' ],
		[ message ],
	);


}
```
### shelld_c
```js
function shelld( ndim, array ) {

	Module.ccall(
		'shelld_c',
		null,
		/* SpiceInt ndim, SpiceDouble array */
		[ 'number', 'number' ],
		[ ndim, array ],
	);


}
```
### shelli_c
```js
function shelli( ndim, array ) {

	Module.ccall(
		'shelli_c',
		null,
		/* SpiceInt ndim, SpiceInt array */
		[ 'number', 'number' ],
		[ ndim, array ],
	);


}
```
### spd_c
```js
function spd(  ) {

	const returnValue = Module.ccall(
		'spd_c',
		'number',
		/*  */
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

	Module.ccall(
		'sphcyl_c',
		null,
		/* SpiceDouble radius, SpiceDouble colat, SpiceDouble slon, SpiceDouble r, SpiceDouble lon, SpiceDouble z */
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

	Module.ccall(
		'sphlat_c',
		null,
		/* SpiceDouble r, SpiceDouble colat, SpiceDouble lons, SpiceDouble radius, SpiceDouble lon, SpiceDouble lat */
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

	Module.ccall(
		'sphrec_c',
		null,
		/* SpiceDouble r, SpiceDouble colat, SpiceDouble lon, SpiceDouble rectan */
		[ 'number', 'number', 'number', 'number' ],
		[ r, colat, lon, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { rectan };

}
```
### spk14b_c
```js
function spk14b( handle, segid, body, center, frame, first, last, chbdeg ) {

	Module.ccall(
		'spk14b_c',
		null,
		/* SpiceInt handle, ConstSpiceChar segid, SpiceInt body, SpiceInt center, ConstSpiceChar frame, SpiceDouble first, SpiceDouble last, SpiceInt chbdeg */
		[ 'number', 'string', 'number', 'number', 'string', 'number', 'number', 'number' ],
		[ handle, segid, body, center, frame, first, last, chbdeg ],
	);


}
```
### spk14e_c
```js
function spk14e( handle ) {

	Module.ccall(
		'spk14e_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### spkacs_c
```js
function spkacs( targ, et, ref, abcorr, obs ) {

	// create output pointers
	const starg_ptr = Module._malloc( DOUBLE_SIZE );
	const lt_ptr = Module._malloc( DOUBLE_SIZE );
	const dlt_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'spkacs_c',
		null,
		/* SpiceInt targ, SpiceDouble et, ConstSpiceChar ref, ConstSpiceChar abcorr, SpiceInt obs, SpiceDouble starg, SpiceDouble lt, SpiceDouble dlt */
		[ 'number', 'number', 'string', 'string', 'number', 'number', 'number', 'number' ],
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
### spkcls_c
```js
function spkcls( handle ) {

	Module.ccall(
		'spkcls_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### spkezp_c
```js
function spkezp( targ, et, ref, abcorr, obs ) {

	// create output pointers
	const ptarg_ptr = Module._malloc( DOUBLE_SIZE );
	const lt_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'spkezp_c',
		null,
		/* SpiceInt targ, SpiceDouble et, ConstSpiceChar ref, ConstSpiceChar abcorr, SpiceInt obs, SpiceDouble ptarg, SpiceDouble lt */
		[ 'number', 'number', 'string', 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'spkezr_c',
		null,
		/* ConstSpiceChar targ, SpiceDouble et, ConstSpiceChar ref, ConstSpiceChar abcorr, ConstSpiceChar obs, SpiceDouble starg, SpiceDouble lt */
		[ 'string', 'number', 'string', 'string', 'string', 'number', 'number' ],
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

	Module.ccall(
		'spkez_c',
		null,
		/* SpiceInt targ, SpiceDouble et, ConstSpiceChar ref, ConstSpiceChar abcorr, SpiceInt obs, SpiceDouble starg, SpiceDouble lt */
		[ 'number', 'number', 'string', 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'spkgeo_c',
		null,
		/* SpiceInt targ, SpiceDouble et, ConstSpiceChar ref, SpiceInt obs, SpiceDouble state, SpiceDouble lt */
		[ 'number', 'number', 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'spkgps_c',
		null,
		/* SpiceInt targ, SpiceDouble et, ConstSpiceChar ref, SpiceInt obs, SpiceDouble pos, SpiceDouble lt */
		[ 'number', 'number', 'string', 'number', 'number', 'number' ],
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
### spkopa_c
```js
function spkopa( file ) {

	// create output pointers
	const handle_ptr = Module._malloc( INT_SIZE );

	Module.ccall(
		'spkopa_c',
		null,
		/* ConstSpiceChar file, SpiceInt handle */
		[ 'string', 'number' ],
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

	Module.ccall(
		'spkopn_c',
		null,
		/* ConstSpiceChar name, ConstSpiceChar ifname, SpiceInt ncomch, SpiceInt handle */
		[ 'string', 'string', 'number', 'number' ],
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

	Module.ccall(
		'spkpds_c',
		null,
		/* SpiceInt body, SpiceInt center, ConstSpiceChar frame, SpiceInt type, SpiceDouble first, SpiceDouble last, SpiceDouble descr */
		[ 'number', 'number', 'string', 'number', 'number', 'number', 'number' ],
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

	Module.ccall(
		'spkpos_c',
		null,
		/* ConstSpiceChar targ, SpiceDouble et, ConstSpiceChar ref, ConstSpiceChar abcorr, ConstSpiceChar obs, SpiceDouble ptarg, SpiceDouble lt */
		[ 'string', 'number', 'string', 'string', 'string', 'number', 'number' ],
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

	Module.ccall(
		'spkssb_c',
		null,
		/* SpiceInt targ, SpiceDouble et, ConstSpiceChar ref, SpiceDouble starg */
		[ 'number', 'number', 'string', 'number' ],
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

	Module.ccall(
		'spksub_c',
		null,
		/* SpiceInt handle, SpiceDouble descr, ConstSpiceChar ident, SpiceDouble begin, SpiceDouble end, SpiceInt newh */
		[ 'number', 'number', 'string', 'number', 'number', 'number' ],
		[ handle, descr, ident, begin, end, newh ],
	);


}
```
### spkuef_c
```js
function spkuef( handle ) {

	Module.ccall(
		'spkuef_c',
		null,
		/* SpiceInt handle */
		[ 'number' ],
		[ handle ],
	);


}
```
### srfrec_c
```js
function srfrec( body, latitude ) {

	// create output pointers
	const rectan_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'srfrec_c',
		null,
		/* SpiceInt body, SpiceDouble longitude, SpiceDouble latitude, SpiceDouble rectan */
		[ 'number', 'number', 'number', 'number' ],
		[ body, longitude, latitude, rectan_ptr ],
	);

	// read and free output pointers
	const rectan = Module.getValue( rectan_ptr, 'double' );
	Module._free( rectan_ptr );

	return { longitude, rectan };

}
```
### str2et_c
```js
function str2et( str ) {

	// create output pointers
	const et_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'str2et_c',
		null,
		/* ConstSpiceChar str, SpiceDouble et */
		[ 'string', 'number' ],
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

	Module.ccall(
		'subpnt_c',
		null,
		/* ConstSpiceChar method, ConstSpiceChar target, SpiceDouble et, ConstSpiceChar fixref, ConstSpiceChar abcorr, ConstSpiceChar obsrvr, SpiceDouble spoint, SpiceDouble trgepc, SpiceDouble srfvec */
		[ 'string', 'string', 'number', 'string', 'string', 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'subpt_c',
		null,
		/* ConstSpiceChar method, ConstSpiceChar target, SpiceDouble et, ConstSpiceChar abcorr, ConstSpiceChar obsrvr, SpiceDouble spoint, SpiceDouble alt */
		[ 'string', 'string', 'number', 'string', 'string', 'number', 'number' ],
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

	Module.ccall(
		'subslr_c',
		null,
		/* ConstSpiceChar method, ConstSpiceChar target, SpiceDouble et, ConstSpiceChar fixref, ConstSpiceChar abcorr, ConstSpiceChar obsrvr, SpiceDouble spoint, SpiceDouble trgepc, SpiceDouble srfvec */
		[ 'string', 'string', 'number', 'string', 'string', 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'subsol_c',
		null,
		/* ConstSpiceChar method, ConstSpiceChar target, SpiceDouble et, ConstSpiceChar abcorr, ConstSpiceChar obsrvr, SpiceDouble spoint */
		[ 'string', 'string', 'number', 'string', 'string', 'number' ],
		[ method, target, et, abcorr, obsrvr, spoint_ptr ],
	);

	// read and free output pointers
	const spoint = Module.getValue( spoint_ptr, 'double' );
	Module._free( spoint_ptr );

	return { spoint };

}
```
### sxform_c
```js
function sxform( from, to, et ) {

	// create output pointers
	const xform_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'sxform_c',
		null,
		/* ConstSpiceChar from, ConstSpiceChar to, SpiceDouble et, SpiceDouble xform */
		[ 'string', 'string', 'number', 'number' ],
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

	Module.ccall(
		'timdef_c',
		null,
		/* ConstSpiceChar action, ConstSpiceChar item, SpiceInt lenout, SpiceChar value */
		[ 'string', 'string', 'number', 'string' ],
		[ action, item, lenout, value ],
	);


}
```
### timout_c
```js
function timout( et, pictur, lenout ) {

	// create output pointers
	const output_ptr = Module._malloc( STR_SIZE );

	Module.ccall(
		'timout_c',
		null,
		/* SpiceDouble et, ConstSpiceChar pictur, SpiceInt lenout, SpiceChar output */
		[ 'number', 'string', 'number', 'number' ],
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

	Module.ccall(
		'tipbod_c',
		null,
		/* ConstSpiceChar ref, SpiceInt body, SpiceDouble et, SpiceDouble tipm */
		[ 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'tisbod_c',
		null,
		/* ConstSpiceChar ref, SpiceInt body, SpiceDouble et, SpiceDouble tsipm */
		[ 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'tparse_c',
		null,
		/* ConstSpiceChar string, SpiceInt lenout, SpiceDouble sp2000, SpiceChar errmsg */
		[ 'string', 'number', 'number', 'number' ],
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

	Module.ccall(
		'trcoff_c',
		null,
		/*  */
		[  ],
		[  ],
	);


}
```
### tsetyr_c
```js
function tsetyr( year ) {

	Module.ccall(
		'tsetyr_c',
		null,
		/* SpiceInt year */
		[ 'number' ],
		[ year ],
	);


}
```
### twopi_c
```js
function twopi(  ) {

	const returnValue = Module.ccall(
		'twopi_c',
		'number',
		/*  */
		[  ],
		[  ],
	);

	return returnValue;

}
```
### tyear_c
```js
function tyear(  ) {

	const returnValue = Module.ccall(
		'tyear_c',
		'number',
		/*  */
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

	Module.ccall(
		'ucase_c',
		null,
		/* SpiceChar in, SpiceInt lenout, SpiceChar out */
		[ 'string', 'number', 'number' ],
		[ in, lenout, out_ptr ],
	);

	// read and free output pointers
	const out = Module.Pointer_stringify( out_ptr );
	Module._free( out_ptr );

	return { out };

}
```
### unitim_c
```js
function unitim( epoch, insys, outsys ) {

	const returnValue = Module.ccall(
		'unitim_c',
		'number',
		/* SpiceDouble epoch, ConstSpiceChar insys, ConstSpiceChar outsys */
		[ 'number', 'string', 'string' ],
		[ epoch, insys, outsys ],
	);

	return returnValue;

}
```
### unload_c
```js
function unload( file ) {

	Module.ccall(
		'unload_c',
		null,
		/* ConstSpiceChar file */
		[ 'string' ],
		[ file ],
	);


}
```
### utc2et_c
```js
function utc2et( utcstr ) {

	// create output pointers
	const et_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'utc2et_c',
		null,
		/* ConstSpiceChar utcstr, SpiceDouble et */
		[ 'string', 'number' ],
		[ utcstr, et_ptr ],
	);

	// read and free output pointers
	const et = Module.getValue( et_ptr, 'double' );
	Module._free( et_ptr );

	return { et };

}
```
### vpack_c
```js
function vpack( x, y, z ) {

	// create output pointers
	const v_ptr = Module._malloc( DOUBLE_SIZE );

	Module.ccall(
		'vpack_c',
		null,
		/* SpiceDouble x, SpiceDouble y, SpiceDouble z, SpiceDouble v */
		[ 'number', 'number', 'number', 'number' ],
		[ x, y, z, v_ptr ],
	);

	// read and free output pointers
	const v = Module.getValue( v_ptr, 'double' );
	Module._free( v_ptr );

	return { v };

}
```
### zzerrorinit
```js
function zzerrorinit(  ) {

	Module.ccall(
		'zzerrorinit',
		null,
		/*  */
		[  ],
		[  ],
	);


}
```
