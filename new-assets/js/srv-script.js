function pushDataLayer(response_items,other_details) 
{  
    var data = response_items;
    // GA4 TRANSACTIONAL VALUE 
        dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
        if(typeof data === "object" && Object.keys(data).length > 0)
        {
            var pushData = { 
                event: other_details.cart_event,
                ecommerce: {
                    transaction_id: "",
                    affiliation: "Krishnayan Gaushala",
                    value: other_details.total_price,
                    tax: 0,
                    shipping: 0,
                    currency: other_details.currency,
                    coupon: "",
                    items: Object.values(data).map(element => ({
                        item_id: element.id || "",
                        item_name: element.name || "",
                        affiliation: "Krishnayan Gaushala",
                        coupon: "",
                        currency: other_details.currency,
                        discount: 0,
                        index: 0,
                        item_brand: "Krishnayan Gaushala",
                        event_type: "",
                        item_category: element.catName || "",
                        item_category2: other_details.tithi_name || "",
                        item_category3: other_details.festival_name || "",
                        item_category4: other_details.current_page || "",
                        price: element.price || 0,
                        quantity: element.qty || 1,
                        email: "", 
                        mobile: "",	
                        country: ""	
                    }))
                }
            };
        } else {
            var pushData = {
                event: other_details.cart_event,
                ecommerce: {
                    transaction_id: "",
                    affiliation: "Krishnayan Gaushala",
                    value: other_details.total_price || 0,
                    tax: 0,
                    shipping: 0,
                    currency: other_details.currency || "INR",
                    coupon: "",
                    items: [{
                        item_id: "12345",
                        item_name: "Direct_Donation",
                        affiliation: "Krishnayan Gaushala",
                        coupon: "",
                        currency: other_details.currency,
                        discount: 0,
                        index: 0,
                        item_brand: "Krishnayan Gaushala",
                        event_type: other_details.event_type,
                        item_category: "Direct_Donation",
                        item_category2: other_details.tithi_name,
                        item_category3: other_details.festival_name,
                        item_category4: "Direct_Donation",
                        price: other_details.total_price || 0,
                        quantity: 1,
                        email: "", 
                        mobile : "",	
                        country: ""	
                    }]
                }
            }
        }
    // GA4 TRANSACTIONAL VALUE 9-6-2022
    // console.log(JSON.stringify(pushData, null, 2));
    dataLayer.push(pushData);
}


// GET Broweser Details JS Code for tracking purpose only not related to donation
function getBrowserDetails(url,csrf_key,csrf_val) {
    var browserDetails = {};

    // Get user agent
    browserDetails.userAgent = navigator.userAgent;

    // Get browser name and version
    var userAgent = navigator.userAgent.toLowerCase();
    var navigatorvendor = (navigator.vendor || "").toLowerCase(); // Fix: Handle undefined vendor
    var browser = "Unknown", version = "Unknown";

    if (/chrome/.test(userAgent) && /google inc/.test(navigatorvendor)) {
        browser = "Chrome";
        version = userAgent.match(/chrome\/([\d.]+)/)[1];
    } else if (/safari/.test(userAgent) && /apple computer/.test(navigatorvendor)) {
        browser = "Safari";
        version = userAgent.match(/version\/([\d.]+)/)?.[1] || "Unknown"; // Fix: Optional chaining
    } else if (/firefox/.test(userAgent)) {
        browser = "Firefox";
        version = userAgent.match(/firefox\/([\d.]+)/)[1];
    } else if (/msie/.test(userAgent) || /trident/.test(userAgent)) {
        browser = "Internet Explorer";
        version = userAgent.match(/(msie\s|rv:)([\d.]+)/)[2];
    } else if (/edg/.test(userAgent)) {
        browser = "Edge";
        version = userAgent.match(/edg\/([\d.]+)/)[1];
    }
    browserDetails.browserName = browser;
    browserDetails.browserVersion = version;

    // Get platform and platform version
    var platform_name = "Unknown OS", platform_version = "";
    if (navigator.platform.indexOf("Win") != -1) {
        platform_name = "Windows";
        var windowsVersion = userAgent.match(/windows nt ([\d.]+)/);
        platform_version = windowsVersion ? windowsVersion[1] : "";
    } else if (navigator.platform.indexOf("Mac") != -1) {
        platform_name = "Macintosh";
        var macVersion = userAgent.match(/mac os x ([\d._]+)/);
        platform_version = macVersion ? macVersion[1].replace(/_/g, ".") : "";
    } else if (/android/.test(userAgent)) {
        platform_name = "Android";
        var androidVersion = userAgent.match(/android ([\d.]+)/);
        platform_version = androidVersion ? androidVersion[1] : "";
    } else if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) { // Fix: Improved iOS detection
        platform_name = "iOS";
        var iosVersion = userAgent.match(/os ([\d_]+) like mac os x/);
        platform_version = iosVersion ? iosVersion[1].replace(/_/g, ".") : "";
    }

    browserDetails.platform = platform_name;
    browserDetails.platformVersion = platform_version;
    browserDetails.language = navigator.language;
    browserDetails.cookiesEnabled = navigator.cookieEnabled;
    browserDetails.screenResolution = screen.width + "x" + screen.height;
    var browserdata = browserDetails;
    // Fetch IP address safely
    $.getJSON("https://api.ipify.org/?format=json", function (e) {
        browserdata.ipAddress = e.ip;
        
        setTimeout(function ()
        {
            //console.log(JSON.stringify(browserdata));
            if (browserdata != "") {
            var dataBrowser =
                {
                    platform: browserdata.platform,
                    browserName: browserdata.browserName,
                    browserVersion: browserdata.browserVersion,
                    screenResolution: browserdata.screenResolution,
                    ipaddress: browserdata.ipAddress,
                    application_name: 'Krishnayan Website',
                    platform_version: browserdata.platformVersion,
                    mac_no: "",
                    model: "",
                }
                $.ajax({
                    url: url, // Update with your actual URL
                    type: 'POST',
                    data: {
                        [csrf_key]:csrf_val, 
                        browserDetails: JSON.stringify(dataBrowser) 
                    },
                    success: function(response) {
                        //console.log('Browser details sent successfully:', response);
                    },
                    error: function(xhr, status, error) {
                        //console.log('Error sending browser details:', error);
                    }
                });
            }
        //$("#hdnBrowserDetails").val(JSON.stringify(dataBrowser));
        }, 500);
    });
}
// GET Broweser Details JS Code for tracking purpose only not related to donation 
