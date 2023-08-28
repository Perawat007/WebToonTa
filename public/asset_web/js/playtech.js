iapiConf = {
    "casinoname": "winforfun88",
    "loginServer": "login.ld176988.com",
    "imsLoginDomain": "ld176988.com",
    "clientSkin": "winforfun88",
    "clientType": "casino",
    "clientPlatform": "flash",
    "systemId": "423",
    "serviceType": "GamePlay",
    "loginDomainRetryCount": "2",
    "loginDomainRequestTimeout": "30",
    "loginDomainRetryInterval": "1",
    "onlypostrequestsforlogout": "1"
};

function replaceImsDomain() {
    if (!iapiConf || !iapiConf['imsLoginDomain']) {
        return;
    }
    for (var key in iapiConf) {
        var val = iapiConf[key];
        if (typeof (val) === "string" && val.indexOf("http") >= 0 && val.indexOf("$imsLoginDomain") > 0) {
            val = val.replace("$imsLoginDomain", iapiConf['imsLoginDomain']);
            iapiConf[key] = val;
        }
    }
}
replaceImsDomain();
var iapiVersion = "_version_";
var iapiERR_OK = 0;
var iapiERR_NOK = -1;
var iapiERR_BLOCKED = -2;
var iapiCALLOUT_LOGIN = 'Login';
var iapiCALLOUT_EMAILLOGIN = 'EmailLogin';
var iapiCALLOUT_TEMPORARYTOKEN = 'GetTemporaryAuthenticationToken';
var iapiCALLOUT_LOGINANDGETTEMPTOKEN = 'LoginAndGetTempToken';
var iapiCALLOUT_EMAILLOGINANDGETTEMPTOKEN = 'EmailLoginAndGetTempToken';
var iapiCALLOUT_SESSIONVALIDATION = 'ValidateLoginSession';
var iapiCALLOUT_MESSAGES = 'GetWaitingMessages';
var iapiCALLOUT_SUBMITDIALOG = 'SubmitDialog';
var iapiCALLOUT_FORGOTPASSWORD = 'ForgotPassword';
var iapiCALLOUT_STARTFORGOTEMAIL = 'StartForgotEamil';
var iapiCALLOUT_COMPLETEFORGOTEMAIL = 'CompleteForgotEmail';
var iapiCALLOUT_ONLINEFORGOTPASSWORD = 'OnlineForgotPassword';
var iapiCALLOUT_GETLOGGEDINPLAYER = 'GetLoggedInPlayer';
var iapiCALLOUT_KEEPALIVE = 'KeepAlive';
var iapiCALLOUT_LOGOUT = 'Logout';
var iapiCALLOUT_GETURLS = 'GetUrls';
var iapiEVENT_TIMER = 10;
var STOCK_AUTH_PHONE_NUMBER = "pinAuth888";
var iapiUsername = null;
var iapiPassword = null;
var iapiEmail = null;
var iapiAdminUsername = null;
var iapiRealMode = 1;
var iapiAuthenticationType = null;
var iapiDivname = 'iapidiv';
var iapiIframename = 'iapiiframe';
var iapiRealCookieIframe = 'iapirealcookieiframe';
var iapiFunCookieIframe = 'iapifuncookieiframe';
var iapiGetLoggedInPlayerRequestIdReal = 1234567890;
var iapiGetLoggedInPlayerRequestIdFun = 9876543210;
var iapiClientParams = [];
var iapiWaitingMessagesId = 0;
var iapiRememberMeLogin = null;
var iapiCalloutFunctions = [];
var iapiRequestIds = [];
var iapiLoginSuccess = false;
var iapiSessionValid = 0;
var iapiNextLogin = null;
var iapiLoginModeDownload = false;
var iapiLoginModeFlash = false;
var iapiFlashLoginClientType = null;
var iapiFlashLoginGameType = null;
var iapiMessagesSupported = false;
var iapiMessagesAnswered = false;
var iapiLoginTypes = Object.freeze({
    SESSION_TOKEN: 'sessionToken',
    CRYPTO_TOKEN: 'cryptoToken',
    EXTERNAL_TOKEN: 'externalToken',
    ADMIN_USERNAME: 'adminUsername',
    NICKNAME: 'nickname',
    EMAIL: 'email',
    TOKEN_CODE: 'tokenCode',
    PRINTED_TOKEN_CODE: 'printedTokenCode',
    USERNAME_AND_PIN: 'usernameAndPin',
    TOKEN_CODE_AND_PASS: 'tokenCodeAndPass'
});

function iapiLogin(user, pass, realMode, language, rememberMeLogin) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiConf['authenticationType'];
    iapiBaseLogin(user, pass, realMode, language, rememberMeLogin);
    return iapiERR_OK;
};

function iapiEmailLogin(email, pass, realMode, language, rememberMeLogin) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiLoginTypes.EMAIL;
    iapiBaseLogin(email, pass, realMode, language, rememberMeLogin);
    return iapiERR_OK;
};

function iapiLoginExternalToken(token, realMode, language) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiLoginTypes.EXTERNAL_TOKEN;
    iapiBaseLogin(null, token, realMode, language);
    return iapiERR_OK;
}

function iapiLoginUsernameExternalToken(user, token, realMode, language) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiLoginTypes.EXTERNAL_TOKEN;
    iapiBaseLogin(user, token, realMode, language);
    return iapiERR_OK;
}

function iapiLoginAdminUsername(adminUser, token, realMode, language, user) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiLoginTypes.ADMIN_USERNAME;
    iapiAdminUsername = adminUser;
    iapiBaseLogin(user, token, realMode, language);
    return iapiERR_OK;
}

function iapiLoginSessionToken(token, realMode, language) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiLoginTypes.SESSION_TOKEN;
    iapiBaseLogin(null, token, realMode, language);
    return iapiERR_OK;
}

function iapiLoginCryptoToken(cryptoToken, language) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiLoginTypes.CRYPTO_TOKEN;
    iapiBaseLogin(null, cryptoToken, 1, language);
    return iapiERR_OK;
}

function iapiLoginNickname(nickname, pass, realMode, language) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiLoginTypes.NICKNAME;
    iapiBaseLogin(nickname, pass, realMode, language);
    return iapiERR_OK;
};

function iapiLoginIdTokenCodeAndPin(tokenCode, pin, language, rememberMeLogin) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiLoginTypes.TOKEN_CODE;
    iapiBaseLogin(tokenCode, pin, 1, language, rememberMeLogin);
    return iapiERR_OK;
};

function iapiLoginPrintedIdTokenCodeAndPin(printedTokenCode, pin, language, rememberMeLogin) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiLoginTypes.PRINTED_TOKEN_CODE;
    iapiBaseLogin(printedTokenCode, pin, 1, language, rememberMeLogin);
    return iapiERR_OK;
};

function iapiLoginUsernameAndPin(user, pin, language, rememberMeLogin) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiLoginTypes.USERNAME_AND_PIN;
    iapiBaseLogin(user, pin, 1, language, rememberMeLogin);
    return iapiERR_OK;
};

function iapiLoginIdTokenCodeAndPassword(tokenCode, pass, language) {
    iapiLoginModeDownload = false;
    iapiLoginModeFlash = false;
    iapiAuthenticationType = iapiLoginTypes.TOKEN_CODE_AND_PASS;
    iapiBaseLogin(tokenCode, pass, 1, language);
    return iapiERR_OK;
};

