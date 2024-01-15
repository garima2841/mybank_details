sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.mybankdetails.controller.App", {
            onInit: function () {

            },
            onOpenBankDetails: function () {
                //create dialog lazy
                if (!this.moreBankDetails) {
                    this.moreBankDetails = this.loadFragment(
                        {
                            name: "com.sap.mybankdetails.view.fragments.MoreDetails"
                        }
                    );
                }
                this.moreBankDetails.then(function (oDialog) {
                    oDialog.open();
                });
            },
            // Assuming this is part of your controller
            onCloseDialog: function () {
                this.byId("moreBankDetails").close();
            }

        });
    });
