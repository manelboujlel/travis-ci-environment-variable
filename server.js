const FAVORITE_INSTRUCTOR = process.env.Name;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    //console.log("Microservices rock!");
	console.log('${FAVORITE_INSTRUCTOR} rocks!');
    await sleep(5000);
  }
}

main();
