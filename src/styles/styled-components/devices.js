const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
   tabletLandscape: '960px',
   tabletPortrait: '959px',
   mobileLandscape: '768px',
   mobilePortrait: '479'

};

export const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	// mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
   tabletL: `(min-width:${size.tabletLandscape})`,
   tabletP: `(max-width:${size.tabletPortrait})`,
   mobileL: `(max-width:${size.mobileLandscape})`,
   mobileP: `(max-width:${size.mobilePortrait})`
};
