
var expect = require("chai").expect



import { user_crud_entity } from "../src/entities"
var fakeUser = require("./mockdata/fakeUser")

describe("Unit tests for addUser entity", async function () {
    it ("username should be a string", function () {
        const user = fakeUser({user_name: null})

        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("user_name is an invalid type. user_name should be a string value")
    })

    it("email should be a string", function () {
        const user = fakeUser({user_email: null})

        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("user_email is an invalid type. user_email should be a string value")
    })
    it("password should be a string", function () {
        const user = fakeUser({password: null})

        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("user password is an invalid type. value/s user password should be an ecrypted string")
    })

    it("expects phone number 1 to a string", function () {
        const user = fakeUser({phone_number_1: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("phone_number_one is an invalid type. value phone_number_one should be an string")
    })
    it("expects phone number 2 to a string", function () {
        const user = fakeUser({phone_number_2: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("phone_number_two is an invalid type. value phone_number_two should be an string")
    })
    it("expects street name to a string", function () {
        const user = fakeUser({street: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("street is an invalid type. value street should be a string")
    });

    it("expects suburb name to a string", function () {
        const user = fakeUser({suburb: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("suburb is an invalid type. value suburb should be a string")
    })
    it("expects city name to a string", function () {
        const user = fakeUser({city: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("city is an invalid type. value city should be a string")
    })
    it("expects postal code to a string", function () {
        const user = fakeUser({postal_code: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("postal code is an invalid type. value for postal code should be a string")
    })
    it("expects postal code to a string", function () {
        const user = fakeUser({country: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("country is an invalid type. value country should be a string")
    })
    it("expects postal code to a string", function () {
        const user = fakeUser({currency: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("currency is an invalid type. value for currency should be a string")
    })
    it("createdSource_ip should be string", function () {
        const user = fakeUser({createdSource_ip: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("created_source_ip is an invalid type. value should be a string")
    })
    it("createdSource_browser should be string", function () {
        const user = fakeUser({createdSource_browser: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("created_source_browser is an invalid type. value should be a string")
    })
    it("createdSource_MACAddress should be string", function () {
        const user = fakeUser({createdSource_MACAddress: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("created_source_MACCADDRESS is an invalid type. value should be a string")
    })
    it("createdSource_createdBy should be string", function () {
        const user = fakeUser({createdSource_createdBy: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("created_source_createdBy is an invalid type. value should be a string")
    })
    it("createdSource_createdAt should be string", function () {
        const user = fakeUser({createdSource_createdAt: null})
        
        expect(function () {
            return user_crud_entity.validation(user)
        }).to.throw("created_source_createdAt is an invalid type. value should be a number")
    })
    
    // it("currentDeviceInUse_ip should be string", function () {
    //     const user = fakeUser({currentDeviceInUse_ip: null})
        
    //     expect(function () {
    //         return user_crud_entity.validation(user)
    //     }).to.throw("currentDeviceInUse_ip is an invalid type. value should be a string")
    // })
    // it("currentDeviceInUse_browser should be string", function () {
    //     const user = fakeUser({currentDeviceInUse_browser: null})
        
    //     expect(function () {
    //         return user_crud_entity.validation(user)
    //     }).to.throw("currentDeviceInUse_browser is an invalid type. value should be a string")
    // })
    // it("currentDeviceInUse_MacAddress should be string", function () {
    //     const user = fakeUser({currentDeviceInUse_MacAddress: null})
        
    //     expect(function () {
    //         return user_crud_entity.validation(user)
    //     }).to.throw("currentDeviceInUse_MACADDRESS is an invalid type. value should be a string")
    // })
})