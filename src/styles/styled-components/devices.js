
//**************** Desktop First Approach ****************//
const size = {
	desktop: '1440px',
	tabletLandscape: '960px',
	tabletPortrait: '959px',
	mobileLandscape: '767px',
	mobilePortrait: '479px',
	extraSmallMobile: '320px'
};

export const device = {
	extraSmallMobile: `(max-width: ${size.extraSmallMobile})`,
	mobilePortrait: `(max-width: ${size.mobilePortrait})`,
	mobileLandscape: `(max-width: ${size.mobileLandscape})`,
	tabletPortrait: `(max-width: ${size.tabletPortrait})`,
	tabletLandscape: `(min-width: ${size.tabletLandscape})`
};