function iapiLaunchClient(clientType, gameType, clientMode, windowName, windowWidth, windowHeight) {
    var url = iapiConf['clientUrl_' + clientType];
    if (url) {
        if (gameType) {
            url = iapiAddUrlParams(url, 'game=' + gameType);
        }
        if (clientMode) {
            url = iapiAddUrlParams(url, 'preferedmode=' + clientMode);
        }
        if (iapiClientParams['clientParams_' + clientType]) {
            url = iapiAddUrlParams(url, iapiClientParams['clientParams_' + clientType]);
        }
        if (url.indexOf('$domain') >= 0 || url.indexOf('<domain>') >= 0) {
            var domain = getCurrentDomain();
            url = url.replace("$domain", domain);
            url = url.replace("<domain>", domain);
        }
        if (iapiLoginModeFlash) {
            document.location = url;
            return;
        }
        var sizeStr = 'width=800,height=600';
        if (windowWidth != undefined && windowHeight != undefined) {
            if (windowWidth == -1 && windowHeight == -1) {
                sizeStr = '';
                if (navigator.appName == 'Microsoft Internet Explorer' || (navigator.userAgent.indexOf('Safari') >= 0 && navigator.userAgent.indexOf('Chrome') < 0)) {
                    sizeStr = 'left=0,top=0,';
                };
                var availWidth = screen.width;
                var availHeight = screen.height;
                if (screen.availWidth != undefined) {
                    availWidth = screen.availWidth;
                    availHeight = screen.availHeight;
                }
                if (typeof (innerWidth) == 'number' && typeof (outerWidth) == 'number') {
                    availWidth -= (outerWidth - innerWidth);
                    availHeight -= (outerWidth - innerWidth);
                }
                sizeStr += 'width=' + availWidth + ',height=' + availHeight;
            } else {
                sizeStr = 'width=' + windowWidth + ',height=' + windowHeight;
            };
        } else if (iapiConf['windowSize_' + clientType]) {
            var sizeIndex = iapiConf['windowSize_' + clientType][gameType];
            if (sizeIndex == undefined) {
                sizeIndex = iapiConf['windowSize_' + clientType]['default'];
            };
            if (sizeIndex != undefined && iapiConf['windowSizes'][sizeIndex]) {
                sizeStr = iapiConf['windowSizes'][sizeIndex];
            };
        };
        if (windowName != null && windowName.length > 0) {
            var w = document.getElementById(windowName);
            if (w) {
                w.src = url;
                return iapiERR_OK;
            };
        } else {
            windowName = '';
        }
        var par = 'toolbar=no,menubar=no,scrollbars=no,resizable=no';
        if (iapiConf['windowParams_' + clientType]) {
            par = iapiConf['windowParams_' + clientType];
        };
        windowParams = sizeStr + ',' + par;
        var win = window.open(url, windowName, windowParams);
        if (win == null || win.closed) {
            return iapiERR_BLOCKED;
        };
        return iapiERR_OK;
    }
    return iapiERR_NOK;
};

function iapiSetClientParams(clientType, params) {
    iapiClientParams['clientParams_' + clientType] = params;
};

function NoSystemId() {}
NoSystemId.prototype.toString = function empty() {
    return '';
}
noSystemId = new NoSystemId();

function iapiRequestTemporaryToken(realMode, systemId, serviceType) {
    var requestUrl = 'GetTemporaryAuthenticationToken.php?' + 'casinoname=' + iapiConf['casinoname'];
    if (serviceType != undefined) {
        requestUrl += '&serviceType=' + serviceType;
    } else {
        requestUrl += '&serviceType=' + iapiConf['serviceType'];
    };
    if (0 === systemId || 0 === parseInt(systemId)) {
        systemId = undefined;
    } else if (!systemId) {
        systemId = iapiConf['systemId'];
    } else if (!new String(systemId).toString()) {
        systemId = undefined;
    }
    if (systemId) {
        requestUrl += '&systemId=' + systemId;
    };
    if (realMode != undefined) {
        requestUrl += '&realMode=' + realMode;
    };
    iapiMakeRedirectRequest(requestUrl, null, iapiCALLOUT_TEMPORARYTOKEN);
    return iapiERR_OK;
};

function iapiLoginAndGetTempToken(user, pass, realMode, language, systemId, serviceType, rememberMeLogin) {
    iapiClearRedirectRequests(iapiCALLOUT_LOGINANDGETTEMPTOKEN, realMode);
    if (0 === systemId || 0 === parseInt(systemId)) {
        systemId = undefined;
    } else if (!systemId) {
        systemId = iapiConf['systemId'];
    } else if (!new String(systemId).toString()) {
        systemId = undefined;
    }
    if (!serviceType) {
        serviceType = iapiConf['serviceType'];
    };
    if (language) {
        iapiSetLanguageCode(language);
    }
    var requestUrl = 'LoginAndGetTempToken.php?' + 'casinoname=' + iapiConf['casinoname'] + '&realMode=' + realMode + '&serviceType=' + serviceType;
    if (systemId)
        requestUrl += '&systemId=' + systemId;
    if (rememberMeLogin == 1) {
        requestUrl += '&rememberMeLogin=1';
    }
    var params = [];
    iapiAuthenticationType = iapiConf['authenticationType'];
    if (iapiAuthenticationType == iapiLoginTypes.EXTERNAL_TOKEN) {
        if (user) {
            params['username'] = user;
        }
        params['externalToken'] = pass;
    } else if (iapiAuthenticationType == iapiLoginTypes.SESSION_TOKEN) {
        params['sessionToken'] = pass;
    } else if (iapiAuthenticationType == iapiLoginTypes.ADMIN_USERNAME) {
        if (user) {
            params['adminUsername'] = user;
        }
        params['externalToken'] = pass;
    } else if (iapiAuthenticationType == iapiLoginTypes.NICKNAME) {
        params['nickname'] = user;
        params['password'] = pass;
        params['systemId'] = systemId;
    } else if (iapiAuthenticationType == iapiLoginTypes.EMAIL) {
        if (user) {
            params['email'] = user;
        }
        params['password'] = pass;
    } else {
        params['username'] = user;
        params['password'] = pass;
        if (iapiConf['iovationBlackbox']) {
            params['iovationBlackbox'] = iapiConf['iovationBlackbox'];
        }
    };
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_LOGINANDGETTEMPTOKEN);
    return iapiERR_OK;
};

function iapiEmailLoginAndGetTempToken(email, pass, realMode, language, systemId, serviceType, rememberMeLogin) {
    iapiConf['authenticationType'] = iapiLoginTypes.EMAIL;
    iapiLoginAndGetTempToken(email, pass, realMode, language, systemId, serviceType, rememberMeLogin);
    iapiConf['authenticationType'] = null;
}

function iapiLoginExternalTokenAndGetTempToken(user, externalToken, realMode, language, systemId, serviceType, rememberMeLogin) {
    iapiConf['authenticationType'] = iapiLoginTypes.EXTERNAL_TOKEN;
    iapiLoginAndGetTempToken(user, externalToken, realMode, language, systemId, serviceType, rememberMeLogin)
    iapiConf['authenticationType'] = null;
};

function iapiDownloadLogin(user, pass, realMode, language) {
    iapiAuthenticationType = null;
    iapiLoginModeDownload = true;
    iapiLoginModeFlash = false;
    iapiBaseLogin(user, pass, realMode, language);
    return iapiERR_OK;
};

function iapiDownloadEmailLogin(email, pass, realMode, language) {
    iapiAuthenticationType = iapiLoginTypes.EMAIL;
    iapiLoginModeDownload = true;
    iapiLoginModeFlash = false;
    iapiBaseLogin(email, pass, realMode, language);
    return iapiERR_OK;
};

function iapiFlashLogin(user, pass, realMode, language, clientType, gameType) {
    iapiAuthenticationType = null;
    iapiLoginModeFlash = true;
    iapiLoginModeDownload = false;
    iapiFlashLoginClientType = clientType;
    iapiFlashLoginGameType = gameType;
    iapiBaseLogin(user, pass, realMode, language);
    return iapiERR_OK;
};

