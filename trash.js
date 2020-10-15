const editDate = (props, ...args) => {
        const now = new Date().getTime();
        const publication = new Date(props.date).getTime();
        if (now > (publication + (24*3600*1000))) {
            const difference = Math.round((now - publication) /(1000 * 3600 * 24));
            const newdate = `${difference} дней назад`;
        } else if (now >= (publication + (3600*1000))) {
            const difference = Math.round((now - publication) /(1000*3600));
            const newdate = `${difference} часов назад`;
        }
        else if(now < (publication + (3600*1000))) {
            const difference = Math.round((now - publication) /(1000*60));
            const newdate = (`${difference} минут назад`);
        };
}
