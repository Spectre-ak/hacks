package scrapper.scrapperDemo;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.PriorityQueue;
import java.util.Set;
import java.util.TreeSet;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class App {
	public static void main(String[] args) {
		String baseURL = "https://www.soa.ac.in";

		String fileNameString = getCleanedURL(baseURL) + ".txt";
		String domain=getCleanedURL(baseURL);
		Set<String> processedURLs = new TreeSet<String>();
		PriorityQueue<String> priorityQueue = new PriorityQueue<String>();
		priorityQueue.add(baseURL);

		while (!priorityQueue.isEmpty()) {
			try {

				String currentURL = priorityQueue.remove();
				if (!processedURLs.add(currentURL))
					continue;
				FileWriter f = new FileWriter(fileNameString, true);
				Document document = Jsoup.connect(currentURL).get();
				String text = document.text();
				System.out.println(text);
				f.append(currentURL);
				f = breakIT(f);
				f.append(text);
				f = breakIT(f);
				f.close();

				Elements elements = document.getElementsByTag("a");

				for (Element element : elements) {
					System.out.println(element.attr("href"));
					String hrefLINK = element.attr("href");
					
					if ( !(hrefLINK.length() > 4 && hrefLINK.substring(0, 4).equals("http")) ) {
						hrefLINK = baseURL + hrefLINK;	
					} 					
					if(getCleanedURL(hrefLINK).equals(domain))
						priorityQueue.add(hrefLINK);
				}

			} catch (Exception e) {
				e.printStackTrace();
				continue;
			}

			
		}

	}

	static FileWriter breakIT(FileWriter f) throws IOException {
		f.append("\n");
		f.append("\n");
		f.append("\n");
		f.append("\n");
		f.append("\n");
		f.append("\n");
		return f;
	}

	static String getCleanedURL(String url) {
		int index = url.indexOf("//");
		url = url.substring(index + 2, url.length());

		if (url.substring(0, 3).equals("www")) {
			url = url.substring(4, url.length());
		}

		try {
			int index2 = url.indexOf("/");
			url = url.substring(0, index2);
		} catch (Exception e) {
			// TODO: handle exception
		}

		return url;
	}
}