function iapiFlashEmailLogin(email, pass, realMode, language, clientType, gameType) {
    iapiAuthenticationType = iapiLoginTypes.EMAIL;
    iapiLoginModeFlash = true;
    iapiLoginModeDownload = false;
    iapiFlashLoginClientType = clientType;
    iapiFlashLoginGameType = gameType;
    iapiBaseLogin(email, pass, realMode, language);
    return iapiERR_OK;
};

function iapiLogout(allSessions, realMode, behaviour, invalidateRememberMe) {
    iapiUsername = null;
    iapiPassword = null;
    iapiEmail = null;
    iapiClearRedirectRequests(iapiCALLOUT_LOGIN, realMode);
    var params = [];
    if (realMode == 1) {
        iapiWriteClientCookie('loginSuccess=0&errorCode=0&expire=-1', 1);
    } else {
        iapiWriteClientCookie('loginSuccess=0&errorCode=0&expire=-1', 0);
    };
    if (behaviour == undefined) {
        if (allSessions == 1) {
            behaviour = 'all';
        } else {
            behaviour = 'this';
        }
    };
    var requestUrl = 'Logout.php?' + 'allSessions=' + allSessions + '&casinoname=' + iapiConf['casinoname'] + '&behaviour=' + behaviour;
    params['allSessions'] = allSessions;
    params['casinoname'] = iapiConf['casinoname'];
    params['behaviour'] = behaviour;
    if (realMode != undefined) {
        requestUrl += '&realMode=' + realMode;
        params['realMode'] = realMode;
    };
    if (invalidateRememberMe == 1) {
        requestUrl += '&invalidateRememberMe=1';
        params['invalidateRememberMe'] = 1;
    }
    if (iapiConf['onlypostrequestsforlogout']) {
        iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_LOGOUT);
    } else {
        iapiMakeRedirectRequest(requestUrl, null, iapiCALLOUT_LOGOUT);
    }
    return iapiERR_OK;
};

function iapiSetCallout(id, func) {
    iapiCalloutFunctions[id] = func;
    return iapiERR_OK;
};

function iapiGetWaitingMessages(messageTypes, realMode) {
    iapiClearRedirectRequests(iapiCALLOUT_MESSAGES, 0);
    iapiClearRedirectRequests(iapiCALLOUT_MESSAGES, 1);
    if (!messageTypes) {
        messageTypes = 'login,bonus,alert';
    };
    var requestUrl = 'GetWaitingMessages.php?' + 'messageTypes=' + messageTypes + '&casinoname=' + iapiConf['casinoname'] + '&realMode=' + realMode;
    iapiMakeRedirectRequest(requestUrl, null, iapiCALLOUT_MESSAGES);
    return iapiERR_OK;
};

function iapiAcceptPendingLimits(action, realMode) {
    var requestUrl = 'SubmitDialog.php?' + 'dialogType=' + 'AcceptPendingLimits' + '&casinoname=' + iapiConf['casinoname'];
    if (realMode != undefined) {
        requestUrl += '&realMode=' + realMode;
    };
    var params = [];
    params['action'] = action;
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SUBMITDIALOG);
    return iapiERR_OK;
};

function iapiBonusConfirmation(bonusIdentifier, accept, realMode) {
    var requestUrl = 'SubmitDialog.php?' + 'dialogType=' + 'BonusConfirmation' + '&casinoname=' + iapiConf['casinoname'];
    if (realMode != undefined) {
        requestUrl += '&realMode=' + realMode;
    };
    var params = [];
    params['bonusIdentifier'] = bonusIdentifier;
    if (accept) {
        params['accept'] = 1;
    } else {
        params['accept'] = 0;
    };
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SUBMITDIALOG);
    return iapiERR_OK;
};

function iapiValidateTCVersion(reference, accept, realMode) {
    var requestUrl = 'ValidateLoginSession.php?' + 'validationType=' + 'TCVersion' + '&casinoname=' + iapiConf['casinoname'];
    if (realMode != undefined) {
        requestUrl += '&realMode=' + realMode;
    };
    var params = [];
    params['termVersionReference'] = reference;
    if (accept) {
        params['accept'] = 1;
    } else {
        params['accept'] = 0;
    };
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SESSIONVALIDATION);
    return iapiERR_OK;
};

function iapiValidateGeolocation(latitude, longitude, geoPacket, transactionId, error) {
    var params = [];
    params['latitude'] = latitude;
    params['longitude'] = longitude;
    params['geopacket'] = geoPacket;
    params['transactionId'] = transactionId;
    params['error'] = error;
    for (var k in params)
        if (params[k] === null || params[k] === undefined) delete params[k];
    var validationType = 'Geolocation';
    var requestUrl = 'ValidateLoginSession.php?' + 'validationType=' + validationType + '&casinoname=' + iapiConf['casinoname'] + '&realMode=1';
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SESSIONVALIDATION);
    return iapiERR_OK;
};

function iapiValidatePasswordChange(oldPassword, newPassword, changePassword, realMode) {
    var requestUrl = 'ValidateLoginSession.php?' + 'validationType=' + 'PasswordChange' + '&casinoname=' + iapiConf['casinoname'];
    if (realMode != undefined) {
        requestUrl += '&realMode=' + realMode;
    };
    var params = [];
    params['oldPassword'] = oldPassword;
    params['newPassword'] = newPassword;
    if (changePassword) {
        params['changePassword'] = 1;
    };
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SESSIONVALIDATION);
    return iapiERR_OK;
};

function iapiValidateConfirmationToken(parameter, realMode) {
    var requestUrl = 'ValidateLoginSession.php?' + 'validationType=' + 'ConfirmationToken' + '&casinoname=' + iapiConf['casinoname'];
    if (realMode) {
        requestUrl += '&realMode=' + realMode;
    };
    var params = [];
    params['parameter'] = parameter;
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SESSIONVALIDATION);
    return iapiERR_OK;
};

function iapiValidateBirthdateToken(birthdate, realMode) {
    var requestUrl = 'ValidateLoginSession.php?' + 'validationType=' + 'Birthdate' + '&casinoname=' + iapiConf['casinoname'];
    if (realMode) {
        requestUrl += '&realMode=' + realMode;
    };
    var params = [];
    params['birthdate'] = birthdate;
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SESSIONVALIDATION);
    return iapiERR_OK;
};

function iapiValidateActivationCode(activationCode, realMode) {
    var requestUrl = 'ValidateLoginSession.php?' + 'validationType=' + 'ActivationCode' + '&casinoname=' + iapiConf['casinoname'];
    if (realMode) {
        requestUrl += '&realMode=' + realMode;
    };
    var params = [];
    params['activationCode'] = activationCode;
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SESSIONVALIDATION);
    return iapiERR_OK;
};

function iapiValidatePinChange(oldPin, newPin) {
    var requestUrl = 'ValidateLoginSession.php?' + 'validationType=' + 'PINChange' + '&casinoname=' + iapiConf['casinoname'] + '&realMode=1';
    var params = [];
    params['oldPin'] = oldPin;
    params['newPin'] = newPin;
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SESSIONVALIDATION);
}

function iapiValidatePinToken(pin) {
    var requestUrl = 'ValidateLoginSession.php?' + 'validationType=' + 'PINToken' + '&casinoname=' + iapiConf['casinoname'] + '&realMode=1';
    var params = [];
    params['pin'] = pin;
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SESSIONVALIDATION);
}

