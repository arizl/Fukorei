module.exports = {
    name: 'cmdswithoutprfx',
    description: 'all the commands without prefix',
    run: async (client, message, args, ms, afks) => {
        const nickbfr = message.member.displayName;
        let data2;
        try {
            data2 = await afks.findOne({
                userId: message.author.id,
                guildId: message.guild.id,
                // nickbefore: `${message.member.displayName}`,
            })
            if (!data2) {
                data2 = await afks.create({
                    userId: message.author.id,
                    guildId: message.guild.id,
                    // nickbefore: `${message.member.displayName}`,
                })
            }
        } catch (error) {
            console.log(error)
        }

        if (data2.afk === true) {
            message.reply(`oh, you're back, removed ur afk! you were previously afk for: ${data2.afkreason || 'no reason!'}`)
            data2.afkreason = null
            data2.afk = false
            await data2.save()

            if(message.author.id === message.guild.ownerId) return;
            message.member.setNickname(`${nickbfr.slice(6)}`)
        }

        if(message.mentions.members.first()){
            let data3;
            try {
                data3 = await afks.findOne({
                    userId: message.mentions.members.first().id,
                    guildId: message.guild.id
                })
                if (!data3) {
                    data3 = await afks.create({
                        userId: message.mentions.members.first().id,
                        guildId: message.guild.id
                    })
                }
            } catch (error) {
                console.log(error)
            }

            if(data3.afk === true){
                message.reply(`${message.mentions.members.first().displayName} is currently afk: ${data3.afkreason || 'no reason!'} `)
            }
        }

        let allowedid = ["732043268946133133"]
        if (message.content.toLowerCase().startsWith("kh??a mi???ng th???ng n??y cho b???")) {
            let mentioneduser = message.mentions.members.first();

            if (!allowedid.includes(message.author.id)) {
                return message.reply('ch??? b??? tao m???i ???????c ra l???nh cho tao nh?? th???ng ngu!')
            }

            if (!mentioneduser) {
                return message.reply('nh??? ping th???ng b??? mu???n mute =))')
            }

            mentioneduser.timeout(ms('5m'));
            message.reply(`con ???? timeout ${mentioneduser} trong 5 ph??t ???!`);
        }

        const congaioi = ["con g??i", "con g??i ??i", "con g??i ui"]
        if (congaioi.includes(message.content.toLowerCase())) {
            if (!allowedid.includes(message.author.id)) return;
            message.reply("d???");
        }

        var taoatce = ["tao ??t", "tao at", "tao ce", "t at", "t ??t", "t ce"]
        if(taoatce.includes(message.content.toLowerCase())){
            message.channel.send('https://cdn.discordapp.com/attachments/606112569622659076/952923148326694973/taoat.mp4')
        }

        var luonggiac = ["djt me luong giac", "dmlg", "dm luong giac","??jt m??? l?????ng gi??c", "??m l?????ng gi??c"]
        if(luonggiac.includes(message.content.toLowerCase())){
            client.commands.get('luonggiac').run(message, args);
        }




        //airlines custom commands from here onwards:
        if(message.guild.id !== "606112569622659072") return;

        const ghevs = ["ge v s", "ghe vay sao", "ghe v s", "ghe v sao"]
        if (ghevs.includes(message.content.toLowerCase())) {
            message.channel.send('???????????????')
        }

        else if (message.content.toLowerCase() === 'ge v dok') {
            message.channel.send("????????????'")
        }

        else if (message.content.toLowerCase() === 'qua ghe gom') {
            message.channel.send('va day la pho lon ti lo!')
        }

        else if (message.content.toLowerCase() === 'folontilo') {
            message.channel.send
                ("Qu?? gh?? g???m....????????\nV?? ????y l?? Folontil??!????????\nFolontil?? ui... ????????????????m???t t??nh hu???ng m??a ph???i n??i l?? c???c ????g???t!!\n*music????\nTh???n th??ng nh??n em quay g??t ??i m??i????????????\nAnh ?????ng ch???t l???ng trong m??a????????\nD?? r???ng b??n???????? em ???? c?? ai\nNh??ng n??i ????y anh ????????????v???n c??n ch???...")
        }

        const urmom = ["your mom", "ur mom"]
        if (urmom.includes(message.content.toLowerCase())) {
            message.channel.send('<:yourmom:938793655781695498>')
        }

        if (message.content.toLowerCase() === 'kappa') {
            message.channel.send('<:kappa:938793655991418921> ')
        }

        else if (message.content.toLowerCase() === 'emotional damage') {
            message.channel.send("https://cdn.discordapp.com/attachments/939008225766948874/939008413382357122/Emotional_Damage.mp4")
        }

        else if (message.content.toLowerCase() === 'i will send you to jesus') {
            message.channel.send('https://cdn.discordapp.com/attachments/939008225766948874/939018214451593246/2.mp4')
        }

        else if (message.content.toLowerCase() === 's??ng b???t ?????u t??? gi??') {
            message.channel.send('gi?? b???t ?????u t??? q\nkhi n??o hasagi\nth?? ta ph???i tr??n tr???i\nn???u pha ???? c?? l???i\nph???i t???c bi???n ch???y ngay\nctrl 6 li???n tay\nda xua th??ng th???o 7')
        }

        else if (message.content.toLowerCase().startsWith("how much is")) {
            args.shift()
            args.shift()
            client.commands.get('maths').run(client, message, args);
        }

        var sautettdi = ["sau t???t t ??i"]
        if (sautettdi.includes(message.content.toLowerCase())) {
            message.channel.send('https://cdn.discordapp.com/attachments/606112569622659076/941299164447383582/unknown.png')
        }

        var cappa = ["cappa", "cappalul"]
        if (cappa.includes(message.content.toLowerCase())) {
            message.channel.send('<:cappalul:944215825601146930>')
        }

        var dmthgle = ["stop doing meths", "djt me thg le"]
        if(dmthgle.includes(message.content.toLowerCase())){
            message.channel.send('https://cdn.discordapp.com/attachments/606112569622659076/945941741347938314/unknown.png')
        }

        var unikey = ["dmm unikey", "unikey", "unikey ????u th???ng l???n", "unikey ????u thg loz"]
        if(unikey.includes(message.content.toLowerCase())){
            for (let i = 0; i<5; i++){
            message.channel.send("https://www.unikey.org/")
            }
        }
        
        else if(message.content.toLowerCase() === "trong tr?????ng h???p"){
            message.channel.send('Trong tr?????ng h???p page n??y b??? ??i???u tra b???i c??c c?? quan tr???c thu???c b??? c??ng an (ho???c c??c t??? ch???c ch??nh tr??? t????ng t??? ph???c v??? cho nh?? n?????c CHXHCNVN), t??i kh???ng ?????nh m??nh kh??ng li??n quan t???i page ho???c nh???ng c?? nh??n kh??c trong page n??y. T??i kh??ng r?? t???i sao m??nh l???i c?? m???t ??? ????y v??o th???i ??i???m n??y, c?? l??? t??i kho???n c???a t??i ???? ???????c th??m b???i m???t b??n th??? ba.')
        }

        else if(message.content.toLowerCase() === "trong tr?????ng h???p + naku"){
            message.channel.send('Trong tr?????ng h???p Group n??y b??? ??i???u tra b???i c??c c?? quan ch???c n??ng tr???c thu???c b??? c??ng an (ho???c c??c t??? ch???c ch??nh tr??? t????ng t??? ph???c v??? cho nh?? n?????c CHXHCNVN), t??i kh???ng ?????nh m??nh kh??ng b??n hay tr???ng c??? Naku cho nh???ng c?? nh??n kh??c trong nh??m n??y b??. C?? l???, c??? Naku ???? ???????c cung c???p b???i m???t b??n th??? ba.')
        }

        var badumtss = ["ba dum tss", "badum tss", "badumtss"]
        if(badumtss.includes(message.content.toLowerCase())){
            message.channel.send('https://cdn.discordapp.com/attachments/902548040399880243/902548399373553704/Ba_Dum_Tss_Sound_Effect.mp4')
        }
    }
};
