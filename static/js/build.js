/*
 * This file is part of Invenio.
 * Copyright (C) 2014 CERN.
 *
 * Invenio is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * Invenio is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Invenio; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 */

({
    preserveLicenseComments: false,
    optimize: 'uglify2',
    uglify2: {
        output: {
            beautify: false,
            comments: false
        },
        compress: {
            drop_console: true
        },
        warnings: true,
        mangle: false
    },
    paths: {
        jquery: 'empty:',
        'jquery-ui': 'vendors/jquery-ui/jquery-ui',
        'jqueryui-timepicker': 'vendors/jqueryui-timepicker-addon/src/jquery-ui-timepicker-addon',
        'jquery-form': 'vendors/jquery-form/jquery.form',
        hgn: 'vendors/requirejs-hogan-plugin/hgn',
        hogan: 'vendors/hogan/web/builds/3.0.2/hogan-3.0.2.amd',
        text: 'vendors/requirejs-hogan-plugin/text'
    },
    shim: {
        jquery: { exports: '$' },
        'jquery-ui': [ 'jquery' ],
        'jqueryui-timepicker': [ 'jquery-ui' ],
        'jquery-form': [ 'jquery' ]
    }
})