function iapiValidatePassword(password, loginName) {
    var requestUrl = 'ValidateLoginSession.php?' + 'validationType=' + 'LoginNameAndPassword' + '&casinoname=' + iapiConf['casinoname'] + '&realMode=1';
    var params = [];
    params['password'] = password;
    params['loginName'] = loginName;
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SESSIONVALIDATION);
}

function iapiValidateTwoFactorToken(token) {
    var requestUrl = 'ValidateLoginSession.php?' + 'validationType=' + 'TwoFactor' + '&casinoname=' + iapiConf['casinoname'] + '&realMode=1';
    var params = [];
    params['2faToken'] = token;
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_SESSIONVALIDATION);
}

function iapiForgotPassword(username, email, birthDate, realMode, verificationAnswer, passwordRecoveryDestinationLink, notificationChannels) {
    var requestUrl = 'ForgotPassword.php?' + 'casinoname=' + iapiConf['casinoname'] + '&realMode=' + realMode;
    var params = [];
    params['username'] = username;
    params['email'] = email;
    params['birthDate'] = birthDate;
    if (verificationAnswer) {
        params['verificationAnswer'] = verificationAnswer;
    }
    if (passwordRecoveryDestinationLink) {
        params['passwordRecoveryDestinationLink'] = passwordRecoveryDestinationLink;
    }
    if (notificationChannels) {
        params['notificationChannels'] = notificationChannels;
    }
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_FORGOTPASSWORD);
    return iapiERR_OK;
};

function iapiStartForgotEmail(cellphone, birthdate, realMode, lastName, personalId) {
    var requestUrl = 'StartForgotEmail.php?' + 'casinoname=' + iapiConf['casinoname'] + '&realMode=' + realMode;
    var params = [];
    params['cellphone'] = cellphone;
    params['birthdate'] = birthdate;
    params['lastName'] = lastName;
    params['personalId'] = personalId;
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_STARTFORGOTEMAIL);
    return iapiERR_OK;
};

function iapiCompleteForgotEmail(token, realMode, pin) {
    var requestUrl = 'CompleteForgotEmail.php?' + 'casinoname=' + iapiConf['casinoname'] + '&realMode=' + realMode;
    var params = [];
    params['token'] = token;
    if (pin) {
        params['pin'] = pin;
    }
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_COMPLETEFORGOTEMAIL);
    return iapiERR_OK;
};

function iapiOnlineForgotPassword(username, email, birthDate, realMode, verificationAnswer, newPassword, passwordRecoveryDestinationLink, notificationChannels) {
    var requestUrl = 'OnlineForgotPassword.php?' + 'casinoname=' + iapiConf['casinoname'] + '&realMode=' + realMode;
    var params = [];
    params['username'] = username;
    if (email) {
        params['email'] = email;
    }
    if (birthDate) {
        params['birthDate'] = birthDate;
    }
    if (verificationAnswer) {
        params['verificationAnswer'] = verificationAnswer;
    }
    if (newPassword) {
        params['newPassword'] = newPassword;
    }
    if (passwordRecoveryDestinationLink) {
        params['passwordRecoveryDestinationLink'] = passwordRecoveryDestinationLink;
    }
    if (notificationChannels) {
        params['notificationChannels'] = notificationChannels;
    }
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_ONLINEFORGOTPASSWORD);
    return iapiERR_OK;
};

function iapiGetLoggedInPlayer(realMode) {
    var func = iapiCALLOUT_GETLOGGEDINPLAYER;
    if (isStorageAvailable()) {
        iapiCalloutFunctions[func = "loggedInPlayerHandlerX"] = self.loggedInPlayerHandlerX;
        let k = getSessionKey("loggedInPlayer-recent");
        var recent = window.sessionStorage.getItem(k);
        if (recent) {
            recent = JSON.parse(recent);
            if (recent && Date.now() - recent.time < (iapiConf['loggedInExpiry'] ? parseInt(iapiConf['loggedInExpiry']) : 260000)) {
                if (recent.session == window.sessionStorage.getItem(getSessionKey("token")) || recent.session == window.sessionStorage.getItem(getSessionKey("sessionRef"))) {
                    setTimeout(function () {
                        iapiCalloutFunctions[iapiCALLOUT_GETLOGGEDINPLAYER](recent.resp)
                    }, iapiEVENT_TIMER);
                    return iapiERR_OK;
                }
            }
        }
        window.sessionStorage.removeItem(k);
    }
    var requestUrl = 'GetLoggedInPlayer.php?' + 'casinoname=' + iapiConf['casinoname'] + '&realMode=' + realMode;
    iapiMakeRedirectRequest(requestUrl, null, func);
    return iapiERR_OK;
};

function getSessionKey(key) {
    return "pas[" + iapiConf['casinoname'] + "][real][" + key + "]";
}

function loggedInPlayerHandlerX(e) {
    if (isStorageAvailable()) {
        let k = getSessionKey("loggedInPlayer-recent");
        if (e.username) {
            var recent = {};
            recent.resp = e;
            recent.time = Date.now();
            recent.session = window.sessionStorage.getItem(getSessionKey("token"));
            if (!recent.session)
                recent.session = window.sessionStorage.getItem(getSessionKey("sessionRef"));
            let serialized = JSON.stringify(recent);
            window.sessionStorage.setItem(k, serialized);
        } else {
            window.sessionStorage.removeItem(k);
        }
    }
    if (iapiCalloutFunctions[iapiCALLOUT_GETLOGGEDINPLAYER])
        iapiCalloutFunctions[iapiCALLOUT_GETLOGGEDINPLAYER](e);
}

function iapiKeepAlive(realMode, millisFromLastAction) {
    var requestUrl = 'KeepAlive.php?' + 'casinoname=' + iapiConf['casinoname'] + '&realMode=' + realMode;
    if (millisFromLastAction) {
        requestUrl += '&millisFromLastAction=' + millisFromLastAction;
    }
    iapiMakeRedirectRequest(requestUrl, null, iapiCALLOUT_KEEPALIVE);
    return iapiERR_OK;
}

function iapiGetUrls(urlTypeList) {
    var requestUrl = 'GetUrls.php?' + 'casinoname=' + iapiConf['casinoname'] + '&realMode=1' + '&urlTypeList=' + urlTypeList;
    iapiMakeRedirectRequest(requestUrl, null, iapiCALLOUT_GETURLS);
    return iapiERR_OK;
}

function iapiSetAuthenticationType(authType) {
    iapiConf['authenticationType'] = authType;
};

function iapiSetClientSkin(clientSkin) {
    iapiConf['clientSkin'] = clientSkin;
};

function iapiSetClientType(clientType) {
    iapiConf['clientType'] = clientType;
};

function iapiSetClientUrl(clientType, value) {
    iapiConf['clientUrl_' + clientType] = value;
};

function iapiSetClientVersion(clientVersion) {
    iapiConf['clientVersion'] = clientVersion;
};

function iapiSetClientChannel(clientChannel) {
    iapiConf['clientChannel'] = clientChannel;
};

function iapiSetGameType(gameType) {
    iapiConf['gameType'] = gameType;
};

function iapiSetGameTypePrefix(gameTypePrefix) {
    iapiConf['gameTypePrefix'] = gameTypePrefix;
};

function iapiSetClientPlatform(clientPlatform) {
    iapiConf['clientPlatform'] = clientPlatform;
};

function iapiSetSystemId(systemId) {
    iapiConf['systemId'] = systemId;
};

function iapiSetServiceType(serviceType) {
    iapiConf['serviceType'] = serviceType;
};

function iapiSetLanguageCode(languageCode) {
    iapiConf['languageCode'] = languageCode;
};

function iapiSetCallId(callId) {
    iapiConf['callId'] = callId;
};

