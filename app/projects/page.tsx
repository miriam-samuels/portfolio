'use client';
import styles from './projects.module.scss';
import TheLayout from '../../shared/layout/TheLayout';
import { featuredProjects } from '../../shared/datalist'
import FolderCard from '../../shared/folder-card/FolderCard';
export default function Projects() {
  return (
    <TheLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.pageTitle}>My Projects</h1>
          <p className={styles.pageSubtitle}>
            Showcasing my journey through code and creativity <span className={styles.emoji}>⚡</span>
          </p>

          <div className={styles.divider}></div>

          <div className={styles.projectsGrid}>
            {
              featuredProjects?.map((item, index) => (
                <FolderCard key={index} data={item} />
              ))
            }
          </div>
        </main>
      </div>

    </TheLayout>
  );
}