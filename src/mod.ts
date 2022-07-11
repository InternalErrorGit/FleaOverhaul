import { DependencyContainer } from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { FleaOverhaul } from "./FleaOverhaul";

class Mod implements IMod {
    
    public load(container: DependencyContainer): void {
        const logger = container.resolve<ILogger>("WinstonLogger");
        logger.info("FleaOverhaul::load");
        container.register<FleaOverhaul>("FleaOverhaul", FleaOverhaul);
        container.register("RagfairCallbacks", {useToken: "FleaOverhaul"});






        logger.info("FleaOverhaul::load -> finished successfully")
    }

    
    public delayedLoad(container: DependencyContainer): void {
        const logger = container.resolve<ILogger>("WinstonLogger");
        logger.info("FleaOverhaul::delayedLoad");

        logger.info("FleaOverhaul::delayedLoad -> finished successfully")
    }
}

module.exports = { mod: new Mod() }