function iapiSetDeliveryPlatform(deliveryPlatform) {
    iapiConf['deliveryPlatform'] = deliveryPlatform;
};

function iapiSetDeviceBrowser(deviceBrowser) {
    iapiConf['deviceBrowser'] = deviceBrowser;
};

function iapiSetOsName(osName) {
    iapiConf['osName'] = osName;
};

function iapiSetOsVersion(osVersion) {
    iapiConf['osVersion'] = osVersion;
};

function iapiSetDeviceId(deviceId) {
    iapiConf['deviceId'] = deviceId;
};

function iapiSetDeviceType(deviceType) {
    iapiConf['deviceType'] = deviceType;
};

function iapiSetDeviceFamily(deviceFamily) {
    iapiConf['deviceFamily'] = deviceFamily;
};

function iapiSetSoftSerial(softSerial) {
    iapiConf['softSerial'] = softSerial;
};

function iapiSetIovationBlackbox(iovationBlackbox) {
    iapiConf['iovationBlackbox'] = iovationBlackbox;
}

function iapiEnableUserErrors() {
    iapiConf['errorLevel'] = 1;
};

function iapiCallbackWaitingMessages(messages) {
    var request = iapiGetRequest(iapiWaitingMessagesId);
    if (!request) {
        return;
    };
    var error = {
        "errorCode": 6,
        "errorText": "Invalid response.",
        "playerMessage": ""
    };
    if (messages) {
        if (messages.errorCode) {
            error = {
                "errorCode": messages.errorCode,
                "errorText": messages.errorText,
                "playerMessage": messages.playerMessage
            };
        } else {
            error = null;
        }
    } else {
        messages = error;
    }
    if (error && error.errorCode == 6) {
        if (request[3].length < iapiConf['loginDomainRetryCount']) {
            var requestId = (new Date().getTime()) + Math.round(Math.random() * 1000000);
            var failedTimer = setTimeout('iapiRequestFailed(' + requestId + ')', iapiConf['loginDomainRetryInterval'] * 1000);
            iapiRegisterRequestId(requestId, iapiCALLOUT_MESSAGES, failedTimer, request[3], request[4], request[5]);
            return;
        }
    }
    if (iapiCalloutFunctions[iapiCALLOUT_MESSAGES]) {
        setTimeout(function () {
            iapiCalloutFunctions[iapiCALLOUT_MESSAGES](messages);
        }, iapiEVENT_TIMER);
    };
};

function iapiBaseLogin(user, pass, realMode, language, rememberMeLogin) {
    if ((iapiHasRedirectRequest(iapiCALLOUT_LOGIN)) && iapiRealMode != realMode) {
        iapiNextLogin = [user, pass, realMode, language, rememberMeLogin];
        return iapiERR_OK;
    };
    if (iapiAuthenticationType == iapiLoginTypes.EMAIL) {
        iapiEmail = user;
    } else {
        iapiUsername = user;
    }
    iapiPassword = pass;
    if (realMode == 1) {
        iapiRealMode = 1;
    } else {
        iapiRealMode = 0;
    };
    if (language) {
        iapiSetLanguageCode(language);
    }
    iapiRememberMeLogin = rememberMeLogin;
    iapiLoginSuccess = false;
    iapiWriteClientCookie('loginInProgress=1', iapiRealMode);
    iapiContinueLogin();
    return iapiERR_OK;
};

function iapiContinueLogin() {
    iapiClearRedirectRequests(iapiCALLOUT_LOGIN, 0);
    iapiClearRedirectRequests(iapiCALLOUT_LOGIN, 1);
    var requestUrl = 'Login.php?' + 'casinoname=' + iapiConf['casinoname'];
    if (iapiRealMode == 1) {
        requestUrl += '&realMode=1';
    } else {
        requestUrl += '&realMode=0';
    };
    if (iapiRememberMeLogin == 1) {
        requestUrl += '&rememberMeLogin=1';
    }
    var params = [];
    if (iapiAuthenticationType == iapiLoginTypes.EXTERNAL_TOKEN) {
        if (iapiUsername) {
            params['username'] = iapiUsername;
        }
        params['externalToken'] = iapiPassword;
    } else if (iapiAuthenticationType == iapiLoginTypes.EMAIL) {
        if (iapiEmail) {
            params['email'] = iapiEmail;
        }
        params['password'] = iapiPassword;
    } else if (iapiAuthenticationType == iapiLoginTypes.SESSION_TOKEN) {
        params['sessionToken'] = iapiPassword;
    } else if (iapiAuthenticationType == iapiLoginTypes.CRYPTO_TOKEN) {
        params['cryptoToken'] = iapiPassword;
    } else if (iapiAuthenticationType == iapiLoginTypes.ADMIN_USERNAME) {
        if (iapiAdminUsername) {
            params['adminUsername'] = iapiAdminUsername;
        }
        params['username'] = iapiUsername;
        params['externalToken'] = iapiPassword;
    } else if (iapiAuthenticationType == iapiLoginTypes.NICKNAME) {
        params['nickname'] = iapiUsername;
        params['password'] = iapiPassword;
        params['systemId'] = iapiConf['systemId'];
    } else if (iapiAuthenticationType == iapiLoginTypes.TOKEN_CODE) {
        params['tokenCode'] = iapiUsername;
        params['pin'] = iapiPassword;
        params['systemId'] = iapiConf['systemId'];
    } else if (iapiAuthenticationType == iapiLoginTypes.PRINTED_TOKEN_CODE) {
        params['printedTokenCode'] = iapiUsername;
        params['pin'] = iapiPassword;
        params['systemId'] = iapiConf['systemId'];
    } else if (iapiAuthenticationType == iapiLoginTypes.USERNAME_AND_PIN) {
        params['username'] = iapiUsername;
        params['phone'] = STOCK_AUTH_PHONE_NUMBER;
        params['pin'] = iapiPassword;
        params['systemId'] = iapiConf['systemId'];
    } else if (iapiAuthenticationType == iapiLoginTypes.TOKEN_CODE_AND_PASS) {
        params['tokenCode'] = iapiUsername;
        params['password'] = iapiPassword;
        params['systemId'] = iapiConf['systemId'];
    } else {
        params['username'] = iapiUsername;
        params['password'] = iapiPassword;
        if (iapiConf['iovationBlackbox']) {
            params['iovationBlackbox'] = iapiConf['iovationBlackbox'];
        }
    };
    iapiMakeRedirectRequest(requestUrl, params, iapiCALLOUT_LOGIN);
};

function iapiWriteClientCookie(params, realMode) {
    if (iapiLoginModeDownload) {
        return;
    }
    var tmpUrl = iapiConf['clientCookieUrl'];
    if (!tmpUrl) {
        return;
    }
    if (tmpUrl.indexOf('://') < 0) {
        tmpUrl = location.protocol + '//' + tmpUrl;
    }
    var cookieUrl = tmpUrl + '?' + params + '&casinoname=' + iapiConf['casinoname'] + '&realMode=' + realMode;
    var iframename = iapiRealCookieIframe;
    if (realMode == 0) {
        iframename = iapiFunCookieIframe;
    }
    iapiCreateDiv(iapiDivname);
    iapiCreateIframe(iapiDivname, iframename, "weLoveBaking");
    iapiGet(iframename, cookieUrl);
};

function iapiCreateDiv(id) {
    if (document.getElementById(id)) {
        return;
    };
    var newdiv = document.createElement('div');
    newdiv.setAttribute('id', id);
    newdiv.setAttribute('style', 'DISPLAY:none;');
    document.body.appendChild(newdiv);
};

function resolveFrameName(divName, frameName, type) {
    let reusable = type == iapiCALLOUT_GETLOGGEDINPLAYER || type == "loggedInPlayerHandlerX";
    if (reusable) {
        return divName + "-" + type;
    }
    return frameName;
}

