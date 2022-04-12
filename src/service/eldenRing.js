class EldenRing{
    constructor(httpClient){
        this.eldenring = httpClient
    }
    async Class(){
        const response = await this.eldenring.get('classes',{
            params:{
                limit:'10'
            }
        });
        
        return response.data.data;

    }
    async Weapons(){
        const response0 = await this.eldenring.get('weapons',{
            params:{
                limit:'100',
                page:'0'
            }
        });
        const response1 = await this.eldenring.get('weapons',{
            params:{
                limit:'100',
                page:'1'
            }
        })
        const response2 = await this.eldenring.get('weapons',{
            params:{
                limit:'100',
                page: '2'
            }
        });

        const response3 = await this.eldenring.get('weapons',{
            params:{
                limit:'100',
                page: '3'
            }
        });

        const weapons = [
            ...response0.data.data,
            ...response1.data.data,
            ...response2.data.data,
            ...response3.data.data,
        ]

        return weapons;
    }
    async Armors(){
        
        const response0 = await this.eldenring.get('armors',{
            params:{
                limit:'100',
                page:'0'
            }
        })
        const response1 = await this.eldenring.get('armors',{
            params:{
                limit:'100',
                page:'1'
            }
        })
        const response2 = await this.eldenring.get('armors',{
            params:{
                limit:'100',
                page:'2'
            }
        })
        const response3 = await this.eldenring.get('armors',{
            params:{
                limit:'100',
                page:'3'
            }
        })
        const response4 = await this.eldenring.get('armors',{
            params:{
                limit:'100',
                page:'4'
            }
        })
        const response5 = await this.eldenring.get('armors',{
            params:{
                limit:'100',
                page:'5'
            }
        })
        const Armors = [
            ...response0.data.data,
            ...response1.data.data,
            ...response2.data.data,
            ...response3.data.data,
            ...response4.data.data,
            ...response5.data.data,
        ]
        return Armors;
    }
    async Talismans (){
        const response = await this.eldenring.get('talismans',{
            params:{
                limit: '100',
            }
        })
        return response.data.data;
    }
    async Spirits (){
        const response = await this.eldenring.get('spirits',{
            params:{
                limit: '100',
            }
        })
        return response.data.data;
    }
    async Items (){
        const response0 = await this.eldenring.get('items',{
            params:{
                limit: '100',
                page: '0'
            },
        })
        const response1 = await this.eldenring.get('items',{
            params:{
                limit: '100',
                page: '1'
            },
        })
        const response2 = await this.eldenring.get('items',{
            params:{
                limit: '100',
                page: '2'
            },
        })
        const response3 = await this.eldenring.get('items',{
            params:{
                limit: '100',
                page: '3'
            },
        })
        const response4 = await this.eldenring.get('items',{
            params:{
                limit: '100',
                page: '4'
            },
        })
        const items =[
            ...response0.data.data,
            ...response1.data.data,
            ...response2.data.data,
            ...response3.data.data,
            ...response4.data.data,
            ]
        return items;
    

    }
    async Creatures(){
        const response0 = await this.eldenring.get('creatures',{
            params:{
                limit:'100',
                page: '0'
            }
        })
        const response1 = await this.eldenring.get('creatures',{
            params:{
                limit:'100',
                page: '1'
            }
        })

        const creatures =[
            ...response0.data.data,
            ...response1.data.data
        ]
        return creatures;
    }
    async Boss(){
        const response = await this.eldenring.get('bosses',{
            params:{
                limit:'100'
            }
        })
        return response.data.data;
    }
    async Npcs(){
        const response = await this.eldenring.get('npcs',{
            params:{
                limit:'100'
            }
        })
        return response.data.data
    }

}
export default EldenRing;