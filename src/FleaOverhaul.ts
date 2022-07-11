import { RagfairCallbacks } from "@spt-aki/callbacks/RagfairCallbacks";
import { RagfairController } from "@spt-aki/controllers/RagfairController";
import { IPmcData } from "@spt-aki/models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "@spt-aki/models/eft/itemEvent/IItemEventRouterResponse";
import { IAddOfferRequestData } from "@spt-aki/models/eft/ragfair/IAddOfferRequestData";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { RagfairServer } from "@spt-aki/servers/RagfairServer";
import { HttpResponseUtil } from "@spt-aki/utils/HttpResponseUtil";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { inject, injectable } from "tsyringe";

@injectable()
export class FleaOverhaul extends RagfairCallbacks {

    constructor(
        @inject("HttpResponseUtil") httpResponse: HttpResponseUtil,
        @inject("WinstonLogger") logger: ILogger,
        @inject("JsonUtil") jsonUtil: JsonUtil,
        @inject("RagfairServer") ragfairServer: RagfairServer,
        @inject("RagfairController") ragfairController: RagfairController,
        @inject("ConfigServer") configServer: ConfigServer,
    ) {
        super(httpResponse, logger, jsonUtil, ragfairServer, ragfairController, configServer);
    }

    public override addOffer(pmcData: IPmcData, info: IAddOfferRequestData, sessionID: string): IItemEventRouterResponse {
        let old = super.addOffer(pmcData, info, sessionID);
        this.logger.info(old + "");
        return old;
    }


}