function iapiCreateIframe(divName, frameName, type) {
    let c = document.getElementById(divName);
    let reusable = type == iapiCALLOUT_GETLOGGEDINPLAYER || type == "loggedInPlayerHandlerX";
    frameName = resolveFrameName(divName, frameName, type);
    if (document.getElementById(frameName)) {
        if (reusable) {
            return frameName;
        }
        c.removeChild(document.getElementById(frameName));
    }
    var iframeelement;
    try {
        iframeelement = document.createElement("<iframe name='" + frameName + "'>");
    } catch (err) {
        iframeelement = document.createElement('iframe');
    };
    if (reusable) {
        iframeelement.dataset["reusable"] = type;
    }
    iframeelement.setAttribute('id', frameName);
    iframeelement.setAttribute('name', frameName);
    iframeelement.setAttribute('style', 'DISPLAY: none; LEFT: 0px; POSITION: absolute; TOP: 0px');
    iframeelement.setAttribute('width', '0px');
    iframeelement.setAttribute('height', '0px');
    iframeelement.setAttribute('border', '0px');
    iframeelement.setAttribute('frameborder', '0');
    c.appendChild(iframeelement);
    return null;
};

function iapiPost(windowname, url, data) {
    windowname = encodeHTML(windowname);
    url = encodeURL(url);
    var nonce = document.getElementsByTagName('script')[0].getAttribute('nonce');
    var str = "<html><head></head><body><form id='formid' target='" + windowname + "' method='POST' action='" + url + "'>";
    var prop;
    for (prop in data) {
        if (typeof (data[prop]) != 'function') {
            str += "<input type='hidden' name='" + prop + "' value='" + encodeHTML(data[prop]) + "'>";
        };
    };
    str += "</form><script type='text/javascript'";
    if (nonce) {
        str += " nonce=" + nonce;
    }
    str += ">setTimeout(function(){document.getElementById('formid').submit();},100);</script></body></html>";
    iapiPostWindow(windowname, str);
};

function iapiPostWindow(windowname, cont) {
    var win = document.getElementById(windowname);
    if (win) {
        try {
            win.contentWindow.document.open();
            win.contentWindow.document.write(cont);
            win.contentWindow.document.close();
        } catch (e) {
            var s = "<script>document.domain='" + document.domain + "';</script>" + cont;
            var u = "javascript:'<script>window.onload=function(){var ed=\\'" + escape(escape(s)) +
                "\\';document.write(unescape(ed));document.close();};<\/script>'";
            win.src = u;
        };
    };
};

function iapiMakeRedirectRequest(url, postParams, requestType, loginServers) {
    var requested = {
        "url": url,
        "postParam": postParams,
        "requestType": requestType,
        "loginServers": loginServers
    };
    if (!loginServers) {
        loginServers = [];
    } else if (loginServers.length >= iapiConf['loginDomainRetryCount'] || loginServers.length >= 25) {
        return false;
    };
    var availableServers = iapiConf['loginServer'].split('|');
    if (loginServers.length < availableServers.length) {
        var i;
        for (i in loginServers) {
            var s = loginServers[i];
            var j;
            for (j in availableServers) {
                if (availableServers[j] == s && typeof (availableServers[j]) === 'string') {
                    availableServers.splice(j, 1);
                    break;
                }
            }
        }
    }
    url = iapiAppendContextParameters(url);
    var loginServer = availableServers[Math.floor(Math.random() * availableServers.length)];
    loginServers.push(loginServer);
    requestUrl = getHttpProtocol() + '://' + loginServer + '/' + url;
    let requestId = Date.now() + "x" + Math.round(Math.random() * 1000000);
    if (!isPostMessagesDisabled() || requestType != iapiCALLOUT_MESSAGES) {
        requestUrl += '&redirectUrl=' +
            escape(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') +
                (iapiConf['redirectUrl'] ? iapiConf['redirectUrl'] : '/') + '#requestId=' + requestId);
    } else {
        requestUrl += '&cacheBreaker=' + (new Date().getTime());
    };
    if (iapiConf['errorLevel'] == 1) {
        requestUrl += '&errorLevel=1';
    }
    var failedTimer = setTimeout(function () {
        iapiRequestFailed(requestId);
    }, iapiConf['loginDomainRequestTimeout'] * 1000);
    iapiRegisterRequestId(requestId, requestType, failedTimer, loginServers, url, postParams);
    if (isPostMessagesDisabled() && requestType == iapiCALLOUT_MESSAGES) {
        iapiWaitingMessagesId = requestId;
        iapiJsonp(requestUrl, 'iapiCallbackWaitingMessages');
    } else {
        iapiCreateDiv(iapiDivname);
        var iframeName = resolveFrameName(iapiDivname, iapiIframename + '_' + requestId, requestType);
        var frameAlreadyExists = iapiCreateIframe(iapiDivname, iframeName, requestType);
        if (frameAlreadyExists)
            iframeName = frameAlreadyExists;
        var frame = document.getElementById(iframeName);
        frame.dataset.requestId = requestId;
        if (!iapiMessagesSupported) {
            initMessageListener();
        };
        if (isPostMessagesDisabled()) {
            if (iapiMessagesSupported) {
                requestUrl += '&messagesSupported=1';
                if (frameAlreadyExists && iapiMessagesAnswered) {
                    if (frame.contentWindow.postMessage) {
                        frame.contentWindow.postMessage(requestType, getHttpProtocol() + "://" + loginServer);
                        return true;
                    };
                };
            };
        } else {
            if (iapiMessagesSupported) {
                requestUrl += '&messagesSupported=1';
                var message = {
                    "requestType": requestType,
                    "postParams": postParams,
                    "url": requestUrl,
                    "casino": iapiConf['casinoname'],
                    "requestId": requestId
                };
                if (!frameAlreadyExists) {
                    let s = getHttpProtocol() + "://" + loginServer + '/pasSetupPage.php?casino=' + iapiConf['casinoname'];
                    frame.contentWindow.location.replace(s);
                    frame.addEventListener("load", function (e) {
                        frame.contentWindow.postMessage(message, getHttpProtocol() + "://" + loginServer);
                    });
                } else {
                    frame.contentWindow.postMessage(message, getHttpProtocol() + "://" + loginServer);
                }
                return;
            }
        }
        if (postParams) {
            iapiPost(iframeName, requestUrl, postParams);
        } else {
            iapiGet(iframeName, requestUrl);
        };
    };
    return true;
};
var storageAvailableResolved = 0;

function isStorageAvailable() {
    if (storageAvailableResolved)
        return storageAvailableResolved > 0;
    try {
        var test = 'test';
        window.sessionStorage.setItem(test, test);
        window.sessionStorage.removeItem(test);
        checkCookieBuster();
        return (storageAvailableResolved = 1) > 0;
    } catch (e) {}
    return (storageAvailableResolved = -1) > 0;
}

function checkCookieBuster() {
    try {
        if (storageAvailableResolved < 0 || !window.sessionStorage)
            return;
        var buster = cookieBusterValue();
        if (buster && buster != window.sessionStorage.getItem('pasCookieBuster')) {
            clearSessionStorage(window.sessionStorage);
            window.sessionStorage.setItem('pasCookieBuster', buster);
        }
    } catch (any) {
        storageAvailableResolved = -1;
    }
}

function clearSessionStorage(s) {
    let sessionKeys = Object.keys(s);
    for (var k in sessionKeys) {
        if (sessionKeys[k].startsWith("pas["))
            s.removeItem(sessionKeys[k]);
    }
}

