function FeatureToggle ({isEnabled, featureName}) {
    if (isEnabled) {
        return <li>{featureName}</li>;
    }
    return <li> Feature {featureName} is disabled</li>;
    
};

export default function FeatureList () {
    return (
        <ul>
            <FeatureToggle
            isEnabled={true}
            featureName="hamburger menu"
            />
            <FeatureToggle
            isEnabled={false}
            featureName="full nav bar"
            />
        </ul>
    );
}