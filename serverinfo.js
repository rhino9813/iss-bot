"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class serverinfo {
    constructor() {
        this._command = "serverinfo";
    }
    help() {
        return "This command does nothing :(";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new Discord.RichEmbed()
                .setColor(0xFF0000)
                .setTitle("Server Info")
                .setFooter("Everyone is poor")
                .setThumbnail(msgObject.guild.iconURL)
                .setDescription("We got the best cat pics around")
                .addField("Owner: ", msgObject.guild.owner)
                .addField("Member Count: ", `${msgObject.guild.memberCount}`)
                .addField("Region: ", msgObject.guild.region)
                .addField("Website", "https://www.ninjasmarketplace.com");
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = serverinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zZXJ2ZXJpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFJdEMsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBMEI1QyxDQUFDO0lBeEJHLElBQUk7UUFDQSxPQUFPLDhCQUE4QixDQUFDO0lBQzFDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEIsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsUUFBUSxDQUFDLGFBQWEsQ0FBQztpQkFDdkIsU0FBUyxDQUFDLGtCQUFrQixDQUFDO2lCQUM3QixZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQ3JDLGNBQWMsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDakQsUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDMUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDNUQsUUFBUSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztpQkFDNUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFBO1lBRXpFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQUE7Q0FDSjtBQTVCRCw2QkE0QkMifQ==