function cookieBusterValue() {
    let cookies = document.cookie.split(';');
    for (var v in cookies) {
        if (cookies[v].trim().startsWith("pasCookieBuster=")) {
            return cookies[v].split('=')[1];
        }
    }
    return '';
}

function isPostMessagesDisabled() {
    return iapiConf['postMessagesDisabled'] == 1;
}

function iapiAppendContextParameters(url) {
    iapiConf = iapiConf || [];
    if (iapiLoginModeDownload) {
        iapiConf['clientPlatform'] = 'download';
    } else if (!iapiConf['clientPlatform']) {
        iapiConf['clientPlatform'] = 'flash';
    }
    var contextFields = ['clientType', 'clientPlatform', 'clientVersion', 'clientSkin', 'clientChannel', 'callId', 'gameType', 'gameTypePrefix', 'softSerial', 'deviceId', 'deliveryPlatform', 'deviceType', 'osName', 'osVersion', 'deviceBrowser', 'languageCode', 'deviceFamily'];
    for (var i = 0; i < contextFields.length; i++) {
        var fieldName = contextFields[i];
        if (iapiConf[fieldName]) {
            url = iapiAddUrlParams(url, fieldName + '=' + iapiConf[fieldName]);
        }
    }
    return url;
}

function iapiJsonp(url, callback) {
    scriptElement = document.createElement('SCRIPT');
    scriptElement.type = 'text/javascript';
    scriptElement.src = encodeURL(url) + '&jsoncallback=' + callback + '&responseType=json';
    document.getElementsByTagName('HEAD')[0].appendChild(scriptElement);
};

function iapiGet(windowname, url) {
    var win = document.getElementById(windowname);
    if (win) {
        win.src = encodeURL(url);
    };
};

function iapiAddUrlParams(url, paramStr) {
    if (url.indexOf('?') > 0) {
        url += '&';
    } else {
        url += '?';
    };
    return url + paramStr;
};

function iapiLoginFailedActions(response) {
    iapiPassword = null;
    iapiLoginSuccess = false;
    iapiSessionValid = 0;
    var errorCode = response.errorCode;
    iapiWriteClientCookie('loginSuccess=0&errorCode=' + errorCode, iapiRealMode);
    if (iapiCalloutFunctions['login']) {
        setTimeout(function () {
            iapiCalloutFunctions['login'](0, 0, errorCode, iapiRealMode);
        }, iapiEVENT_TIMER);
    };
    if (iapiCalloutFunctions[iapiCALLOUT_LOGIN]) {
        setTimeout(function () {
            iapiCalloutFunctions[iapiCALLOUT_LOGIN](response);
        }, iapiEVENT_TIMER);
    };
    if (iapiLoginModeDownload) {
        iapiDownloadHtcmd(0, 0, errorCode, '');
    };
    iapiCheckNextLogin();
}

function iapiTokenFailedActions(response) {
    if (iapiCalloutFunctions['temporarytoken']) {
        setTimeout(function () {
            iapiCalloutFunctions['temporarytoken'](0, null);
        }, iapiEVENT_TIMER);
    };
    if (iapiCalloutFunctions[iapiCALLOUT_TEMPORARYTOKEN]) {
        setTimeout(function () {
            iapiCalloutFunctions[iapiCALLOUT_TEMPORARYTOKEN](response);
        }, iapiEVENT_TIMER);
    };
    if (iapiLoginModeDownload) {
        iapiDownloadHtcmd(1, iapiSessionValid, 0, '');
    };
};

function iapiCheckNextLogin() {
    if (iapiNextLogin != null) {
        var user = iapiNextLogin[0];
        var pass = iapiNextLogin[1];
        var realMode = iapiNextLogin[2];
        var language = iapiNextLogin[3];
        var rememberMeLogin = iapiNextLogin[4];
        iapiNextLogin = null;
        setTimeout(function () {
            iapiLogin(user, pass, realMode, language, rememberMeLogin);
        }, iapiEVENT_TIMER);
    };
};

function iapiDownloadHtcmd(loginSuccess, sessionValid, errorCode, tempToken) {
    if (loginSuccess && tempToken) {
        var htcmd = 'htcmd:login?';
        htcmd = htcmd + 'username=' + encodeURIComponent(iapiUsername);
        htcmd = htcmd + '&password=' + encodeURIComponent(tempToken);
        htcmd = htcmd + '&realmode=' + iapiRealMode;
        htcmd = htcmd + '&type=' + 3;
        document.location = htcmd;
    };
};

function iapiRedirectCallback(params) {
    var requestId = String(params['requestId']);
    var request = iapiGetRequest(requestId);
    if (!request) {
        return;
    };
    var calloutName = request[1];
    var redirectResponse = null;
    try {
        redirectResponse = JSON.parse(params['redirectResponse']);
    } catch (err) {};
    if (redirectResponse.sessionRef && isStorageAvailable()) {
        window.sessionStorage.setItem(getSessionKey("sessionRef"), redirectResponse.sessionRef);
    }
    var error = {
        "errorCode": 6,
        "errorText": "Invalid response.",
        "playerMessage": ""
    };
    if (redirectResponse) {
        if (redirectResponse.errorCode) {
            error = {
                "errorCode": redirectResponse.errorCode,
                "errorText": redirectResponse.errorText,
                "playerMessage": redirectResponse.playerMessage
            };
        } else {
            error = null;
        }
    } else {
        redirectResponse = error;
    }
    if (error && error.errorCode == 6) {
        if (request[3].length < iapiConf['loginDomainRetryCount']) {
            var requestId = (new Date().getTime()) + Math.round(Math.random() * 1000000);
            var failedTimer = setTimeout('iapiRequestFailed(' + requestId + ')', iapiConf['loginDomainRetryInterval'] * 1000);
            iapiRegisterRequestId(requestId, calloutName, failedTimer, request[3], request[4], request[5]);
            return;
        }
    }
    if (calloutName == iapiCALLOUT_LOGIN) {
        if (error == null) {
            iapiPassword = null;
            iapiLoginSuccess = true;
            iapiError = null;
            iapiSessionValid = 1;
            var validationData = redirectResponse.sessionValidationData;
            if (validationData) {
                for (let key in Object.keys(validationData)) {
                    if (validationData[key] !== 'SessionValidationByGeolocationData') {
                        iapiSessionValid = 0;
                        break;
                    }
                }
            };
            var str = 'loginSuccess=1&sessionValid=' + iapiSessionValid + '&loginDomain=' + iapiConf['loginServer'];
            iapiWriteClientCookie(str, iapiRealMode);
            if (iapiCalloutFunctions['login']) {
                setTimeout(function () {
                    iapiCalloutFunctions['login'](1, iapiSessionValid, 0, iapiRealMode);
                }, iapiEVENT_TIMER);
            };
            if (iapiCalloutFunctions[iapiCALLOUT_LOGIN]) {
                setTimeout(function () {
                    iapiCalloutFunctions[iapiCALLOUT_LOGIN](redirectResponse);
                }, iapiEVENT_TIMER);
            };
            if (iapiLoginModeDownload) {
                if (iapiSessionValid) {
                    iapiRequestTemporaryToken(iapiRealMode);
                } else {
                    iapiDownloadHtcmd(1, 0, 0, '');
                };
            } else if (iapiLoginModeFlash) {
                if (iapiSessionValid) {
                    var clientMode = 'real';
                    if (!iapiRealMode) {
                        clientMode = 'fun';
                    }
                    iapiLaunchClient(iapiFlashLoginClientType, iapiFlashLoginGameType, clientMode);
                }
            };
            iapiCheckNextLogin();
        } else {
            iapiError = error;
            iapiLoginFailedActions(redirectResponse);
        };
    } else if (calloutName == iapiCALLOUT_TEMPORARYTOKEN) {
        if (error == null && redirectResponse.sessionToken && redirectResponse.sessionToken.sessionToken) {
            if (iapiCalloutFunctions['temporarytoken']) {
                setTimeout(function () {
                    iapiCalloutFunctions['temporarytoken'](1, redirectResponse.sessionToken.sessionToken);
                }, iapiEVENT_TIMER);
            };
            if (iapiCalloutFunctions[iapiCALLOUT_TEMPORARYTOKEN]) {
                setTimeout(function () {
                    iapiCalloutFunctions[iapiCALLOUT_TEMPORARYTOKEN](redirectResponse);
                }, iapiEVENT_TIMER);
            };
            if (iapiLoginModeDownload) {
                iapiDownloadHtcmd(1, 1, 0, redirectResponse.sessionToken.sessionToken);
            };
        } else {
            iapiTokenFailedActions(redirectResponse);
        };
    } else if (iapiCalloutFunctions[calloutName]) {
        setTimeout(function () {
            iapiCalloutFunctions[calloutName](redirectResponse);
        }, iapiEVENT_TIMER);
    };
};

function iapiRequestFailed(requestId) {
    var request = iapiGetRequest(requestId);
    if (!request) {
        return;
    };
    var calloutName = request[1];
    if (iapiMakeRedirectRequest(request[4], request[5], calloutName, request[3])) {
        return;
    }
    var error = {
        "errorCode": 6,
        "errorText": "Request timed out.",
        "playerMessage": ""
    };
    if (calloutName == iapiCALLOUT_LOGIN) {
        if (iapiCalloutFunctions[iapiCALLOUT_LOGIN]) {
            iapiLoginFailedActions(error);
        };
    } else if (calloutName == iapiCALLOUT_TEMPORARYTOKEN) {
        if (iapiCalloutFunctions[iapiCALLOUT_TEMPORARYTOKEN]) {
            iapiTokenFailedActions(error);
        };
    } else if (iapiCalloutFunctions[calloutName]) {
        setTimeout(function () {
            iapiCalloutFunctions[calloutName](error);
        }, iapiEVENT_TIMER);
    };
};

function iapiRegisterRequestId(requestId, callout, failedTimer, requestDomains, requestUrl, postParams) {
    iapiRequestIds.push([requestId, callout, failedTimer, requestDomains, requestUrl, postParams]);
};

function iapiGetRequest(requestId) {
    var i;
    for (i in iapiRequestIds) {
        arr = iapiRequestIds[i]
        if (arr[0] == requestId) {
            iapiRequestIds.splice(i, 1);
            if (arr[2]) {
                clearTimeout(arr[2]);
            }
            var win = document.getElementById(iapiIframename + '_' + requestId);
            if (win && !win.dataset["reusable"]) {
                document.getElementById(iapiDivname).removeChild(win);
            };
            return arr;
        };
    };
    return null;
};

function iapiClearRedirectRequests(requestType, realMode) {
    var i = 0;
    while (i < iapiRequestIds.length) {
        arr = iapiRequestIds[i];
        if (arr[1] == requestType) {
            var rm = 0;
            if (arr[4].indexOf('realMode=1') > 0) {
                rm = 1;
            }
            if (rm == realMode) {
                iapiRequestIds.splice(i, 1);
                if (arr[2]) {
                    clearTimeout(arr[2]);
                }
                var win = document.getElementById(iapiIframename + '_' + arr[0]);
                if (win) {
                    document.getElementById(iapiDivname).removeChild(win);
                };
                continue;
            }
        };
        i++;
    };
};

function iapiHasRedirectRequest(requestType) {
    var i = 0;
    while (i < iapiRequestIds.length) {
        arr = iapiRequestIds[i]
        if (arr[1] == requestType) {
            return true;
        };
        i++;
    };
    return false;
};

function initMessageListener() {
    if (window.postMessage) {
        if (window.addEventListener) {
            window.addEventListener('message', iapiOnMessage, false);
            iapiMessagesSupported = true;
        } else {
            if (window.attachEvent) {
                window.attachEvent('onmessage', iapiOnMessage);
                iapiMessagesSupported = true;
            };
        };
    };
};

function iapiOnMessage(e) {
    if (!e.origin) return;
    var availableServers = iapiConf['loginServer'].split('|');
    var domain = e.origin.replace(getHttpProtocol() + "://", "");
    var index = availableServers.indexOf(domain);
    if (e.origin == getHttpProtocol() + "://" + availableServers[index]) {
        var hashValue = e.data;
        var params = hashValue.split("&");
        var queryStringList = [];
        for (var i = 0; i < params.length && i < 1000; i++) {
            var ind = params[i].indexOf("=");
            if (ind > 0) {
                queryStringList[params[i].substring(0, ind)] = decodeURIComponent(params[i].substring(ind + 1).replace(/\+/g, '%20'));
            };
        };
        if (queryStringList.redirectResponse && queryStringList.redirectResponse.indexOf("requestId") > 0) {
            try {
                queryStringList['requestId'] = JSON.parse(queryStringList.redirectResponse).requestId;
            } catch (any) {};
        };
        if (!queryStringList['requestId']) {
            let c = document.getElementById(iapiDivname);
            if (c) {
                for (i = 0; i < c.childNodes.length && i < 1000; i++) {
                    if (c.childNodes[i].contentWindow == e.source) {
                        let r = c.childNodes[i].dataset['requestId'];
                        if (r) {
                            queryStringList['requestId'] = r;
                            break;
                        };
                        var arr = c.childNodes[i].id.split('_');
                        if (arr.length > 1) {
                            queryStringList['requestId'] = arr[1];
                        };
                        break;
                    };
                };
            };
        };
        iapiMessagesAnswered = true;
        iapiRedirectCallback(queryStringList);
    };
};

function iapiGetCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function encodeHTML(str) {
    var e = document.createElement('div');
    var text = document.createTextNode(str);
    e.appendChild(text);
    return e.innerHTML.replace(/\'/g, '&#39;');
}

function encodeURL(str) {
    str = JSON.stringify(str);
    str = str.substring(1, str.length - 1);
    str = removeHex(str);
    if (str.match(/^http/gi))
        return str.replace(/</g, '%3C').replace(/>/g, '%3E').replace(/\"/g, '%22').replace(/\'/g, '%27');
    else
        return '';
}

function removeHex(str) {
    return str.replace(/&#(\d+);/g, '').replace(/&#x([A-Za-z0-9]+);/g, '');
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var k;
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = +fromIndex || 0;
        if (Math.abs(n) === Infinity) {
            n = 0;
        }
        if (n >= len) {
            return -1;
        }
        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        while (k < len) {
            if (k in O && O[k] === searchElement) {
                return k;
            }
            k++;
        }
        return -1;
    };
}

function getCurrentDomain() {
    if (self.$currentDomain)
        return self.$currentDomain;
    return self.$currentDomain = (function () {
        var i = 0,
            domain = document.domain,
            p = domain.split('.'),
            s = '_gd' + (new Date()).getTime();
        while (i < (p.length - 1) && document.cookie.indexOf(s + '=' + s) == -1) {
            domain = p.slice(-1 - (++i)).join('.');
            document.cookie = s + "=" + s + ";domain=" + domain + ";";
        }
        document.cookie = s + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + domain + ";";
        return domain;
    })();
}
if (typeof iapiJsLoaded !== 'undefined') {
    iapiJsLoaded();
}

function isSecureAttr() {
    return iapiConf['setSecureAttr'] == "false" ? false : true;
}

function getHttpProtocol() {
    return isSecureAttr() ? "https" : "http";
}